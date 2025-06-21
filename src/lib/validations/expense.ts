import { z } from "zod";

export const expenseSchema = z.object({
  title: z.string().min(1),
  amount: z.number().positive(),
  category: z.enum(["FOOD", "TRAVEL", "UTILITIES", "OTHERS"]), // strictly enum
  date: z.union([z.string(), z.date()]).optional(),
  notes: z.string().optional(),
  recurring: z.boolean().optional(),
  tags: z.string().optional(),
});

export type ExpenseInput = z.infer<typeof expenseSchema>;