"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
    title: string;
    description: string;
    icon: string;
    href: string;
    badge?: string;
    index?: number;
}

export default function ProductCard({
    title,
    description,
    icon,
    href,
    badge,
    index = 0,
}: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-soft-green/10 hover:border-brand-soft-green/30 hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-green/[0.02] to-brand-soft-green/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge */}
                {badge && (
                    <span className="relative inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-dark-green/10 text-brand-dark-green mb-4">
                        {badge}
                    </span>
                )}

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-brand-soft-green/15 flex items-center justify-center mb-6 group-hover:bg-brand-dark-green/10 transition-colors duration-300">
                    <span className="text-3xl">{icon}</span>
                </div>

                {/* Content */}
                <h3 className="relative font-heading text-xl font-bold text-brand-dark-green mb-3">
                    {title}
                </h3>
                <p className="relative text-brand-dark-neutral/60 text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {/* CTA */}
                <Link
                    href={href}
                    className="relative inline-flex items-center gap-2 text-sm font-semibold text-brand-dark-green hover:text-brand-accent-brown transition-colors group/link"
                >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
