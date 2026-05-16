"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ncpQuestions } from "@/components/blog/ncpQuestions";
import { LogoSimple } from "@/components/LogoSimple";

export default function NcpCertificationPrep() {
  const [showAnswers, setShowAnswers] = useState(false);

  const isCorrect = (q: typeof ncpQuestions[number], idx: number) => {
    if (Array.isArray(q.correct)) {
      return q.correct.includes(idx);
    }
    return idx === q.correct;
  };

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-block mb-8">
          <LogoSimple />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)] text-[var(--background)]">
              Certifications
            </span>
            <span className="text-xs text-[var(--muted)]">2026-03-15</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-medium mb-4">
            NCP-AAI Certification: My Study Path
          </h1>

          <p className="text-[var(--muted)] mb-8">
            How I&apos;m preparing for the NVIDIA-Certified Professional Agentic AI exam.
            Key focus areas: multi-agent interaction, distributed reasoning, scalability, and ethical safeguards.
          </p>

          <div className="flex gap-2 mb-12">
            {["NCP-AAI", "NVIDIA", "Agentic AI"].map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs border border-[var(--border)] rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          {ncpQuestions.map((q) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-[var(--border)] rounded-xl"
            >
              <p className="font-medium mb-4">
                {q.id}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg text-sm ${
                      showAnswers && isCorrect(q, idx)
                        ? "bg-green-100 dark:bg-green-900/30 border border-green-500"
                        : "bg-[var(--card)]"
                    }`}
                  >
                    <span className="font-mono text-xs mr-2 opacity-50">{String.fromCharCode(65 + idx)}.</span>
                    {option}
                    {showAnswers && isCorrect(q, idx) && (
                      <span className="ml-2 text-green-600 dark:text-green-400 font-medium">✓</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className="px-6 py-3 text-sm bg-[var(--foreground)] text-[var(--background)] rounded-full hover:opacity-80 transition-opacity shadow-lg"
        >
          {showAnswers ? "Hide Answers" : "Show Answers"}
        </button>
      </div>
    </div>
  );
}