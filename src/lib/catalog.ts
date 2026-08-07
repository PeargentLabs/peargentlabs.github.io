export interface CatalogLink {
    label: string;
    href: string;
    /**
     * Resources only — what the link *is*, shown as a dim prefix before the label
     * ("Code / GitHub", "Model / Hugging Face"). Free text; keep it to one word.
     */
    kind?: string;
}

export interface CatalogEntry {
    slug: string;
    code: string;
    kind: "research" | "project";
    title: string;
    description: string;
    date?: string;
    status?: string;
    /** Longer write-up, one string per paragraph. Shown in the dialog below the one-liner. */
    body?: string[];
    /** Primary call to action — "Try Otter", "Docs", etc. */
    primaryLink?: CatalogLink;
    /** Research only — link to the paper/report. */
    paperLink?: CatalogLink;
    /** Secondary links shown under "Resources" — GitHub, Hugging Face, W&B, in display order. */
    resources?: CatalogLink[];
}

export const research: CatalogEntry[] = [
    {
        slug: "human-like-chess-ai",
        code: "PGL-R001",
        kind: "research",
        title: "Otter: A Time-Aware, History-Conditioned Human Chess AI",
        description:
            "A chess AI trained to move the way humans do rather than search the way engines do — modeling human intuition and outperforming Maia on human-move prediction.",
        paperLink: {
            label: "Read the paper (arXiv)",
            href: "https://arxiv.org/abs/2608.05206",
        },
        // Pages paths are case-sensitive and must match the repo name (Otter-Chess).
        primaryLink: { label: "Try it yourself", href: "https://peargentlabs.github.io/otter-chess/play" },
        // Rendered in array order.
        resources: [
            { kind: "Site", label: "Website", href: "https://peargentlabs.github.io/otter-chess" },
            { kind: "Code", label: "GitHub", href: "https://github.com/PeargentLabs/otter-chess" },
            { kind: "Model", label: "Hugging Face", href: "https://huggingface.co/peargentlabs/otter-chess" },
            { kind: "Logs", label: "wandb", href: "https://api.wandb.ai/links/peargent-ai-labs/3mu4f1jv" },
        ],
    },
];

export const projects: CatalogEntry[] = [
    {
        slug: "fastchess",
        code: "PGL-P001",
        kind: "project",
        title: "fastchess",
        description:
            "A high-performance Python chess library written in C — fast legal move generation, SAN/UCI parsing, FEN support, and NumPy tensor export for machine learning.",
        primaryLink: { label: "Docs", href: "https://peargentlabs.github.io/fastchess/" },
        resources: [{ label: "GitHub", href: "https://github.com/PeargentLabs/fastchess" }],
    },
];

export const catalog: CatalogEntry[] = [...research, ...projects];
