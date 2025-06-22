'use client';

import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TiTick } from "react-icons/ti";

export default function ExpensesOverview() {
    const [expenses, setExpenses] = useState<IExpenses[]>([]);
    const [title, setTitle] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [category, setCategory] = useState<string>("OTHERS");
    const [message, setMessage] = useState<string>("");
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && editId) {
                await axios.put(`/api/expenses/${editId}`, {
                    title,
                    amount: parseFloat(amount),
                    category,
                }, { withCredentials: true });
                setMessage("Expense Updated Successfully");
            } else {
                await axios.post("/api/expenses", {
                    title,
                    amount: parseFloat(amount),
                    category,
                }, { withCredentials: true });
                setMessage("Expense Added Successfully");
            }

            setTitle("");
            setAmount("");
            setCategory("OTHERS");
            setIsEditing(false);
            setEditId(null);
            setTimeout(() => setMessage(""), 3000);
            fetchExpenses();
        } catch (error) {
            console.error(error);
        }
    };

    const fetchExpenses = async () => {
        try {
            const response = await axios.get("/api/expenses");
            setExpenses(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (expense: IExpenses) => {
        setIsEditing(true);
        setEditId(expense.id);
        setTitle(expense.title);
        setAmount(expense.amount.toString());
        setCategory(expense.category);
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`/api/expenses/${id}`);
            fetchExpenses();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const categories = ["FOOD", "TRAVEL", "UTILITIES", "OTHERS"];

    return (
        <div className="bg-white/10 border-black/20 dark:bg-black/10 dark:border-white/20 border p-4 sm:p-6 rounded-xl">
            {message && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-black text-sm text-white px-4 py-2 rounded">
                    <TiTick className="text-sm bg-green-500 rounded-full" />
                    {message}
                </div>
            )}

            <h1 className="text-xl sm:text-2xl font-bold mb-5 text-center sm:text-left">Expenses Overview</h1>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Form Section */}
                <div className="w-full lg:w-1/2">
                    <Card className="w-full personal-card-created-by-john">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-center">
                                {isEditing ? "Edit Expense" : "Add Expense"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-5">
                                    <div className="grid gap-2">
                                        <Label>Title</Label>
                                        <Input
                                            id="title"
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Expense Title"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>Amount</Label>
                                        <Input
                                            id="amount"
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder="Expense Amount"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="category">Category</Label>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    id="category"
                                                    variant="outline"
                                                    className="flex justify-between items-center w-full text-left"
                                                >
                                                    {category.charAt(0) + category.slice(1).toLowerCase()}
                                                    <ChevronDown className="w-4 h-4 ml-auto" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="dark:bg-black text-left w-full block">
                                                <DropdownMenuLabel>Category</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                {categories.map((cat) => (
                                                    <DropdownMenuItem
                                                        key={cat}
                                                        onClick={() => setCategory(cat)}
                                                        className={category === cat ? "bg-muted" : ""}
                                                    >
                                                        {cat.charAt(0) + cat.slice(1).toLowerCase()}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                    <Button type="submit" className="w-full">
                                        {isEditing ? "Update" : "Submit"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Expenses List Section */}
                <div className="w-full lg:w-1/2">
                    <ScrollArea className="h-[28rem] rounded-md border personal-card-created-by-john">
                        <div className="flex flex-col gap-4 p-4">
                            <h4 className="text-lg font-bold">Expenses</h4>
                            {expenses.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center">No expenses added yet.</p>
                            ) : (
                                expenses.map((expense: IExpenses) => (
                                    <Card key={expense.id} className="p-4 personal-card-created-by-john">
                                        <CardContent className="p-0">
                                            <div className="flex flex-col gap-3">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-semibold">{expense.title}</span>
                                                    <span className="font-bold text-lg">₹{expense.amount}</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm text-muted-foreground">
                                                    <span>{expense.category.toLowerCase()}</span>
                                                    <span className="text-xs text-gray-500">
                                                        {new Date(expense.date).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <div className="flex justify-end gap-2 pt-2">
                                                    <button
                                                        onClick={() => handleEdit(expense)}
                                                        className="px-3 py-1 text-sm transition hover:underline"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(expense.id)}
                                                        className="px-3 py-1 text-sm transition hover:underline"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
