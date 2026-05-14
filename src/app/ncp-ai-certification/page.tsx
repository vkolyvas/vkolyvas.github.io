"use client";

import { motion } from "framer-motion";

const questions = [
  {
    q: "An AI engineer is evaluating an underperforming multi-agent workflow built with NVIDIA agentic frameworks. Which analysis approach most effectively identifies optimization opportunities in agent coordination and communication patterns?",
    options: [
      "Monitor workflow completion times using analysis that subsumes inter-agent communication costs, coordination overhead, and task allocation balance.",
      "Focus exclusively on individual agent accuracy without analyzing workflow-level efficiency, coordination costs, or overall system throughput.",
      "Evaluate agents individually, allowing the toolkit to automatically infer interaction effects, communication patterns, and emergent behaviors from coordination.",
      "Trace agent interaction patterns using observability features, measure communication overhead, identify redundant operations, and analyze task distribution efficiency.",
    ],
    answer: 3,
  },
  {
    q: "You are tasked with comparing two agentic AI systems — System A and System B — both designed to generate marketing copy. To objectively assess which system is performing better, what is the most appropriate approach?",
    options: [
      "Measure the click-through rate for each system's marketing copy as the primary indicator of performance.",
      "Implement a human-in-the-loop to subjectively rate each output on a scale of 1 to 5 based on the user's personal preference.",
      "Implement a benchmark pipeline that automatically compares the generated outputs using metrics like relevance, creativity, and grammatical correctness.",
      "Gather ratings from a panel of users, with each rating marketing copy on a 1 to 5 scale for overall impression.",
    ],
    answer: 2,
  },
  {
    q: "When analyzing suboptimal agent response quality after deployment, which parameter tuning evaluation methods effectively identify the optimal configuration adjustments? (Choose two.)",
    options: [
      "Design ablation studies systematically varying individual parameters while holding others constant to isolate each parameter's impact.",
      "Apply identical parameter settings across all agent types and tasks, promoting consistency.",
      "Implement A/B testing frameworks comparing temperature, top-k, and top-p variations while measuring task-specific quality metrics.",
      "Use production traffic directly for parameter experiments.",
      "Randomly adjust all parameters simultaneously.",
    ],
    answer: "a,c",
  },
  {
    q: "An agentic AI is tasked with generating marketing copy. It's producing high-quality text but lacks a distinct brand voice. Which metric is most valuable for evaluating adherence to brand voice?",
    options: [
      "A metric assessing the agent's ability to tailor language for distinct audience segments.",
      "A metric evaluating textual similarity to a formalized brand style guide.",
      "A metric tracking average word count and sentence length.",
      "A metric quantifying social sharing frequency.",
    ],
    answer: 1,
  },
  {
    q: "A social media company wants to expand its agentic system for global users, minimize downtime, and handle usage spikes. Which solution most effectively supports reliable and scalable deployment?",
    options: [
      "Integrating MLOps practices for continuous deployment.",
      "Designing a distributed system architecture with multi-region deployment, automated failover, and dynamic resource allocation.",
      "Implementing containerization with Docker.",
      "Using hardware profiling to optimize agent workloads for GPU utilization.",
    ],
    answer: 1,
  },
  {
    q: "A customer support agent must fetch information from databases, handle API failures, and improve from user feedback. Which task is most critical for handling real-world interactions?",
    options: [
      "Applying a well-structured training process with foundational generative models.",
      "Utilizing internal knowledge bases alongside external APIs.",
      "Implementing retry logic for error handling and integrating user feedback loops.",
      "Designing conversation flows with predefined scripts.",
    ],
    answer: 2,
  },
  {
    q: "You are evaluating a tool-using agent. What are two important features to evaluate? (Choose two.)",
    options: ["Tool use accuracy", "Tokens per second", "Tool use rate", "Task completion rate"],
    answer: "a,c",
  },
  {
    q: "When analyzing an agent's failure to complete multi-step financial analysis tasks, which evaluation approach best identifies prompt engineering improvements?",
    options: [
      "Implement systematic prompt testing with chain-of-thought reasoning templates and step-by-step decomposition analysis.",
      "Focus primarily on response speed optimization.",
      "Test only final output accuracy.",
      "Rely on generic prompt templates.",
    ],
    answer: 0,
  },
  {
    q: "A deployed Agentic AI system consistently fails to identify CPU utilization alerts, focusing on network traffic spikes. What is the most appropriate initial step?",
    options: [
      "Review the agent's evaluation framework.",
      "Replace the underlying AI model with a more powerful one.",
      "Implement a new synthetic data set containing CPU load profiles.",
      "Review the agent's sensitivity thresholds focusing on CPU utilization alerts.",
    ],
    answer: 3,
  },
  {
    q: "You are deploying a multi-agent system on Kubernetes with NVIDIA GPU nodes and Triton Inference Server. Traffic spikes during product launches. Need <100ms response times, zero downtime, automatic GPU scaling, and full monitoring. Which deployment setup best achieves cost-effective, reliable, low-latency scaling?",
    options: [
      "Set up one mixed GPU node pool with Cluster Autoscaler min=0, skip readiness probes.",
      "Place GPU pods on on-demand nodes in one zone, disable Cluster Autoscaler.",
      "Deploy GPU pods in a node pool spanning all zones, enable Cluster and HPA using Prometheus GPU and latency metrics, monitor with NVIDIA DCGM and Grafana.",
      "Use spot-instance node pools across zones, scale on memory usage.",
    ],
    answer: 2,
  },
  {
    q: "An AI agent does not perform tasks consistently. Which two potential solutions might help? (Choose two.)",
    options: [
      "Remove schema validations and assertions on tool outputs.",
      "Increase randomness and remove fixed seeds.",
      "Identify where dividing tasks into subtasks handled by multiple agents can help.",
      "Refine the prompt; be clear on objectives.",
    ],
    answer: "c,d",
  },
  {
    q: "Which two deployment patterns are MOST suitable for scaling agentic workloads on NVIDIA Infrastructure? (Choose two.)",
    options: [
      "Bare metal deployment with manual resource allocation",
      "Static virtual machine deployment with fixed resources",
      "Serverless deployment without GPU acceleration",
      "Containerized deployment with NIM (NVIDIA Inference Microservices)",
      "Kubernetes orchestration with HPA",
    ],
    answer: "c,d",
  },
  {
    q: "How does an autonomous agent differ from a predefined workflow when applied to complex enterprise tasks?",
    options: [
      "Agents optimize for execution speed, while workflows prioritize goal alignment.",
      "Workflows provide deterministic task sequencing with conditional branching, while agents adapt dynamically based on goals and environment feedback.",
      "Workflows emphasize parallelism, while agents emphasize serialization.",
    ],
    answer: 1,
  },
  {
    q: "An e-commerce platform needs cost-optimized scaling for variable-workload, mixed-complexity environment. Which approach provides the MOST cost-optimized scaling strategy?",
    options: [
      "Single large model configuration on high-capacity GPUs with constant resource allocation.",
      "CPU-optimized infrastructure with auto-scaling.",
      "NIM microservices with an LLM router to dynamically route requests based on complexity.",
      "Multiple identical high-capacity models across all GPUs without complexity differentiation.",
    ],
    answer: 2,
  },
  {
    q: "When evaluating coordination failures in a multi-agent system, which analysis approach best identifies state management and planning synchronization issues?",
    options: [
      "Monitor agent outputs individually.",
      "Deploy distributed state tracing across agents, analyze transition timing, study communication overhead.",
      "Assess synchronization methods during design reviews.",
      "Track workflow throughput and task completions.",
    ],
    answer: 1,
  },
  {
    q: "You notice the LLM-as-a-Judge consistently assigns high similarity scores to responses with irrelevant information. What should you investigate with the least development effort?",
    options: [
      "The temperature setting.",
      "The size of the knowledge base.",
      "The quality of the synthetic questions.",
      "The prompt used to instruct the LLM-as-a-Judge.",
    ],
    answer: 3,
  },
  {
    q: "What NVIDIA framework can be used to train a better agent?",
    options: ["NeMo-RL", "NeMo Guardrails", "TensorRT-LLM"],
    answer: 2,
  },
  {
    q: "When analyzing performance bottlenecks in a multi-modal agent processing text, images, and voice inputs, which evaluation approach most effectively identifies optimization opportunities?",
    options: [
      "Measure total response time.",
      "Profile end-to-end latency, measure model switching overhead, analyze batch processing opportunities.",
      "Optimize each modality independently.",
      "Extend evaluation to accuracy and quality metrics.",
    ],
    answer: 1,
  },
  {
    q: "An agent frequently calls incorrect tools, hallucinating endpoints. Which prompt design best supports consistent tool invocation?",
    options: [
      "Rely on the agent's internal knowledge to infer tool usage.",
      "Include tool names in natural language without parameter examples.",
      "Provide only a generic system instruction with no examples.",
      "Use structured prompt templates with few-shot tool usage examples.",
    ],
    answer: 3,
  },
  {
    q: "Which practice is most crucial for successfully deploying and scaling an agentic AI system in production?",
    options: [
      "Use static assignment of requests across agents.",
      "Optimize GPU utilization frameworks separate from cost analysis.",
      "Deploy agents on a single machine.",
      "Implementing automated workload management and resource scheduling frameworks.",
    ],
    answer: 3,
  },
  {
    q: "Which two orchestration methods are MOST suitable for complex agentic workflows requiring external data access and specialized task delegation? (Choose two.)",
    options: [
      "Agentic orchestration with specialized expert system delegation",
      "Prompt chaining to accomplish state management",
      "Manual workflow coordination without automation",
      "Retrieval-based orchestration for external data",
      "Static rule-based routing with predefined pathways",
    ],
    answer: "a,c",
  },
  {
    q: "When analyzing inconsistent performance across a fleet of customer service agents, which evaluation approach most effectively identifies root causes?",
    options: [
      "Assess performance data from recently improved agents.",
      "Average performance metrics across all agents.",
      "Deploy stratified evaluation sampling across agent variants, query complexity levels, and temporal patterns.",
      "Review performance across high and low-accuracy agent groups.",
    ],
    answer: 2,
  },
  {
    q: "You are designing an AI agent for summarizing medical documents with images and text. Which feature is most critical for multiple input/output formats?",
    options: [
      "Use of guardrails to filter hallucinated content",
      "Retry logic implementation",
      "Chain-of-thought prompting",
      "Multi-modal model integration to handle both text and vision inputs",
    ],
    answer: 3,
  },
  {
    q: "LLM summaries of research papers often omit critical findings. What's the best way to ensure accurate core insight extraction?",
    options: [
      'Asking the LLM to "summarize the paper."',
      'Asking the LLM to "understand" the paper.',
      "Having the LLM generate summaries and manually review every output.",
      'Asking the LLM to "extract the key findings."',
    ],
    answer: 3,
  },
  {
    q: "When designing complex agentic workflows with both sequential and parallel task execution, which orchestration pattern offers the greatest flexibility?",
    options: [
      "Graph-based workflow orchestration incorporating conditional branches",
      "Linear pipeline orchestration with a fixed task sequence",
      "Event-driven orchestration that triggers tasks reactively, in series or in parallel",
    ],
    answer: 2,
  },
  {
    q: "When designing tool integration for an agent needing calculations, web searches, and API calls, which architecture pattern is most scalable and maintainable?",
    options: [
      "External tool services with manual configuration",
      "Microservice-based tool architecture with standardized interfaces",
      "Monolithic tool handler with conditional logic",
      "Embedded tool functions within the main agent code",
    ],
    answer: 1,
  },
  {
    q: "A financial institution needs a multi-agent fraud detection system with real-time operation, shared memory, and escalation. Which architectural approach enables intelligent specialization and inter-agent coordination?",
    options: [
      "Modular multi-agent system where individual agents collaborate asynchronously using shared memory.",
      "Multi-agent system with synchronous collaboration using shared memory.",
      "Centralized rule-based service with static fraud indicators.",
      "Agentic workflow with agents acting independently on isolated data slices.",
      "Monolithic LLM-based agents handling all tasks within a single loop.",
    ],
    answer: 0,
  },
  {
    q: "What's the primary benefit of aggregating RAG similarity scores into a single metric?",
    options: [
      "Identifies specific chunks contributing to highest scores.",
      "Reduces complexity of evaluation for overall assessment.",
      "Provides more accurate representation.",
      "Eliminates need for qualitative analysis.",
    ],
    answer: 1,
  },
  {
    q: "When evaluating an agent's degrading response times under increasing load, which analysis approach most effectively identifies scalability bottlenecks?",
    options: [
      "Track average response time with stage-by-stage processing metrics.",
      "Test at fixed, low load levels.",
      "Profile each major system stage using distributed tracing, analyze GPU utilization with NVIDIA tools.",
      "Focus on model inference duration only.",
    ],
    answer: 2,
  },
  {
    q: "A financial agent uses overly formal language that confuses customers. Which type of evaluation is best suited to address this?",
    options: [
      "Controlled user testing sessions to collect feedback on clarity and tone.",
      "Compliance review of access to regulatory guidelines.",
      "Continuous user feedback collection on communication style.",
      "Statistical analysis of decision-making patterns.",
    ],
    answer: 0,
  },
  {
    q: "Which two strategies are appropriate when designing an AI agent for dynamic conversation management? (Choose two.)",
    options: [
      "Integrating a feedback loop from user interactions.",
      "Using rule-based logic as the primary framework.",
      "Implementing retry logic for API failures.",
      "Preferring hardcoded responses for frequent queries.",
    ],
    answer: "a,b",
  },
  {
    q: "What benefits does Kubernetes deployment offer over Slurm?",
    options: [
      "Autoscaling, auto-restarts, dynamic task scheduling, error isolation with containers, and integrated monitoring.",
      "Best option for both training and inference.",
      "More optimized for batch jobs for high throughput.",
    ],
    answer: 0,
  },
  {
    q: "Which tool selection strategy provides the most reliable results for dynamic tool selection?",
    options: [
      "Random dynamic tool selection with retry mechanisms.",
      "LLM-based tool selection with structured tool descriptions.",
      "Rule-based selection with predefined mappings.",
      "Configuration-based selection with manual specifications.",
    ],
    answer: 1,
  },
  {
    q: "Which Triton configuration evaluations identify optimization opportunities? (Choose two.)",
    options: [
      "Analyze model ensemble pipelines for sequential dependencies and optimize inter-model data transfer.",
      "Profile GPU memory allocation patterns and implement model instance batching strategies.",
      "Deploy each modality on separate Triton instances.",
      "Use a single model instance per GPU.",
    ],
    answer: "a,b",
  },
  {
    q: "Which approach is most effective for robust and scalable deployment of an agentic AI system serving thousands of users?",
    options: [
      "Running agents without load balancing.",
      "Establishing continuous monitoring framework.",
      "Deploying all agents on a single server.",
      "Orchestrating agents using containerization with load balancing and monitoring.",
    ],
    answer: 3,
  },
  {
    q: "Which practice is most important for continuous refinement of an AI agent?",
    options: [
      "Comparing agents on isolated tasks without standardized benchmarking.",
      "Relying solely on offline benchmarks.",
      "Implementing an evaluation framework with human-in-the-loop feedback.",
      "Tuning model parameters once before deployment.",
    ],
    answer: 2,
  },
  {
    q: "What is the primary benefit of synthetically generating question-answer pairs for RAG evaluation?",
    options: [
      "Synthetically generated questions are more challenging.",
      "Synthetic generation eliminates need for human validation.",
      "Synthetic answers are inherently more accurate.",
      "Synthetic generation allows systematic testing across wider scenarios.",
    ],
    answer: 3,
  },
  {
    q: "Which evaluation methods translate user feedback into actionable optimization strategies? (Choose two.)",
    options: [
      "Collect broad user feedback as-is.",
      "Design iterative feedback loops with A/B testing and regression monitoring.",
      "Incorporate user suggestions rapidly.",
      "Implement feedback categorization with quantitative impact scoring.",
    ],
    answer: "b,d",
  },
  {
    q: "A supply chain agent reduced shipping times and costs but customers complain about delayed deliveries. Which metric is MOST important to prioritize?",
    options: [
      "Agent's ability to predict future demand fluctuations.",
      "Total cost savings achieved.",
      "Percentage of delivery times within acceptable delay window.",
      "Agent's adherence to prescribed delivery schedules.",
    ],
    answer: 2,
  },
  {
    q: "When implementing inter-agent communication across multiple NVIDIA GPU nodes, which message routing pattern provides the best balance of reliability and performance?",
    options: [
      "Database-based message queuing with polling",
      "Direct TCP connections between all agent pairs",
      "Event-driven message routing with distributed broker clusters",
      "Centralized message broker with topic-based routing",
    ],
    answer: 2,
  },
  {
    q: "An agent generates inconsistent and contradictory statements. Which approach is most suitable to improve output?",
    options: ["Employing Reflexion", "Increasing the number of generated plans", "Using Decomposition-First Planning", "Decreasing prompt length"],
    answer: 0,
  },
  {
    q: "LLM translations of technical documentation lack nuance. What's the most effective improvement strategy?",
    options: [
      "Providing glossary of key terms and dataset of previously translated text.",
      "Training the LLM on translated texts.",
      'Providing guidance to "translate the documents" without additional guidance.',
      'Providing guidance to translate "with high accuracy".',
    ],
    answer: 0,
  },
];

export default function NCPAI() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-medium mb-2"
        >
          NCP-AAI Practice Questions
        </motion.h1>
        <p className="text-[var(--muted)] mb-12">
          NVIDIA-Certified Professional Agentic AI — 42 questions with answers
        </p>

        <div className="space-y-8">
          {questions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              viewport={{ once: true }}
              className="p-6 border border-[var(--border)] rounded-xl"
            >
              <p className="text-sm mb-4">
                <span className="font-medium">{i + 1}.</span> {item.q}
              </p>
              <div className="space-y-2">
                {item.options.map((opt, j) => (
                  <div
                    key={j}
                    className={`text-sm px-4 py-2 rounded-lg border ${
                      typeof item.answer === "number" && item.answer === j
                        ? "border-green-500/50 bg-green-500/10"
                        : typeof item.answer === "string" && item.answer.includes(String.fromCharCode(97 + j))
                        ? "border-green-500/50 bg-green-500/10"
                        : "border-[var(--border)]"
                    }`}
                  >
                    <span className="font-mono text-xs mr-2 opacity-50">{String.fromCharCode(97 + j)}</span>
                    {opt}
                    {typeof item.answer === "number" && item.answer === j && (
                      <span className="ml-2 text-green-500 text-xs">✓</span>
                    )}
                    {typeof item.answer === "string" &&
                      item.answer.includes(String.fromCharCode(97 + j)) && (
                        <span className="ml-2 text-green-500 text-xs">✓</span>
                      )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}