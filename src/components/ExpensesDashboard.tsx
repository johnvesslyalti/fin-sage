import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function ExpensesDashboard() {
    return (
        <div className="border bg-white/10 border-black/20 dark:border-white/20 dark:bg-black/10 p-5">
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
        </div>
    );
}
