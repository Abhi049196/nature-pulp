"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import Image from "next/image";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Products",
        href: "/products",
        children: [{ name: "Pulp", href: "/products/pulp" }],
    },
    {
        name: "Insights",
        href: "#",
        children: [
            { name: "Advisory", href: "/insights/advisory" },
            { name: "Team Member", href: "/insights/team" },
            { name: "Career", href: "/insights/career" },
            { name: "Gallery", href: "/insights/gallery" },
        ],
    },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-brand-light-bg/95 backdrop-blur-lg shadow-lg shadow-brand-dark-green/5"
                : "bg-brand-light-bg/95"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">

                        <Image
                            src="/logo.svg"
                            alt="Nature Pulp Logo"
                            width={80}
                            height={10}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() =>
                                    item.children && setOpenDropdown(item.name)
                                }
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isScrolled
                                        ? "text-brand-dark-neutral hover:text-brand-dark-green hover:bg-brand-soft-green/20"
                                        : "text-brand-dark-neutral hover:text-brand-dark-green hover:bg-brand-soft-green/20"
                                        }`}
                                >
                                    {item.name}
                                    {item.children && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </Link>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {item.children && openDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl shadow-brand-dark-green/10 border border-brand-soft-green/20 overflow-hidden py-2"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2.5 text-sm text-brand-dark-neutral hover:bg-brand-soft-green/10 hover:text-brand-dark-green transition-colors duration-200 hover:pl-6"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button Desktop */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-brand-dark-green text-white rounded-full text-sm font-semibold hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-dark-green/25 hover:-translate-y-0.5"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-xl hover:bg-brand-soft-green/20 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-brand-dark-green" />
                        ) : (
                            <Menu className="w-6 h-6 text-brand-dark-green" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-brand-light-bg/98 backdrop-blur-xl border-t border-brand-soft-green/20"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.children ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    setOpenDropdown(
                                                        openDropdown === item.name ? null : item.name
                                                    )
                                                }
                                                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-brand-dark-neutral hover:bg-brand-soft-green/10 transition-colors"
                                            >
                                                <span className="font-medium">{item.name}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {openDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="ml-4 space-y-1"
                                                    >
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block px-4 py-2.5 rounded-lg text-sm text-brand-dark-neutral hover:bg-brand-soft-green/10 transition-colors"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-xl font-medium text-brand-dark-neutral hover:bg-brand-soft-green/10 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 pb-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center px-6 py-3 bg-brand-dark-green text-white rounded-full font-semibold hover:bg-brand-dark-green/90 transition-colors"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
