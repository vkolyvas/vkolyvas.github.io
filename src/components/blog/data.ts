export type PostCategory = "Certifications" | "Project Afterthoughts" | "Insights";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: PostCategory;
  tags: string[];
  githubUrl?: string;
  imageUrl?: string;
  logoUrl?: string;
  content?: string;
  whyBuilt?: string;
  whatWentWrong?: string;
  whatHelps?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "secbrain-rag-memory",
    title: "secbrain: RAG Cognitive Memory for AI Agents",
    excerpt:
      "Solving the memory problem between different LLM tools and sessions. Persistent, semantic memory across sessions with MCP-native integration.",
    date: "2026-05-10",
    category: "Project Afterthoughts",
    tags: ["RAG", "LLM", "Memory", "Agents"],
    githubUrl: "https://github.com/vkolyvas/secbrain",
    imageUrl: "https://github.com/vkolyvas/secbrain/raw/master/secbrain/assets/architecture.svg",
    logoUrl: "https://github.com/vkolyvas/secbrain/raw/master/secbrain/assets/secbrain.svg",
    whyBuilt: "Every time I switched between different AI tools — Claude Code, Cursor, different sessions — they forgot everything. I needed a persistent memory layer that survives across tools and sessions, giving AI agents institutional knowledge rather than starting from scratch each time.",
    whatWentWrong: "The initial memory taxonomy was a mess. I started with just 'note' as a type, but quickly realized decisions, patterns, architectures, and lessons need different retrieval strategies. Took several iterations to land on the current typed slot system that makes semantic search actually useful.",
    whatHelps: "MCP native integration is the real unlock. Instead of copy-pasting context, Claude Code can just query the memory directly: 'have we solved this before?' The local-first approach using Ollama + Chroma means no API costs and data never leaves the machine.",
  },
  {
    slug: "mediaflow-content-pipeline",
    title: "mediaFlow: AI Content Repurposing Pipeline",
    excerpt:
      "Transforming long-form transcripts into platform-optimized posts across LinkedIn, X, TikTok, and Reddit — in a single AI pass.",
    date: "2026-05-05",
    category: "Project Afterthoughts",
    tags: ["Content", "AI", "Automation"],
    githubUrl: "https://github.com/vkolyvas/mediaFlow",
    imageUrl: "https://raw.githubusercontent.com/vkolyvas/mediaFlow/main/assets/mediaflow_logo.svg",
    logoUrl: "https://raw.githubusercontent.com/vkolyvas/mediaFlow/main/assets/mediaflow_logo.svg",
    whyBuilt: "I was spending hours manually repurposing meeting transcripts and long-form content for different platforms. Each platform has its own style, length, and format requirements. The one-pass preprocessing approach combines cleanup, chunking, and semantic extraction in a single AI call — eliminating the multi-step toil.",
    whatWentWrong: "Template quality varied wildly initially. AIDA works great for LinkedIn but falls flat on X. I over-engineered the template selector before realizing that heuristic-based ranking (post length, platform conventions, content density) gives better results with less complexity than ML-based classification.",
    whatHelps: "Job recovery for interrupted generations means you never lose work. If the API call fails mid-generation, you pick up where you left off. Combined with the local-first SQLite architecture, it handles flaky connections gracefully without data loss.",
  },
  {
    slug: "codegraphcontext-mcp",
    title: "CodeGraphContext: Code Understanding MCP Server",
    excerpt:
      "An MCP server and CLI that indexes code into a graph database, enabling AI assistants to query relationships, call chains, and dependencies across 14 languages.",
    date: "2026-04-28",
    category: "Project Afterthoughts",
    tags: ["MCP", "Code Analysis", "Graph"],
    githubUrl: "https://github.com/vkolyvas/CodeGraphContext",
    whyBuilt: "AI coding assistants are powerful but blind to code relationships. They can't tell you 'this function is called by 47 places and changing it will break your payment flow.' CodeGraphContext builds a queryable knowledge graph of your entire codebase — callers, callees, class hierarchies, call chains — accessible to any MCP-enabled AI assistant.",
    whatWentWrong: "Supporting 14 languages meant I had to write 14 different AST parsers. The parsing logic for each language had subtle differences. Python's indentation-based scope vs JavaScript's bracket-based scope sounds trivial but caused months of edge cases. KùzuDB as the default graph store was the right call — zero config, cross-platform, fast.",
    whatHelps: "Pre-indexed bundles let you load famous repositories instantly. Want AI to understand React's internals? Download the .cgc bundle and it's indexed in seconds. The live file watching means the graph stays current as you code — no manual re-indexing.",
  },
  {
    slug: "schema-wiki-documentation",
    title: "SchemaWiki: AI-Native Feature Documentation",
    excerpt:
      "An engineering memory system that enables coding agents to document, track, and recreate features using a replay protocol. Automatically analyzes git commits and generates wiki pages.",
    date: "2026-04-20",
    category: "Project Afterthoughts",
    tags: ["Documentation", "Agents", "Git"],
    githubUrl: "https://github.com/vkolyvas/SchemaWiki",
    whyBuilt: "Documentation rot is the silent killer of engineering velocity. Docs written after implementation are immediately outdated. SchemaWiki inverts this — it captures decisions as they happen, analyzes git commits automatically, and generates wiki pages that stay current because they're derived from the actual code history.",
    whatWentWrong: "Git commit analysis at scale revealed performance issues. Large repositories with thousands of commits would take minutes to analyze. I had to implement caching layers and lazy-loading strategies. The balance between comprehensive analysis and interactive response times was harder to strike than expected.",
    whatHelps: "The replay engine is the killer feature. Instead of asking 'where is the documentation for feature X?', you ask 'how did we build feature X?' and it walks through the commit history step-by-step. For onboarding new engineers or debugging legacy systems, this is invaluable.",
  },
  {
    slug: "whisper-meet-ai",
    title: "WhisperMeetAI: Local Meeting Intelligence",
    excerpt:
      "A fully local browser application for AI-powered meeting intelligence — speech-to-text and analysis running entirely in the browser without external calls.",
    date: "2026-03-20",
    category: "Project Afterthoughts",
    tags: ["Voice", "AI", "Browser"],
    githubUrl: "https://github.com/vkolyvas/WhisperMeetAI",
    whyBuilt: "Every meeting AI tool on the market requires sending your audio to their servers. For sensitive meetings — client calls, internal strategy, anything confidential — that felt like a non-starter. WhisperMeetAI runs entirely in the browser using the Web Speech API, so audio never leaves your machine.",
    whatWentWrong: "Browser audio APIs are a minefield. Safari, Chrome, and Firefox all handle microphone access and speech recognition differently. Audio chunking for continuous transcription had timing issues that caused missed words. The emotional analysis pipeline required significant rework when Web Speech API's results proved too noisy for reliable sentiment classification.",
    whatHelps: "The Web Speech API has matured significantly. Once you get past the initial quirks — mostly around browser-specific permissions and stream handling — it provides surprisingly reliable transcription. The fully local architecture means no latency, no API costs, and complete privacy.",
  },
  {
    slug: "multi-agent-architecture",
    title: "Multi-Agent Architecture: What I've Learned",
    excerpt:
      "Notes on building multi-agent systems — agentic orchestration, retrieval-based orchestration, state management, and the differences from predefined workflows.",
    date: "2026-04-05",
    category: "Insights",
    tags: ["Agents", "Architecture", "LLM"],
    whyBuilt: "After building several multi-agent systems, I needed to consolidate learnings. The distinction between agentic orchestration (agents decide next actions) vs retrieval-based orchestration (agents are routed by a central brain) vs predefined workflows (if-this-then-that) has major implications for flexibility, reliability, and debugging.",
    whatWentWrong: "State management across agents is harder than it looks. When you have 5 agents working on related tasks, ensuring they share context without conflicting updates is non-trivial. I went through several approaches before landing on a shared state store with optimistic updates and conflict resolution.",
    whatHelps: "Clear agent role definitions reduce inter-agent communication overhead. Each agent should have a single responsibility and well-defined entry/exit points. The mental model shift from 'writing code' to 'designing behaviors' is crucial for multi-agent success.",
  },
  {
    slug: "defense-ai-early-warning",
    title: "Defense AI: Behavioral Early Warning Architecture",
    excerpt:
      "Transforming raw ISR movement breadcrumbs into simulation-ready tactical entities — weeks of manual work compressed into minutes of automated inference.",
    date: "2026-04-01",
    category: "Project Afterthoughts",
    tags: ["ISR", "Defense", "Python"],
    whyBuilt: "Intelligence, Surveillance, and Reconnaissance generates massive amounts of movement data. Turning raw breadcrumbs (radar hits, visual sightings, signal intercepts) into simulation-ready tactical entities traditionally takes weeks of manual analysis. This automates the inference pipeline, compressing that timeline to minutes.",
    whatWentWrong: "The telemetry data formats were inconsistent across sources. Each ISR platform had its own schema, its own timestamp conventions, its own coordinate reference systems. Normalizing all of this while preserving data fidelity took longer than the ML pipeline itself.",
    whatHelps: "Domain-specific feature engineering. Generic ML approaches fail on ISR data because the relevant signals are buried in timing patterns, spatial relationships, and behavioral sequences that only domain experts recognize. Working closely with defense analysts to encode their intuition as features made the difference.",
  },
  {
    slug: "ncp-ai-certification-prep",
    title: "NCP-AAI Certification: My Study Path",
    excerpt:
      "How I'm preparing for the NVIDIA-Certified Professional Agentic AI exam. Key focus areas: multi-agent interaction, distributed reasoning, scalability, and ethical safeguards.",
    date: "2026-03-15",
    category: "Certifications",
    tags: ["NCP-AAI", "NVIDIA", "Agentic AI"],
    whyBuilt: "The agentic AI space is evolving faster than documentation can track. Getting certified forces structured learning across multi-agent interaction patterns, distributed reasoning architectures, scalability considerations, and ethical safeguards — areas where ad-hoc learning tends to leave gaps.",
    whatWentWrong: "The breadth of the exam is intimidating. Agentic AI touches so many domains — orchestration frameworks, memory systems, tool use protocols, safety guardrails — that compartmentalizing study time is challenging. I kept falling into rabbit holes rather than maintaining exam-focused progress.",
    whatHelps: "Hands-on projects. Building secbrain and SchemaWiki gave me practical experience with MCP, memory systems, and agent communication patterns that no amount of passive studying could replace. The certification validates practical understanding, not just theoretical knowledge.",
  },
  {
    slug: "sap-c02-aws-solutions-architect-professional",
    title: "AWS Solutions Architect Professional: My Study Path",
    excerpt:
      "Practice questions for the AWS Certified Solutions Architect Professional (SAP-C02) exam. Focus areas: cost optimization, security, high availability, and disaster recovery.",
    date: "2026-05-16",
    category: "Certifications",
    tags: ["SAP-C02", "AWS", "Solutions Architect"],
    whyBuilt: "The SAP-C02 is one of the most challenging AWS certifications. Building this study guide helps consolidate knowledge across AWS services, architectural patterns, and best practices for enterprise-scale deployments.",
    whatWentWrong: "The exam covers a massive breadth of AWS services. Balancing study time across networking, security, cost optimization, and migration strategies while maintaining depth in each area is difficult.",
    whatHelps: "Hands-on labs and real-world architectural experience. The exam tests not just knowledge but the ability to make trade-offs between competing requirements — something that only comes from building systems.",
  },
];

export const categories: PostCategory[] = ["Certifications", "Project Afterthoughts", "Insights"];