"use client";

import Link from "next/link";
import { ScrollToContactLink } from "@/components/ui/ScrollToContactLink";
import { Github, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function pad(n: number) {
    return n.toString().padStart(2, "0");
}

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [clock, setClock] = useState("—");

    useEffect(() => {
        const tick = () => {
            const d = new Date();
            setClock(
                `${d.getUTCFullYear()}.${pad(d.getUTCMonth() + 1)}.${pad(d.getUTCDate())} — ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`
            );
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-10">
                <div className="z-50 flex items-baseline gap-2 md:justify-self-start">
                    <span className="font-serif text-[28px] font-semibold tracking-[0.01em] text-ink">peargent<span className="text-[34px] font-semibold text-accent">.</span></span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft">Labs</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-6 font-mono text-xs tracking-wide md:flex">
                    <Link href="#research" className="text-ink-soft transition-colors hover:text-ink">Research</Link>
                    <Link href="#projects" className="text-ink-soft transition-colors hover:text-ink">Projects</Link>
                    <Link
                        href="https://github.com/Peargent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-soft transition-colors hover:text-ink"
                    >
                        GitHub
                    </Link>
                </nav>

                <div className="hidden items-center gap-2 font-mono text-[11px] text-ink-soft md:flex md:justify-self-end">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_var(--color-accent-soft)]" />
                    <span>{clock}</span>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="relative z-50 p-2 text-ink md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-paper/98 backdrop-blur-xl md:hidden">
                    <Link
                        href="#research"
                        className="font-serif text-2xl text-ink transition-colors hover:text-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Research
                    </Link>
                    <Link
                        href="#projects"
                        className="font-serif text-2xl text-ink transition-colors hover:text-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="https://github.com/Peargent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-2xl text-ink transition-colors hover:text-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        GitHub
                    </Link>
                    <ScrollToContactLink
                        className="cursor-pointer font-serif text-2xl text-ink transition-colors hover:text-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get in Touch
                    </ScrollToContactLink>
                </div>
            )}
        </header>
    );
}
