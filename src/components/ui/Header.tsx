import Link from "next/link";
import { ScrollToContactLink } from "@/components/ui/ScrollToContactLink";
import { Github } from "lucide-react";


export function Header() {
    return (
        <header className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-1">
                <span className="font-instrument text-3xl font-semibold text-white">peargent<span className="text-peargent-green font-bold">.</span></span>
                <span className="text-md uppercase tracking-widest opacity-60 mt-2 text-white">Labs</span>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium opacity-80">
                <Link href="https://github.com/Peargent" target="_blank" rel="noopener noreferrer" className="text-white hover:text-peargent-green transition-colors">GitHub</Link>
                <ScrollToContactLink className="px-4 py-2 bg-white text-black font-semibold border border-transparent hover:bg-black hover:text-peargent-green hover:border-peargent-green transition-all text-xs">Contact Us</ScrollToContactLink>
            </div>
        </header>
    );
}
