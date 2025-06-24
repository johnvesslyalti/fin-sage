import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { expenseSchema } from "@/lib/validations/expense";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

// Helper to extract ID from dynamic URL
function getIdFromUrl(req: NextRequest) {
  const segments = req.nextUrl.pathname.split('/');
  return segments[segments.length - 1]; // assuming [id] is last
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const id = getIdFromUrl(req);

  const expense = await db.expense.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!expense) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(expense);
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const id = getIdFromUrl(req);
  const body = await req.json();
  const parse = expenseSchema.safeParse(body);

  if (!parse.success) {
    return NextResponse.json({ error: parse.error.errors }, { status: 400 });
  }

  const updated = await db.expense.updateMany({
    where: { id, userId: session.user.id },
    data: {
      ...parse.data,
      date: parse.data.date ? new Date(parse.data.date) : new Date(),
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const id = getIdFromUrl(req);

  await db.expense.deleteMany({
    where: { id, userId: session.user.id },
  });

  return new NextResponse("Deleted", { status: 200 });
}
