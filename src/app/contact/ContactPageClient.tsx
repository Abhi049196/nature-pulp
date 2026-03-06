"use client";

import { motion } from "framer-motion";
import FormComponent from "@/components/FormComponents";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactFields = [
    { name: "name", label: "Full Name", type: "text" as const, placeholder: "Your full name", required: true },
    { name: "email", label: "Email Address", type: "email" as const, placeholder: "your@email.com", required: true },
    { name: "phone", label: "Phone Number", type: "tel" as const, placeholder: "+91 XXXXX XXXXX", required: true },
    { name: "address", label: "Address", type: "text" as const, placeholder: "Your address", required: false },
    { name: "subject", label: "Subject", type: "text" as const, placeholder: "What is this regarding?", required: true },
    { name: "message", label: "Message", type: "textarea" as const, placeholder: "Tell us how we can help...", required: true },
];

const contactInfo = [
    {
        icon: <Mail className="w-6 h-6" />,
        label: "Email",
        value: "support@jeeorigin.com",
        href: "mailto:support@jeeorigin.com",
    },
    {
        icon: <Phone className="w-6 h-6" />,
        label: "Phone",
        value: "+91 9798973570",
        href: "tel:+919798973570",
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        label: "Registered Address",
        value: "H. No. 1198, Sector 16, Near Z Park, Haryana – 121002, India",
        href: "https://maps.google.com/?q=H.+No.+1198,+Sector+16,+Near+Z+Park,+Haryana+121002",
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        label: "Factory Address",
        value: "Dharam Nagar, Gali No. 1, Near Opposite Jain Mandir, Palwal, Haryana – 121102, India",
        href: "https://maps.google.com/?q=Dharam+Nagar,+Gali+No.+1,+Near+Opposite+Jain+Mandir,+Palwal,+Haryana+121102",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        label: "Business Hours",
        value: "Mon - Sat: 9:00 AM - 6:00 PM IST",
        href: null,
    },
];

export default function ContactPageClient() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 warm-gradient" />
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ y: [-12, 12, -12] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-28 right-[18%] w-36 h-36 bg-brand-soft-green/10 rounded-full blur-2xl"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-dark-green/5 text-brand-dark-green mb-6">
                            Contact Us
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green leading-tight mb-6">
                            Let&apos;s Start a{" "}
                            <span className="text-gradient">Conversation</span>
                        </h1>
                        <p className="text-lg text-brand-dark-neutral/70 leading-relaxed max-w-2xl">
                            Whether you have a question about our products, need a custom quote, or want to explore partnership opportunities — we&apos;re here to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-1"
                        >
                            <h2 className="font-heading text-2xl font-bold text-brand-dark-green mb-8">
                                Get in Touch
                            </h2>

                            <div className="space-y-6 mb-10">
                                {contactInfo.map((item) => (
                                    <div key={item.label} className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center shrink-0 group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-brand-dark-neutral/50 uppercase tracking-wider mb-1">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-brand-dark-green font-medium hover:text-brand-accent-brown transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-brand-dark-green font-medium">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-soft-green/20 to-brand-dark-green/10 border border-brand-soft-green/10 h-48 flex items-center justify-center p-6 text-center">
                                <div className="">
                                    <MapPin className="w-8 h-8 text-brand-dark-green/30 mx-auto mb-3" />
                                    <p className="text-sm font-medium text-brand-dark-green/60 mb-1">Palwal, Haryana</p>
                                    <p className="text-xs text-brand-dark-green/40 italic">Serving Sustainability Worldwide</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-brand-light-bg rounded-3xl p-8 sm:p-12 border border-brand-soft-green/10">
                                <h2 className="font-heading text-2xl font-bold text-brand-dark-green mb-2">
                                    Send Us a Message
                                </h2>
                                <p className="text-brand-dark-neutral/60 text-sm mb-8">
                                    Fill out the form below and we&apos;ll respond within 24 hours.
                                </p>
                                <FormComponent
                                    fields={contactFields}
                                    endpoint="/api/contact"
                                    submitLabel="Send Message"
                                    successMessage="Thank you for reaching out! We've received your message and will get back to you within 24 business hours."
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
