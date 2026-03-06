"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
    {
        id: "introduction",
        title: "1. Introduction",
        content: `Welcome to Jee Origin ("we," "our," or "us"), a product of Jee Origin Pvt Ltd. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.jeeorigin.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto.

We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at support@jeeorigin.com.`,
    },
    {
        id: "information-collected",
        title: "2. Information We Collect",
        content: `We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products, when you participate in activities on the website, or otherwise contact us.

**Personal Information Provided by You:**
- Name and Contact Data (first name, last name, email address, phone number, mailing address)
- Job-related Information (when applying through our careers page, including CV/resume)
- Business Information (company name, designation, industry)
- Communication Data (any information you provide in form submissions or correspondence)

**Information Automatically Collected:**
- Log and Usage Data (IP address, browser type, operating system, access times, pages viewed)
- Device Information (device type, unique identifiers, operating system)
- Location Data (general geographic location based on IP address)
- Cookies and Similar Technologies (session data, preferences, browsing patterns)`,
    },
    {
        id: "use-of-information",
        title: "3. How We Use Your Information",
        content: `We use the information we collect or receive for the following purposes:

- **To respond to inquiries and offer support:** We use your contact information to respond to your questions, feedback, and support requests.
- **To send marketing communications:** With your consent, we may send you emails about our products, services, and industry updates.
- **To process job applications:** Information submitted through our careers page is used to evaluate your application and contact you regarding opportunities.
- **To protect our services:** We use information to detect, prevent, and address technical issues, fraud, and security concerns.
- **To improve our website:** We analyze usage patterns to improve our website's performance, content, and user experience.
- **To comply with legal obligations:** We may process your information as required by applicable laws and regulations.`,
    },
    {
        id: "data-sharing",
        title: "4. Sharing of Information",
        content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:

- **Service Providers:** We may share your information with third-party vendors who perform services on our behalf (e.g., email delivery, analytics, cloud storage).
- **Legal Requirements:** We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, or legal proceedings.
- **Business Transfers:** In connection with any merger, sale, or transfer of company assets, your information may be transferred as part of that transaction.
- **With Your Consent:** We may share your information for any other purpose with your explicit consent.

All third-party service providers are contractually bound to protect your information and use it only for the purposes for which it was shared.`,
    },
    {
        id: "data-security",
        title: "5. Data Security",
        content: `We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. These include:

- Encryption of data in transit using SSL/TLS protocols
- Secure storage of data on protected servers
- Regular security audits and vulnerability assessments
- Access controls limiting data access to authorized personnel only
- Regular backup procedures to prevent data loss

However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`,
    },
    {
        id: "cookies",
        title: "6. Cookie Policy",
        content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data sent to your browser from a website and stored on your device.

**Types of Cookies We Use:**
- **Essential Cookies:** Required for the website to function properly. Cannot be disabled.
- **Analytics Cookies:** Help us understand how visitors interact with our website by collecting and reporting information anonymously.
- **Preference Cookies:** Remember your settings and preferences for a better experience.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.`,
    },
    {
        id: "your-rights",
        title: "7. Your Privacy Rights",
        content: `Depending on your location, you may have the following rights regarding your personal information:

- **Right to Access:** You can request a copy of the personal information we hold about you.
- **Right to Rectification:** You can request that we correct any inaccurate or incomplete information.
- **Right to Erasure:** You can request that we delete your personal information, subject to certain exceptions.
- **Right to Restriction:** You can request that we restrict the processing of your personal information.
- **Right to Data Portability:** You can request a machine-readable copy of your personal information.
- **Right to Withdraw Consent:** Where processing is based on consent, you can withdraw your consent at any time.

To exercise any of these rights, please contact us at support@jeeorigin.com. We will respond to your request within 30 days.`,
    },
    {
        id: "children",
        title: "8. Children's Privacy",
        content: `Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal information from a child under age 18 without parental consent, we will take steps to delete that information as quickly as possible. If you believe we might have any information from or about a child, please contact us.`,
    },
    {
        id: "changes",
        title: "9. Changes to This Policy",
        content: `We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to stay informed of how we are protecting your information.`,
    },
    {
        id: "contact",
        title: "10. Contact Us",
        content: `If you have questions or comments about this Privacy Policy, you may contact us at:

**Jee Origin Pvt Ltd**
Email: support@jeeorigin.com
Phone: +91 9798973570
Address: Delhi, India

We are committed to resolving any complaints about our collection or use of your personal information. We will respond to all inquiries within 30 business days.`,
    },
];

export default function PrivacyPolicyClient() {
    const [activeSection, setActiveSection] = useState("introduction");

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
                            Privacy Policy
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
                        {/* Sidebar Navigation */}
                        <div className="hidden lg:block lg:col-span-1">
                            <nav className="sticky top-28 space-y-1">
                                <p className="font-heading text-xs font-bold uppercase tracking-wider text-brand-dark-neutral/40 mb-4">
                                    On This Page
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
                        <div className="lg:col-span-3">
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
