"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    Building2,
    Users2,
    Briefcase,
    Images,
    PackageOpen,
    Phone,
    Mail
} from "lucide-react";
import Image from "next/image";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Products",
        href: "#",
        children: [
            {
                name: "Pulp Solutions",
                href: "/products/pulp",
                desc: "High-quality sustainable pulp.",
                icon: <PackageOpen className="w-5 h-5" />
            },
            {
                name: "Molded Solutions",
                href: "/coming-soon",
                desc: "Premium eco-friendly molded products.",
                icon: <PackageOpen className="w-5 h-5 opacity-50" />
            },
            {
                name: "Kraft Solution",
                href: "/coming-soon",
                desc: "Strong and sustainable kraft paper.",
                icon: <PackageOpen className="w-5 h-5 opacity-50" />
            },
            {
                name: "Dippering Solution",
                href: "/coming-soon",
                desc: "Specialized dipper paper solutions.",
                icon: <PackageOpen className="w-5 h-5 opacity-50" />
            },
            {
                name: "Packaging Solution",
                href: "/coming-soon",
                desc: "Compostable packaging materials.",
                icon: <PackageOpen className="w-5 h-5 opacity-50" />
            }
        ],
    },
    {
        name: "Insights",
        href: "#",
        children: [
            {
                name: "Advisory",
                href: "/insights/advisory",
                desc: "Expert guidance & consulting.",
                icon: <Building2 className="w-5 h-5" />
            },
            {
                name: "Team Member",
                href: "/insights/team",
                desc: "Meet the people behind Jee Origin.",
                icon: <Users2 className="w-5 h-5" />
            },
            {
                name: "Career",
                href: "/insights/career",
                desc: "Join our sustainable mission.",
                icon: <Briefcase className="w-5 h-5" />
            },
            {
                name: "Gallery",
                href: "/insights/gallery",
                desc: "Explore our facilities & events.",
                icon: <Images className="w-5 h-5" />
            },
        ],
    },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [mobileForceOpen, setMobileForceOpen] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        // Execute once initially
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        const id = requestAnimationFrame(() => {
            setIsMobileMenuOpen(false);
            setMobileForceOpen(null);
        });
        return () => cancelAnimationFrame(id);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? "pt-2"
                : "pt-4"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`relative flex items-center justify-between px-6 transition-all duration-500 rounded-full border ${isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-lg shadow-brand-dark-green/5 border-brand-soft-green/20 h-[64px]"
                        : "bg-white shadow-sm border-brand-soft-green/10 h-[76px]"
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="relative z-10 flex items-center gap-2 group shrink-0 h-[36px] sm:h-[46px]" aria-label="Jee Origin homepage">
                        <Image
                            src="/logo.png"
                            alt="Jee Origin Logo"
                            width={200}
                            height={100}
                            sizes="(max-width: 640px) 150px, 200px"
                            className="object-contain w-auto h-full transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center gap-1 absolute inset-0 pointer-events-none">
                        <div className="pointer-events-auto flex items-center gap-1">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                                const hasChildren = !!item.children;
                                const isHovered = hoveredNav === item.name;

                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => setHoveredNav(item.name)}
                                        onMouseLeave={() => setHoveredNav(null)}
                                    >
                                        <Link
                                            href={hasChildren ? "#" : item.href}
                                            className={`relative flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${isActive
                                                ? "text-brand-dark-green bg-brand-soft-green/15"
                                                : "text-brand-dark-neutral/80 hover:text-brand-dark-green hover:bg-brand-soft-green/10"
                                                }`}
                                        >
                                            {item.name}
                                            {hasChildren && (
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "rotate-180 text-brand-dark-green" : "opacity-60"
                                                        }`}
                                                />
                                            )}
                                        </Link>

                                        {/* Premium Desktop Dropdown */}
                                        <AnimatePresence>
                                            {hasChildren && isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" }}
                                                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(2px)" }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[340px]"
                                                >
                                                    <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-3 overflow-hidden">
                                                        {item.children?.map((child) => (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-[#f8faf9] transition-all duration-300"
                                                            >
                                                                <div className="w-10 h-10 rounded-full bg-brand-soft-green/10 text-brand-dark-green flex items-center justify-center shrink-0 group-hover:bg-brand-dark-green group-hover:text-white transition-colors duration-300">
                                                                    {child.icon}
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-semibold text-brand-dark-green mb-0.5 group-hover:text-brand-accent-brown transition-colors">
                                                                        {child.name}
                                                                    </p>
                                                                    <p className="text-xs text-brand-dark-neutral/60 leading-relaxed">
                                                                        {child.desc}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Button Desktop */}
                    <div className="hidden lg:flex items-center z-10">
                        <Link
                            href="/contact"
                            className="px-7 py-3 bg-brand-dark-green text-white rounded-full text-sm font-semibold hover:bg-brand-dark-green/90 transition-all duration-300 shadow-[0_4px_14px_rgba(27,77,62,0.2)] hover:shadow-[0_6px_20px_rgba(27,77,62,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden relative z-50 p-2.5 rounded-full hover:bg-brand-soft-green/20 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <motion.div animate={isMobileMenuOpen ? "open" : "closed"}>
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-brand-dark-green" />
                            ) : (
                                <Menu className="w-6 h-6 text-brand-dark-green" />
                            )}
                        </motion.div>
                    </button>
                </div>
            </nav>

            {/* Premium Mobile Menu Takeover */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden fixed inset-0 z-[100] bg-[#0A2619] overflow-y-auto"
                    >
                        <div className="flex flex-col min-h-screen p-4 sm:p-6 pb-12">
                            {/* Top Header Pill */}
                            <div className="flex items-center justify-between bg-[#f8faf9] rounded-full px-6 py-3.5 sm:py-4 shadow-lg shrink-0">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} aria-label="Jee Origin homepage">
                                    <Image
                                        src="/logo.png"
                                        alt="Jee Origin Logo"
                                        width={120}
                                        height={40}
                                        sizes="120px"
                                        className="object-contain h-[32px] sm:h-[40px] w-auto"
                                    />
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-1 rounded-full text-[#0A2619] hover:bg-brand-soft-green/20 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6 sm:w-7 sm:h-7" />
                                </button>
                            </div>

                            {/* Main Navigation Card */}
                            <div className="mt-6 bg-[#f8faf9] rounded-[2rem] p-6 sm:p-8 shadow-2xl shrink-0">
                                <div className="space-y-1">
                                    {navigation.map((item) => {
                                        const isExpanded = mobileForceOpen === item.name;
                                        const hasChildren = !!item.children;

                                        return (
                                            <div key={item.name} className="overflow-hidden">
                                                {hasChildren ? (
                                                    <>
                                                        <button
                                                            onClick={() => setMobileForceOpen(isExpanded ? null : item.name)}
                                                            className="flex items-center justify-between w-full py-3.5 text-brand-dark-neutral font-medium hover:text-brand-dark-green transition-colors text-base sm:text-lg"
                                                        >
                                                            <span>{item.name}</span>
                                                            <ChevronDown
                                                                className={`w-5 h-5 text-[#0A2619] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                                                    }`}
                                                            />
                                                        </button>
                                                        <AnimatePresence>
                                                            {isExpanded && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="pb-2"
                                                                >
                                                                    <div className="pl-4 border-l-2 border-brand-soft-green/30 space-y-3 mt-2 mb-2">
                                                                        {item.children?.filter(child => child.href !== '/products').map((child) => (
                                                                            <Link
                                                                                key={child.name}
                                                                                href={child.href}
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                                className="block py-1 text-[15px] font-medium text-brand-dark-neutral/80 hover:text-brand-dark-green transition-colors"
                                                                            >
                                                                                {child.name}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block py-3.5 font-medium text-brand-dark-neutral hover:text-brand-dark-green transition-colors text-base sm:text-lg"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-center px-6 py-4 bg-[#0A2619] text-white rounded-2xl font-semibold shadow-xl shadow-brand-dark-green/20 active:scale-95 transition-all duration-300 text-base sm:text-lg"
                                    >
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Details & Footer */}
                            <div className="mt-8 px-4 flex flex-col gap-6 flex-grow justify-end">
                                <div className="space-y-4 text-white/80">
                                    <a href="tel:+919798973570" className="flex items-center gap-3 hover:text-white transition-colors">
                                        <Phone className="w-5 h-5 opacity-70" />
                                        <span className="text-sm font-medium tracking-wide">+91 97989 73570</span>
                                    </a>
                                    <a href="mailto:support@jeeorigin.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                        <Mail className="w-5 h-5 opacity-70" />
                                        <span className="text-sm font-medium tracking-wide">support@jeeorigin.com</span>
                                    </a>
                                </div>

                                <hr className="border-white/10" />

                                <div className="flex flex-col gap-3 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                                    <p className="text-center">© 2026 JEE ORIGIN PVT LTD</p>
                                    <p className="text-center text-white/60">
                                        CREATED BY{" "}
                                        <a href="https://freelancerabhi.com" target="_blank" rel="noopener noreferrer" className="text-brand-soft-green hover:text-white transition-colors">
                                            FREELANCER ABHI
                                        </a>
                                    </p>
                                    <div className="flex justify-center flex-wrap gap-4 md:gap-6 mt-2">
                                        <Link href="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors text-center">Privacy Policy</Link>
                                        <Link href="/terms-conditions" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors text-center">Terms & Conditions</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
