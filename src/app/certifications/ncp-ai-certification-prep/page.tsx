"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ncpQuestions } from "@/components/blog/ncpQuestions";
import { useState } from "react";

// ─── Cheat Sheet Data ───────────────────────────────────────────────────────

type Section =
  | { type: "text"; title: string; content: string }
  | { type: "table"; title: string; headers: string[]; rows: string[][] }
  | { type: "code"; title: string; language: string; content: string };

type CheatSheetDomain = {
  domain: string;
  sections: Section[];
};

const cheatsheetData: CheatSheetDomain[] = [
  {
    domain: "Domain 1: Agent Architecture and Design (15%)",
    sections: [
      {
        type: "table",
        title: "Agent Architecture Patterns",
        headers: ["Pattern", "How It Works", "Best For", "Trade-offs"],
        rows: [
          ["ReAct", "Interleaved Reasoning + Action loops", "Dynamic tasks with tools", "Flexible but can loop; higher latency"],
          ["Plan-and-Execute", "Create full plan → execute steps", "Well-defined multi-step tasks", "Efficient but brittle to plan changes"],
          ["Reflexion", "Execute → Self-evaluate → Retry", "Accuracy-critical tasks", "Higher accuracy but 2-3x more LLM calls"],
          ["LATS", "Monte Carlo Tree Search for planning", "Complex optimization tasks", "Best accuracy, highest compute cost"],
          ["Tool-Only", "Direct tool routing, minimal reasoning", "Simple tool dispatch", "Fast but limited reasoning capability"],
        ],
      },
      {
        type: "text",
        title: "When to Use Which",
        content: `Task is dynamic with unknown steps? → ReAct
Task is well-defined and sequential? → Plan-and-Execute
Accuracy is critical, latency flexible? → Reflexion
Multiple valid solution paths exist? → LATS
Simple tool routing, no reasoning? → Tool-Only`,
      },
      {
        type: "table",
        title: "Single-Agent vs Multi-Agent",
        headers: ["Factor", "Single Agent", "Multi-Agent"],
        rows: [
          ["Use when", "Task is linear, <5 tools", "Task has distinct sub-domains"],
          ["Complexity", "Low", "High (coordination overhead)"],
          ["Latency", "Lower", "Higher (message passing)"],
          ["Scalability", "Limited", "Better (parallel execution)"],
          ["Debugging", "Easier", "Harder (distributed state)"],
        ],
      },
      {
        type: "text",
        title: "Multi-Agent Orchestration Patterns",
        content: `Sequential:    Agent A → Agent B → Agent C  (pipeline)
Parallel:      Agent A ↗ Agent B ↗ Agent C  (fan-out, merge)
Hierarchical: Orchestrator → [Worker A, Worker B, Worker C]
Collaborative: Agents negotiate and share state`,
      },
      {
        type: "table",
        title: "Agent Communication Protocols",
        headers: ["Protocol", "Pattern", "Use Case"],
        rows: [
          ["Direct messaging", "Agent-to-agent", "Small teams, low latency"],
          ["Publish-subscribe", "Event-driven", "Loose coupling, scalability"],
          ["Shared state", "Blackboard pattern", "Collaborative problem-solving"],
          ["A2A Protocol", "Cross-platform", "Interoperability between frameworks"],
        ],
      },
    ],
  },
  {
    domain: "Domain 2: Agent Development (15%)",
    sections: [
      {
        type: "code",
        title: "OpenAI-Compatible Function Calling",
        language: "python",
        content: `tools = [{
    "type": "function",
    "function": {
        "name": "search_database",
        "description": "Search product database by query",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Search query"},
                "limit": {"type": "integer", "default": 5}
            },
            "required": ["query"]
        }
    }
}]

# Always validate tool parameters before execution
def safe_tool_call(tool_name, params):
    validated = validate_params(tool_name, params)
    try:
        result = execute_tool(tool_name, validated)
        return result
    except ToolError as e:
        return fallback_response(tool_name, e)`,
      },
      {
        type: "table",
        title: "Error Handling Patterns",
        headers: ["Pattern", "When to Use", "Implementation"],
        rows: [
          ["Retry with backoff", "Transient failures (API timeouts)", "Exponential: 1s → 2s → 4s → 8s, max 3 retries"],
          ["Circuit breaker", "Repeated failures from same tool", "Open after 3 failures, half-open after 30s"],
          ["Fallback", "Primary tool unavailable", "Switch to alternative tool or graceful message"],
          ["Graceful degradation", "Non-critical tool failure", "Continue with partial information"],
        ],
      },
      {
        type: "code",
        title: "Circuit Breaker Pattern",
        language: "python",
        content: `class CircuitBreaker:
    def __init__(self, failure_threshold=3, reset_timeout=30):
        self.failures = 0
        self.threshold = failure_threshold
        self.state = "closed"

    def call(self, func, *args):
        if self.state == "open":
            if time_since_open > self.reset_timeout:
                self.state = "half-open"
            else:
                return fallback()

        try:
            result = func(*args)
            self.failures = 0
            self.state = "closed"
            return result
        except Exception:
            self.failures += 1
            if self.failures >= self.threshold:
                self.state = "open"
            raise`,
      },
      {
        type: "table",
        title: "Agent Frameworks Comparison",
        headers: ["Framework", "Best For", "Multi-Agent", "Key Feature"],
        rows: [
          ["LangChain", "General agents", "Via LangGraph", "Largest ecosystem, most tools"],
          ["LlamaIndex", "RAG-heavy agents", "Limited", "Best RAG integration"],
          ["AutoGen", "Multi-agent chat", "Native", "Conversational agent teams"],
          ["CrewAI", "Role-based teams", "Native", "Role + goal + backstory agents"],
          ["LangGraph", "Stateful workflows", "Native", "Graph-based agent orchestration"],
        ],
      },
    ],
  },
  {
    domain: "Domain 3: Evaluation and Tuning (13%)",
    sections: [
      {
        type: "table",
        title: "Agent Evaluation Metrics",
        headers: ["Metric", "What It Measures", "Target Range"],
        rows: [
          ["Task completion rate", "% of tasks fully completed", ">85% for production"],
          ["Reasoning accuracy", "Correctness of intermediate steps", ">90% for critical tasks"],
          ["End-to-end latency", "Total time from input to output", "<5s interactive, <30s async"],
          ["Cost per interaction", "Total LLM + tool API costs", "Monitor trend, set budget alerts"],
          ["Tool selection accuracy", "% of correct tool choices", ">90%"],
          ["Hallucination rate", "% of unsupported claims", "<5% with RAG"],
          ["User satisfaction (CSAT)", "User-reported quality", ">4.0/5.0"],
        ],
      },
      {
        type: "text",
        title: "A/B Testing for Agents",
        content: `1. Define hypothesis: "ReAct with CoT outperforms vanilla ReAct"
2. Split traffic: 50/50 random assignment
3. Measure: Task completion, latency, cost, user satisfaction
4. Duration: Minimum 1000 interactions per variant
5. Statistical significance: p < 0.05
6. Decision: Roll out winner, document learnings`,
      },
      {
        type: "table",
        title: "Fine-Tuning Decision Guide",
        headers: ["Scenario", "Approach", "Why"],
        rows: [
          ["Agent needs domain vocabulary", "LoRA fine-tune", "Adapts to terminology without full retrain"],
          ["Agent formatting is inconsistent", "Prompt engineering first", "Cheaper, faster iteration"],
          ["Tool selection is poor", "Fine-tune on tool-use dataset", "Improves function calling accuracy"],
          ["General quality is low", "Upgrade base model", "Fine-tuning can't fix weak foundations"],
        ],
      },
    ],
  },
  {
    domain: "Domain 4: Deployment and Scaling (13%)",
    sections: [
      {
        type: "code",
        title: "Containerized Agent Deployment",
        language: "yaml",
        content: `services:
  agent-api:
    image: agent-service:latest
    deploy:
      replicas: 3
      resources:
        reservations:
          devices:
            - capabilities: [gpu]
    environment:
      - MODEL_ENDPOINT=http://nim-server:8000
      - VECTOR_DB_URL=http://chromadb:8000

  nim-server:
    image: nvcr.io/nim/meta/llama-3-8b-instruct:latest
    deploy:
      resources:
        reservations:
          devices:
            - capabilities: [gpu]
    ports:
      - "8000:8000"`,
      },
      {
        type: "table",
        title: "Scaling Strategies",
        headers: ["Strategy", "When to Use", "Implementation"],
        rows: [
          ["Horizontal", "More concurrent users", "Add agent replicas behind load balancer"],
          ["Vertical", "Larger models, more memory", "Upgrade GPU (A100 → H100)"],
          ["Auto-scaling", "Variable load patterns", "Scale on queue depth or latency metrics"],
          ["GPU sharing", "Multiple small models", "Triton multi-model serving"],
        ],
      },
      {
        type: "table",
        title: "Deployment Strategies",
        headers: ["Strategy", "Risk", "Rollback", "Use When"],
        rows: [
          ["Blue/Green", "Low", "Instant switch", "Major agent updates, new models"],
          ["Canary", "Very Low", "Fast", "Gradual rollout, measure impact"],
          ["Rolling", "Medium", "Slow", "Minor updates, stateless services"],
          ["Shadow", "None", "N/A", "Testing new agent in parallel"],
        ],
      },
    ],
  },
  {
    domain: "Domain 5: Cognition, Planning, and Memory (10%)",
    sections: [
      {
        type: "table",
        title: "Reasoning Frameworks",
        headers: ["Framework", "Mechanism", "Best For", "Latency"],
        rows: [
          ["Chain-of-Thought (CoT)", "Step-by-step reasoning", "Linear problems, math", "1.5-2x base"],
          ["Tree-of-Thoughts (ToT)", "Branching exploration", "Creative/strategic tasks", "3-5x base"],
          ["ReAct Reasoning", "Thought → Action → Observation", "Tool-using agents", "2-3x base"],
          ["MCTS", "Monte Carlo search over plans", "Optimization problems", "5-10x base"],
          ["Self-Consistency", "Multiple CoT, majority vote", "High-stakes decisions", "3-5x base"],
        ],
      },
      {
        type: "text",
        title: "Reasoning Flow Comparison",
        content: `CoT:  Think → Think → Think → Answer (linear)
ToT:  Think → Branch → Evaluate → Select → Think (tree)
ReAct: Think → Act → Observe → Think → Act (loop)
MCTS: Simulate → Evaluate → Backprop → Select (search)`,
      },
      {
        type: "table",
        title: "Memory Systems",
        headers: ["Memory Type", "Storage", "Duration", "Use Case"],
        rows: [
          ["Short-term", "Context window", "Current session", "Active conversation"],
          ["Long-term", "Vector database", "Persistent", "User preferences, past interactions"],
          ["Episodic", "Key-value store", "Persistent", "Specific past events and outcomes"],
          ["Semantic", "Knowledge graph", "Persistent", "Factual knowledge, relationships"],
          ["Working", "Scratchpad", "Current task", "Intermediate reasoning steps"],
        ],
      },
      {
        type: "text",
        title: "Context Window Budget (8192 tokens)",
        content: `system_prompt = 500     # ~6% - Agent instructions
retrieved_docs = 3000   # ~37% - RAG context
conversation = 2000     # ~24% - Chat history
working_memory = 1000   # ~12% - Scratchpad
output_reserve = 1692   # ~21% - Generation space

# Compression when exceeding budget:
# 1. Summarize older conversation turns
# 2. Reduce retrieved docs (top-3 → top-2)
# 3. Compress working memory`,
      },
    ],
  },
  {
    domain: "Domain 6: Knowledge Integration and Data Handling (10%)",
    sections: [
      {
        type: "text",
        title: "RAG Pipeline",
        content: `Documents → Chunk → Embed → Store (Vector DB)
Query → Embed → Search → Retrieve Top-K → Rerank → Augment Prompt → LLM → Response`,
      },
      {
        type: "table",
        title: "Chunking Strategies",
        headers: ["Strategy", "Chunk Size", "Overlap", "Best For"],
        rows: [
          ["Fixed-size", "512 tokens", "10-15%", "General purpose, fast"],
          ["Semantic", "Variable", "At topic breaks", "Long documents, mixed topics"],
          ["Recursive", "512-1024", "15-20%", "Structured docs (markdown, code)"],
          ["Document-level", "Full doc", "N/A", "Short documents, FAQs"],
        ],
      },
      {
        type: "table",
        title: "Vector Database Comparison",
        headers: ["Database", "Hosting", "Scalability", "Best For"],
        rows: [
          ["ChromaDB", "Self-hosted", "Small-medium", "Prototyping, local dev"],
          ["Pinecone", "Managed cloud", "Enterprise", "Production, zero-ops"],
          ["Weaviate", "Both", "Large", "Hybrid search, GraphQL"],
          ["FAISS", "In-memory", "Large", "Speed-critical, read-heavy"],
          ["Qdrant", "Both", "Large", "Filtering + vector search"],
        ],
      },
      {
        type: "code",
        title: "Hybrid Search + Reranking",
        language: "python",
        content: `# Hybrid search: BM25 (keyword) + Semantic (vector)
ensemble = EnsembleRetriever(
    retrievers=[bm25_retriever, vector_retriever],
    weights=[0.3, 0.7]  # Weight semantic higher
)

# Pipeline: Retrieve 20 → Rerank → Return top 3-5
candidates = ensemble.get_relevant_documents(query, k=20)
reranked = reranker.rank(query, [doc.page_content for doc in candidates])
final_docs = reranked[:5]`,
      },
      {
        type: "table",
        title: "Similarity Metrics",
        headers: ["Metric", "Formula", "When to Use"],
        rows: [
          ["Cosine similarity", "A·B / (||A|| × ||B||)", "Default for embeddings"],
          ["Dot product", "A·B", "Normalized vectors (faster)"],
          ["Euclidean (L2)", "√Σ(a-b)²", "Absolute distance matters"],
        ],
      },
    ],
  },
  {
    domain: "Domain 7: NVIDIA Platform Implementation (7%)",
    sections: [
      {
        type: "code",
        title: "NVIDIA NIM Deployment",
        language: "bash",
        content: `docker run -it --gpus all \\
  -e NGC_API_KEY=$NGC_API_KEY \\
  -p 8000:8000 \\
  nvcr.io/nim/meta/llama-3.1-8b-instruct:latest

curl -X POST http://localhost:8000/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{"model": "meta/llama-3.1-8b-instruct",
       "messages": [{"role": "user", "content": "Hello"}],
       "max_tokens": 100}'`,
      },
      {
        type: "text",
        title: "NIM Key Features",
        content: `• TensorRT-LLM optimizations (3-5x speedup)
• Multi-GPU support with tensor parallelism
• OpenAI API compatibility
• Built-in health checks and metrics`,
      },
      {
        type: "code",
        title: "Triton Inference Server Config",
        language: "yaml",
        content: `name: "agent-llm"
platform: "tensorrt_llm"
max_batch_size: 8

dynamic_batching {
  preferred_batch_size: [4, 8]
  max_queue_delay_microseconds: 100
}

instance_group [
  { count: 1, kind: KIND_GPU }
]`,
      },
      {
        type: "text",
        title: "Triton Use Cases",
        content: `• Multi-model serving (host embedding + LLM + reranker)
• Dynamic batching (combine requests for efficiency)
• Model ensembles (chain retriever → LLM)`,
      },
      {
        type: "code",
        title: "NeMo Guardrails Example",
        language: "ruby",
        content: `# Prevent off-topic conversations
define user ask off topic
  "What's the weather?"
  "Tell me a joke"

define flow off topic
  user ask off topic
  bot refuse off topic
  "I'm focused on helping with [your domain]."

# Require human approval for high-stakes actions
define flow high stakes action
  user request financial transaction
  bot confirm with human`,
      },
      {
        type: "table",
        title: "NVIDIA Platform Quick Reference",
        headers: ["Tool", "Purpose", "Key Use"],
        rows: [
          ["NIM", "Model deployment", "Optimized inference containers"],
          ["Triton", "Model serving", "Multi-model, dynamic batching"],
          ["NeMo", "Model development", "Training, fine-tuning, RLHF"],
          ["NeMo Guardrails", "Agent safety", "Content filtering, topic control"],
          ["TensorRT-LLM", "Optimization", "Quantization, kernel fusion"],
          ["NGC", "Container registry", "Pre-built AI containers"],
        ],
      },
    ],
  },
  {
    domain: "Domain 8: Run, Monitor, and Maintain (5%)",
    sections: [
      {
        type: "table",
        title: "Production Monitoring",
        headers: ["What to Monitor", "Metric", "Alert Threshold"],
        rows: [
          ["Latency", "P50, P95, P99", "P95 > 2x baseline"],
          ["Task completion", "Success rate", "< 80% over 1 hour"],
          ["Error rate", "Errors/total", "> 5% over 15 min"],
          ["Token usage", "Tokens/interaction", "> 2x average"],
          ["Cost", "$/interaction", "> budget threshold"],
          ["Model drift", "Quality score trend", "Declining 3+ days"],
        ],
      },
      {
        type: "text",
        title: "Distributed Tracing",
        content: `Trace: user_query_123
├── Agent Orchestrator (50ms)
│   ├── Retrieve from Vector DB (120ms)
│   ├── LLM Reasoning Step 1 (800ms)
│   ├── Tool Call: search_api (350ms)
│   ├── LLM Reasoning Step 2 (750ms)
│   └── Format Response (30ms)
└── Total: 2100ms

Tools: OpenTelemetry, LangSmith, Datadog, Grafana`,
      },
    ],
  },
  {
    domain: "Domain 9: Safety, Ethics, and Compliance (5%)",
    sections: [
      {
        type: "table",
        title: "Agent Safety Guardrails",
        headers: ["Guardrail", "Implementation", "Purpose"],
        rows: [
          ["Input filtering", "Regex + classifier", "Block prompt injection"],
          ["Output filtering", "Content classifier", "Prevent harmful outputs"],
          ["Action constraints", "Allowlist of tools", "Limit agent capabilities"],
          ["Rate limiting", "Token/request budgets", "Prevent runaway costs"],
          ["Sandbox execution", "Isolated environments", "Safe code/API execution"],
          ["Audit logging", "Immutable logs", "Compliance and debugging"],
        ],
      },
      {
        type: "table",
        title: "Compliance Quick Reference",
        headers: ["Regulation", "Key Requirements for Agents"],
        rows: [
          ["GDPR", "Data minimization, right to erasure, consent, right to explanation"],
          ["CCPA", "Disclosure of data usage, opt-out of data sale"],
          ["EU AI Act", "Risk classification, transparency, human oversight for high-risk"],
        ],
      },
    ],
  },
  {
    domain: "Domain 10: Human-AI Interaction and Oversight (5%)",
    sections: [
      {
        type: "code",
        title: "HITL Escalation Framework",
        language: "python",
        content: `def should_escalate(agent_response):
    if agent_response.confidence < 0.7:
        return "low_confidence"
    if agent_response.involves_financial_action:
        return "high_stakes"
    if agent_response.sentiment == "frustrated":
        return "user_sentiment"
    return None

ESCALATION_TIERS = {
    "low_confidence": "queue_for_review",
    "high_stakes": "immediate_handoff",
    "user_sentiment": "offer_human_option",
}`,
      },
      {
        type: "table",
        title: "Transparency Best Practices",
        headers: ["Practice", "Implementation"],
        rows: [
          ["Source attribution", "Show which documents RAG retrieved"],
          ["Confidence display", "Show certainty level to user"],
          ["Decision explanation", "Explain why agent chose specific action"],
          ["Limitation disclosure", "State what agent cannot do"],
          ["Human option", "Always provide escalation path"],
        ],
      },
    ],
  },
  {
    domain: "Exam Strategy",
    sections: [
      {
        type: "text",
        title: "Time Management",
        content: `• 60-70 questions in 120 minutes = ~1.7-2 min per question
• Flag uncertain questions, return at end
• Aim to finish with 10-minute buffer for review`,
      },
      {
        type: "text",
        title: "Domain Weight Summary",
        content: `Architecture + Development:  30%  (~21 questions) ← FOCUS HERE
Evaluation + Deployment:     26%  (~18 questions)
Cognition + Knowledge:       20%  (~14 questions)
Monitor + Safety + Human-AI: 15%  (~11 questions) ← Easiest points
NVIDIA Platform:              7%  (~5 questions)  ← Small but specific`,
      },
      {
        type: "text",
        title: "Common Wrong Answer Patterns",
        content: `✗ "More agents = better performance"
  → Multi-agent adds coordination overhead; use only when decomposition justifies it

✗ "Larger chunks = better RAG"
  → Chunk size is precision-recall trade-off; smaller = more precise, larger = more context

✗ "ReAct is always best"
  → Plan-and-Execute better for well-defined sequential tasks

✗ "Fine-tune first"
  → Try prompt engineering first; fine-tune only when prompting fails

✗ "Autonomous is always better"
  → HITL escalation preferred for high-stakes decisions`,
      },
      {
        type: "text",
        title: "Domain Coverage Checklist",
        content: `□ Agent Architecture (15%): Patterns, single vs multi-agent, orchestration
□ Agent Development (15%): Tool calling, error handling, frameworks
□ Evaluation & Tuning (13%): Metrics, A/B testing, fine-tuning decisions
□ Deployment & Scaling (13%): Containers, Kubernetes, scaling strategies
□ Cognition & Memory (10%): Reasoning frameworks, memory types, context management
□ Knowledge Integration (10%): RAG, chunking, vector DBs, hybrid search
□ NVIDIA Platform (7%): NIM, Triton, NeMo Guardrails, TensorRT-LLM
□ Run & Monitor (5%): Observability, tracing, alerting, drift detection
□ Safety & Ethics (5%): Guardrails, compliance (GDPR, AI Act), red-teaming
□ Human-AI Interaction (5%): HITL, confidence thresholds, transparency`,
      },
    ],
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

export default function NcpCertificationPrep() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [view, setView] = useState<"questions" | "cheatsheet">("questions");

  const isCorrect = (q: typeof ncpQuestions[number], idx: number) => {
    if (Array.isArray(q.correct)) {
      return q.correct.includes(idx);
    }
    return idx === q.correct;
  };

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/certifications" className="inline-block mb-8">
          ← Back to Certifications
        </Link>

        <motion.div
          key={`header-${view}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)] text-[var(--background)]">
              NCP-AAI
            </span>
            <span className="text-xs text-[var(--muted)]">NVIDIA</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-medium mb-4">
            {view === "questions"
              ? "NCP-AAI Certification: My Study Path"
              : "NCP-AAI Cheat Sheet 2026"}
          </h1>

          <p className="text-[var(--muted)] mb-8">
            {view === "questions"
              ? "94 practice questions for the NVIDIA-Certified Professional Agentic AI exam."
              : "Comprehensive exam reference based on preporato.com (2026 edition)."}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {view === "questions" ? (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6"
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="cheatsheet"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-8"
            >
              {cheatsheetData.map((domain) => (
                <motion.div
                  key={domain.domain}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-[var(--border)] rounded-xl p-5"
                >
                  <h2 className="text-base font-semibold mb-4 text-[var(--foreground)]">
                    {domain.domain}
                  </h2>
                  <div className="space-y-4">
                    {domain.sections.map((section) => (
                      <div key={section.title}>
                        <h3 className="text-sm font-medium mb-1.5 text-[var(--muted)] uppercase tracking-wide">
                          {section.title}
                        </h3>
                        {section.type === "table" && (
                          <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-[var(--border)] bg-[var(--card)]">
                                  {section.headers.map((h, i) => (
                                    <th key={i} className="px-3 py-2 text-left font-medium text-[var(--foreground)]">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {section.rows.map((row, ri) => (
                                  <tr key={ri} className={`${ri % 2 === 0 ? "bg-[var(--card)]" : ""}`}>
                                    {row.map((cell, ci) => (
                                      <td key={ci} className="px-3 py-2 text-[var(--foreground)]">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        {section.type === "code" && (
                          <div className="rounded-lg border border-[var(--border)] overflow-hidden">
                            <div className="bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--muted)] border-b border-[var(--border)]">
                              {section.language}
                            </div>
                            <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed text-[var(--foreground)] bg-[var(--background)] p-3 overflow-x-auto">
                              {section.content}
                            </pre>
                          </div>
                        )}
                        {section.type === "text" && (
                          <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed text-[var(--foreground)] bg-[var(--card)] p-3 rounded-lg border border-[var(--border)]">
                            {section.content}
                          </pre>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
              <p className="text-center text-xs text-[var(--muted)] pt-4">
                Source:{" "}
                <a
                  href="https://preporato.com/blog/nvidia-ncp-aai-cheat-sheet-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  preporato.com/blog/nvidia-ncp-aai-cheat-sheet-2026
                </a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fixed bottom controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[var(--background)] border border-[var(--border)] rounded-full px-2 py-1.5 shadow-lg">
        {/* View toggle */}
        <div className="relative flex items-center bg-[var(--card)] rounded-full p-0.5">
          <motion.div
            layoutId="view-pill"
            className="absolute inset-y-0.5 rounded-full bg-[var(--foreground)]"
            style={{ width: "calc(50% - 2px)" }}
            animate={{ left: view === "questions" ? "2px" : "calc(50% + 0px)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <button
            onClick={() => setView("questions")}
            className={`relative z-10 px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
              view === "questions"
                ? "text-[var(--background)]"
                : "text-[var(--muted)]"
            }`}
          >
            Questions
          </button>
          <button
            onClick={() => setView("cheatsheet")}
            className={`relative z-10 px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
              view === "cheatsheet"
                ? "text-[var(--background)]"
                : "text-[var(--muted)]"
            }`}
          >
            Cheat Sheet
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-[var(--border)]" />

        {/* Answer toggle — only visible on questions view */}
        <AnimatePresence>
          {view === "questions" && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setShowAnswers(!showAnswers)}
              className="relative px-4 py-1.5 text-xs font-medium bg-[var(--foreground)] text-[var(--background)] rounded-full hover:opacity-80 transition-opacity"
            >
              {showAnswers ? "Hide Answers" : "Show Answers"}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}