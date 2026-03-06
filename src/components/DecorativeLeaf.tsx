"use client";

import { motion } from "framer-motion";

import { Leaf } from "lucide-react";

interface DecorativeLeafProps {
    className?: string;
    delay?: number;
    duration?: number;
    rotation?: number;
    opacity?: number;
}

export default function DecorativeLeaf({
    className = "",
    delay = 0,
    duration = 8,
    rotation = 0,
    opacity = 0.1,
}: DecorativeLeafProps) {
    return (
        <motion.div
            className={`absolute pointer-events-none z-0 text-brand-dark-green ${className}`}
            initial={{ y: 0, rotate: rotation, opacity: 0 }}
            animate={{
                y: [0, -20, 0],
                rotate: [rotation, rotation + 15, rotation],
            }}
            whileInView={{ opacity }}
            viewport={{ once: true }}
            transition={{
                y: {
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                },
                rotate: {
                    duration: duration * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                },
                opacity: { duration: 1 },
            }}
        >
            <Leaf className="w-full h-full" strokeWidth={1.5} />
        </motion.div>
    );
}
