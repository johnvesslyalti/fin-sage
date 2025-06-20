import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
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
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Submit</Button>
            </CardFooter>
            </Card>
        </div>
    )
}