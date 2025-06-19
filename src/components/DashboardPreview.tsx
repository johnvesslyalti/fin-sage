// components/HeroSection/DashboardPreview.tsx
'use client';

import { motion } from 'framer-motion';

export default function DashboardPreview() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="bg-gradient-to-br from-gray-800/40 to-gray-900/70 border border-gray-700 p-8 rounded-2xl max-w-4xl w-full shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Preview Your Dashboard</h2>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full h-40 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          [📊 Recharts Mockup]
        </div>
        <div className="w-full h-40 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          [📈 Income vs Expenses]
        </div>
      </div>
    </motion.div>
    </div>
  );
}
