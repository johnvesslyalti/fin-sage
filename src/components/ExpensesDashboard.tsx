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
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Travel", value: 300 },
  { name: "Utilities", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff6f61"];

export default function ExpensesDashboard() {
  return (
    <div className="flex border bg-white/10 border-black/20 dark:border-white/20 dark:bg-black/10 p-5 flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="text-xl font-bold mb-4">Expenses Dashboard</h1>
        <div className="flex gap-5 flex-wrap">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md p-5">
          <div className="p-5 max-w-[200px] personal-card-created-by-john">
            <div className="font-bold py-1">Daily Spending</div>
            <div className="text-start py-1">$45.00</div>
          </div>
          <div className="p-5 max-w-[200px] personal-card-created-by-john">
            <div className="font-bold py-1">Weekly Spending</div>
            <div className="text-start py-1">$320.00</div>
          </div>
          <div className="p-5 personal-card-created-by-john col-span-1 sm:col-span-2">
            <div className="font-bold py-1">Monthly Spending</div>
            <div className="text-start py-1">$1,200.00</div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold mb-5">Top Spending Categories</h2>
        <PieChart width={500} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
