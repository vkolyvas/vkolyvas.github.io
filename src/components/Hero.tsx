"use client";

import { FloatingTitle, Subtitle, Tagline } from "@/components/animations/FloatingTitle";
import { BrainAnimation } from "@/components/animations/BrainAnimation";
import { CTA } from "@/components/CTA";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export function Hero() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <FloatingTitle />
            <Subtitle />
            <Tagline />
            <CTA />
          </div>
          <BrainAnimation />
        </div>
        <Stats />
      </section>
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}