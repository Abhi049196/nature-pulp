"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
    badge?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
    light?: boolean;
    children?: ReactNode;
}

export default function SectionHeading({
    badge,
    title,
    subtitle,
    centered = true,
    light = false,
    children
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${centered ? "text-center" : ""}`}
        >
            {badge && (
                <span
                    className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${light
                            ? "bg-white/10 text-white/80"
                            : "bg-brand-dark-green/5 text-brand-dark-green"
                        }`}
                >
                    {badge}
                </span>
            )}
            <h2
                className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight ${light ? "text-white" : "text-brand-dark-green"
                    }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-4 text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""
                        } ${light ? "text-white/60" : "text-brand-dark-neutral/60"}`}
                >
                    {subtitle}
                </p>
            )}
            {children}
        </motion.div>
    );
}
