"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import ClientPieChart from "./ClientPieChart";
import { useEffect, useState } from "react";

export default function ExpensesDashboard() {
    const [summary, setSummary] = useState({ daily: 0, monthly: 0, yearly: 0 });

    const getSpendingSummary = async () => {
        const res = await fetch("/api/expenses/summary");
        return res.json();
    };

    useEffect(() => {
        getSpendingSummary().then(setSummary);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row gap-6 border bg-white/10 border-black/20 dark:border-white/20 dark:bg-black/10 p-5 rounded-xl">
            {/* Left Section */}
            <div className="w-full lg:w-1/2">
                <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">Expenses Dashboard</h1>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                                Date Range
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="dark:bg-black">
                            <DropdownMenuLabel>Date Range</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Today</DropdownMenuItem>
                            <DropdownMenuItem>This Week</DropdownMenuItem>
                            <DropdownMenuItem>This Month</DropdownMenuItem>
                            <DropdownMenuItem>This Year</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                                Category
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="dark:bg-black">
                            <DropdownMenuLabel>Category</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Food</DropdownMenuItem>
                            <DropdownMenuItem>Travel</DropdownMenuItem>
                            <DropdownMenuItem>Utilities</DropdownMenuItem>
                            <DropdownMenuItem>Others</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-md shadow-md bg-white/5 border dark:border-white/10 personal-card-created-by-john">
                        <div className="font-bold mb-1">Daily Spending</div>
                        <div className="text-start">₹ {summary.daily}</div>
                    </div>
                    <div className="p-4 rounded-md shadow-md bg-white/5 border dark:border-white/10 personal-card-created-by-john">
                        <div className="font-bold mb-1">Weekly Spending</div>
                        <div className="text-start">₹ {summary.daily}</div>
                    </div>
                    <div className="p-4 sm:col-span-2 rounded-md shadow-md bg-white/5 border dark:border-white/10 personal-card-created-by-john">
                        <div className="font-bold mb-1">Monthly Spending</div>
                        <div className="text-start">₹ {summary.daily}</div>
                    </div>
                </div>
            </div>

            {/* Right Section - Chart */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-10 lg:mt-0">
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Top Spending Categories</h2>
                <div className="w-full max-w-[320px] sm:max-w-[400px]">
                    <ClientPieChart />
                </div>
            </div>
        </div>
    );
}
