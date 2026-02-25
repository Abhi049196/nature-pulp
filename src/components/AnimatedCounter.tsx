"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    prefix?: string;
    label: string;
    description: string;
    icon: string;
    index?: number;
}

export default function AnimatedCounter({
    target,
    suffix = "",
    prefix = "",
    label,
    description,
    icon,
    index = 0,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const duration = 2000;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, target]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
        >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <span className="text-3xl">{icon}</span>
            </div>
            <div className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2">
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </div>
            <div className="font-heading text-base font-semibold text-brand-soft-green mb-1">
                {label}
            </div>
            <p className="text-white/50 text-sm max-w-xs mx-auto">{description}</p>
        </motion.div>
    );
}
