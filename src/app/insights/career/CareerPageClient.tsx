"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import FormComponent from "@/components/FormComponents";
import { Briefcase, Heart, Leaf, Zap } from "lucide-react";

const careerFields = [
    { name: "name", label: "Full Name", type: "text" as const, placeholder: "Your full name", required: true },
    { name: "email", label: "Email Address", type: "email" as const, placeholder: "your@email.com", required: true },
    { name: "phone", label: "Phone Number", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
    { name: "address", label: "Address", type: "text" as const, placeholder: "Your current address", required: true },
    {
        name: "department",
        label: "Department",
        type: "select" as const,
        required: true,
        options: [
            { value: "pulp", label: "Pulp Manufacturing" },
            { value: "operations", label: "Operations" },
            { value: "rnd", label: "Research & Development" },
            { value: "marketing", label: "Marketing & Sales" },
            { value: "sustainability", label: "Sustainability" },
            { value: "other", label: "Other" },
        ],
    },
    { name: "cv", label: "Upload CV", type: "file" as const, accept: ".pdf,.doc,.docx", required: true },
    { name: "remarks", label: "Remarks / Cover Note", type: "textarea" as const, placeholder: "Tell us why you'd like to join Nature Pulp...", required: false },
];

const perks = [
    {
        icon: <Leaf className="w-6 h-6" />,
        title: "Purpose-Driven Work",
        desc: "Every day, your work contributes to a more sustainable planet.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Innovation Culture",
        desc: "We encourage experimentation and reward creative problem-solving.",
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Inclusive Environment",
        desc: "Diverse backgrounds, shared mission — everyone belongs here.",
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Growth Opportunities",
        desc: "Clear career paths, mentorship, and continuous learning programs.",
    },
];

export default function CareerPageClient() {
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
                            Careers
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green leading-tight mb-6">
                            Build a Career That{" "}
                            <span className="text-gradient">Matters</span>
                        </h1>
                        <p className="text-lg text-brand-dark-neutral/70 leading-relaxed max-w-2xl">
                            Join a team that&apos;s transforming agricultural waste into the building blocks of a sustainable future. We&apos;re looking for passionate individuals who want to make a real difference.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Why Join Us"
                        title="More Than Just a Job"
                        subtitle="At Nature Pulp, your career is a force for positive change."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, index) => (
                            <motion.div
                                key={perk.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 rounded-3xl bg-brand-light-bg hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center mx-auto mb-4">
                                    {perk.icon}
                                </div>
                                <h3 className="font-heading font-bold text-brand-dark-green mb-2">
                                    {perk.title}
                                </h3>
                                <p className="text-sm text-brand-dark-neutral/60">{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-24 bg-brand-light-bg">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Apply Now"
                        title="Submit Your Application"
                        subtitle="Fill out the form below and we'll get back to you if there's a match."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-soft-green/10 shadow-sm"
                    >
                        <FormComponent
                            fields={careerFields}
                            endpoint="/api/career"
                            submitLabel="Submit Application"
                            successMessage="Your application has been submitted successfully! Our HR team will review it and get back to you within 5-7 business days."
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}
