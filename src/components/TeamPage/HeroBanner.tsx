"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Linkedin, Mail, User } from "lucide-react";

const teamMembers = [
    {
        name: "Founding Member",
        designation: "CEO & Co-Founder",
        bio: "Visionary leader with 15+ years in sustainable manufacturing and agri-waste innovation.",
    },
    {
        name: "Technical Lead",
        designation: "CTO",
        bio: "Expert in pulping technology, process engineering, and green manufacturing systems.",
    },
    {
        name: "Operations Head",
        designation: "COO",
        bio: "Supply chain specialist with deep experience in rural procurement and logistics.",
    },
    {
        name: "Sustainability Director",
        designation: "Head of Sustainability",
        bio: "Environmental scientist driving our zero-waste and net-zero carbon initiatives.",
    },
    {
        name: "Finance Lead",
        designation: "CFO",
        bio: "Financial strategist focused on impact investing and sustainable business growth.",
    },
    {
        name: "Marketing Head",
        designation: "Head of Marketing",
        bio: "Brand storyteller connecting sustainability with global B2B market opportunities.",
    },
    {
        name: "R&D Lead",
        designation: "Head of R&D",
        bio: "Materials scientist innovating new fiber blends and pulping processes from agri-waste.",
    },
    {
        name: "Farmer Relations",
        designation: "Head of Community",
        bio: "Building direct farmer networks and ensuring fair-trade procurement across India.",
    },
];

function HeroBanner() {
  return (
    <div>
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
                            Our Team
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green leading-tight mb-6">
                            The People Behind the{" "}
                            <span className="text-gradient">Mission</span>
                        </h1>
                        <p className="text-lg text-brand-dark-neutral/70 leading-relaxed max-w-2xl">
                            A diverse team of engineers, scientists, sustainability experts, and passionate change-makers dedicated to building a waste-free future.
                        </p>
                    </motion.div>
                </div>
            </section>
    </div>
  )
}

export default HeroBanner