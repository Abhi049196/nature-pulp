"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import SectionHeading from "../SectionHeading";
import DecorativeLeaf from "@/components/DecorativeLeaf";

const teamMembers = [
    {
        name: "Gopal Jee",
        designation: "Co-Founder And CEO",
        bio: "Visionary leader with 10+ years in sustainable manufacturing and agri-waste innovation.",
        image: "/assets/team-image/gopal.webp",
        linkedin: "https://www.linkedin.com/in/gopaljeeyis",
    },
    {
        name: "Ganesh Agrawal",
        designation: "Co-Founder and CMO",
        bio: "Supply chain specialist with deep experience in rural procurement and logistics.",
        image: "/assets/team-image/ganesh-agrawal.webp",
        linkedin: "",
    },
    {
        name: "Santosh Agrawal",
        designation: "Director",
        bio: "Expert in pulping technology, process engineering, and green manufacturing systems.",
        image: "/assets/team-image/santosh-agrawall.webp",
        linkedin: "",
    },
];

export default function TeamSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <DecorativeLeaf className="w-24 h-24 top-20 left-[8%] text-brand-soft-green" rotation={45} delay={0} duration={12} opacity={0.1} />
            <DecorativeLeaf className="w-16 h-16 bottom-[10%] right-[10%] text-brand-dark-green" rotation={-75} delay={1} duration={9} opacity={0.08} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeading
                    badge="Leadership"
                    title="Meet Our Team"
                    subtitle="Passionate professionals driving sustainable innovation."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden bg-brand-light-bg border border-brand-soft-green/10 hover:shadow-xl hover:shadow-brand-dark-green/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">

                                {/* Image */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Info */}
                                <div className="p-6 flex-grow flex flex-col justify-center">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <div>
                                            <h3 className="font-heading text-xl font-bold text-brand-dark-green">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm text-brand-accent-brown font-semibold">
                                                {member.designation}
                                            </p>
                                        </div>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${member.name} LinkedIn`}
                                                className="shrink-0 w-9 h-9 rounded-xl bg-brand-dark-green/8 hover:bg-brand-dark-green text-brand-dark-green hover:text-white flex items-center justify-center transition-all duration-300"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-xs text-brand-dark-neutral/60 leading-relaxed mt-2">
                                        {member.bio}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
