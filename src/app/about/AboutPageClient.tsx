"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
    Leaf,
    Lightbulb,
    Heart,
    Recycle,
    Globe,
    Target,
    TreePine,
    Sprout,
} from "lucide-react";

const coreValues = [
    {
        icon: <Leaf className="w-7 h-7" />,
        title: "Sustainability",
        description:
            "Every decision we make is guided by its environmental impact. We build products that heal the planet, not harm it.",
        color: "bg-brand-dark-green",
    },
    {
        icon: <Lightbulb className="w-7 h-7" />,
        title: "Innovation",
        description:
            "From R&D labs to production floors, we embrace cutting-edge technology to push the boundaries of what agri-waste can become.",
        color: "bg-brand-accent-brown",
    },
    {
        icon: <Heart className="w-7 h-7" />,
        title: "Rural Empowerment",
        description:
            "We create dignified livelihoods for farming communities, transforming their waste into a source of income and pride.",
        color: "bg-brand-earth-brown",
    },
    {
        icon: <Recycle className="w-7 h-7" />,
        title: "Zero-Waste",
        description:
            "Our production model ensures that nothing is wasted. Every byproduct is reused, recycled, or upcycled — achieving true circularity.",
        color: "bg-brand-soft-green",
    },
    {
        icon: <Globe className="w-7 h-7" />,
        title: "Climate Action",
        description:
            "Committed to measurable climate targets — from carbon-neutral operations to ecosystem restoration across our supply chain.",
        color: "bg-brand-dark-green",
    },
];

const milestones = [
    {
        year: "Foundation",
        title: "The Seed Was Planted",
        desc: "Nature Pulp was born from a simple question: Why are we burning agricultural waste when it can build a sustainable future?",
    },
    {
        year: "Growth",
        title: "Building the Model",
        desc: "Developed proprietary processes to convert wheat straw, rice husk, and sugarcane bagasse into premium-grade pulp.",
    },
    {
        year: "Expansion",
        title: "Scaling Impact",
        desc: "Expanded partnerships with paper mills, packaging companies, and FMCG brands across India and international markets.",
    },
    {
        year: "Future",
        title: "2035 Vision",
        desc: "On track to become the world's largest agri-waste pulp manufacturer with operations spanning continents.",
    },
];

export default function AboutPageClient() {
    return (
        <>
            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 warm-gradient" />
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-[15%] w-40 h-40 bg-brand-soft-green/10 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{ y: [15, -15, 15] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 left-[10%] w-56 h-56 bg-brand-dark-green/5 rounded-full blur-3xl"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-dark-green/5 text-brand-dark-green mb-6">
                            Our Story
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green leading-tight mb-6">
                            Waste Is an{" "}
                            <span className="text-gradient">Opportunity</span>
                        </h1>
                        <p className="text-lg text-brand-dark-neutral/70 leading-relaxed max-w-2xl">
                            At Nature Pulp, we see possibility where others see waste. We are transforming agricultural residue into high-quality, sustainable pulp that serves industries worldwide.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark-green mb-6 leading-tight">
                                From Farm Fields to the{" "}
                                <span className="text-gradient">Future of Paper</span>
                            </h2>
                            <div className="space-y-4 text-brand-dark-neutral/70 leading-relaxed">
                                <p>
                                    India produces over 500 million tons of agricultural waste annually. Most of it is burned in the open — polluting air, destroying soil health, and contributing to climate change. We saw this not as a problem, but as the world&apos;s largest untapped raw material.
                                </p>
                                <p>
                                    Nature Pulp was founded with a radical vision: to build a bridge between India&apos;s farming communities and the global paper industry. By sourcing wheat straw, rice husk, sugarcane bagasse, and other crop residues directly from farmers, we create premium-grade pulp that meets international quality standards.
                                </p>
                                <p>
                                    Our model is simple but transformative: Buy waste from farmers, process it with advanced technology, and deliver sustainable raw materials to paper mills and packaging companies — all while maintaining zero-waste operations and empowering rural economies.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="space-y-6">
                                {milestones.map((item, index) => (
                                    <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center shrink-0 group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-300">
                                                <Sprout className="w-5 h-5" />
                                            </div>
                                            {index < milestones.length - 1 && (
                                                <div className="w-0.5 h-full bg-brand-soft-green/30 mt-2" />
                                            )}
                                        </div>
                                        <div className="pb-8">
                                            <span className="text-xs font-semibold text-brand-accent-brown uppercase tracking-wider">
                                                {item.year}
                                            </span>
                                            <h3 className="font-heading text-lg font-bold text-brand-dark-green mt-1 mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-brand-dark-neutral/60 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Manifesto */}
            <section className="py-24 eco-gradient relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <TreePine className="w-12 h-12 text-white/30 mx-auto mb-8" />
                        <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
                            &ldquo;Waste is an opportunity. Every straw we save from burning, every farmer we empower, every sheet of paper we produce — it all counts toward a world where sustainability isn&apos;t an option. It&apos;s the standard.&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-0.5 bg-white/30" />
                            <span className="text-brand-soft-green text-sm font-medium tracking-wider uppercase">
                                Nature Pulp Manifesto
                            </span>
                            <div className="w-12 h-0.5 bg-white/30" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-brand-light-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Our Values"
                        title="What Drives Us Forward"
                        subtitle="Five pillars that define our identity, guide our decisions, and shape every product we create."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative p-8 rounded-3xl bg-white border border-brand-soft-green/10 hover:shadow-xl hover:shadow-brand-dark-green/5 transition-all duration-500 hover:-translate-y-1 ${index === 4 ? "md:col-start-1 lg:col-start-2" : ""
                                    }`}
                            >
                                <div
                                    className={`w-14 h-14 rounded-2xl ${value.color} text-white flex items-center justify-center mb-5`}
                                >
                                    {value.icon}
                                </div>
                                <h3 className="font-heading text-xl font-bold text-brand-dark-green mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-brand-dark-neutral/60 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Numbers */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Our Impact"
                        title="Numbers That Matter"
                        subtitle="Real metrics from real operations — our commitment to transparency and accountability."
                    />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "500M+", label: "Tons of Waste Available", sub: "Annually in India alone" },
                            { number: "50+", label: "Industry Partners", sub: "Across supply chain" },
                            { number: "100%", label: "Agri-Waste Based", sub: "Zero deforestation" },
                            { number: "24/7", label: "Operations", sub: "Continuous production" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 rounded-3xl bg-brand-light-bg"
                            >
                                <div className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark-green mb-2">
                                    {stat.number}
                                </div>
                                <div className="font-heading font-semibold text-brand-dark-neutral text-sm mb-1">
                                    {stat.label}
                                </div>
                                <p className="text-xs text-brand-dark-neutral/50">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-brand-light-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Target className="w-12 h-12 text-brand-accent-brown mx-auto mb-6" />
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark-green mb-6">
                            Join Our Mission
                        </h2>
                        <p className="text-lg text-brand-dark-neutral/60 mb-10 max-w-xl mx-auto">
                            Whether you&apos;re a buyer, farmer, investor, or simply someone who cares — we&apos;d love to have you on this journey.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-brand-dark-green text-white rounded-full font-semibold text-base hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
