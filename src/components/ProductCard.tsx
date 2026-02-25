"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ProductCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    index?: number;
    gradient?: string;
}

export default function ProductCard({
    icon,
    title,
    description,
    href,
    index = 0,
    gradient = "from-brand-dark-green/5 to-brand-soft-green/10",
}: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                href={href}
                className={`group block relative p-8 rounded-3xl bg-gradient-to-br ${gradient} border border-transparent hover:border-brand-soft-green/30 hover:shadow-xl hover:shadow-brand-dark-green/5 transition-all duration-500 h-full`}
            >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center mb-5 group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {icon}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-brand-dark-green mb-3 group-hover:text-brand-dark-green/90 transition-colors">
                    {title}
                </h3>
                <p className="text-brand-dark-neutral/60 text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {/* Arrow link */}
                <div className="flex items-center gap-2 text-brand-accent-brown font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-soft-green/5 rounded-bl-[4rem] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
        </motion.div>
    );
}
