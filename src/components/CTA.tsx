"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
      >
        View Projects
      </motion.a>
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="px-6 py-3 border border-[var(--border)] rounded-full text-sm font-medium hover:bg-[var(--accent)] transition-colors"
      >
        Get in Touch
      </motion.a>
      <motion.a
        href="/blog/"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="px-6 py-3 border border-[var(--border)] rounded-full text-sm font-medium hover:bg-[var(--accent)] transition-colors"
      >
        Blog
      </motion.a>
      <motion.a
        href="/certifications"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="px-6 py-3 border border-[var(--border)] rounded-full text-sm font-medium hover:bg-[var(--accent)] transition-colors"
      >
        Certifications
      </motion.a>
    </div>
  );
}