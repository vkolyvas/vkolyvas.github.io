export type PostCategory = "Certifications" | "Project Afterthoughts" | "Insights";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: PostCategory;
  tags: string[];
}

export const posts: BlogPost[] = [
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

export const categories: PostCategory[] = ["Certifications", "Project Afterthoughts", "Insights"];