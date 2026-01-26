import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
    title: string;
    description: string;
    date: string;
    tags: string[];
    href: string;
    className?: string;
}

export function ResearchCard({ title, description, date, tags, href, className }: ResearchCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group flex flex-col h-full bg-[#050505] border border-white/10 hover:border-peargent-green/30 transition-all duration-500 overflow-hidden",
                className
            )}
        >
            {/* Schematic / Visual Placeholder Area */}
            <div className="h-48 w-full border-b border-white/10 relative overflow-hidden bg-white/[0.01]">
                {/* Grid lines effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

                {/* Subtle green glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-peargent-green via-transparent to-transparent"></div>
            </div>

            <div className="flex flex-col flex-1 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-peargent-green transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed mb-8 flex-1">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-dashed border-white/5">
                    <div className="flex gap-2">
                        {tags.map((tag, i) => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider text-white/30">
                                {tag}{i < tags.length - 1 && <span className="mx-1 opacity-20">/</span>}
                            </span>
                        ))}
                    </div>

                    <span className="text-[10px] text-white/20 font-mono group-hover:text-peargent-green/70 transition-colors">
                        {date.split(',')[1]?.trim() || 'REF'}
                    </span>
                </div>
            </div>
        </Link>
    );
}
