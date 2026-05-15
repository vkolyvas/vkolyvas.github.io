"use client";

import { motion } from "framer-motion";

export type PostCategory = "Certifications" | "Project Afterthoughts" | "Insights";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: PostCategory;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    slug: "secbrain-rag-memory",
    title: "secbrain: RAG Cognitive Memory for AI Agents",
    excerpt:
      "Why I built secbrain — solving the memory problem between different LLM tools and sessions. Persistent, semantic memory across sessions with MCP-native integration.",
    date: "2026-05-10",
    category: "Project Afterthoughts",
    tags: ["RAG", "LLM", "Memory", "Agents"],
  },
  {
    slug: "schema-wiki-documentation",
    title: "SchemaWiki: AI-Native Feature Documentation",
    excerpt:
      "An engineering memory system that enables coding agents to document, track, and recreate features using a replay protocol. Automatically analyzes git commits and generates wiki pages.",
    date: "2026-04-20",
    category: "Project Afterthoughts",
    tags: ["Documentation", "Agents", "Git"],
  },
  {
    slug: "ncp-ai-certification-prep",
    title: "NCP-AAI Certification: My Study Path",
    excerpt:
      "How I'm preparing for the NVIDIA-Certified Professional Agentic AI exam. Key focus areas: multi-agent interaction, distributed reasoning, scalability, and ethical safeguards.",
    date: "2026-03-15",
    category: "Certifications",
    tags: ["NCP-AAI", "NVIDIA", "Agentic AI"],
  },
  {
    slug: "multi-agent-architecture",
    title: "Multi-Agent Architecture: What I've Learned",
    excerpt:
      "Notes on building multi-agent systems — agentic orchestration, retrieval-based orchestration, state management, and the differences from predefined workflows.",
    date: "2026-04-05",
    category: "Insights",
    tags: ["Agents", "Architecture", "LLM"],
  },
  {
    slug: "defense-ai-early-warning",
    title: "Defense AI: Behavioral Early Warning Architecture",
    excerpt:
      "Transforming raw ISR movement breadcrumbs into simulation-ready tactical entities — weeks of manual work compressed into minutes of automated inference.",
    date: "2026-04-01",
    category: "Project Afterthoughts",
    tags: ["ISR", "Defense", "Python"],
  },
  {
    slug: "whisper-meet-ai",
    title: "WhisperMeetAI: Local Meeting Intelligence",
    excerpt:
      "A fully local browser application for AI-powered meeting intelligence — speech-to-text and analysis running entirely in the browser without external calls.",
    date: "2026-03-20",
    category: "Project Afterthoughts",
    tags: ["Voice", "AI", "Browser"],
  },
];

const categories: PostCategory[] = ["Certifications", "Project Afterthoughts", "Insights"];

interface BlogClientProps {
  selectedCategory?: PostCategory | "All";
}

function BlogClient({ selectedCategory = "All" }: BlogClientProps) {
  const filtered = selectedCategory === "All" ? posts : posts.filter((p) => p.category === selectedCategory);

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
        </motion.article>
      ))}
    </div>
  );
}

export { BlogClient, posts, categories };
export default BlogClient;