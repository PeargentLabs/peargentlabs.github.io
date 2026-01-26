import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full py-8 text-center border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/Peargent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </Link>
                </div>
                <p className="text-white/40 text-sm font-light">
                    © {new Date().getFullYear()} Peargent Labs. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
