import { cn } from "@/lib/utils";

interface ResearchCardProps {
    code: string;
    title: string;
    description: string;
    date?: string;
    status?: string;
    onOpen: () => void;
    className?: string;
}

export function ResearchCard({ code, title, description, date, status, onOpen, className }: ResearchCardProps) {
    return (
        <button
            type="button"
            onClick={onOpen}
            className={cn(
                "group flex flex-col border border-line bg-paper p-8 text-left transition-colors hover:bg-paper-dim",
                className
            )}
        >
            <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.05em] text-accent">{code}</span>
                {date && <span className="font-mono text-[10px] text-ink-soft">{date}</span>}
            </div>

            <h3 className="mb-2 font-serif text-[19px] font-medium text-ink transition-colors group-hover:text-accent">
                {title}
            </h3>

            <p className="flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                {description}
            </p>

            {status && (
                <div className="mt-6 border-t border-dashed border-line pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">{status}</span>
                </div>
            )}
        </button>
    );
}
