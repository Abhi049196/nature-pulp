"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, TreePine, Leaf, Users } from "lucide-react";

const pledgeItems = [
    {
        icon: <TreePine className="w-6 h-6" />,
        stat: "10M+",
        label: "Trees to be Saved",
        desc: "By replacing wood pulp with Agricultural Waste, keeping our forests — the lungs of our planet — standing.",
    },
    {
        icon: <Leaf className="w-6 h-6" />,
        stat: "Millions",
        label: "Tons of Carbon Credits",
        desc: "Our processes reduce crop residue burning and eliminate toxic chemical runoff, directly cooling the planet.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        stat: "2x",
        label: "Farmers' Income",
        desc: "By purchasing agricultural waste, we transform a disposal problem into a secondary revenue stream for farmers.",
    },
];

export default function DirectorMessage() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#0A2619_0%,_transparent_60%)] opacity-[0.04] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-soft-green/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-dark-green/8 border border-brand-dark-green/10 text-brand-dark-green text-xs font-bold uppercase tracking-widest">
                        Director&apos;s Message
                    </span>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 xl:gap-20 items-start">

                    {/* Left — Director Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2 flex flex-col gap-8"
                    >
                        {/* Profile Card */}
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-dark-green to-emerald-800 p-8 text-white shadow-2xl shadow-brand-dark-green/20">
                            {/* Decorative circles */}
                            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
                            <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-white/5" />

                            <div className="relative z-10">
                                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/20 mb-6 shadow-lg bg-white/10 shrink-0">
                                    <Image
                                        src="/assets/team-image/gopal.webp"
                                        alt="Mr. Gopal Jee"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-1">Mr. Gopal Jee</h3>
                                <p className="text-white/60 text-sm font-medium mb-6">Director & Co-Founder, Jee Origin</p>

                                <div className="border-t border-white/10 pt-6">
                                    <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-3">Our Motto</p>
                                    <p className="text-brand-soft-green font-semibold text-lg leading-snug italic">
                                        &ldquo;Serve the Nature — Save Tree, Save Planet.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2035 Pledge Cards */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-brand-dark-green/40 mb-4">Our 2035 Pledge</p>
                            <div className="flex flex-col gap-4">
                                {pledgeItems.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-2xl bg-brand-light-bg border border-brand-soft-green/10 hover:border-brand-soft-green/30 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="flex items-baseline gap-2 mb-0.5">
                                                <span className="text-xl font-bold text-brand-dark-green">{item.stat}</span>
                                                <span className="text-xs font-semibold text-brand-dark-neutral/60">{item.label}</span>
                                            </div>
                                            <p className="text-xs text-brand-dark-neutral/50 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Message Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="lg:col-span-3"
                    >
                        {/* Large quote mark */}
                        <Quote className="w-12 h-12 text-brand-soft-green/20 mb-4" />

                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark-green mb-8 leading-tight">
                            Welcome to Jee Origin.
                        </h2>

                        <div className="space-y-5 text-brand-dark-neutral/70 leading-relaxed text-[15px] sm:text-base">
                            <p>
                                At the heart of our journey lies a simple yet profound motto:{" "}
                                <em className="text-brand-dark-green font-semibold not-italic">&ldquo;Serve the Nature — Save Tree, Save Planet.&rdquo;</em>{" "}
                                We believe that the industrial progress of tomorrow must be built on the ecological preservation of today.
                            </p>
                            <p>
                                Jee Origin is not just a company; it is a <strong className="text-brand-dark-green">movement toward a circular economy</strong>. We are fundamentally changing how the world views paper and packaging. By specializing in Chemical-Free Pulp Production, we have turned a polluting traditional industry into a sustainable one. From high-quality Kraft paper and writing/printing paper to molded products, every fiber we produce is a testament to our respect for the Earth.
                            </p>

                            {/* Highlighted block */}
                            <div className="my-6 pl-5 border-l-4 border-brand-soft-green bg-brand-light-bg rounded-r-2xl py-5 pr-5">
                                <p className="text-brand-dark-green font-semibold text-base mb-2">Green Energy & Employment</p>
                                <p className="text-sm text-brand-dark-neutral/60 leading-relaxed">
                                    Through Green Energy practices and innovative Employment Generation, we are building a workforce that prides itself on being &ldquo;Earth-first.&rdquo; We are proving that you can create world-class industrial products without scarring the environment.
                                </p>
                            </div>

                            <p>
                                When you choose Jee Origin, you aren&apos;t just buying paper; you are{" "}
                                <strong className="text-brand-dark-green">participating in a global pledge to restore the balance of nature</strong>. We invite you to join us in this mission. Let us leave behind a legacy of green forests, clean air, and thriving rural communities.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 pt-8 border-t border-slate-100">
                            <p className="text-sm text-brand-dark-neutral/40 mb-2 italic">With unwavering commitment to the Earth,</p>
                            <p className="font-heading text-2xl font-bold text-brand-dark-green">Mr. Gopal Jee</p>
                            <p className="text-sm text-brand-dark-neutral/50 mt-1">Director & Co-Founder, Jee Origin</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
