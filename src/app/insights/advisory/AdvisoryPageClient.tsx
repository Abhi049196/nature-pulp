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

export default function AdvisoryPageClient() {
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

            {/* Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="What We Offer"
                        title="Our Advisory Services"
                        subtitle="Comprehensive support for companies transitioning to sustainable pulp and paper operations."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-3xl bg-brand-light-bg hover:bg-white border border-transparent hover:border-brand-soft-green/20 hover:shadow-xl hover:shadow-brand-dark-green/5 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center mb-5 group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="font-heading text-lg font-bold text-brand-dark-green mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-brand-dark-neutral/60 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-brand-light-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="How We Work"
                        title="Our Advisory Process"
                        subtitle="A structured approach to transforming your operations toward sustainability."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understand your current operations, challenges, and sustainability goals" },
                            { step: "02", title: "Analysis", desc: "Deep-dive into your supply chain, processes, and market positioning" },
                            { step: "03", title: "Strategy", desc: "Develop actionable roadmaps with clear milestones and KPIs" },
                            { step: "04", title: "Implementation", desc: "On-ground support to execute strategies and measure outcomes" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="text-center"
                            >
                                <div className="font-heading text-5xl font-bold text-brand-soft-green/30 mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-heading text-lg font-bold text-brand-dark-green mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-brand-dark-neutral/60">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 eco-gradient">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                            Ready to Go Sustainable?
                        </h2>
                        <p className="text-white/70 mb-10">
                            Book a free consultation with our advisory team and discover how agri-waste pulp can transform your business.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand-dark-green rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
                        >
                            Schedule a Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
