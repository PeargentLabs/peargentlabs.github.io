import Link from "next/link";
import Image from "next/image";
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
                Advancing Robotics & AI<br />
                <span className="text-white/60">Research</span><span className="text-peargent-green font-bold">.</span>
              </h1>
              <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-light">
                Building intelligent machines that perceive, reason, and act in the real world.
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
                  Peargent Labs is a research collective of engineers, scientists, and builders working at the intersection of robotics and AI. Founded with the belief that intelligence must be grounded in the physical world, we focus on creating systems that go beyond simulation.
                </p>
                <p>
                  Our work spans autonomous navigation, manipulation, reinforcement learning, and multimodal perception. We publish openly, build in public, and collaborate across disciplines to accelerate the path from research to real-world impact.
                </p>
              </div>
            </div>
          </section>

          {/* Sponsors Section */}
          <section className="py-24 px-12 md:px-60 w-full min-h-screen flex items-center border-white/5">
            <div className="w-full max-w-5xl">
              <h2 className="text-3xl font-bold text-white mb-4">Sponsors<span className="text-peargent-green font-bold">.</span></h2>
              <p className="text-white/50 text-lg font-light mb-16">Organizations backing our research and infrastructure.</p>

              <div className="flex flex-wrap items-center gap-14">
                <Image src="/sponsors/Microsoft_logo.png" alt="Microsoft" width={150} height={32} className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity" />
                <Image src="/sponsors/Modal_logo.png" alt="Modal" width={120} height={28} className="h-7 w-auto opacity-50 hover:opacity-80 transition-opacity" />
                <Image src="/sponsors/Cohere_Logo.png" alt="Cohere" width={120} height={28} className="h-7 w-auto opacity-50 hover:opacity-80 transition-opacity" />
                <Image src="/sponsors/Greptile_logo.svg" alt="Greptile" width={160} height={40} className="h-10 w-auto opacity-50 hover:opacity-80 transition-opacity" />
              </div>
            </div>
          </section>

          {/* Research / Experiments Section */}
          <section className="py-24 px-12 md:px-60 w-full min-h-screen flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Research & Experiments<span className="text-peargent-green font-bold">.</span></h2>
              <p className="text-white/70">Exploring the frontiers of robotics and AI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <ResearchCard
                title="Coming Soon"
                description="A new research project is in the works. Stay tuned for updates."
                date=""
                tags={[]}
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
