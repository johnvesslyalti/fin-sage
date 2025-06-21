'use client';

import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardFooter,
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
import React, { useState } from "react";
import axios from "axios";
import { TiTick } from "react-icons/ti";

interface IExpenses {
    id: string;
    title: string;
    amount: number;
    category: string;
    date: Date;
}

export default function ExpensesOverview() {
    const [expenses, setExpenses] = useState<IExpenses[]>([])
    const [title, setTitle] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [category, setCategory] = useState<string>("OTHERS");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/expenses", {
                title,
                amount: parseFloat(amount),
                category,
            }, {
                withCredentials: true
            });

            console.log("Expense saved", response.data);
            setTitle("");
            setAmount("");
            setCategory("OTHERS");
            setMessage("Expense Added Successfully");

            setTimeout(() => setMessage(""), 3000);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchExpenses = async () => {

    }

    const categories = ["FOOD", "TRAVEL", "UTILITIES", "OTHERS"];

    return (
        <div className="bg-white/10 border-black/20 dark:bg-black/10 dark:border-white/20 border p-5">
            {message && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 bg-black text-sm text-white p-2 rounded">
                    <TiTick className="text-sm bg-green-500 rounded-full" />
                    {message}
                </div>
            )}

            <h1 className="text-xl font-bold mb-5">Expenses Overview</h1>
            <div className="flex">
                <div>
                    <Card className="w-full personal-card-created-by-john min-w-sm">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold text-center">
                                Add Expense
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6">
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
                                                    className="flex justify-between items-center text-muted-foreground w-full text-left"
                                                >
                                                    {category.charAt(0) + category.slice(1).toLowerCase()}
                                                    <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
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
                                    <CardFooter>
                                        <Button type="submit" className="w-full cursor-pointer">
                                            Submit
                                        </Button>
                                    </CardFooter>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-1 justify-center items-center">
                    <ScrollArea className="h-90 w-150 rounded-md border personal-card-created-by-john">
                        <div className="flex flex-col gap-5 p-4">
                            <h4 className="mb-4 text-lg leading-none font-bold">Expenses</h4>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Card key={i} className="personal-card-created-by-john">
                                    <CardContent>v1.2.0-beta.{i + 1}</CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
