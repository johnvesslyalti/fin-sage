import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { expenseSchema } from "@/lib/validations/expense";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    const expense = await db.expense.findUnique({
        where: { id: params.id, userId: session.user.id }
    });

    if (!expense) return new NextResponse("Not Found", { status: 404 });
    return NextResponse.json(expense);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    const body = await req.json();
    const parse = expenseSchema.safeParse(body);

    if (!parse.success) {
        return NextResponse.json({ error: parse.error.errors }, { status: 400 })
    }

    const updated = await db.expense.updateMany({
        where: { id: params.id, userId: session.user.id },
        data: {
            ...parse.data,
            date: parse.data.date ? new Date(parse.data.date) : new Date(),
        },
    });

    return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) return new NextResponse("Unauthorized", { status: 401 });

    await db.expense.deleteMany({
        where: { id: params.id, userId: session.user.id },
    });

    return new NextResponse("Deleted", { status: 200 });
}