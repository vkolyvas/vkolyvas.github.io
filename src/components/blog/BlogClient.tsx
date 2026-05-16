"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts, categories, type PostCategory } from "./data";

export type { PostCategory };
export { posts, categories };

interface BlogClientProps {
  selectedCategory?: PostCategory | "All";
}

function BlogClient({ selectedCategory = "All" }: BlogClientProps) {
  const blogPosts = posts.filter((p) => p.category !== "Certifications");
  const filtered = selectedCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {filtered.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          className="p-6 border border-[var(--border)] rounded-xl hover:border-[var(--foreground)] transition-colors group"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)] text-[var(--background)]">
                {post.category}
              </span>
              <span className="text-xs text-[var(--muted)]">{post.date}</span>
            </div>
            <h3 className="text-lg font-medium mb-2 group-hover:underline">{post.title}</h3>
            <p className="text-sm text-[var(--muted)] mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs border border-[var(--border)] rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}

export { BlogClient };
export default BlogClient;