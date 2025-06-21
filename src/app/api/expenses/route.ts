import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { expenseSchema } from "@/lib/validations/expense";
import { Category } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    try {
        const body = await req.json();
        const parse = expenseSchema.safeParse(body);

        if (!parse.success) {
            return NextResponse.json({ error: parse.error.errors }, { status: 400 });
        }

        const expense = await db.expense.create({
            data: {
                title: parse.data.title,
                amount: parse.data.amount,
                category: parse.data.category as Category,
                date: parse.data.date ? new Date(parse.data.date) : new Date(),
                notes: parse.data.notes,
                recurring: parse.data.recurring ?? false,
                tags: parse.data.tags,
                userId: session.user.id,
            },
        });

        return NextResponse.json(expense);
    } catch (error) {
        console.error("POST /api/expenses error:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    const expenses = await db.expense.findMany({
        where: { userId: session.user.id },
        orderBy: { date: "desc" },
    });

    return NextResponse.json(expenses)
}