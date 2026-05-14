"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Building", value: "8+" },
  { label: "Repositories", value: "35+" },
  { label: "AI Projects", value: "6+" },
  { label: "Certifications", value: "3" },
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-3xl">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-medium">{stat.value}</div>
          <div className="text-sm text-[var(--muted)] mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}