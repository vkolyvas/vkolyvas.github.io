"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "AI / Agents", items: ["Multi-Agent Systems", "RAG", "LLM Orchestration"] },
  { category: "Infrastructure", items: ["Kubernetes", "Docker", "GitHub Actions", "GPU Deployment"] },
  { category: "Backend", items: ["Python", "TypeScript", "PostgreSQL", "Redis"] },
  { category: "Cloud", items: ["AWS", "Azure", "GCP"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-medium mb-12"
      >
        Expertise
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-medium mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm border border-[var(--border)] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}