"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { X, Camera } from "lucide-react";

const galleryCategories = ["All", "Farm", "Factory", "Products", "Community", "Events"];

const galleryItems = [
    { id: 1, category: "Farm", title: "Wheat Straw Collection", desc: "Farmers collecting wheat straw for pulp production", height: "h-80" },
    { id: 2, category: "Factory", title: "Pulping Process", desc: "State-of-the-art pulping machinery in action", height: "h-64" },
    { id: 3, category: "Products", title: "Virgin Pulp Bales", desc: "Premium-grade virgin pulp ready for shipment", height: "h-72" },
    { id: 4, category: "Community", title: "Farmer Training", desc: "Educating farming communities on waste management", height: "h-64" },
    { id: 5, category: "Farm", title: "Rice Husk Processing", desc: "Rice husk being prepared for pulp conversion", height: "h-72" },
    { id: 6, category: "Factory", title: "Quality Testing Lab", desc: "Rigorous quality control at our testing facility", height: "h-80" },
    { id: 7, category: "Events", title: "Industry Conference", desc: "Jee Origin at the Global Sustainability Summit", height: "h-64" },
    { id: 8, category: "Products", title: "Recycled Pulp", desc: "High-quality recycled pulp output", height: "h-72" },
    { id: 9, category: "Community", title: "Rural Empowerment", desc: "Building livelihoods through waste procurement", height: "h-80" },
    { id: 10, category: "Factory", title: "Production Line", desc: "Continuous production for consistent supply", height: "h-64" },
    { id: 11, category: "Farm", title: "Bagasse Collection", desc: "Sugarcane bagasse sourcing from partner farms", height: "h-72" },
    { id: 12, category: "Events", title: "Sustainability Award", desc: "Recognized for excellence in sustainable manufacturing", height: "h-80" },
];

const colorVariants = [
    "from-brand-dark-green/20 to-brand-soft-green/30",
    "from-brand-accent-brown/20 to-brand-earth-brown/20",
    "from-brand-soft-green/30 to-brand-dark-green/10",
    "from-brand-earth-brown/20 to-brand-accent-brown/10",
];

export default function GalleryPageClient() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory);

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
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-dark-green/5 text-brand-dark-green mb-6">
                            Gallery
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green leading-tight mb-6">
                            Sustainability in{" "}
                            <span className="text-gradient">Action</span>
                        </h1>
                        <p className="text-lg text-brand-dark-neutral/70 leading-relaxed max-w-2xl">
                            A visual journey through our operations — from the farm fields where we source agricultural waste to the production floors where we create sustainable pulp.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {galleryCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-brand-dark-green text-white shadow-lg shadow-brand-dark-green/20"
                                    : "bg-brand-light-bg text-brand-dark-neutral/60 hover:bg-brand-soft-green/20 hover:text-brand-dark-green"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Masonry Grid */}
                    <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        <AnimatePresence>
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="break-inside-avoid cursor-pointer group"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div
                                        className={`${item.height} rounded-3xl overflow-hidden bg-gradient-to-br ${colorVariants[index % colorVariants.length]
                                            } relative border border-brand-soft-green/10 hover:shadow-xl transition-all duration-500`}
                                    >
                                        {/* Content */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Camera className="w-12 h-12 text-brand-dark-green/15" />
                                        </div>

                                        {/* Overlay Info */}
                                        <div className="absolute inset-0 bg-brand-dark-green/80 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-3">
                                                {item.category}
                                            </span>
                                            <h3 className="font-heading text-lg font-bold text-white text-center mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/60 text-sm text-center">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                            >
                                <X className="w-5 h-5 text-brand-dark-green" />
                            </button>

                            <div className="h-80 bg-gradient-to-br from-brand-dark-green/20 to-brand-soft-green/30 flex items-center justify-center">
                                <Camera className="w-20 h-20 text-brand-dark-green/20" />
                            </div>

                            <div className="p-8">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-dark-green/10 text-brand-dark-green mb-3">
                                    {selectedItem.category}
                                </span>
                                <h3 className="font-heading text-2xl font-bold text-brand-dark-green mb-2">
                                    {selectedItem.title}
                                </h3>
                                <p className="text-brand-dark-neutral/60">
                                    {selectedItem.desc}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
