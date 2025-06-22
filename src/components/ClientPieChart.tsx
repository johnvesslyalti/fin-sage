'use client';

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface IExpenses {
    category: string;
    amount: number;
}

interface ClientPieChartProps {
    data: IExpenses[]; 
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA55FF', '#FF5599'];

export default function ClientPieChart({ data }: ClientPieChartProps) {
    const groupedData = Object.values(
        data.reduce((acc, expense) => {
            const category = expense.category || 'Others';
            if (!acc[category]) {
                acc[category] = { name: category, value: 0 };
            }
            acc[category].value += expense.amount;
            return acc;
        }, {} as Record<string, { name: string; value: number }>)
    );

    return (
        <PieChart width={500} height={300}>
            <Pie
                data={groupedData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
                {groupedData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
}