"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogClient, { categories, type PostCategory } from "@/components/blog/BlogClient";
import { LogoSimple } from "@/components/LogoSimple";

export default function Blog() {
  const [selected, setSelected] = useState<PostCategory | "All">("All");

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-block mb-8">
          <LogoSimple />
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-medium mb-4"
        >
          Writing
        </motion.h1>
        <p className="text-[var(--muted)] mb-8">
          Certifications, project afterthoughts, and insights from building AI systems.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelected("All")}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              selected === "All"
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "border border-[var(--border)] hover:border-[var(--foreground)]"
            }`}
          >
            All
          </button>
          {(categories as PostCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                selected === cat
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "border border-[var(--border)] hover:border-[var(--foreground)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <BlogClient selectedCategory={selected} />
      </div>
    </div>
  );
}