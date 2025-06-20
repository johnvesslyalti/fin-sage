import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ExpensesOverview() {
    return (
        <div className="bg-white/10 border-black/20 dark:bg-black/10 dark:border-white/20 border p-5">
            <h1 className="text-xl font-bold mb-5">Expenses Overview</h1>
            <Card className="w-full personal-card-created-by-john max-w-sm">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-center">Add Expense</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label>Title</Label>
                        <Input
                            id="title"
                            type="text"
                            placeholder="Expense Title"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>Amount</Label>
                        <Input
                            id="amount"
                            type="number"
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
                            Category
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="dark:bg-black text-left w-full block">
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
                </form>
            </CardContent>
            <CardFooter>
                <Button className="w-full cursor-pointer">Submit</Button>
            </CardFooter>
            </Card>
        </div>
    )
}