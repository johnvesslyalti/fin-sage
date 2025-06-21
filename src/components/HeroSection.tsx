'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen text-white flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 lg:px-32 gap-20 py-20">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-teal-300 to-indigo-400 text-transparent bg-clip-text"
                >
                    Manage Your Money Like a Pro
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Fin Sage helps you track, analyze, and grow your finances — all in one powerful dashboard.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="flex justify-center gap-4 mt-8 flex-wrap"
                >
                    <Link href="/login">
                        <Button size="lg" className="text-base px-6 py-4 cursor-pointer">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-base px-6 py-4 border-gray-600 text-gray-300 hover:bg-gray-800 cursor-pointer"
                    >
                        Learn More
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}