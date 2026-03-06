"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
    Leaf,
    Lightbulb,
    Heart,
    Recycle,
    Globe,
    MoveRight
} from "lucide-react";

const coreValues = [
    {
        icon: <Leaf />,
        title: "Sustainability",
        description: "Every decision we make is guided by its environmental impact. We build products that heal the planet, not harm it.",
        color: "#10b981",
    },
    {
        icon: <Lightbulb />,
        title: "Innovation",
        description: "From R&D labs to production floors, we embrace cutting-edge technology to push the boundaries of what agri-waste can become.",
        color: "#f59e0b",
    },
    {
        icon: <Heart />,
        title: "Rural Empowerment",
        description: "We create dignified livelihoods for farming communities, transforming their waste into a source of income and pride.",
        color: "#c2410c",
    },
    {
        icon: <Recycle />,
        title: "Zero-Waste",
        description: "Our production model ensures that nothing is wasted. Every byproduct is reused, recycled, or upcycled — achieving true circularity.",
        color: "#87A685",
    },
    {
        icon: <Globe />,
        title: "Climate Action",
        description: "Committed to measurable climate targets — from carbon-neutral operations to ecosystem restoration across our supply chain.",
        color: "#1a3a32",
    },
];

function CoreValues() {
    return (
        <section className="py-20 bg-[#F9F9F8] relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <header className="mb-2">
                    <SectionHeading
                        badge="Our Foundation"
                        title="Values That Shape the Future"
                        subtitle="Jee Origin is built on five core principles that drive our innovation and environmental stewardship."
                    />
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 group/container">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}

                            className={`group relative bg-white px-12 py-5 rounded-[40px] 
                                border border-zinc-200/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]
                                transition-all duration-700 
                                hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] 
                                hover:-translate-y-3 overflow-hidden
                                ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                            `}
                        >
                            {/* Decorative Corner Glow (Hover par icon color mein badlega) */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-bl-full pointer-events-none over"
                                style={{ backgroundColor: value.color }}
                            />

                            {/* Floating Index Number */}
                            <div className="absolute top-10 right-12 text-[20px] font-black tracking-[0.5em] text-zinc-300 group-hover:text-brand-soft-green transition-colors">
                                0{index + 1}
                            </div>

                            {/* Icon Container with Soft Background */}
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                                style={{ backgroundColor: `${value.color}08`, color: value.color }}
                            >
                                {value.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-brand-dark-green mb-1 tracking-tight leading-tight">
                                {value.title}
                            </h3>

                            <p className="text-zinc-500 text-base leading-relaxed group-hover:text-brand-dark-green transition-colors">
                                {value.description}
                            </p>

                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Line */}
                <div className="mt-20 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                        <span className="text-[13px] font-black uppercase tracking-[0.5em] text-zinc-400">Values Integrated Since Foundation</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoreValues;