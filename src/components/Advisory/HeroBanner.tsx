"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Lightbulb, TrendingUp, Users, ShieldCheck, BookOpen, Globe } from "lucide-react";

const services = [
    {
        icon: <Lightbulb className="w-7 h-7" />,
        title: "Raw Material Sourcing Strategy",
        description:
            "We help companies identify, evaluate, and secure sustainable agri-waste fiber sources across India and Southeast Asia. From wheat straw to sugarcane bagasse, our sourcing expertise ensures quality and reliability.",
    },
    {
        icon: <TrendingUp className="w-7 h-7" />,
        title: "Process Optimization",
        description:
            "Leverage our R&D expertise to optimize your pulping processes for agri-waste fibers. We provide technical consultation on chemical recovery, bleaching alternatives, and energy efficiency improvements.",
    },
    {
        icon: <Users className="w-7 h-7" />,
        title: "Supply Chain Design",
        description:
            "Build resilient, transparent supply chains that connect farming communities with paper mills. We help design farmer engagement models, quality control protocols, and logistics networks.",
    },
    {
        icon: <ShieldCheck className="w-7 h-7" />,
        title: "Sustainability Compliance",
        description:
            "Navigate the complex landscape of environmental regulations and sustainability certifications. We guide companies through FSC, ISO 14001, and other relevant standards for green manufacturing.",
    },
    {
        icon: <BookOpen className="w-7 h-7" />,
        title: "Market Intelligence",
        description:
            "Stay ahead with our industry reports, market analysis, and demand forecasting for sustainable pulp products. Understand pricing trends, competitor movements, and emerging opportunities.",
    },
    {
        icon: <Globe className="w-7 h-7" />,
        title: "Impact Assessment",
        description:
            "Measure and communicate the environmental and social impact of your operations. We help build ESG reports, carbon footprint calculations, and impact narratives for stakeholders.",
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
                            Advisory Services
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green leading-tight mb-6">
                            Expert <span className="text-gradient">Guidance</span> for Sustainable Growth
                        </h1>
                        <p className="text-lg text-brand-dark-neutral/70 leading-relaxed max-w-2xl">
                            With deep expertise in agri-waste pulp manufacturing, we offer strategic advisory services to companies looking to transition to sustainable raw materials and circular business models.
                        </p>
                    </motion.div>
                </div>
            </section>
    </div>
  )
}

export default HeroBanner