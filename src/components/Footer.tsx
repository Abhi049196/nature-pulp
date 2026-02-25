"use client";

import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Products", href: "/products" },
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
        <footer className="relative bg-brand-dark-green text-white overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-soft-green rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent-brown rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-brand-soft-green" />
                            </div>
                            <div>
                                <span className="font-heading text-xl font-bold">
                                    Nature Pulp
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed mb-2 max-w-sm">
                            Paper that grows the future.
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
                            Made from waste. Made for the planet.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                {
                                    name: "Instagram",
                                    href: "#",
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    ),
                                },
                                {
                                    name: "LinkedIn",
                                    href: "#",
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    ),
                                },
                                {
                                    name: "Twitter",
                                    href: "#",
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    ),
                                },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-soft-green/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-6 text-brand-soft-green">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 text-sm hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-6 text-brand-soft-green">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 mt-8 text-brand-soft-green">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-6 text-brand-soft-green">
                            Contact
                        </h3>
                        <div className="space-y-4">
                            <a
                                href="mailto:contact@naturepulp.com"
                                className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors group"
                            >
                                <Mail className="w-4 h-4 mt-0.5 text-brand-soft-green group-hover:text-brand-accent-brown transition-colors" />
                                contact@naturepulp.com
                            </a>
                            <a
                                href="tel:+919798973570"
                                className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors group"
                            >
                                <Phone className="w-4 h-4 mt-0.5 text-brand-soft-green group-hover:text-brand-accent-brown transition-colors" />
                                +91 9798973570
                            </a>
                            <div className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 text-brand-soft-green" />
                                Delhi, India
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs">
                        © 2025 Nature Pulp. All rights reserved. A product of Farm to Pulp
                        Private Limited.
                    </p>
                    <p className="text-white/30 text-xs">
                        Crafted with 🌱 for a sustainable future
                    </p>
                </div>
            </div>
        </footer>
    );
}
