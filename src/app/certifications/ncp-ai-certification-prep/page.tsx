"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ncpQuestions } from "@/components/blog/ncpQuestions";
import { useState } from "react";

// ─── Cheat Sheet Data ───────────────────────────────────────────────────────

const cheatsheetData = [
  {
    domain: "Domain 1: Agent Architecture and Design (15%)",
    sections: [
      {
        title: "Agent Architecture Patterns",
        content: `• ReAct — interleaves reasoning + actions. Dynamic tasks with tools. Risk: loops, higher latency.
• Plan-and-Execute — plans full sequence first, then executes. Well-defined multi-step. Risk: brittle on plan changes.
• Reflexion — executes, self-evaluates, retries. Accuracy-critical. 2-3x more LLM calls.
• LATS — Monte Carlo Tree Search for planning. Best accuracy, highest compute.
• Tool-Only — direct tool routing, minimal reasoning. Simple dispatch.`,
      },
      {
        title: "Single-Agent vs Multi-Agent",
        content: `• Single: ≤5 tools, linear tasks. Lower latency, easier debug.
• Multi: distinct sub-domains, parallel execution. Better scalability, coordination overhead.
• Patterns: Sequential pipeline (A→B→C), parallel fan-out/merge, hierarchical (Orchestrator→Workers), collaborative negotiation.
• A2A Protocol: cross-platform interoperability between frameworks.`,
      },
    ],
  },
  {
    domain: "Domain 2: Agent Development (15%)",
    sections: [
      {
        title: "Tool/Function Calling",
        content: `• OpenAI-compatible: tools array with type "function", name, description, parameters schema.
• Always validate tool parameters before execution.
• Safe tool calls: error handling catches ToolError, returns fallback responses.`,
      },
      {
        title: "Error Handling Patterns",
        content: `• Retry with backoff — exponential (1s→2s→4s→8s), max 3 retries. Transient failures (API timeouts).
• Circuit breaker — opens after 3 failures, half-open after 30s.
• Fallback strategies — switch to alternative tools.
• Graceful degradation — continue with partial info when non-critical tools fail.`,
      },
      {
        title: "Framework Comparison",
        content: `• LangChain — largest ecosystem, LangGraph for multi-agent.
• LlamaIndex — best RAG integration for RAG-heavy agents.
• AutoGen — native conversational agent teams.
• CrewAI — role-based teams (role, goal, backstory).
• LangGraph — graph-based stateful workflow orchestration.`,
      },
    ],
  },
  {
    domain: "Domain 3: Evaluation and Tuning (13%)",
    sections: [
      {
        title: "Key Agent Evaluation Metrics",
        content: `• Task completion rate: >85% for production
• Reasoning accuracy: >90% for critical tasks
• End-to-end latency: <5s interactive, <30s async
• Tool selection accuracy: >90%
• Hallucination rate: <5% with RAG
• User satisfaction: >4.0/5.0`,
      },
      {
        title: "Fine-Tuning Decision Guide",
        content: `• LoRA fine-tuning — domain vocabulary adaptation
• Prompt engineering first — for inconsistent formatting (cheaper + faster)
• Fine-tune on tool-use datasets — when tool selection is poor
• Upgrade base model — when general quality is low (fine-tuning cannot fix weak foundations)`,
      },
    ],
  },
  {
    domain: "Domain 4: Deployment and Scaling (13%)",
    sections: [
      {
        title: "Containerized Deployment",
        content: `• GPU reservations via docker-compose
• Multiple replicas for HA
• Environment: MODEL_ENDPOINT, VECTOR_DB_URL
• NVIDIA NIM containers with proper GPU device capabilities`,
      },
      {
        title: "Scaling Strategies",
        content: `• Horizontal — add agent replicas behind load balancers
• Vertical — upgrade GPUs (A100→H100)
• Auto-scaling — on queue depth or latency metrics
• GPU sharing — Triton multi-model serving for multiple small models`,
      },
      {
        title: "Deployment Strategy Risk",
        content: `• Blue/Green — low risk, instant rollback (major updates)
• Canary — very low risk, fast rollback (gradual rollouts)
• Rolling — medium risk, slow rollback (minor updates)
• Shadow — no risk, parallel with production`,
      },
    ],
  },
  {
    domain: "Domain 5: Cognition, Planning, and Memory (10%)",
    sections: [
      {
        title: "Reasoning Frameworks",
        content: `• Chain-of-Thought — step-by-step linear. Math/linear problems. 1.5-2x latency.
• Tree-of-Thought — branching exploration. Creative/strategic. 3-5x latency.
• ReAct — thought-action-observation loops. Tool-using agents. 2-3x latency.
• MCTS — Monte Carlo search over plans. Optimization. 5-10x latency.
• Self-Consistency — multiple CoT paths + majority voting. High-stakes.`,
      },
      {
        title: "Memory Systems Architecture",
        content: `• Short-term — context window for current session
• Long-term — vector DBs persistently for user prefs + past interactions
• Episodic — specific past events/outcomes in key-value stores
• Semantic — factual knowledge/relationships in knowledge graphs
• Working memory — scratchpad for intermediate reasoning steps`,
      },
      {
        title: "Context Window Budget (8192 tokens)",
        content: `• System prompts: ~500 tokens (6%)
• Retrieved docs: ~3000 tokens (37%)
• Conversation history: ~2000 tokens (24%)
• Working memory: ~1000 tokens (12%)
• Output reserved: ~1692 tokens (21%)`,
      },
    ],
  },
  {
    domain: "Domain 6: Knowledge Integration and Data Handling (10%)",
    sections: [
      {
        title: "RAG Pipeline",
        content: `Index: Chunk → Embed → Store in Vector DB
Query: Query → Embed → Search → Retrieve Top-K → Rerank → Augment → LLM → Response`,
      },
      {
        title: "Chunking Strategies",
        content: `• Fixed-size (512 tokens, 10-15% overlap) — general purpose, speed
• Semantic chunking — variable at topic breaks, mixed topics
• Recursive (512-1024 tokens, 15-20% overlap) — structured docs (markdown, code)
• Document-level — full docs for short docs/FAQs
• Smaller chunks = more precision, less context`,
      },
      {
        title: "Vector Database Comparison",
        content: `• ChromaDB — self-hosted, small-medium, prototyping
• Pinecone — managed cloud, enterprise scale, zero-ops
• Weaviate — both hosting, hybrid search, GraphQL
• FAISS — in-memory, large-scale, read-heavy, speed-critical
• Qdrant — both hosting, filtering + vector search`,
      },
      {
        title: "Retrieval Optimization",
        content: `• Hybrid search: BM25 (0.3 weight) + semantic vector (0.7 weight)
• Reranking: cross-encoders (ms-marco-MiniLM-L-6-v2)
• Pipeline: retrieve 20 → rerank → return top 3-5`,
      },
    ],
  },
  {
    domain: "Domain 7: NVIDIA Platform Implementation (7%)",
    sections: [
      {
        title: "NVIDIA NIM",
        content: `• Deploy optimized LLM inference via docker NIM containers
• TensorRT-LLM optimizations: 3-5x speedup
• Multi-GPU support with tensor parallelism
• OpenAI API compatibility, built-in health checks + metrics`,
      },
      {
        title: "Triton Inference Server",
        content: `• Dynamic batching: preferred batch sizes 4 and 8, max queue delay 100μs
• Instance groups configuration
• Multi-model serving: embedding + LLM + reranker
• Model ensembles: chain retriever to LLM`,
      },
      {
        title: "NeMo Guardrails",
        content: `• Canonical message definitions — block off-topic, return to domain
• Human approval flows — high-stakes actions (financial transactions)`,
      },
      {
        title: "Platform Quick Ref",
        content: `• NIM — model deployment, optimized inference containers
• Triton — model serving, multi-model + dynamic batching
• NeMo — model development, training, fine-tuning, RLHF
• NeMo Guardrails — agent safety, content filtering, topic control
• TensorRT-LLM — optimization, quantization, kernel fusion
• NGC — container registry for pre-built AI containers`,
      },
    ],
  },
  {
    domain: "Domain 8: Run, Monitor, and Maintain (5%)",
    sections: [
      {
        title: "Production Monitoring Metrics",
        content: `• Latency: P50, P95, P99 (alert P95 > 2x baseline)
• Task completion success rate (alert <80% over 1hr)
• Error rate (alert >5% over 15min)
• Token usage per interaction (alert >2x average)
• Cost per interaction vs budget
• Model drift — quality score declining over 3+ days`,
      },
      {
        title: "Distributed Tracing Tools",
        content: `OpenTelemetry, LangSmith, Datadog, Grafana
Example trace:
  Agent Orchestrator (50ms)
  → Retrieve from Vector DB (120ms)
  → LLM Reasoning Step 1 (800ms)
  → Tool Call search_api (350ms)
  → LLM Reasoning Step 2 (750ms)
  → Format Response (30ms)
  Total: 2100ms`,
      },
    ],
  },
  {
    domain: "Domain 9: Safety, Ethics, and Compliance (5%)",
    sections: [
      {
        title: "Agent Safety Guardrails",
        content: `• Input filtering — regex + classifiers block prompt injection
• Output filtering — content classifiers prevent harmful outputs
• Action constraints — allowlists of tools limit capabilities
• Rate limiting — token/request budgets prevent runaway costs
• Sandbox execution — isolated environments for code/API execution
• Audit logging — immutable logs for compliance + debugging`,
      },
      {
        title: "Compliance Quick Ref",
        content: `• GDPR — data minimization, right to erasure, consent, right to explanation
• CCPA — disclosure of data usage, opt-out of data sale
• EU AI Act — risk classification, transparency, human oversight for high-risk systems`,
      },
    ],
  },
  {
    domain: "Domain 10: Human-AI Interaction and Oversight (5%)",
    sections: [
      {
        title: "HITL Escalation Framework",
        content: `• Confidence <0.7 → low_confidence → queue for async review
• Financial transactions → high_stakes → immediate real-time human handoff
• User frustration detected → user_sentiment → offer human option`,
      },
      {
        title: "Transparency Best Practices",
        content: `• Show source attribution for RAG-retrieved documents
• Display confidence levels to users
• Explain why specific actions were chosen
• State what the agent cannot do
• Always provide escalation path to humans`,
      },
    ],
  },
  {
    domain: "Exam Strategy",
    sections: [
      {
        title: "Time Management",
        content: `• 60-70 questions in 120 minutes → ~1.7-2 min/question
• Flag uncertain questions, return at end
• Finish with 10-minute buffer for review`,
      },
      {
        title: "Domain Weight Summary",
        content: `• Architecture + Development = 30% (~21 questions) — FOCUS HERE
• Evaluation + Deployment = 26% (~18 questions)
• Cognition + Knowledge = 20% (~14 questions)
• Monitor + Safety + Human-AI = 15% (~11 questions) — easiest points
• NVIDIA Platform = 7% (~5 questions) — small but specific`,
      },
      {
        title: "Common Wrong Answer Patterns",
        content: `✗ More agents = better — multi-agent adds overhead, only when decomposition justifies
✗ Larger chunks = better RAG — precision-recall trade-off
✗ ReAct always best — Plan-and-Execute better for well-defined sequential tasks
✗ Fine-tune first — try prompt engineering first, only fine-tune when prompting fails
✗ Autonomous always better — HITL preferred for high-stakes decisions`,
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
              ? "82 practice questions for the NVIDIA-Certified Professional Agentic AI exam."
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
                        <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed text-[var(--foreground)] bg-[var(--card)] p-3 rounded-lg border border-[var(--border)]">
                          {section.content}
                        </pre>
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