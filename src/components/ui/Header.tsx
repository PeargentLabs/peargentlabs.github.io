"use client";

import Link from "next/link";
import { ScrollToContactLink } from "@/components/ui/ScrollToContactLink";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 border-b border-white/5 bg-background/50 backdrop-blur-md z-50">
            <div className="flex items-center justify-between px-6 md:px-12 py-4">
                <div className="flex items-center gap-1 z-50 relative">
                    <span className="font-instrument text-3xl font-semibold text-white">peargent<span className="text-peargent-green font-bold">.</span></span>
                    <span className="text-md uppercase tracking-widest opacity-60 mt-2 text-white">Labs</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium opacity-80">
                    <Link href="https://github.com/Peargent" target="_blank" rel="noopener noreferrer" className="text-white hover:text-peargent-green transition-colors">GitHub</Link>
                    <ScrollToContactLink className="px-4 py-2 bg-white text-black font-semibold border border-transparent hover:bg-black hover:text-peargent-green hover:border-peargent-green transition-all text-xs">Contact Us</ScrollToContactLink>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
                    <Link
                        href="https://github.com/Peargent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-white hover:text-peargent-green transition-colors font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        GitHub
                    </Link>
                    <ScrollToContactLink
                        className="text-2xl text-white hover:text-peargent-green transition-colors font-medium cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact Us
                    </ScrollToContactLink>
                </div>
            )}
        </header>
    );
}
