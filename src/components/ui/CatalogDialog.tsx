"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { CatalogEntry } from "@/lib/catalog";
import { EntryLinks } from "@/components/ui/EntryLinks";
import { cn } from "@/lib/utils";

interface CatalogDialogProps {
    entry: CatalogEntry | null;
    onClose: () => void;
}

const TRANSITION_MS = 220;

export function CatalogDialog({ entry, onClose }: CatalogDialogProps) {
    const [displayEntry, setDisplayEntry] = useState<CatalogEntry | null>(null);
    const [visible, setVisible] = useState(false);

    // Mount immediately on open (so the enter transition has a "from" frame to
    // animate from), but delay unmount on close until the exit transition finishes.
    useEffect(() => {
        if (entry) {
            setDisplayEntry(entry);
            // Double rAF: the first ensures React's "closed" render actually
            // commits and paints before we flip to "open" — otherwise both
            // updates can land in the same frame and the transition never runs.
            let inner = 0;
            const outer = requestAnimationFrame(() => {
                inner = requestAnimationFrame(() => setVisible(true));
            });
            return () => {
                cancelAnimationFrame(outer);
                cancelAnimationFrame(inner);
            };
        }

        setVisible(false);
        const timeout = setTimeout(() => setDisplayEntry(null), TRANSITION_MS);
        return () => clearTimeout(timeout);
    }, [entry]);

    useEffect(() => {
        if (!displayEntry) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);

        // Locking scroll removes the scrollbar, which shifts all content
        // sideways by its width — pad the body by that same amount to cancel it out.
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const prevOverflow = document.body.style.overflow;
        const prevPaddingRight = document.body.style.paddingRight;
        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPaddingRight;
        };
    }, [displayEntry, onClose]);

    if (!displayEntry) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 p-3 backdrop-blur-sm transition-opacity sm:p-6",
                visible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="catalog-dialog-title"
                className={cn(
                    // max-h (not h) so short entries hug their content instead of
                    // leaving a tall empty well under the links.
                    "flex max-h-[94vh] w-full max-w-3xl flex-col border border-line bg-paper transition-[opacity,translate,scale] ease-out",
                    visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.97] opacity-0"
                )}
                style={{ transitionDuration: `${TRANSITION_MS}ms` }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-8 py-5 sm:px-14">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] tracking-[0.05em] text-accent">{displayEntry.code}</span>
                        {displayEntry.status && (
                            <>
                                <span aria-hidden className="h-3 w-px bg-line" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                                    {displayEntry.status}
                                </span>
                            </>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="-m-1.5 p-1.5 text-ink-soft transition-colors hover:text-ink"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-10 sm:px-14 sm:py-12">
                    <h2 id="catalog-dialog-title" className="mb-4 max-w-[24ch] font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[48px]">
                        {displayEntry.title}
                        <span className="text-accent">.</span>
                    </h2>

                    <p className="max-w-[68ch] text-[17px] leading-relaxed text-ink-soft">{displayEntry.description}</p>

                    {displayEntry.body && displayEntry.body.length > 0 && (
                        <div className="mt-6 max-w-[62ch] space-y-4 text-[15px] leading-relaxed text-ink">
                            {displayEntry.body.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    )}

                    <EntryLinks entry={displayEntry} className="mt-10" />
                </div>
            </div>
        </div>
    );
}
