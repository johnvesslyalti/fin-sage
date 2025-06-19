import { z } from "zod";

export const expenseSchema = z.object({ 
    title: z.string().min(1),
    amount: z.number().positive(),
    category: z.string().min(1),
    date: z.string().optional(),
});

export type ExpenseInput = z.infer<typeof expenseSchema>;