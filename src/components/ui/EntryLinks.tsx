import { ArrowUpRight, BookText, Boxes, Github, Globe, LineChart, Link2 } from "lucide-react";
import type { CatalogEntry, CatalogLink } from "@/lib/catalog";
import { cn } from "@/lib/utils";

/**
 * Hosts we link often enough to deserve their own mark. Each carries the
 * spellings we're likely to type — so "wandb", "W&B" and "Weights & Biases"
 * all land on the same icon, and nobody has to remember the canonical form.
 */
const RESOURCE_MARKS: { aliases: string[]; Icon: typeof Github }[] = [
    { aliases: ["github", "gitlab", "source", "code"], Icon: Github },
    // W&B before Hugging Face: "Weights & Biases" must not get caught by a
    // looser "weights" match meant for model hosts.
    { aliases: ["wandb", "w&b", "weights & biases", "weights and biases", "logs", "runs"], Icon: LineChart },
    { aliases: ["hugging face", "huggingface", "hf", "model", "checkpoint"], Icon: Boxes },
    { aliases: ["doc", "paper", "report", "write-up"], Icon: BookText },
    { aliases: ["website", "site", "homepage", "demo", "app"], Icon: Globe },
];

function ResourceIcon({ label, kind }: { label: string; kind?: string }) {
    const haystack = `${kind ?? ""} ${label}`.toLowerCase();
    const match = RESOURCE_MARKS.find((m) => m.aliases.some((a) => haystack.includes(a)));
    const Icon = match?.Icon ?? Link2;
    return <Icon size={13} strokeWidth={1.75} className="shrink-0" />;
}

export function EntryLinks({ entry, className }: { entry: CatalogEntry; className?: string }) {
    // The first available call to action carries the filled treatment; anything
    // else alongside it drops to the outlined variant so there's one clear target.
    // Paper leads where there is one — for research the write-up is the headline
    // act and the demo is the follow-up; projects have no paper, so primary leads.
    const actions = [entry.paperLink, entry.primaryLink].filter(Boolean) as CatalogLink[];
    const resources = entry.resources ?? [];

    if (actions.length === 0 && resources.length === 0) return null;

    return (
        <div className={cn(className)}>
            {actions.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                    {actions.map((link, i) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "group inline-flex items-center gap-2.5 border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                                i === 0
                                    ? "border-ink bg-ink text-paper hover:border-accent hover:bg-accent"
                                    : "border-line text-ink hover:border-ink hover:bg-paper-dim"
                            )}
                        >
                            {link.label}
                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.75}
                                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    ))}
                </div>
            )}

            {resources.length > 0 && (
                <div
                    className={cn(
                        "flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4",
                        actions.length > 0 && "mt-7"
                    )}
                >
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft">Resources</span>
                    {resources.map((r) => (
                        <a
                            key={r.label}
                            href={r.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:text-accent"
                        >
                            {r.kind && (
                                <span className="text-[9.5px] uppercase tracking-[0.14em] text-ink-soft/60 transition-colors group-hover:text-accent/70">
                                    {r.kind}
                                </span>
                            )}
                            <ResourceIcon label={r.label} kind={r.kind} />
                            <span className="underline decoration-line decoration-1 underline-offset-4 transition-colors group-hover:decoration-accent">
                                {r.label}
                            </span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
