"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
    {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: `By accessing and using the Jee Origin website (www.jeeorigin.com), operated by Jee Origin Pvt Ltd, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.

These Terms and Conditions apply to all visitors, users, and others who access or use the website. By accessing or using the website, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the website.`,
    },
    {
        id: "use-of-website",
        title: "2. Use of Website",
        content: `You agree to use the website only for lawful purposes and in a manner that does not infringe upon the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.

**Prohibited activities include but are not limited to:**
- Using the website in any way that violates applicable local, national, or international law
- Unauthorized use of any automated system to access the website
- Introducing viruses, malware, or other harmful code
- Attempting to gain unauthorized access to any portion of the website
- Collecting or harvesting any personally identifiable information from the website
- Using the website for any commercial solicitation purposes without our written consent
- Misrepresenting your identity or affiliation with any person or entity`,
    },
    {
        id: "intellectual-property",
        title: "3. Intellectual Property Rights",
        content: `The website and its entire contents, features, and functionality — including but not limited to all information, software, text, displays, images, video, audio, design, selection, and arrangement — are owned by Jee Origin Pvt Ltd, its licensors, or other providers and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws.

**You may not:**
- Modify copies of any materials from the website
- Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text
- Delete or alter any copyright, trademark, or other proprietary rights notices
- Access or use any part of the website for any commercial purpose without our express written consent

The Jee Origin name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Jee Origin Pvt Ltd. You must not use such marks without our prior written permission.`,
    },
    {
        id: "product-information",
        title: "4. Product Information",
        content: `All product descriptions, specifications, and information provided on the website are for general informational purposes only. While we strive to provide accurate and up-to-date information, we do not warrant that product descriptions or other content on the website is accurate, complete, reliable, current, or error-free.

Actual product specifications may vary from those described on the website. We reserve the right to modify product specifications at any time without prior notice. For the most current and binding product specifications, please contact us directly.

Product availability, pricing, and delivery terms are subject to change and will be confirmed upon order placement. Nothing on this website constitutes a binding offer to sell any product.`,
    },
    {
        id: "user-submissions",
        title: "5. User Submissions",
        content: `By submitting any information through our contact forms, career application forms, or any other submission mechanism on the website, you represent and warrant that:

- The information you provide is accurate, current, and complete
- You have the right to submit such information
- Your submission does not violate any applicable law or regulation
- Your submission does not infringe upon any third party's rights

We reserve the right to use, reproduce, modify, and distribute any non-confidential information submitted through the website for our business purposes. Personal information will be handled in accordance with our Privacy Policy.

For career applications, submitted resumes and personal information will be used solely for recruitment purposes and handled in accordance with applicable employment laws.`,
    },
    {
        id: "disclaimer",
        title: "6. Disclaimer of Warranties",
        content: `THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied, including but not limited to:
- Implied warranties of merchantability, fitness for a particular purpose, and non-infringement
- Warranties that the website will be uninterrupted, timely, secure, or error-free
- Warranties regarding the accuracy, reliability, or completeness of any information on the website
- Warranties that defects will be corrected
- Warranties that the website or the server that makes it available are free of viruses or other harmful components

Your use of the website is at your sole risk. This disclaimer does not affect any warranties that cannot be excluded under applicable law.`,
    },
    {
        id: "limitation-of-liability",
        title: "7. Limitation of Liability",
        content: `To the maximum extent permitted by applicable law, Jee Origin Pvt Ltd and its directors, employees, agents, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:

- Loss of profits, data, use, goodwill, or other intangible losses
- Damages resulting from your access to or use of, or inability to access or use, the website
- Damages resulting from any content obtained from the website
- Damages resulting from unauthorized access, use, or alteration of your transmissions or content

In no event shall our total liability to you for all claims exceed the amount paid by you, if any, for accessing the website during the twelve (12) months preceding the claim.`,
    },
    {
        id: "indemnification",
        title: "8. Indemnification",
        content: `You agree to defend, indemnify, and hold harmless Jee Origin Pvt Ltd and its officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions, demands, liabilities, and settlements, including legal and accounting fees, resulting from or alleged to result from:

- Your violation of these Terms and Conditions
- Your use of the website
- Your violation of any third party's rights, including intellectual property rights
- Any content that you submit, post, or transmit through the website`,
    },
    {
        id: "third-party-links",
        title: "9. Third-Party Links",
        content: `Our website may contain links to third-party websites or services that are not owned or controlled by Jee Origin. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.

We do not warrant the offerings of any third parties. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.

We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.`,
    },
    {
        id: "governing-law",
        title: "10. Governing Law",
        content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.

Any disputes arising out of or relating to these Terms and Conditions or the use of the website shall be subject to the exclusive jurisdiction of the courts located in Haryana, India.

Our failure to enforce any right or provision of these Terms and Conditions will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`,
    },
    {
        id: "changes",
        title: "11. Changes to Terms",
        content: `We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.

What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms.

It is your responsibility to review these Terms periodically for changes. Your continued use of the website following the posting of any changes constitutes acceptance of those changes.`,
    },
    {
        id: "contact",
        title: "12. Contact Information",
        content: `For questions about these Terms and Conditions, please contact us at:

**Jee Origin Pvt Ltd**
Email: support@jeeorigin.com
Phone: +91 9798973570
Registered Address: H. No. 1198, Sector 16, Near Z Park, Haryana – 121002, India
Factory Address: Dharam Nagar, Gali No. 1, Near Opposite Jain Mandir, Palwal, Haryana – 121102, India

We aim to acknowledge all inquiries within 2 business days and provide a substantive response within 10 business days.`,
    },
];

export default function TermsConditionsClient() {
    const [activeSection, setActiveSection] = useState("acceptance");

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((s) => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 150;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 warm-gradient" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-brand-dark-green mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-brand-dark-neutral/60">
                            Last updated: February 2025
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Sidebar Index */}
                        <div className="hidden lg:block lg:col-span-1">
                            <nav className="sticky top-28 space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto">
                                <p className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark-neutral/40 mb-4">
                                    Table of Contents
                                </p>
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`block px-4 py-2 rounded-xl text-sm transition-all duration-200 ${activeSection === section.id
                                            ? "bg-brand-dark-green/10 text-brand-dark-green font-medium"
                                            : "text-brand-dark-neutral/50 hover:text-brand-dark-green hover:bg-brand-light-bg"
                                            }`}
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3 ">
                            <div className="space-y-12">
                                {sections.map((section) => (
                                    <motion.div
                                        key={section.id}
                                        id={section.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="scroll-mt-28"
                                    >
                                        <h2 className="font-heading text-2xl font-bold text-brand-dark-green mb-4">
                                            {section.title}
                                        </h2>
                                        <div className="prose prose-sm max-w-none text-brand-dark-neutral/70 leading-relaxed whitespace-pre-line">
                                            {section.content}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
