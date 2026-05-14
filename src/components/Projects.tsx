"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "secbrain",
    description: "RAG cognitive memory for AI agents with ChromaDB + Ollama",
    tags: ["RAG", "AI", "Python"],
    link: "https://github.com/vkolyvas/secbrain",
    stars: 2,
  },
  {
    name: "Sinesis",
    description: "Call flow automation engine with voice pipeline",
    tags: ["Voice", "Automation", "Python"],
    link: "https://github.com/vkolyvas/Sinesis",
    stars: 0,
  },
  {
    name: "Asynthesis",
    description: "Self-improving AI agency engine with evaluation",
    tags: ["Agents", "RL", "Python"],
    link: "https://github.com/vkolyvas/Asynthesis",
    stars: 0,
  },
  {
    name: "weddingwise.gr",
    description: "Wedding planning platform for Greece with JWT + SSE",
    tags: ["Production", "TypeScript", "Auth"],
    link: "https://github.com/vkolyvas/weddingwise.gr",
    stars: 0,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-medium mb-12"
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="p-6 border border-[var(--border)] rounded-xl hover:border-[var(--foreground)] transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium">{project.name}</h3>
              {project.stars > 0 && (
                <span className="text-xs text-[var(--muted)]">★ {project.stars}</span>
              )}
            </div>
            <p className="text-sm text-[var(--muted)] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs border border-[var(--border)] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}