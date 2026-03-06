"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Leaf, Beaker, Award, BarChart3 } from "lucide-react";
import Image from "next/image";

const pulpTypes = [
    {
        name: "Virgin Pulp",
        image: "/assets/virgin-pulp.png",
        icon: "🌿",
        badge: "Premium",
        shortDesc: "Highest-grade agri-waste pulp for premium applications",
        color: "bg-emerald-50",
        specs: {
            brightness: "82-88% ISO",
            strength: "High tensile & burst",
            source: "Wheat straw, Bagasse",
            process: "Chemical pulping, ECF bleaching",
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
        image: "/assets/imported-agri-waste-pulp.png",
        icon: "🌾",
        badge: "Versatile",
        shortDesc: "Multi-source fibers for mid-range applications",
        color: "bg-amber-50",
        specs: {
            brightness: "72-80% ISO",
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
        image: "/assets/recycled-pulp.png",
        icon: "♻️",
        badge: "Eco-Certified",
        shortDesc: "Post-consumer recycled fiber for cost-effective products",
        color: "bg-blue-50",
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

function PulpTypes() {
    return (
        <section className="py-24 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-32">
                    {pulpTypes.map((pulp, index) => (
                        <motion.div
                            key={pulp.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="flex flex-col lg:flex-row gap-16 items-center"
                        >
                            {/* Product Visual Container */}
                            <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`relative aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden ${pulp.color} border border-black/5 shadow-inner`}
                                >

                                    {/* IMAGE */}
                                    <Image
                                        src={pulp.image}
                                        alt={pulp.name}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Overlay for readability */}
                                    <div className="absolute inset-0 bg-black/10" />

                                    {/* Glass Badge Card */}
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                                        <span className="font-bold text-brand-dark-green">
                                            {pulp.badge}
                                        </span>
                                    </div>

                                </motion.div>
                            </div>

                            {/* Product Info Content */}
                            <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                                <div className="inline-flex items-center space-x-2 mb-6">
                                    <div className="h-[2px] w-8 bg-brand-dark-green/40"></div>
                                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-dark-green/60">
                                        Product Category
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                                    {pulp.name}
                                </h2>

                                <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                                    {pulp.shortDesc}
                                </p>

                                {/* Technical Specs Grid */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Beaker className="w-4 h-4" /> Technical Specifications
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {Object.entries(pulp.specs).map(([key, value]) => (
                                                <div
                                                    key={key}
                                                    className="group p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                                >
                                                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 group-hover:text-brand-dark-green transition-colors">
                                                        {key}
                                                    </p>
                                                    <p className="text-sm font-bold text-gray-800">
                                                        {value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Applications List */}
                                    <div>
                                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Award className="w-4 h-4" /> Ideal Applications
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                            {pulp.applications.map((app) => (
                                                <div
                                                    key={app}
                                                    className="flex items-center gap-3 text-gray-700 font-medium"
                                                >
                                                    <div className="bg-brand-dark-green/10 p-1 rounded-full">
                                                        <CheckCircle className="w-4 h-4 text-brand-dark-green" />
                                                    </div>
                                                    <span className="text-sm">{app}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PulpTypes;