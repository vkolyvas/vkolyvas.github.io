"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingTitle() {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from("VASILEIOS KOLYVAS").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.05,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </div>
  );
}

export function Subtitle() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      className="text-lg sm:text-xl text-[var(--muted)] mt-4 tracking-wide"
    >
      Software Engineer · Distributed Systems · Infrastructure
    </motion.p>
  );
}

export function Tagline() {
  const tags = ["Security-Focused", "Full Stack", "Production-Scale"];
  return (
    <div className="flex flex-wrap gap-2 mt-6 justify-center">
      <AnimatePresence>
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.9 + i * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="px-3 py-1 text-sm border border-[var(--border)] text-[var(--muted)] rounded-full"
          >
            {tag}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}