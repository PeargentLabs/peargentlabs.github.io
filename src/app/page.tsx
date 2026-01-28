import Link from "next/link";
import { ArrowRight, Github, Terminal } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { ResearchCard } from "@/components/ui/ResearchCard";
import { Particles } from "@/components/ui/particles";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import { ScrollToContactLink } from "@/components/ui/ScrollToContactLink";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Global Particles Background - Fixed to viewport */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          className="absolute inset-0 w-full h-full"
          quantity={50}
          ease={100}
          color="#ffffff"
          refresh
        />
      </div>

      {/* Content wrapper with z-index to sit above particles */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="relative flex flex-col justify-center min-h-screen px-12 md:px-60  border-white/5 overflow-hidden">
            {/* Subtle static gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-background to-background pointer-events-none"></div>

            <div className="relative max-w-5xl w-full text-left space-y-6">
              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
                Advancing Artificial Intelligence <span className="text-white/20 font-light mx-2">|</span> <span className="text-white/60">Research</span><span className="text-peargent-green font-bold">.</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-light">
                Fundamental research in neural architectures, optimization algorithms, and the theoretical underpinnings of synthetic cognition.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <ScrollToContactLink className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold border border-transparent hover:bg-black hover:text-peargent-green hover:border-peargent-green transition-all text-sm ">
                  Contact Us
                </ScrollToContactLink>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-24 px-12 md:px-60 w-full min-h-screen flex items-center border-white/5">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white mb-8">About Us<span className="text-peargent-green font-bold">.</span></h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                <p>
                  Peargent Labs is a frontier research organization dedicated to advancing the theoretical and practical foundations of synthetic intelligence. We operate at the intersection of cognitive science, neural architecture design, and autonomous systems.
                </p>
                <p>
                  Our mission is to move beyond statistical correlation towards genuine reasoning and understanding. By deconstructing the core principles of intelligence, we aim to build agents that are not only capable but interpretable, robust, and aligned with human intent.
                </p>
              </div>
            </div>
          </section>

          {/* Research / Experiments Section */}
          <section className="py-24 px-12 md:px-60 w-full min-h-screen flex flex-col justify-center">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Research & Experiments<span className="text-peargent-green font-bold">.</span></h2>
                <p className="text-white/70">Exploring the frontiers of agentic systems.</p>
              </div>
              {/* <Link href="#" className="hidden sm:flex items-center gap-2 text-sm text-peargent-green hover:underline decoration-peargent-green/50 underline-offset-4 transition-all">
                View all experiments <ArrowRight size={14} />
              </Link> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResearchCard
                title="Sparse Activation Transformers"
                description="Optimizing computational efficiency through conditional computation and dynamic routing in large language models."
                date="Oct 12, 2025"
                tags={['Architecture', 'Efficiency']}
                href="#"
              />
              <ResearchCard
                title="Causal Representation Learning"
                description="Moving beyond correlation to discover causal structures in high-dimensional data for robust generalization."
                date="Oct 08, 2025"
                tags={['Causality', 'Theory']}
                href="#"
              />
              <ResearchCard
                title="Neuro-Symbolic Integration"
                description="Bridging the gap between neural networks and symbolic logic to enhance reasoning capabilities and interpretability."
                date="Sep 24, 2025"
                tags={['Reasoning', 'Hybrid']}
                href="#"
              />
            </div>
          </section>


          {/* Contact Section */}
          <Contact />
          <Footer />

        </main>
      </div>
    </div>
  );
}
