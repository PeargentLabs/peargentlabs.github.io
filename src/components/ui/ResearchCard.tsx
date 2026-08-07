import { cn } from "@/lib/utils";

interface ResearchCardProps {
    code: string;
    title: string;
    authors?: string;
    description: string;
    date?: string;
    status?: string;
    onOpen: () => void;
    className?: string;
}

export function ResearchCard({ code, title, authors, description, date, status, onOpen, className }: ResearchCardProps) {
    return (
        <button
            type="button"
            onClick={onOpen}
            className={cn(
                "group flex cursor-pointer flex-col border border-line bg-paper p-8 text-left transition-colors hover:bg-paper-dim",
                className
            )}
        >
            <h3 className="line-clamp-2 font-serif text-[19px] font-medium leading-snug text-ink transition-colors group-hover:text-accent">
                {title}
            </h3>

            {authors && <p className="mt-1.5 mb-2 text-[13px] text-ink-soft">{authors}</p>}

            <p className={cn("line-clamp-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft", !authors && "mt-2")}>
                {description}
            </p>

            <div className="mt-6 flex items-center gap-2 border-t border-dashed border-line pt-4">
                <span className="font-mono text-[11px] tracking-[0.05em] text-accent">{code}</span>
                {date && (
                    <>
                        <span aria-hidden className="h-3 w-px bg-line" />
                        <span className="font-mono text-[10px] text-ink-soft">{date}</span>
                    </>
                )}
                {status && (
                    <>
                        <span aria-hidden className="h-3 w-px bg-line" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">{status}</span>
                    </>
                )}
            </div>
        </button>
    );
}
