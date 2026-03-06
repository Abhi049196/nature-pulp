"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "../SectionHeading";

const faqs = [
    {
        question: "What makes your pulp sustainable?",
        answer: "Our pulp is sustainably sourced from 100% agricultural waste rather than chopping down trees. We use an innovative, eco-friendly manufacturing process that reduces water usage and requires significantly fewer chemicals compared to traditional wood pulping, giving local farmers an additional revenue stream.",
    },
    {
        question: "How do your pulp products compare in strength to traditional paper?",
        answer: "Our agri-waste pulp is engineered to match or even exceed the tensile strength, smoothness, and durability of conventional wood pulp. Through rigorous R&D, we've optimized our fiber processing so businesses never have to compromise on quality to make a sustainable choice.",
    },
    {
        question: "What industries do you serve?",
        answer: "We primarily supply our high-quality sustainable pulp to packaging manufacturers, paper mills, molded pulp manufacturers, and eco-friendly consumer goods brands. Our versatile pulp can be adapted for a wide variety of industrial and commercial applications.",
    },
    {
        question: "Do you offer custom pulp formulations?",
        answer: "Yes, we understand that different manufacturing processes require specific pulp characteristics. Our R&D team works closely with corporate partners to develop tailored fiber blends and custom formulations that perfectly fit their machinery and product requirements.",
    },
    {
        question: "How does purchasing from Jee Origin support local communities?",
        answer: "By directly procuring agricultural waste from rural farmers, we provide them with a reliable secondary source of income for biomass that would otherwise be burned (which causes heavy pollution). This local supply chain philosophy empowers rural communities financially while actively clearing the air of seasonal smog.",
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-brand-light-bg relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-soft-green/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-light-green/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    badge="FAQ"
                    title="Frequently Asked Questions"
                    subtitle="Learn more about our products, sustainability, and processes."
                />

                <div className="mt-16 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`border ${isOpen ? 'border-brand-dark-green/20 bg-white shadow-xl shadow-brand-dark-green/5' : 'border-brand-soft-green/20 bg-white/60'} rounded-3xl overflow-hidden transition-all duration-300`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
                                >
                                    <h3 className={`font-heading text-lg sm:text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-brand-dark-green' : 'text-brand-dark-neutral group-hover:text-brand-dark-green'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-dark-green text-white' : 'bg-brand-soft-green/20 text-brand-dark-green group-hover:bg-brand-dark-green/10'}`}>
                                        {isOpen ? (
                                            <Minus className="w-5 h-5" />
                                        ) : (
                                            <Plus className="w-5 h-5" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 sm:px-8 pb-8 text-brand-dark-neutral/80 leading-relaxed border-t border-brand-soft-green/10 pt-6">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
