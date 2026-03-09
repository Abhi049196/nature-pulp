"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle, ArrowRight, Leaf, Beaker, Award, BarChart3 } from "lucide-react";

const pulpTypes = [
    {
        name: "Virgin Pulp",
        icon: "🌿",
        badge: "Premium",
        shortDesc: "Highest-grade agri-waste pulp for premium applications",
        specs: {
            brightness: "70-85% ISO",
            strength: "High tensile & burst",
            source: "Agriculture Waste",
            process: "Chemical free - Ozone bleaching",
        },
        applications: [
            "Premium writing paper",
            "Tissue & hygiene products",
            "Specialty packaging",
            "Food-grade paper",
        ],
    },
    {
        name: "Imported Agri-Waste Pulp",
        icon: "🌾",
        badge: "Versatile",
        shortDesc: "Multi-source fibers for mid-range applications",
        specs: {
            brightness: "65-75% ISO",
            strength: "Medium-high",
            source: "Global agri-waste blend",
            process: "Soda-AQ pulping",
        },
        applications: [
            "Corrugated medium",
            "Kraft paper",
            "Industrial packaging",
            "Newsprint base stock",
        ],
    },
    {
        name: "Recycled Pulp",
        icon: "♻️",
        badge: "Eco-Certified",
        shortDesc: "Post-consumer recycled fiber for cost-effective products",
        specs: {
            brightness: "60-72% ISO",
            strength: "Medium",
            source: "Post-consumer waste",
            process: "De-inking & refining",
        },
        applications: [
            "Corrugated boxes",
            "Egg cartons",
            "Newsprint",
            "Industrial wrapping",
        ],
    },
];

export default function PulpPageClient() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 warm-gradient" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span
                                className="text-sm text-brand-dark-neutral/50"
                            >
                                Products
                            </span>
                            <span className="text-brand-dark-neutral/30">/</span>
                            <span className="text-sm text-brand-dark-green font-medium">
                                Pulp
                            </span>
                        </div>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green leading-tight mb-6">
                            Pulp <span className="text-gradient">Collection</span>
                        </h1>
                        <p className="text-lg text-brand-dark-neutral/70 leading-relaxed max-w-2xl">
                            Three categories of sustainable pulp, each engineered for specific industry needs. All derived from agricultural waste, all contributing to a circular economy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PulpTypes Detail */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {pulpTypes.map((pulp, index) => (
                            <motion.div
                                key={pulp.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="grid lg:grid-cols-2 gap-12 items-start"
                            >
                                {/* Product Visual */}
                                <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                                    <div className="relative rounded-3xl overflow-hidden bg-brand-light-bg border border-brand-soft-green/10 p-12">
                                        <div className="text-center">
                                            <span className="text-8xl block mb-6">{pulp.icon}</span>
                                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-brand-dark-green text-white">
                                                {pulp.badge}
                                            </span>
                                        </div>
                                        {/* Decorative */}
                                        <div className="absolute top-4 right-4 w-24 h-24 bg-brand-soft-green/10 rounded-full blur-xl" />
                                        <div className="absolute bottom-4 left-4 w-20 h-20 bg-brand-accent-brown/10 rounded-full blur-lg" />
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-dark-green/10 text-brand-dark-green">
                                            {pulp.badge}
                                        </span>
                                    </div>
                                    <h2 className="font-heading text-3xl font-bold text-brand-dark-green mb-4">
                                        {pulp.name}
                                    </h2>
                                    <p className="text-brand-dark-neutral/70 leading-relaxed mb-8">
                                        {pulp.shortDesc}
                                    </p>

                                    {/* Specifications */}
                                    <div className="mb-8">
                                        <h3 className="font-heading text-sm font-bold text-brand-dark-neutral uppercase tracking-wider mb-4">
                                            Technical Specifications
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {Object.entries(pulp.specs).map(([key, value]) => (
                                                <div
                                                    key={key}
                                                    className="p-4 rounded-2xl bg-brand-light-bg"
                                                >
                                                    <p className="text-xs text-brand-dark-neutral/50 uppercase tracking-wider mb-1">
                                                        {key}
                                                    </p>
                                                    <p className="text-sm font-semibold text-brand-dark-green">
                                                        {value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Applications */}
                                    <div>
                                        <h3 className="font-heading text-sm font-bold text-brand-dark-neutral uppercase tracking-wider mb-4">
                                            Applications
                                        </h3>
                                        <ul className="grid grid-cols-2 gap-3">
                                            {pulp.applications.map((app) => (
                                                <li
                                                    key={app}
                                                    className="flex items-center gap-2 text-sm text-brand-dark-neutral/70"
                                                >
                                                    <CheckCircle className="w-4 h-4 text-brand-dark-green shrink-0" />
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QualityAssurance */}
            <section className="py-24 bg-brand-light-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Quality"
                        title="Quality Assurance & Compliance"
                        subtitle="Every batch of pulp undergoes rigorous testing to ensure it meets global standards."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Award className="w-6 h-6" />, title: "ISO Certified", desc: "Meets ISO quality and environmental standards" },
                            { icon: <Leaf className="w-6 h-6" />, title: "FSC Compatible", desc: "Aligned with Forest Stewardship Council principles" },
                            { icon: <Beaker className="w-6 h-6" />, title: "Lab Tested", desc: "Every batch tested for consistency and purity" },
                            { icon: <BarChart3 className="w-6 h-6" />, title: "Traceable", desc: "Full supply chain transparency from farm to factory" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-3xl bg-white border border-brand-soft-green/10 text-center hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-heading font-bold text-brand-dark-green mb-2 text-sm">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-brand-dark-neutral/50">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 eco-gradient">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                            Ready to Source Sustainable Pulp?
                        </h2>
                        <p className="text-white/70 mb-10">
                            Contact our team for samples, specifications, and custom quotations tailored to your production needs.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-dark-green rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
                        >
                            Request Samples
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
