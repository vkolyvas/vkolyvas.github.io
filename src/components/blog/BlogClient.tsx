"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { posts, categories, type PostCategory, type BlogPost } from "./data";
import { LogoSimple } from "@/components/LogoSimple";

export type { PostCategory };
export { posts, categories };

interface BlogClientProps {
  selectedCategory?: PostCategory | "All";
}

function BlogClient({ selectedCategory = "All" }: BlogClientProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const blogPosts = posts.filter((p) => p.category !== "Certifications");
  const filtered = selectedCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        {selectedPost ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </button>

            <article className="border border-[var(--border)] rounded-xl overflow-hidden">
              {selectedPost.imageUrl && (
                <div className="relative w-full h-48 bg-[var(--border)]">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      if (selectedPost.logoUrl) {
                        e.currentTarget.src = selectedPost.logoUrl;
                      } else {
                        e.currentTarget.style.display = 'none';
                      }
                    }}
                  />
                </div>
              )}

              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)] text-[var(--background)]">
                      {selectedPost.category}
                    </span>
                    <span className="text-xs text-[var(--muted)]">{selectedPost.date}</span>
                  </div>
                  <h2 className="text-2xl font-medium mb-2">{selectedPost.title}</h2>
                  <p className="text-[var(--muted)]">{selectedPost.excerpt}</p>
                </div>

                {selectedPost.githubUrl && (
                  <a
                    href={selectedPost.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}

                {selectedPost.content && (
                  <div className="prose prose-sm max-w-none">
                    <p className="text-base leading-relaxed">{selectedPost.content}</p>
                  </div>
                )}

                {selectedPost.whyBuilt && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">Why I Built It</h3>
                    <p className="text-sm leading-relaxed bg-[var(--border)]/30 p-4 rounded-lg">{selectedPost.whyBuilt}</p>
                  </div>
                )}

                {selectedPost.whatWentWrong && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">What Went Wrong</h3>
                    <p className="text-sm leading-relaxed bg-[var(--border)]/30 p-4 rounded-lg">{selectedPost.whatWentWrong}</p>
                  </div>
                )}

                {selectedPost.whatHelps && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">What&apos;s Helping</h3>
                    <p className="text-sm leading-relaxed bg-[var(--border)]/30 p-4 rounded-lg">{selectedPost.whatHelps}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs border border-[var(--border)] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-6"
          >
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--foreground)] transition-colors group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex gap-4 p-4">
                  {(post.logoUrl || post.imageUrl) && (
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-[var(--border)]">
                      <img
                        src={post.logoUrl || post.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)] text-[var(--background)]">
                        {post.category}
                      </span>
                      <span className="text-xs text-[var(--muted)]">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2 group-hover:underline">{post.title}</h3>
                    <p className="text-sm text-[var(--muted)] line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mt-3">
                      {post.githubUrl && (
                        <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </span>
                      )}
                      <span className="text-xs text-[var(--muted)]">Click to read more →</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { BlogClient };
export default BlogClient;