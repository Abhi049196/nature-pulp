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

export default function TeamPageClient() {
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

            {/* Team Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Leadership"
                        title="Meet Our Team"
                        subtitle="Passionate professionals driving sustainable innovation."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="group"
                            >
                                <div className="relative rounded-3xl overflow-hidden bg-brand-light-bg border border-brand-soft-green/10 hover:shadow-xl hover:shadow-brand-dark-green/5 transition-all duration-500 hover:-translate-y-2">
                                    {/* Image Placeholder */}
                                    <div className="aspect-[3/4] bg-gradient-to-br from-brand-soft-green/20 to-brand-dark-green/10 flex items-center justify-center relative overflow-hidden">
                                        <User className="w-20 h-20 text-brand-dark-green/20" />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-brand-dark-green/80 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin className="w-5 h-5 text-white" />
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                                aria-label="Email"
                                            >
                                                <Mail className="w-5 h-5 text-white" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-5">
                                        <h3 className="font-heading text-lg font-bold text-brand-dark-green">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-brand-accent-brown font-medium mb-2">
                                            {member.designation}
                                        </p>
                                        <p className="text-xs text-brand-dark-neutral/50 leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-24 bg-brand-light-bg">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark-green mb-6">
                            Want to Join Our Team?
                        </h2>
                        <p className="text-brand-dark-neutral/60 mb-10">
                            We&apos;re always looking for passionate individuals who want to make a difference. Check out our open positions.
                        </p>
                        <a
                            href="/insights/career"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-dark-green text-white rounded-full font-semibold hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1"
                        >
                            View Careers
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
