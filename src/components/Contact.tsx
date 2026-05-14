"use client";

import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/vkolyvas" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:contact@vkolyvas.com" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Let&apos;s Build</h2>
        <p className="text-[var(--muted)] mb-8">
          Building production AI systems, agentic workflows, and scalable infrastructure.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}