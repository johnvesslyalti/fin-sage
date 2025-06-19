// components/HeroSection/FeatureHighlights.tsx
'use client';

import { motion } from 'framer-motion';
import { Wallet, PieChart, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Wallet className="h-8 w-8 text-teal-400" />,
    title: 'Smart Expense Tracking',
    desc: 'Automatically categorize your expenses and set custom budgets.',
  },
  {
    icon: <PieChart className="h-8 w-8 text-indigo-400" />,
    title: 'Visual Reports',
    desc: 'See your financial data with clean, interactive graphs.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-pink-400" />,
    title: 'Growth Insights',
    desc: 'Get personalized tips to improve your savings and investment habits.',
  },
];

export default function FeatureHighlights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="grid md:grid-cols-3 gap-6 max-w-6xl w-full"
    >
      {features.map((item, i) => (
        <div
          key={i}
          className="bg-gradient-to-b from-gray-800/40 to-gray-900/60 border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.desc}</p>
        </div>
      ))}
    </motion.div>
  );
}
