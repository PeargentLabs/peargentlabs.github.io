import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-4 px-6 py-10 md:flex-row md:justify-between md:px-10">
                <span className="font-mono text-[11px] text-ink-soft">
                    © {new Date().getFullYear()} Peargent Labs
                </span>
                <Link
                    href="https://github.com/Peargent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft transition-colors hover:text-ink"
                    aria-label="Peargent Labs on GitHub"
                >
                    <Github size={18} />
                </Link>
            </div>
        </footer>
    );
}
