import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { expenseSchema } from "@/lib/validations/expense";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if(!session) return new NextResponse("Unauthorized", { status: 401 });

    const body = await req.json();
    const parse = expenseSchema.safeParse(body);

    if (!parse.success) {
        return NextResponse.json({ error: parse.error.errors }, { status: 400 });
    }

    const expense = await db.expense.create({
        data: {
            ...parse.data,
            userId: session.user.id,
            date: parse.data.date ? new Date(parse.data.date) : new Date(),
        }
    });

    return NextResponse.json(expense);
}

export async function GET() {
    const session = await getServerSession(authOptions);
    if(!session) return new NextResponse("Unauthorized", { status: 401 });

    const expenses = await db.expense.findMany({
        where: { userId: session.user.id },
        orderBy: { date: "desc" },
    });

    return NextResponse.json(expenses)
}