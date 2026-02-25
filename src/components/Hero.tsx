"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 warm-gradient" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Leaf shapes */}
                <motion.div
                    animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-[15%] w-32 h-32 bg-brand-soft-green/10 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-40 left-[10%] w-48 h-48 bg-brand-dark-green/5 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-32 right-[25%] w-40 h-40 bg-brand-accent-brown/8 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-[20%] w-24 h-24 bg-brand-soft-green/15 rounded-full blur-xl"
                />

                {/* Abstract leaf SVG patterns */}
                <motion.svg
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] right-[8%] w-64 h-64 opacity-[0.03]"
                    viewBox="0 0 200 200"
                >
                    <path
                        d="M100 0 C150 50, 200 100, 100 200 C0 100, 50 50, 100 0Z"
                        fill="#1B4D3E"
                    />
                </motion.svg>
                <motion.svg
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] left-[5%] w-48 h-48 opacity-[0.04]"
                    viewBox="0 0 200 200"
                >
                    <path
                        d="M100 0 C150 50, 200 100, 100 200 C0 100, 50 50, 100 0Z"
                        fill="#A5BBA0"
                    />
                </motion.svg>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark-green/5 border border-brand-dark-green/10 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-brand-accent-brown" />
                            <span className="text-sm font-medium text-brand-dark-green">
                                Pioneering Sustainable Innovation
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark-green leading-[1.1] mb-6"
                        >
                            Paper That{" "}
                            <span className="text-gradient">Grows</span>{" "}
                            the Future
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg sm:text-xl text-brand-dark-neutral/70 leading-relaxed mb-10 max-w-lg"
                        >
                            Redefining sustainability with global innovation. We transform agricultural waste into premium pulp and paper products — building a circular economy from the ground up.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href="/products"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark-green text-white rounded-full font-semibold text-base hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1"
                            >
                                Explore Our Products
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-dark-green text-brand-dark-green rounded-full font-semibold text-base hover:bg-brand-dark-green/5 transition-all duration-300 hover:-translate-y-1"
                            >
                                Our Vision
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column - Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Main circle */}
                            <div className="absolute inset-8 rounded-full eco-gradient opacity-20 blur-2xl animate-pulse" />
                            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-dark-green/10 to-brand-soft-green/20 border border-brand-soft-green/30 backdrop-blur-sm" />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-12 right-12 glass-card rounded-2xl p-4 shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand-dark-green/10 flex items-center justify-center">
                                        <span className="text-xl">🌿</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-dark-neutral/60">Zero Waste</p>
                                        <p className="text-sm font-bold text-brand-dark-green">100% Circular</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-20 left-4 glass-card rounded-2xl p-4 shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand-accent-brown/10 flex items-center justify-center">
                                        <span className="text-xl">🌾</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-dark-neutral/60">Agri-Waste</p>
                                        <p className="text-sm font-bold text-brand-dark-green">Farm to Pulp</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [-8, 8, -8] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 right-0 glass-card rounded-2xl p-4 shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand-soft-green/20 flex items-center justify-center">
                                        <span className="text-xl">♻️</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-dark-neutral/60">Sustainable</p>
                                        <p className="text-sm font-bold text-brand-dark-green">Net Zero</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Center icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg className="w-32 h-32 text-brand-dark-green/20" viewBox="0 0 100 100">
                                        <path
                                            d="M50 5 C75 25, 95 50, 50 95 C5 50, 25 25, 50 5Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 pt-12 border-t border-brand-dark-green/5"
                >
                    <p className="text-center text-sm text-brand-dark-neutral/40 mb-8 uppercase tracking-wider font-medium">
                        Trusted by industries worldwide
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
                        {["Packaging", "Paper Mills", "FMCG", "Textiles", "Agriculture"].map(
                            (industry) => (
                                <span
                                    key={industry}
                                    className="font-heading text-lg font-bold text-brand-dark-green/60"
                                >
                                    {industry}
                                </span>
                            )
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
