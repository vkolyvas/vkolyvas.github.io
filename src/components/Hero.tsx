"use client";

import { FloatingTitle, Subtitle, Tagline } from "@/components/animations/FloatingTitle";
import { BrainAnimation } from "@/components/animations/BrainAnimation";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <FloatingTitle />
          <Subtitle />
          <Tagline />
        </div>
        <BrainAnimation />
      </div>
    </section>
  );
}