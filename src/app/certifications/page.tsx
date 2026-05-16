"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LogoSimple } from "@/components/LogoSimple";
import { ncpQuestions } from "@/components/blog/ncpQuestions";
import { useState } from "react";

export default function Certifications() {
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
        <Link href="/home" className="inline-block mb-8">
          <LogoSimple />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-medium mb-4">
            Certifications
          </h1>

          <p className="text-[var(--muted)] mb-8">
            My certification journey and exam preparation materials.
          </p>
        </motion.div>

        <div className="mb-8">
          <Link
            href="/blog/ncp-ai-certification-prep"
            className="inline-block px-4 py-2 text-sm border border-[var(--border)] rounded-full hover:border-[var(--foreground)] transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>

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