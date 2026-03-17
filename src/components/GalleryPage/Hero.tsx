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
        </>
    );
}
