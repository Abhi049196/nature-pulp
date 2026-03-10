"use client";

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
        <div
            className={`absolute pointer-events-none z-0 text-brand-dark-green ${className}`}
            style={{
                opacity,
                transform: `rotate(${rotation}deg)`,
                animation: `decorativeFloat ${duration}s ease-in-out ${delay}s infinite`,
            }}
            aria-hidden="true"
        >
            <Leaf className="w-full h-full" strokeWidth={1.5} />
        </div>
    );
}
