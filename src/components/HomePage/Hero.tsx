"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, Cpu, Users, ChevronDown, Recycle, Globe } from "lucide-react";


const floatingStats = [
    {
        icon: <Leaf className="w-5 h-5 text-brand-soft-green" />,
        label: "Sustainable",
        value: "Zero Waste",
        position: "top-16 right-8",
        delay: 0.6,
        animDuration: 4,
        animDir: [-10, 10, -10] as number[],
    },
    {
        icon: <Users className="w-5 h-5 text-amber-400" />,
        label: "Empowering",
        value: "10M+ Farmers",
        position: "bottom-28 left-0",
        delay: 0.8,
        animDuration: 5,
        animDir: [10, -10, 10] as number[],
    },
    {
        icon: <Globe className="w-5 h-5 text-emerald-300" />,
        label: "Eco-Friendly",
        value: "Chemical-Free",
        position: "top-1/2 -right-4",
        delay: 1.0,
        animDuration: 6,
        animDir: [-8, 8, -8] as number[],
    },
];

export default function Hero() {
    return (
        <section className="relative h-[100dvh] min-h-[700px] flex items-center overflow-hidden">

            {/* Fallback Image (shown while video loads) */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src="/assets/hero.webp"
                    alt="Sustainable Pulp Factory"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Video Background (Vimeo iframe) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <iframe
                    src="https://player.vimeo.com/video/1171814387?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[110vw] min-h-[110vh] w-auto h-auto"
                    title="Background Video"
                />
            </div>

            {/* Multi-layer overlays for depth & readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2619]/85 via-[#0A2619]/70 to-[#0A2619]/90 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2619]/70 via-transparent to-[#0A2619]/30 z-[2]" />

            {/* Subtle grain texture */}
            <div className="absolute inset-0 z-[3] opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* Decorative ambient glows */}
            <div className="absolute top-[-15%] left-[-8%] w-[50%] h-[50%] bg-brand-soft-green/8 rounded-full blur-[150px] z-[3]" />
            <div className="absolute bottom-[-15%] right-[-8%] w-[45%] h-[45%] bg-emerald-600/10 rounded-full blur-[120px] z-[3]" />
            <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-brand-accent-brown/5 rounded-full blur-[100px] z-[3]" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 sm:pt-24 pb-20 sm:pb-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Column — Text Content */}
                    <div className="flex flex-col justify-center">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-6 sm:mb-8 self-start"
                        >
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                            <span className="text-[11px] sm:text-sm font-medium text-white/70 line-clamp-1">
                                Redefining Sustainability with Global Innovation
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-heading text-[2.2rem] leading-[1.08] tracking-tight sm:text-5xl lg:text-[2.5rem] xl:text-55xl font-bold text-white mb-4 sm:mb-7"
                        >
                            JEE ORIGIN:{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-soft-green via-emerald-300 to-teal-300">
                                    Serve the Nature
                                </span>
                            </span>{" "}
                            — Save Tree, Save Planet.
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-[13px] sm:text-lg lg:text-xl text-white/55 leading-relaxed mb-6 sm:mb-10 max-w-xl font-light"
                        >
                            At Jee Origin, we&apos;re transforming the pulp and paper industry by
                            turning agricultural waste into a force for good. Using sugarcane
                            bagasse, wheat straw, imported agri-waste pulp, virgin pulp,
                            recycled pulp, and responsibly sourced wood, we craft eco-friendly
                            products that power a circular economy.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-10"
                        >
                            <Link
                                href="/products/pulp"
                                id="hero-cta-products"
                                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 bg-gradient-to-r from-brand-soft-green to-emerald-400 text-[#0A2619] rounded-full font-bold text-sm sm:text-base shadow-[0_8px_30px_rgba(165,187,160,0.3)] hover:shadow-[0_12px_40px_rgba(165,187,160,0.45)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                            >
                                Explore Our Products
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                id="hero-cta-vision"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 border border-white/20 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                            >
                                Our Vision
                            </Link>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap items-center gap-4 sm:gap-6"
                        >
                            {[
                                { icon: <Recycle className="w-4 h-4" />, text: "Zero Waste" },
                                { icon: <Globe className="w-4 h-4" />, text: "Global Supply" },
                                { icon: <Leaf className="w-4 h-4" />, text: "Eco Certified" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <span className="text-brand-soft-green/70">{item.icon}</span>
                                    <span className="text-xs font-medium text-white/40">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column — Floating Glass Stat Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Central hero image circle */}
                            <div className="absolute inset-12 rounded-full overflow-hidden border border-white/[0.1] shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                                <Image
                                    src="/assets/hero.webp"
                                    alt="Jee Origin - Sustainable Pulp"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A2619]/40" />
                            </div>
                            <div className="absolute inset-12 rounded-full bg-brand-soft-green/5 blur-2xl animate-pulse" />

                            {/* Floating stat cards */}
                            {floatingStats.map((stat) => (
                                <motion.div
                                    key={stat.value}
                                    animate={{ y: stat.animDir }}
                                    transition={{ duration: stat.animDuration, repeat: Infinity, ease: "easeInOut" }}
                                    className={`absolute ${stat.position} z-10`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: stat.delay }}
                                        className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/50">{stat.label}</p>
                                            <p className="text-sm font-bold text-white">{stat.value}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Central rotating element */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="w-24 h-24 rounded-full border border-white/[0.04] flex items-center justify-center"
                                >
                                    <Leaf className="w-10 h-10 text-white/[0.08]" />
                                </motion.div>
                            </div>

                            {/* Orbiting ring */}
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-16 rounded-full border border-dashed border-white/[0.04]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-bold">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-white/25" />
                </motion.div>
            </motion.div>
        </section>
    );
}
