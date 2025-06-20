import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function ExpensesDashboard() {
    return (
        <div className="flex border bg-white/10 border-black/20 dark:border-white/20 dark:bg-black/10 p-5">
            <div className="bg-red-100 w-1/2">
                <h1 className="text-xl font-bold mb-4">Expenses Dashboard</h1>
                <div className="flex gap-5">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                                Date Range
                                <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
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
                        <DropdownMenuContent>
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
                        <div className="text-start py-1">$45,00</div>
                    </div>
                    <div className="p-5 max-w-[200px] personal-card-created-by-john">
                        <div className="font-bold py-1">Weekly Spending</div>
                        <div className="text-start py-1">$320,00</div>
                    </div>
                    <div className="p-5 personal-card-created-by-john col-span-1 sm:col-span-2">
                        <div className="font-bold py-1">Monthly Spending</div>
                        <div className="text-start py-1">$1,200,00</div>
                    </div>
                </div>
            </div>
            <div className="bg-green-100 w-1/2">
                This is for the Top Spending Categories
            </div>
        </div>
    );
}
