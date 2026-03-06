"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, Cpu, Users, Sprout } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[100dvh] min-h-[550px] lg:h-auto lg:min-h-screen flex items-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 warm-gradient" />

            {/* Animated Background Elements — subtle parallax eco shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-[15%] w-32 h-32 bg-brand-soft-green/10 rounded-full blur-xl hidden sm:block"
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
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-4 sm:pb-20 flex flex-col justify-center h-full">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-16 items-center flex-grow">
                    {/* Left Column - Text */}
                    <div className="flex flex-col justify-center h-full lg:block mt-8 sm:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-dark-green/5 border border-brand-dark-green/10 mb-5 sm:mb-8 self-start"
                        >
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-accent-brown shrink-0" />
                            <span className="text-[11px] sm:text-sm font-medium text-brand-dark-green line-clamp-1">
                                Redefining Sustainability with Global Innovation
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-heading text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-5xl font-bold text-brand-dark-green mb-4 sm:mb-6"
                        >
                            Jee Origin:{" "}
                            <span className="text-gradient">Paper That</span>{" "}
                            Grows the Future
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-[13px] sm:text-xl text-brand-dark-neutral/80 leading-relaxed mb-6 sm:mb-10 max-w-xl"
                        >
                            At Jee Origin, we&apos;re transforming the pulp and paper industry by turning agricultural waste into a force for good. Using sugarcane bagasse, wheat straw, imported agri-waste pulp, virgin pulp, recycled pulp, and responsibly sourced wood, we craft eco-friendly products that power a circular economy.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                        >
                            <Link
                                href="/products"
                                id="hero-cta-products"
                                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-brand-dark-green text-white rounded-full font-semibold text-sm sm:text-base hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1 w-full sm:w-auto"
                            >
                                Explore Our Products
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                id="hero-cta-vision"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-brand-dark-green text-brand-dark-green rounded-full font-semibold text-sm sm:text-base hover:bg-brand-dark-green hover:text-white transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
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

                            {/* Floating stat cards */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-12 right-12 glass-card rounded-2xl p-4 shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand-dark-green/10 flex items-center justify-center">
                                        <Leaf className="w-5 h-5 text-brand-dark-green" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-dark-neutral/60">Sustainable</p>
                                        <p className="text-sm font-bold text-brand-dark-green">Zero Waste</p>
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
                                        <Users className="w-5 h-5 text-brand-accent-brown" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-dark-neutral/60">Empowering</p>
                                        <p className="text-sm font-bold text-brand-dark-green">100K+ Farmers</p>
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
                                        <Cpu className="w-5 h-5 text-brand-dark-green" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-dark-neutral/60">AI & IoT</p>
                                        <p className="text-sm font-bold text-brand-dark-green">Tech-Driven</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Center icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sprout className="w-28 h-28 text-brand-dark-green/15" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
