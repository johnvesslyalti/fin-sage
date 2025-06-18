'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Welcome back 👋</h1>
          <p className="text-sm mt-1">Here’s a summary of your finances today.</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-none shadow-md">
            <CardHeader>
              <CardTitle>Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹12,500</p>
              <p className="text-sm text-muted">Updated just now</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-800 to-indigo-900 text-white border-none shadow-md">
            <CardHeader>
              <CardTitle>Monthly Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹4,300</p>
              <p className="text-sm text-muted">So far this month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white border-none shadow-md">
            <CardHeader>
              <CardTitle>Savings Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹1,800 / ₹5,000</p>
              <p className="text-sm text-muted">36% complete</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
