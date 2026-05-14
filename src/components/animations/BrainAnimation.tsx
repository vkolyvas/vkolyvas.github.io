"use client";

import { motion } from "framer-motion";

export function BrainAnimation() {
  return (
    <div className="flex items-center justify-center p-8">
      <svg
        viewBox="0 0 200 200"
        className="w-48 h-48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Neural network nodes */}
        {[
          { cx: 100, cy: 40, delay: 0 },
          { cx: 60, cy: 70, delay: 0.1 },
          { cx: 140, cy: 70, delay: 0.2 },
          { cx: 40, cy: 110, delay: 0.3 },
          { cx: 100, cy: 100, delay: 0.4 },
          { cx: 160, cy: 110, delay: 0.5 },
          { cx: 60, cy: 150, delay: 0.6 },
          { cx: 140, cy: 150, delay: 0.7 },
          { cx: 100, cy: 170, delay: 0.8 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              delay: node.delay,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="fill-[var(--foreground)]"
          />
        ))}

        {/* Neural connections */}
        {[
          [100, 40, 60, 70],
          [100, 40, 140, 70],
          [60, 70, 40, 110],
          [60, 70, 100, 100],
          [140, 70, 100, 100],
          [140, 70, 160, 110],
          [40, 110, 100, 100],
          [160, 110, 100, 100],
          [40, 110, 60, 150],
          [100, 100, 60, 150],
          [100, 100, 140, 150],
          [160, 110, 140, 150],
          [60, 150, 100, 170],
          [140, 150, 100, 170],
          [60, 150, 140, 150],
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{
              delay: i * 0.05,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}