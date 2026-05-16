"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LogoSimple } from "@/components/LogoSimple";
import { posts } from "@/components/blog/data";

export default function Certifications() {
  const certifications = posts.filter((post) => post.category === "Certifications");

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

        <div className="space-y-6">
          {certifications.map((cert) => (
            <motion.article
              key={cert.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-[var(--border)] rounded-xl hover:border-[var(--foreground)] transition-colors group"
            >
              <Link href={`/certifications/${cert.slug}`} className="block">
                <div className="flex items-center gap-3 mb-2">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)] text-[var(--background)]">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-[var(--muted)]">{cert.date}</span>
                </div>
                <h3 className="text-lg font-medium mb-2 group-hover:underline">{cert.title}</h3>
                <p className="text-sm text-[var(--muted)]">{cert.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}