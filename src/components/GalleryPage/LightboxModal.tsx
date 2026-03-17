"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { X, Camera } from "lucide-react";

//const galleryCategories = ["All", "Farm", "Factory", "Products", "Community", "Events"];

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
