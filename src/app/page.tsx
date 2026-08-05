"use client";

import { useState } from "react";
import { Header } from "@/components/ui/Header";
import { ResearchCard } from "@/components/ui/ResearchCard";
import { CatalogDialog } from "@/components/ui/CatalogDialog";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import { ScrollToContactLink } from "@/components/ui/ScrollToContactLink";
import { NeuroBackground } from "@/components/ui/NeuroBackground";
import { research, projects, type CatalogEntry } from "@/lib/catalog";

export default function Home() {
  const [openEntry, setOpenEntry] = useState<CatalogEntry | null>(null);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative mx-auto w-full max-w-[1180px] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
          {/* Vertical bleed everywhere; sideways bleed only at xl. Below that the
              section is still narrower than max-w-[1180px], so there are no gutters
              to bleed into and a negative inset would force horizontal scroll. */}
          <NeuroBackground className="pointer-events-none absolute inset-x-0 -top-[70px] z-0 h-[calc(100%+80px)] w-full md:-top-25 md:h-[calc(100%+110px)] xl:-left-10 xl:-right-10 xl:w-[calc(100%+80px)]" />

          <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-12">
            <div className="font-mono text-[11px] leading-[2.1] text-ink-soft">
              <span className="mb-2 block text-[10.5px] uppercase tracking-[0.1em] text-ink">Archive record</span>
              <div>NO. <span className="text-ink">PGL&nbsp;2601</span></div>
              <div>STATUS <span className="text-ink">Active</span></div>
              <div>FOUNDED <span className="text-ink">2026</span></div>
              <div>FIELD <span className="text-ink">AI</span></div>
              <div>LOCATION <span className="text-ink">Bangalore</span></div>
            </div>

            <div>
              <h1 className="font-serif text-[clamp(38px,5.4vw,64px)] font-medium leading-[1.06] tracking-tight text-ink">
                We study how machines come to <em className="italic text-accent">understand.</em>
              </h1>
              <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
                Building intelligent machines that perceive, reason, and act in the real world.
              </p>

              <ScrollToContactLink className="mt-8 inline-block font-mono text-xs tracking-wide text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-accent">
                Get in Touch
              </ScrollToContactLink>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-10 md:py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Research</span>
              <div>
                <h2 className="mb-2 font-serif text-[28px] font-medium text-ink">Research<span className="text-accent">.</span></h2>
                <p className="text-[15px] text-ink-soft">Exploring the frontiers of AI.</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-12">
              <div className="hidden md:block" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {research.map((entry) => (
                  <ResearchCard
                    key={entry.slug}
                    code={entry.code}
                    title={entry.title}
                    description={entry.description}
                    date={entry.date}
                    status={entry.status}
                    onOpen={() => setOpenEntry(entry)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-10 md:py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Projects</span>
              <div>
                <h2 className="mb-2 font-serif text-[28px] font-medium text-ink">Projects<span className="text-accent">.</span></h2>
                <p className="text-[15px] text-ink-soft">Tools and libraries we build and ship in the open.</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] md:gap-12">
              <div className="hidden md:block" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {projects.map((entry) => (
                  <ResearchCard
                    key={entry.slug}
                    code={entry.code}
                    title={entry.title}
                    description={entry.description}
                    date={entry.date}
                    status={entry.status}
                    onOpen={() => setOpenEntry(entry)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
        <Footer />
      </main>

      <CatalogDialog entry={openEntry} onClose={() => setOpenEntry(null)} />
    </div>
  );
}
