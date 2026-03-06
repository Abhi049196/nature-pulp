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
        desc: "Jee Origin was born from a simple question: Why are we burning agricultural waste when it can build a sustainable future?",
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

function ImpactNumbers() {
    return (
        <div>
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
        </div>
    )
}

export default ImpactNumbers