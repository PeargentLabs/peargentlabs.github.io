import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { EntryLinks } from "@/components/ui/EntryLinks";
import { catalog } from "@/lib/catalog";

export function generateStaticParams() {
    return catalog.map((entry) => ({ slug: entry.slug }));
}

export default async function CatalogEntryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const entry = catalog.find((e) => e.slug === slug);

    if (!entry) notFound();

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="mx-auto max-w-[1180px] px-6 py-20 md:px-10 md:py-24">
                    <Link href="/" className="mb-10 inline-block font-mono text-xs text-ink-soft transition-colors hover:text-ink">
                        &larr; Back
                    </Link>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-12">
                        <div className="font-mono text-[11px] leading-[2.1] text-ink-soft">
                            <span className="mb-2 block text-[10.5px] uppercase tracking-[0.1em] text-ink">
                                {entry.kind}
                            </span>
                            <div>NO. <span className="text-ink">{entry.code}</span></div>
                            {entry.date && <div>DATE <span className="text-ink">{entry.date}</span></div>}
                            {entry.status && <div>STATUS <span className="text-ink">{entry.status}</span></div>}
                        </div>

                        <div>
                            <h1 className="mb-6 font-serif text-4xl font-medium text-ink">
                                {entry.title}<span className="text-accent">.</span>
                            </h1>
                            <p className="mb-6 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
                                {entry.description}
                            </p>

                            <EntryLinks entry={entry} className="max-w-[62ch]" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
