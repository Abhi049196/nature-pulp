"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-brand-light-bg flex items-center justify-center px-4 pt-20">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-[2.5rem] p-12 sm:p-16 border border-brand-soft-green/10 shadow-2xl shadow-brand-dark-green/5 relative overflow-hidden"
                >
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-soft-green/5 rounded-bl-full -mr-16 -mt-16" />

                    <div className="w-20 h-20 bg-brand-soft-green/10 rounded-3xl flex items-center justify-center text-brand-dark-green mx-auto mb-8">
                        <Clock className="w-10 h-10" />
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl font-bold text-brand-dark-green mb-6 leading-tight">
                        Innovation is <br />
                        <span className="text-gradient">Underway</span>
                    </h1>

                    <p className="text-lg text-brand-dark-neutral/60 mb-10 leading-relaxed max-w-md mx-auto">
                        This product solution is currently in development. Our team is working hard to bring you the best sustainable solutions from Jee Origin.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/products/pulp"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark-green text-white rounded-full font-semibold hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-green/20 hover:-translate-y-0.5"
                        >
                            Explore Existing Products
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 border border-brand-dark-green/10 text-brand-dark-green rounded-full font-semibold hover:bg-brand-dark-green/5 transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>
                </motion.div>

                <p className="mt-8 text-xs text-brand-dark-neutral/30 uppercase tracking-[0.3em] font-bold">
                    © 2026 JEE ORIGIN PVT LTD
                </p>
            </div>
        </div>
    );
}
