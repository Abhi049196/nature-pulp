"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, Linkedin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Pulp Solutions", href: "/products/pulp" },
        { name: "Molded Solutions", href: "/coming-soon" },
        { name: "Kraft Solution", href: "/coming-soon" },
        { name: "Dippering Solution", href: "/coming-soon" },
        { name: "Packaging Solution", href: "/coming-soon" },
        { name: "Advisory", href: "/insights/advisory" },
        { name: "Contact Us", href: "/contact" },
    ],
    resources: [
        { name: "Career", href: "/insights/career" },
        { name: "Gallery", href: "/insights/gallery" },
        { name: "Our Team", href: "/insights/team" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-conditions" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0A2619] text-[#E8EDEA] pt-16 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <Image
                                src="/footer-logo.png"
                                alt="Jee Origin Logo"
                                width={100}
                                height={40}
                                className="brightness-0 invert opacity-80"
                            />
                        </Link>
                        <h2 className="text-2xl md:text-3xl font-semibold leading-snug max-w-md tracking-tight">
                            Crafting a <span className="text-brand-soft-green">greener</span> narrative for the paper industry.
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Direct Inquiry</p>
                        <a href="mailto:support@jeeorigin.com" className="text-xl font-medium hover:text-brand-soft-green transition-colors block">
                            support@jeeorigin.com
                        </a>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://www.linkedin.com/company/nature-pulp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-brand-soft-green transition-all duration-300"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>

                            <a
                                href="https://www.instagram.com/jeeorigin?igsh=MWs4OWhyOHd1czloNg%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-brand-soft-green transition-all duration-300"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>

                            <a
                                href="https://www.facebook.com/share/18BUifjPXL/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-brand-soft-green transition-all duration-300"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>

                            <a
                                href="https://x.com/JeeOrigin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-brand-soft-green transition-all duration-300"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>

                            <a
                                href="https://youtube.com/@jeeorigin?si=Hff9hzqBdbh_Gpoa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-brand-soft-green transition-all duration-300"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Navigation Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10">
                    <div>
                        <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-soft-green font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-soft-green font-semibold mb-6">Insights</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-soft-green font-semibold mb-6">Contact</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Registered Address</p>
                                    <p className="text-xs text-white/70 leading-relaxed">
                                        H. No. 1198, Sector 16,<br />
                                        Near Z Park, Haryana – 121002, India
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Factory Address</p>
                                    <p className="text-xs text-white/70 leading-relaxed">
                                        Dharam Nagar, Gali No. 1,<br />
                                        Near Opposite Jain Mandir,<br />
                                        Palwal, Haryana – 121102, India
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Get In Touch</p>
                                <div className="space-y-2">
                                    <p className="text-xs text-white/60 flex items-center gap-2">
                                        <Phone className="w-3.5 h-3.5 text-brand-soft-green/60" /> +91 97989 73570
                                    </p>
                                    <p className="text-xs text-white/60 flex items-center gap-2">
                                        <Mail className="w-3.5 h-3.5 text-brand-soft-green/60" /> support@jeeorigin.com
                                    </p>
                                </div>
                                <p className="text-xs text-white/40 italic">Available Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] text-white/20 uppercase tracking-widest font-bold">
                        <span>© 2026 Jee Origin Pvt Ltd</span>
                        <span className="w-1 h-1 bg-white/10 rounded-full hidden sm:block" />
                        <span className="w-full sm:w-auto text-center sm:text-left mt-2 sm:mt-0">
                            Created by{" "}
                            <a
                                href="https://freelancerabhi.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-soft-green hover:text-white transition-colors"
                            >
                                Freelancer Abhi
                            </a>
                        </span>
                    </div>

                    <div className="flex gap-8">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-widest font-bold">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}