import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { startOfDay, startOfMonth, startOfYear } from "date-fns";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const userId = session.user.id;

  const now = new Date();

  const startDay = startOfDay(now);
  const startMonth = startOfMonth(now);
  const startYear = startOfYear(now);

  const [daily, monthly, yearly] = await Promise.all([
    db.expense.aggregate({
      _sum: { amount: true },
      where: { userId, createdAt: { gte: startDay } },
    }),
    db.expense.aggregate({
      _sum: { amount: true },
      where: { userId, createdAt: { gte: startMonth } },
    }),
    db.expense.aggregate({
      _sum: { amount: true },
      where: { userId, createdAt: { gte: startYear } },
    }),
  ]);

  return Response.json({
    daily: daily._sum.amount || 0,
    monthly: monthly._sum.amount || 0,
    yearly: yearly._sum.amount || 0,
  });
}