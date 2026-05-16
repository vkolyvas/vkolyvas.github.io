export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number | number[];
  multiCorrect?: boolean;
}

export const ncpQuestions: Question[] = [
  {
    id: 1,
    question:
      "An AI engineer is evaluating an underperforming multi-agent workflow built with NVIDIA agentic frameworks. Which analysis approach most effectively identifies optimization opportunities in agent coordination and communication patterns?",
    options: [
      "Monitor workflow completion times using analysis that subsumes inter-agent communication costs, coordination overhead, and task allocation balance.",
      "Focus exclusively on individual agent accuracy without analyzing workflow-level efficiency, coordination costs, or overall system throughput.",
      "Evaluate agents individually, allowing the toolkit to automatically infer interaction effects, communication patterns, and emergent behaviors from coordination.",
      "Trace agent interaction patterns using observability features, measure communication overhead, identify redundant operations, and analyze task distribution efficiency.",
    ],
    correct: 3,
  },
  {
    id: 2,
    question:
      "You are tasked with comparing two agentic AI systems — System A and System B — both designed to generate marketing copy. To objectively assess which system is performing better, what is the most appropriate approach?",
    options: [
      "Measure the click-through rate for each system's marketing copy as the primary indicator of performance.",
      "Implement a human-in-the-loop to subjectively rate each output on a scale of 1 to 5 based on the user's personal preference.",
      "Implement a benchmark pipeline that automatically compares the generated outputs using metrics like relevance, creativity, and grammatical correctness.",
      "Gather ratings from a panel of users, with each rating marketing copy on a 1 to 5 scale for overall impression of relevance, creativity, and grammatical correctness.",
    ],
    correct: 2,
  },
  {
    id: 3,
    question:
      "When analyzing suboptimal agent response quality after deployment, which parameter tuning evaluation methods effectively identify the optimal configuration adjustments? (Choose two.)",
    options: [
      "Design ablation studies systematically varying individual parameters while holding others constant to isolate each parameter's impact on agent behavior and performance.",
      "Apply identical parameter settings across all agent types and tasks, promoting consistency and simplifying comparison across different use cases.",
      "Implement A/B testing frameworks comparing temperature, top-k, and top-p variations while measuring task-specific quality metrics and user satisfaction scores.",
      "Use production traffic directly for parameter experiments, enabling real-world insights and faster identification of impactful settings.",
    ],
    correct: [0, 2],
    multiCorrect: true,
  },
  {
    id: 4,
    question:
      "An agentic AI is tasked with generating marketing copy for various campaigns. It's consistently producing high-quality text and generating significant engagement. However, qualitative feedback from brand managers indicates that the content lacks a distinct 'brand voice' and feels generic. Which metric would be most valuable for evaluating the agent's adherence to the brand's established voice?",
    options: [
      "A metric assessing the agent's ability to tailor its language and messaging for distinct audience segments based on demographic and psychographic data.",
      "A metric evaluating the agent's textual similarity to a formalized brand style guide, analyzing factors such as tone, approved vocabulary, and prescribed sentence structures.",
      "A metric tracking the average word count and sentence length of the agent's copy, focusing on stylistic efficiency as a potential proxy for brand alignment.",
      "A metric quantifying how frequently the agent's output is shared, liked, or reposted on major social platforms.",
    ],
    correct: 1,
  },
  {
    id: 5,
    question:
      "A social media company wants to expand its agentic system to support global users, minimize downtime, and ensure smooth operation during usage spikes. Which solution most effectively supports reliable and scalable deployment for an agentic AI system serving a global user base?",
    options: [
      "Integrating MLOps practices for continuous deployment and rapid model updates in production environments.",
      "Designing a distributed system architecture with multi-region deployment, automated failover, and dynamic resource allocation.",
      "Implementing containerization with Docker to simplify deployment and streamline updates.",
      "Using hardware profiling to optimize agent workloads for efficient GPU utilization across all deployed instances.",
    ],
    correct: 1,
  },
  {
    id: 6,
    question:
      "A development team is building a customer support agent that interacts with users via chat. The agent must reliably fetch information from external databases, handle occasional API failures without crashing, and improve its responses by learning from user feedback over time. Which task is most critical when enhancing an AI agent to handle real-world interactions and improve over time?",
    options: [
      "Applying a well-structured training process with foundational generative models and prompt engineering.",
      "Utilizing internal knowledge bases to support agent responses alongside external APIs.",
      "Implementing retry logic for error handling and integrating user feedback loops for iterative improvement.",
      "Designing conversation flows that provide consistent responses based on predefined scripts.",
    ],
    correct: 2,
  },
  {
    id: 7,
    question:
      "You're evaluating the performance of a tool-using agent. From the list below, what are two important features to evaluate? (Choose two.)",
    options: ["Tool use accuracy", "Tokens per second", "Tool use rate", "Task completion rate"],
    correct: [0, 2],
    multiCorrect: true,
  },
  {
    id: 8,
    question:
      "When analyzing an agent's failure to complete multi-step financial analysis tasks, which evaluation approach best identifies prompt engineering improvements needed for reliable task decomposition and execution?",
    options: [
      "Implement systematic prompt testing with chain-of-thought reasoning templates, step-by-step decomposition analysis, and success rate tracking across tasks of varying complexity.",
      "Focus primarily on response speed optimization as a primary focus over reasoning quality, step completion accuracy, and prompt clarity for complex analytical requirements.",
      "Test only final output accuracy as this will automatically include intermediate reasoning steps, decomposition quality, and prompt structure effectiveness for complex workflows.",
      "Rely on generic prompt templates which are by default already optimized for general use.",
    ],
    correct: 0,
  },
  {
    id: 9,
    question:
      "A recently deployed Agentic AI system designed for automated incident response within a cloud infrastructure has been consistently failing to identify and resolve 'high-priority' alerts — specifically, those related to increased CPU utilization. What is the most appropriate initial step for a senior Agentic AI engineer to take?",
    options: [
      "Review the agent's evaluation framework, focusing on the defined benchmarks used to assess its response efficiency and impact on overall system performance.",
      "Replace the agent's underlying AI model with a more powerful, general-purpose machine learning engine.",
      "Implement a new synthetic data set containing a wide variety of CPU load profiles to train the agent's decision-making model.",
      "Review the agent's sensitivity thresholds, focusing on CPU utilization alerts to maximize detection accuracy.",
    ],
    correct: 3,
  },
  {
    id: 10,
    question:
      "You are deploying a multi-agent customer-support system on Kubernetes using NVIDIA GPU nodes and Triton Inference Server. Traffic spikes during product launches. You need <100ms response times, zero downtime, automatic GPU scaling, and full monitoring. Which deployment setup best achieves cost-effective, reliable, low-latency scaling?",
    options: [
      "Set up one mixed GPU node pool with Cluster Autoscaler min=0, scale by network throughput, monitor via metrics-server and logs.",
      "Place GPU pods on on-demand nodes in one zone, disable Cluster Autoscaler, run a fixed pod count for bursts.",
      "Deploy GPU pods in a node pool spanning all zones, mix GPU types, enable Cluster and Horizontal Pod Autoscalers using Prometheus GPU and latency metrics, and monitor with NVIDIA DCGM and Grafana.",
      "Use spot-instance node pools across zones, enable Cluster Autoscaler with capped nodes, scale on memory usage.",
    ],
    correct: 2,
  },
  {
    id: 11,
    question:
      "An engineer has created a working AI agent solution providing helpful services to users. However, during live testing, the AI agent does not perform tasks consistently. Which two potential solutions might help with this issue? (Choose two.)",
    options: [
      "Remove schema validations and assertions on tool outputs to avoid inconsistency.",
      "Increase randomness (e.g., temperature) and remove fixed seeds to avoid determinism.",
      "Identify where dividing the tasks into subtasks and handling them by multiple agents can help.",
      "Refine the prompt given to the AI Agent; be clear on objectives.",
    ],
    correct: [2, 3],
    multiCorrect: true,
  },
  {
    id: 12,
    question:
      "Which two deployment patterns are MOST suitable for scaling agentic workloads on NVIDIA Infrastructure? (Choose two.)",
    options: [
      "Bare metal deployment with manual resource allocation",
      "Static virtual machine deployment with fixed resources",
      "Serverless deployment without GPU acceleration",
      "Containerized deployment with NIM (NVIDIA Inference Microservices)",
      "Kubernetes orchestration with Horizontal Pod Autoscaling (HPA)",
    ],
    correct: [3, 4],
    multiCorrect: true,
  },
  {
    id: 13,
    question:
      "In the context of agent development, how does an autonomous agent differ from a predefined workflow when applied to complex enterprise tasks?",
    options: [
      "Agents optimize for execution speed under fixed input-output mappings, while workflows prioritize goal alignment through adaptive reasoning and memory mechanisms.",
      "Workflows provide deterministic task sequencing with conditional branching, while agents adapt decisions dynamically based on goals, context, and environment feedback.",
      "Workflows emphasize parallelism and distributed coordination of processes, while agents emphasize serialization and isolated problem solving.",
    ],
    correct: 1,
  },
  {
    id: 14,
    question:
      "An e-commerce platform is implementing an AI-powered customer support system that handles inquiries ranging from simple FAQ responses to complex product recommendations. Which approach would provide the MOST cost-optimized scaling strategy for this variable-workload, mixed-complexity environment?",
    options: [
      "Deploy specialized NVIDIA NIM microservices using a single large model configuration that handles all agent functions on high-capacity GPUs.",
      "Deploy specialized NVIDIA NIM microservices on CPU-optimized infrastructure with auto-scaling capabilities.",
      "Deploy specialized NVIDIA NIM microservices with an LLM router to dynamically route requests to appropriate models based on complexity.",
      "Deploy multiple specialized NVIDIA NIM microservices with identical high-capacity models across all available GPUs.",
    ],
    correct: 2,
  },
  {
    id: 15,
    question:
      "When evaluating coordination failures in a multi-agent system managing distributed manufacturing workflows, which analysis approach best identifies state management and planning synchronization issues?",
    options: [
      "Monitor agent outputs individually to confirm local correctness and examine results of specific workflow steps.",
      "Deploy distributed state tracing across agents, analyze transition timing, study communication overhead, and verify synchronization accuracy.",
      "Assess synchronization methods during design reviews and use simulations to evaluate coordination across representative workflow scenarios.",
      "Track workflow throughput and task completions to measure performance trends and highlight workflow outcomes.",
    ],
    correct: 1,
  },
  {
    id: 16,
    question:
      "You are evaluating your RAG pipeline. You notice that the LLM-as-a-Judge consistently assigns high similarity scores to responses that contain irrelevant information. What should you investigate as the most likely potential cause with the least development effort?",
    options: [
      "The temperature setting used by the LLM during response generation.",
      "The size of the knowledge base used to power the RAG pipeline.",
      "The quality of the synthetic questions used for evaluation.",
      "The prompt used to instruct the LLM-as-a-Judge to assess the response.",
    ],
    correct: 3,
  },
  {
    id: 17,
    question:
      "What NVIDIA framework can be used to train a better agent?",
    options: ["NeMo-RL", "NeMo Guardrails", "TensorRT-LLM"],
    correct: 2,
  },
  {
    id: 18,
    question:
      "When analyzing performance bottlenecks in a multi-modal agent processing customer support tickets with text, images, and voice inputs, which evaluation approach most effectively identifies optimization opportunities?",
    options: [
      "Measure total response time as this analyzes aggregated performance trends across modalities.",
      "Profile end-to-end latency across modalities, measure model switching overhead, analyze batch processing opportunities.",
      "Optimize each modality independently using dedicated profiling of cross-modal interactions.",
      "Extend evaluation to accuracy and quality metrics, incorporating resource usage patterns.",
    ],
    correct: 1,
  },
  {
    id: 19,
    question:
      "You are designing a virtual assistant that helps users check weather updates via external APIs. During testing, the agent frequently calls the incorrect tools. Which prompt design best supports consistent tool invocation in this agent?",
    options: [
      "Rely on the agent's internal knowledge to infer tool usage.",
      "Include tool names in natural language but without parameter examples.",
      "Provide only a generic system instruction with no examples.",
      "Use structured prompt templates with few-shot tool usage examples.",
    ],
    correct: 3,
  },
  {
    id: 20,
    question:
      "A company is deploying a multi-agent AI system to handle large-scale customer interactions. They want to ensure the system is highly available, cost-effective, and scalable. Which practice is most crucial?",
    options: [
      "Use a static assignment of requests across agents to maintain consistent agent operation.",
      "Optimize GPU utilization frameworks with workload optimization separate from cost analysis.",
      "Deploy agents on a single machine to obtain a dimensioning baseline.",
      "Implementing automated workload management and resource scheduling frameworks to optimize GPU utilization.",
    ],
    correct: 3,
  },
  {
    id: 21,
    question:
      "Which two orchestration methods are MOST suitable for implementing complex agentic workflows that require both external data access and specialized task delegation? (Choose two.)",
    options: [
      "Agentic orchestration with specialized expert system delegation",
      "Retrieval-based orchestration for external data",
      "Prompt chaining to accomplish state management",
      "Manual workflow coordination without automation",
    ],
    correct: [0, 1],
    multiCorrect: true,
  },
  {
    id: 22,
    question:
      "When analyzing inconsistent performance across a fleet of customer service agents, which evaluation approach most effectively identifies root causes and optimization opportunities?",
    options: [
      "Assess performance data from recently improved agents and highlight strong results.",
      "Average performance metrics across all agents as this will smooth individual variations.",
      "Deploy stratified evaluation sampling across agent variants, query complexity levels, and temporal patterns.",
      "Review performance across both high- and low-accuracy agent groups.",
    ],
    correct: 2,
  },
  {
    id: 23,
    question:
      "You are designing an AI agent for summarizing medical documents that include images and text. Which feature is most critical for ensuring the agent performs well across multiple input and output formats?",
    options: [
      "Use of guardrails to filter out hallucinated content.",
      "Retry logic implementation to ensure robustness during API failures.",
      "Chain-of-thought prompting for reasoning accuracy.",
      "Multi-modal model integration to handle both text and vision inputs.",
    ],
    correct: 3,
  },
  {
    id: 24,
    question:
      "You're working with an LLM to automatically summarize research papers. The summaries often omit critical findings. What's the best way to ensure that the summaries accurately reflect the core insights of the research papers?",
    options: [
      'Asking the LLM to "summarize the paper."',
      'Asking the LLM to "understand" the paper to generate a summary.',
      "Having the LLM generate the summaries and then manually review every output.",
      'Asking the LLM to "extract the key findings."',
    ],
    correct: 3,
  },
  {
    id: 25,
    question:
      "When designing complex agentic workflows that include both sequential and parallel task execution, which orchestration pattern offers the greatest flexibility?",
    options: [
      "Graph-based workflow orchestration incorporating conditional branches.",
      "Linear pipeline orchestration with a fixed task sequence.",
      "Event-driven orchestration that triggers tasks reactively, in series or in parallel.",
    ],
    correct: 2,
  },
  {
    id: 26,
    question:
      "When designing tool integration for an agent that needs to perform mathematical calculations, web searches, and API calls, which architecture pattern provides the most scalable and maintainable approach?",
    options: [
      "External tool services with manual configuration for each agent instance.",
      "Microservice-based tool architecture with standardized interfaces.",
      "Monolithic tool handler with conditional logic for different tool types.",
      "Embedded tool functions within the main agent code.",
    ],
    correct: 1,
  },
  {
    id: 27,
    question:
      "A Lead AI Architect at a global financial institution is designing a multi-agent fraud detection system. Which architectural approach enables intelligent specialization, shared memory, and inter-agent coordination?",
    options: [
      "Design a modular multi-agent system where individual agents collaborate asynchronously using shared memory and structured messaging.",
      "Design a multi-agent system where individual agents collaborate synchronously using shared memory and structured messaging.",
      "Design a centralized rule-based service that checks all transactions against static fraud indicators.",
      "Design an agentic workflow where each agent acts independently on isolated data slices.",
    ],
    correct: 0,
  },
  {
    id: 28,
    question:
      "You're evaluating the RAG pipeline by comparing its responses to synthetic questions. What's the primary benefit of aggregating these scores into a single metric?",
    options: [
      "Aggregation identifies the specific chunks within the RAG pipeline that are contributing to the highest similarity scores.",
      "Aggregation reduces the complexity of the evaluation process and allows for a more overall assessment of the pipeline's effectiveness.",
      "Aggregation provides a more accurate representation of the RAG pipeline's performance.",
      "Aggregation eliminates the need for qualitative analysis of the RAG pipeline's responses.",
    ],
    correct: 1,
  },
  {
    id: 29,
    question:
      "When evaluating an agent's degrading response times under increasing load, which analysis approach most effectively identifies scalability bottlenecks and optimization opportunities?",
    options: [
      "Track average response time while examining stage-by-stage processing metrics.",
      "Test at fixed, low load levels while using controlled stress scenarios.",
      "Profile each major system stage using distributed tracing, analyze GPU utilization with NVIDIA performance tools.",
      "Focus on model inference duration while also measuring preprocessing time.",
    ],
    correct: 2,
  },
  {
    id: 30,
    question:
      "A financial services agentic AI is being used to automate initial customer onboarding. The agent is completing the process efficiently and accurately, but it often uses overly formal and complex language that confuses customers. Which type of evaluation is best suited to address this issue?",
    options: [
      "Controlled user testing sessions to collect user feedback on the clarity and tone of responses.",
      "Compliance review of the agent's access to regulatory guidelines and policy documentation.",
      "Continuous user feedback collection, specifically gathering subjective assessments of the agent's communication style.",
      "Statistical analysis of the agent's decision-making patterns.",
    ],
    correct: 0,
  },
  {
    id: 31,
    question:
      "A company is deploying an AI-powered customer support agent that integrates external APIs and handles a wide range of customer inputs dynamically. Which strategies are appropriate when designing an AI agent for dynamic conversation management? (Choose two.)",
    options: [
      "Integrating a feedback loop from user interactions to iteratively improve agent behavior.",
      "Using rule-based logic as the primary framework to maintain consistency in agent decisions.",
      "Implementing retry logic for API failures to ensure robustness in external communications.",
      "Preferring hardcoded responses for frequent queries.",
    ],
    correct: [0, 2],
    multiCorrect: true,
  },
  {
    id: 32,
    question:
      "What benefits does a Kubernetes deployment offer over Slurm?",
    options: [
      "Kubernetes provides autoscaling, auto-restarts, dynamic task scheduling, error isolation with containers, and integrated monitoring.",
      "Kubernetes is the best option for both training and inference, offering advantages over traditional HPC schedulers.",
      "Kubernetes is more optimized for batch jobs to achieve high throughput.",
    ],
    correct: 0,
  },
  {
    id: 33,
    question:
      "When implementing tool orchestration for an agent that needs to dynamically select from multiple tools, which selection strategy provides the most reliable results?",
    options: [
      "Random dynamic tool selection with retry mechanisms and usage examples.",
      "LLM-based tool selection with structured tool descriptions and usage examples.",
      "Rule-based selection with predefined tool mappings and usage examples.",
      "Configuration-based tool selection with manual specifications and usage examples.",
    ],
    correct: 1,
  },
  {
    id: 34,
    question:
      "When analyzing throughput bottlenecks in a multi-modal agent processing text, images, and audio, which Triton configuration evaluations identify optimization opportunities? (Choose two.)",
    options: [
      "Analyze model ensemble pipelines for sequential dependencies and optimize inter-model data transfer.",
      "Profile GPU memory allocation patterns across modalities, implement model instance batching strategies.",
      "Deploy each modality on separate Triton instances.",
      "Use a single model instance per GPU.",
    ],
    correct: [0, 1],
    multiCorrect: true,
  },
  {
    id: 35,
    question:
      "A company plans to launch a multi-agent system that must serve thousands of users simultaneously. Which approach is most effective for achieving robust and scalable deployment?",
    options: [
      "Running agents without load balancing to reduce infrastructure complexity.",
      "Establishing a continuous monitoring framework to track system performance.",
      "Deploying all agents on a single server with ongoing performance monitoring.",
      "Orchestrating agents using containerization platforms, combined with load balancing and ongoing performance monitoring.",
    ],
    correct: 3,
  },
  {
    id: 36,
    question:
      "A team is evaluating multiple versions of an AI agent designed for customer support. Which practice is most important to ensure continuous refinement and optimal performance?",
    options: [
      "Comparing agents on isolated tasks without standardized benchmarking pipelines.",
      "Relying solely on offline benchmarks without incorporating live user feedback.",
      "Implementing an evaluation framework that quantifies task efficiency and incorporates human-in-the-loop feedback.",
      "Tuning model parameters once before deployment to maximize initial accuracy.",
    ],
    correct: 2,
  },
  {
    id: 37,
    question:
      "You are using an LLM-as-a-Judge to evaluate a RAG pipeline. What is the primary benefit of synthetically generating question-answer pairs?",
    options: [
      "Synthetically generated questions are more challenging and reveal deeper flaws in the RAG pipeline.",
      "Synthetic generation eliminates the need for any human validation of the RAG pipeline's output.",
      "Synthetically generated answers are inherently more accurate than those produced by the LLMs.",
      "Synthetic generation allows for systematic testing of the RAG pipeline across a wider range of scenarios and query types.",
    ],
    correct: 3,
  },
  {
    id: 38,
    question:
      "When analyzing user feedback patterns to improve a technical documentation agent, which evaluation methods effectively translate feedback into actionable optimization strategies? (Choose two.)",
    options: [
      "Collect broad user feedback as-is, enabling rapid accumulation of suggestions.",
      "Design iterative feedback loops with version tracking, A/B testing of improvements.",
      "Incorporate user suggestions rapidly to maximize responsiveness.",
      "Implement feedback categorization systems grouping issues by type with quantitative impact scoring.",
    ],
    correct: 1,
  },
  {
    id: 39,
    question:
      "After a series of adjustments in a supply chain agentic system, the agent has dramatically reduced shipping times and minimized costs, but the team is receiving complaints regarding delayed deliveries. Which metric is MOST important to prioritize?",
    options: [
      "The agent's ability to predict future demand fluctuations.",
      "The total cost savings achieved through the agent's optimization.",
      "The percentage of delivery times that fall within the acceptable delay window.",
      "The agent's adherence to the prescribed delivery schedules.",
    ],
    correct: 2,
  },
  {
    id: 40,
    question:
      "When implementing inter-agent communication for a distributed agentic system running across multiple NVIDIA GPU nodes, which message routing pattern provides the best balance of reliability and performance?",
    options: [
      "Database-based message queuing with polling.",
      "Direct TCP connections between all agent pairs.",
      "Event-driven message routing with distributed broker clusters.",
      "Centralized message broker with topic-based routing.",
    ],
    correct: 2,
  },
  {
    id: 41,
    question:
      "Your agent is generating inconsistent and contradictory statements. Which approach would be most suitable to improve the agent's output?",
    options: ["Employing Reflexion", "Increasing the number of generated plans", "Using Decomposition-First Planning", "Decreasing the length of prompts"],
    correct: 0,
  },
  {
    id: 42,
    question:
      "You're utilizing an LLM to translate complex technical documentation into multiple languages. The translations often lack nuance and fail to capture the original intent. What's the most effective strategy for improving the quality of the translations?",
    options: [
      "Training the LLM on a dataset of translated texts.",
      "Providing the LLM with guidance to 'translate the documents' without additional guidance.",
      "Providing the LLM with a glossary of key terms, concepts in all languages and the dataset of previously translated text.",
      "Providing the LLM with guidance to translate 'with high accuracy' without additional guidance.",
    ],
    correct: 2,
  },
  {
    id: 43,
    question:
      "After a series of adjustments in a supply chain agentic system, the agent has dramatically reduced shipping times and minimized costs, but the team is receiving a high volume of complaints from customers regarding delayed deliveries. Which metric is MOST important to prioritize when investigating this situation?",
    options: [
      "The agent's ability to predict future demand fluctuations, as accurate forecasting is crucial for effective logistics.",
      "The total cost savings achieved through the agent's optimization, which represents a significant financial benefit.",
      "The percentage of delivery times that fall within the acceptable delay window, considering customer satisfaction as a key factor.",
      "The agent's adherence to the prescribed delivery schedules, as it's demonstrably improving efficiency.",
    ],
    correct: 2,
  },
  {
    id: 44,
    question:
      "When analyzing user feedback patterns to improve a technical documentation agent, which evaluation methods effectively translate feedback into actionable optimization strategies? (Choose two.)",
    options: [
      "Collect broad user feedback as-is, enabling rapid accumulation of suggestions and diverse perspectives for potential future analysis.",
      "Design iterative feedback loops with version tracking, A/B testing of improvements, and regression monitoring to ensure changes enhance rather than degrade performance.",
      "Incorporate user suggestions rapidly to maximize responsiveness and demonstrate continuous adaptation to evolving user needs.",
      "Implement feedback categorization systems grouping issues by type (accuracy, clarity, completeness) with quantitative impact scoring and improvement prioritization matrices.",
    ],
    correct: [1, 3],
    multiCorrect: true,
  },
  {
    id: 45,
    question:
      "A customer service agent sometimes fails to complete multi-step workflows when APIs respond slowly or inconsistently. Which approach most effectively increases robustness when working with unreliable APIs?",
    options: [
      "Restrict available tools to reduce decision complexity.",
      "Add retries with exponential backoff and set request timeouts.",
      "Cache recent API results to limit unnecessary repeated calls.",
      "Adjust generation parameters to produce more predictable responses.",
    ],
    correct: 1,
  },
  {
    id: 46,
    question:
      "You are designing an AI agent for summarizing medical documents that include images and text as well. It must extract key information and recognize dates. Which feature is most critical for ensuring the agent performs well across multiple input and output formats?",
    options: [
      "Use of guardrails to filter out hallucinated content.",
      "Retry logic implementation to ensure robustness during API failures.",
      "Chain-of-thought prompting for reasoning accuracy.",
      "Multi-modal model integration to handle both text and vision inputs.",
    ],
    correct: 3,
  },
  {
    id: 47,
    question:
      "You're deploying a healthcare-focused agentic AI system that helps doctors make treatment recommendations based on patient records. The agent's reasoning is not exposed to users, and its decisions sometimes differ from clinical guidelines. What safety and compliance mechanisms should be in place? (Choose two.)",
    options: [
      "Allow overrides by human doctors to maintain accountability.",
      "Require model explainability or traceability for all outputs.",
      "Prioritize autonomous speed of decision over explainability.",
      "Exempt the model from compliance if it improves outcomes.",
      "Obfuscate decision logic to protect proprietary methods.",
    ],
    correct: [0, 1],
    multiCorrect: true,
  },
  {
    id: 48,
    question:
      "A company operates agent-based workloads in multiple data centers. They want to minimize latency for users in different regions, maintain continuous service during infrastructure upgrades, and keep operational costs predictable. Which deployment practice best supports low-latency, resilient, and cost-efficient agent operations at scale?",
    options: [
      "Schedule regular agent downtime for system updates and operational recalibration.",
      "Implement geo-distributed deployments with rolling updates and resource usage monitoring.",
      "Prioritize high-performance GPUs for all agents in geo-distributed deployments.",
      "Apply static infrastructure allocation with centralized resource usage monitoring at a single data center.",
    ],
    correct: 1,
  },
  {
    id: 49,
    question:
      "Your agent is designed to manage tasks through a service management API. The API responds with detailed event logs, but these logs contain both metadata and structured data. To ensure the agent correctly interprets and processes the data from these logs, what's the most prudent approach?",
    options: [
      "Employ a specialized parser that adheres to the API's documentation, to insure strict adherence to structured data.",
      "Employing a modular design that allows the agent to dynamically adjust its parsing logic.",
      "Using a human-in-the-loop approach, manually inspecting and interpreting each log entry.",
      "Employ a specialized parser that extracts all data fields, regardless of their type.",
    ],
    correct: 1,
  },
  {
    id: 50,
    question:
      "An enterprise AI system needs to maintain contextual information over multiple interactions with users. Which memory implementation approach would be MOST effective for managing both immediate context and long-term historical interactions within an agentic workflow?",
    options: [
      "Rely predominantly on the context window of the base LLM model to store all historical interactions with minimal external memory supplementation.",
      "Implement a hybrid memory system with short-term memory for immediate context and a vector database for long-term memory with semantic retrieval capabilities.",
      "Use a static prompt template with fixed context for all interactions, thereby providing memory information in that form across conversation sessions.",
      "Store all user interactions in a simple key-value database which will by default provide organization and retrieval strategy for historical context management.",
    ],
    correct: 1,
  },
  {
    id: 51,
    question:
      "An AI agent is being built to execute database queries, generate reports, and interact with cloud services. Which design choice best improves long-term scalability and maintainability when adding new tools?",
    options: [
      "Hardcoding each new tool directly into the agent's core logic.",
      "Using a plugin-based system with uniform tool registration and invocation.",
      "Implementing all tools inside a single large function with many if-else branches.",
      "Storing tool parameters as unstructured text parsed at runtime.",
    ],
    correct: 1,
  },
  {
    id: 52,
    question:
      "When analyzing suboptimal agent response quality after deployment, which parameter tuning evaluation methods effectively identify the optimal configuration adjustments? (Choose two.)",
    options: [
      "Design ablation studies systematically varying individual parameters while holding others constant to isolate each parameter's impact on agent behavior and performance.",
      "Apply identical parameter settings across all agent types and tasks, promoting consistency and simplifying comparison across different use cases.",
      "Implement A/B testing frameworks comparing temperature, top-k, and top-p variations while measuring task-specific quality metrics and user satisfaction scores.",
      "Use production traffic directly for parameter experiments, enabling real-world insights and faster identification of impactful settings.",
      "Randomly adjust all parameters simultaneously, allowing for broader exploration of the parameter space in a shorter time frame.",
    ],
    correct: [0, 2],
    multiCorrect: true,
  },
  {
    id: 53,
    question:
      "When evaluating an agent's integration with external tools and APIs for data retrieval and action execution, which analysis approaches effectively identify reliability and performance issues? (Choose two.)",
    options: [
      "Implement comprehensive API call tracing with latency measurement, success rates per endpoint, and correlation analysis between tool failures and task completion.",
      "Use static API endpoints and parameters configured during development, allowing consistent and effective agent integration across predictable workflows.",
      "Connect to external APIs with standard procedures and monitor request and response exchanges to isolate the analysis of integration reliability and effectiveness.",
      "Design integration tests simulating API version changes, schema modifications, and backward compatibility scenarios to ensure reliable tool connections across updates.",
    ],
    correct: [0, 3],
    multiCorrect: true,
  },
  {
    id: 54,
    question:
      "A recently deployed agent sometimes outputs empty responses under heavy system load. Which system-level signal is most useful for diagnosing this issue?",
    options: [
      "Number of tool function arguments returned per query.",
      "Retrieval similarity thresholds in vector search.",
      "GPU memory utilization and server-side inference logs.",
      "Prompt injection detection rate over time.",
    ],
    correct: 2,
  },
  {
    id: 55,
    question:
      "You're evaluating the performance of a tool-using agent (e.g., one that issues API calls or executes functions). From the list below, what are two important features to evaluate? (Choose two.)",
    options: ["Tool use accuracy", "Tokens per second", "Tool use rate", "Task completion rate"],
    correct: [0, 2],
    multiCorrect: true,
  },
  {
    id: 56,
    question:
      "You are tasked with deploying a multi-modal agentic system that must respond to user queries with minimal latency while maintaining guardrails for safe and context-aware interactions. Which of the following configurations best leverages NVIDIA's AI stack to meet these requirements?",
    options: [
      "Integrate NeMo Guardrails, configure NIM microservices for optimized inference, use TensorRT-LLM for deployment, and profile the system using Triton Inference Server with multi-modal support.",
      "Integrate NeMo Guardrails, use Omniverse to generate synthetic data, configure NIM microservices for optimized inference, use TensorRT-LLM for deployment, and profile the system using NeMo Agent Toolkit for multi-modal support.",
      "Use NeMo Guardrails for safety, deploy the model with Triton Inference Server using default settings, and rely on hardware accelerators like GPU/TPU inference for cost efficiency.",
      "Use NIM microservices for deployment, optionally use NeMo Guardrails unless one wants to minimize the inference overhead.",
    ],
    correct: 0,
  },
  {
    id: 57,
    question:
      "You are building a customer-support chatbot that fetches user account data from an external billing API. During testing, the API sometimes returns timeouts or 500 errors. You want the agent to be resilient—retrying when appropriate but failing gracefully if the service is down. Which strategy best handles intermittent failures in API calls while still ensuring a good user experience?",
    options: [
      "Retry requests with a consistent short delay after each failure and notify the user as each retry takes place.",
      "Implement exponential-backoff retries with a circuit breaker, and return a clear message to the user if all retries fail.",
      "Return a standard fallback message on failures to maintain conversation flow and reduce the risk of service interruptions for the user.",
      "Schedule retries using a fixed delay for all failure types, maintaining predictable timing and user notifications after each attempt.",
    ],
    correct: 1,
  },
  {
    id: 58,
    question:
      "What is RAG Fusion primarily designed to achieve?",
    options: [
      "Creating a separate, dedicated database for storing all the retrieved chunks.",
      "Minimizing the need for retrieval, allowing the LLM to generate responses directly from its internal knowledge.",
      "Blending information from multiple retrieved chunks into a single response generated by the LLM.",
      "Automatically translating and integrating all retrieved chunks into a single language.",
    ],
    correct: 2,
  },
  {
    id: 59,
    question:
      "An AI Engineer is experimenting with data retrieval performance within a RAG system. Which of the following techniques is most likely to improve the quality of the retrieved chunks?",
    options: [
      "Adding clarifying keywords and synonyms to the original query to broaden the search.",
      "Truncating long queries to fit within the LLM's context window.",
      "Using a single, highly specific keyword to guarantee a precise match.",
      "Directly feeding the original query to the LLM without any modification.",
    ],
    correct: 0,
  },
  {
    id: 60,
    question:
      "An agent is tasked with solving a series of complex mathematical problems that require external tools to find information. It often struggles to keep track of intermediate steps and reasoning. Which prompting technique would be MOST effective in improving the agent's clarity and reducing errors in its reasoning?",
    options: ["ReAct", "Symbolic Planning", "Zero-shot CoT", "Multi-Plan Generation"],
    correct: 0,
  },
  {
    id: 61,
    question:
      "You are designing an AI-powered drafting assistant for contract lawyers. The assistant suggests standard clauses and highlights potential risks based on past agreements. Senior attorneys must review, accept, modify, or reject each suggestion, see why a clause was recommended, and provide feedback to help improve the assistant. Which design feature is most critical for enabling effective human-in-the-loop oversight, transparency, and trust?",
    options: [
      "Display suggested clauses with links to additional details about provenance and risk highlighting in a side panel, allowing users to access more context as needed.",
      "Insert suggested clauses into the draft and highlight changes for review at the end, inviting users to provide detailed feedback on clauses they wish to flag for improvement.",
      "Present batch \"accept all\" or \"reject all\" controls for suggested clauses, with explanations and feedback collected in a summary report after draft review.",
      "Show inline \"why\" explanations for each suggestion, highlight precedent and risk factors, and include accept/modify/reject controls with immediate feedback capture for model refinement.",
    ],
    correct: 3,
  },
  {
    id: 62,
    question:
      "When evaluating a customer service agent's resilience to API failures and network issues, which analysis methods effectively identify weaknesses in error handling and retry mechanisms? (Choose two.)",
    options: [
      "Analyze retry logic for exponential backoff patterns, retry limits, and circuit breaker integration to prevent cascading failures in distributed systems.",
      "Implement retry mechanisms that standardize recovery attempts across scenarios, emphasizing consistency in handling errors.",
      "Use fixed retry intervals to avoid the pitfalls of dynamic tuning, keeping retry timing consistent across different error conditions.",
      "Test under normal network conditions to establish baseline behavior, comparing results against production performance during degraded service scenarios.",
      "Conduct failure injection testing with varied error types (timeouts, rate limits, malformed responses) while monitoring recovery patterns and fallback behavior.",
    ],
    correct: [0, 4],
    multiCorrect: true,
  },
  {
    id: 63,
    question:
      "When analyzing memory-related performance degradation in agents handling extended customer support sessions, which evaluation methods effectively identify optimization opportunities for context retention? (Choose two.)",
    options: [
      "Clear memory after each interaction and reset session state, removing historical context needed for personalized tasks to identify optimization opportunities.",
      "Profile memory access patterns by measuring retrieval latency, relevance scoring accuracy, and storage efficiency while monitoring context window utilization to identify optimization opportunities.",
      "Use fixed memory allocation including all conversation types, topic changes, and user needs, allowing adaptive-free observation of interaction patterns to identify optimization opportunities.",
      "Implement sliding window analysis comparing context compression strategies, summarization quality, and information preservation rates across varying conversation lengths to identify optimization opportunities.",
      "Store all conversation history including all interactions, allowing adaptive-free observation of data to identify optimization opportunities.",
    ],
    correct: [1, 3],
    multiCorrect: true,
  },
  {
    id: 64,
    question:
      "Which memory architecture is most appropriate for an agent that must track conversation flow and remember user preferences across multiple interactions?",
    options: [
      "Implement shared memory using NVSHMEM for short- and long-term context.",
      "Single unified memory store with time-based expiration policies.",
      "Hierarchical memory with separate short-term and long-term layers.",
      "Distributed memory with full replication across all nodes.",
    ],
    correct: 2,
  },
  {
    id: 65,
    question:
      "When evaluating an agent's degrading response times under increasing load, which analysis approach most effectively identifies scalability bottlenecks and optimization opportunities?",
    options: [
      "Track average response time while examining stage-by-stage processing metrics, resource usage trends, and potential components impacting scalability.",
      "Test at fixed, low load levels while using controlled stress scenarios to compare with performance under production-like traffic patterns.",
      "Profile each major system stage using distributed tracing, analyze GPU utilization with NVIDIA performance tools, and map queuing delays against varying workload patterns.",
      "Focus on model inference duration while also measuring preprocessing time, tool-calling latency, and response formatting in the end-to-end pipeline.",
    ],
    correct: 2,
  },
  {
    id: 66,
    question:
      "You're employing an LLM to automate the generation of email responses for a customer service team. The generated responses frequently miss the mark, failing to address the customer's underlying concerns. What's the most crucial element to add to the prompt to enhance the quality of the email responses?",
    options: [
      "Instructing the LLM with a detailed prompt containing instructions on how to format and compose the response in an easy-to-understand structure.",
      "Instructing the LLM to use a simple template for all email replies before generating a response.",
      "Instructing the LLM to \"understand the customer's issue\" before generating a response.",
      "Instructing the LLM to provide a response that \"is the most helpful\" before generating a response.",
    ],
    correct: 3,
  },
  {
    id: 67,
    question:
      "A financial services company is deploying a multi-agent customer service system consisting of three specialized agents: a reasoning LLM for complex queries, an embedding agent for document retrieval, and a re-ranking agent for result optimization. The system experiences significant traffic variations, with peak loads during business hours (10x normal traffic) and minimal usage overnight. Which NVIDIA infrastructure approach would provide the MOST cost-effective and scalable deployment solution for this variable-load multi-agent system?",
    options: [
      "Deploy agents directly on individual NVIDIA RTX workstations without containerization or orchestration, relying on load balancers with round-robin for traffic distribution.",
      "Deploy each agent on dedicated NVIDIA DGX systems with manual scaling based on previous days traffic predictions and static resource allocation for peak loads.",
      "Deploy NVIDIA NIM microservices on Kubernetes with auto-scaling capabilities, utilizing NVIDIA NIM Operator for lifecycle management and horizontal pod autoscaling based on custom metrics.",
      "Deploy all agents on a single large GPU instance without containerization, scaling compute by upgrading to larger GPU instances when needed.",
    ],
    correct: 2,
  },
  {
    id: 68,
    question:
      "After deploying a financial assistant agent, users report occasional inconsistencies in how transactions are categorized. What is the best first step for diagnosing the issue?",
    options: [
      "Review and modify prompt temperature to enhance precision.",
      "Review and retrain the model with more financial datasets.",
      "Implement agent memory reset after each session.",
      "Review tool call inputs and outputs in recent session logs.",
    ],
    correct: 3,
  },
  {
    id: 69,
    question:
      "When analyzing throughput bottlenecks in a multi-modal agent processing text, images, and audio, which Triton configuration evaluations identify optimization opportunities? (Choose two.)",
    options: [
      "Analyze model ensemble pipelines for sequential dependencies, identify parallelization opportunities, and optimize inter-model data transfer using Triton's scheduler.",
      "Profile GPU memory allocation patterns across modalities, implement model instance batching strategies, and tune concurrency limits to maximize utilization.",
      "Deploy each modality on separate Triton instances, allowing Triton to automatically manage ensemble coordination, shared memory usage, and pipeline integration.",
      "Use a single model instance per GPU, allowing Triton to automatically optimize concurrency, batching, and multi-instance settings for throughput scaling.",
    ],
    correct: [0, 1],
    multiCorrect: true,
  },
  {
    id: 70,
    question:
      "In designing an AI workflow which of the following best describes a comprehensive approach to improving the performance of AI agents?",
    options: [
      "Implementing benchmarking pipelines, deploying physical agents and monitoring user engagement metrics.",
      "Implementing benchmarking pipelines, collecting user feedback, and tuning model parameters iteratively.",
      "Implementing benchmarking pipelines and incorporating a dynamic dataset for a real-time fall-back.",
      "Monitoring agents' throughput and time-to-first-token from the scoring engine.",
    ],
    correct: 1,
  },
  {
    id: 71,
    question:
      "A medical diagnostics company is deploying an agentic AI system to assist radiologists in analyzing medical imaging. The system must provide AI-generated preliminary diagnoses and allow radiologists to review, modify, and approve all recommendations before patient treatment decisions. Which approach would best balance human oversight with AI support in a safety-critical setting?",
    options: [
      "Design an interactive system that presents AI analysis with confidence scores, allows radiologists to review evidence, modify recommendations, and requires explicit approval with documented reasoning for all decisions.",
      "Design a fully automated system that presents final diagnoses to radiologists for simple approval or rejection, minimizing human interaction to improve efficiency and reduce decision fatigue.",
      "Design a passive monitoring system where AI makes decisions while humans observe without ability to intervene, focusing on post-decision evaluation and quality assurance.",
      "Design a simple notification system that alerts radiologists only when AI confidence falls below predetermined thresholds, otherwise allowing autonomous operation without human review or documentation.",
    ],
    correct: 0,
  },
  {
    id: 72,
    question:
      "When analyzing a customer service agentic system's performance degradation over time, which evaluation approach most effectively identifies opportunities for human-in-the-loop intervention to improve agent decision-making transparency and user trust?",
    options: [
      "Monitor only final task completion rates without examining intermediate decision points, user interaction patterns, or opportunities for beneficial human intervention during agent conversations.",
      "Implement multi-stage evaluation tracking decision confidence scores, user correction patterns, intervention effectiveness, and explainability-satisfaction correlations.",
      "Rely on periodic manual reviews of random conversation samples without systematic tracking of intervention effectiveness, decision transparency, or user trust indicators.",
      "Collect anonymous usage statistics without capturing specific decision rationales, user feedback on agent explanations, or transparency improvement opportunities for trust building.",
    ],
    correct: 1,
  },
  {
    id: 73,
    question:
      "You are using an LLM-as-a-judge to evaluate a RAG pipeline. What is the primary benefit of synthetically generating question-answer pairs, rather than relying solely on human-created test cases?",
    options: [
      "Synthetically generated questions are more challenging and reveal deeper flaws in the RAG pipeline.",
      "Synthetic generation eliminates the need for any human validation of the RAG pipeline's output.",
      "Synthetically generated answers are inherently more accurate than those produced by the LLM.",
      "Synthetic generation allows for systematic testing of the RAG pipeline across a wider range of scenarios and query types.",
    ],
    correct: 3,
  },
  {
    id: 74,
    question:
      "An autonomous vehicle company operates a multi-agent AI system across its fleet to process real-time sensor data, make driving decisions, and communicate with cloud infrastructure. Which monitoring and observability approach would BEST meet these fleet-scale, safety-critical requirements?",
    options: [
      "Deploy NVIDIA NIM microservices with Prometheus integration, NVIDIA Nsight Systems profiling, and Kubernetes-native monitoring to provide detailed metrics, profiling, and container orchestration observability across the entire stack.",
      "Implement layered application monitoring with distributed tracing, synthetic transaction monitoring, and custom dashboards to capture complex dependencies, transaction flow, and service-level performance trends across the fleet.",
      "Implement comprehensive APM solutions with real-time baselines, automated root cause analysis, and fleet management integration to coordinate operational insights and performance management across thousands of vehicles.",
      "Deploy enterprise telemetry using OpenTelemetry standards with machine learning-based anomaly detection, custom performance visualization, and automated alerting to deliver predictive operational insights and support proactive maintenance actions.",
    ],
    correct: 0,
  },
  {
    id: 75,
    question:
      "You are developing a RAG solution and have decided to use a classifier branch as part of your semantic guardrail system to assess the risk of generated text. Which of the following is a key benefit of using a classifier branch compared to solely relying on prompt filtering?",
    options: [
      "Since a classifier branch does not require training, it can identify potentially problematic content.",
      "Classifier branches primarily focus on detecting factual inaccuracies, rather than stylistic or harmful language.",
      "Classifier branches can automatically adapt to new forms of harmful language.",
      "Classifier branches eliminate the need for human oversight, thereby automating the safety process.",
    ],
    correct: 2,
  },
  {
    id: 76,
    question:
      "When analyzing safety violations in a financial advisory agent that uses NeMo Guardrails, which evaluation approach best identifies gaps in guardrail coverage?",
    options: [
      "Apply keyword- and rule-based validation methods to confirm compliance with policy terms and common risk conditions.",
      "Analyze violation patterns, test adversarial prompts, measure guardrail activation, and align policies with observed failures.",
      "Conduct functional testing with representative user inputs to verify policy enforcement in typical usage scenarios.",
      "Monitor overall guardrail activations and system logs to assess operational behavior across different interaction types.",
    ],
    correct: 1,
  },
  {
    id: 77,
    question:
      "A workflow agent has a spike in failed tool calls after a recent API schema update, and many outputs are irrelevant or incomplete. Which maintenance task should be prioritized to restore accurate behavior?",
    options: [
      "Reset the agent's long-term memory and reinitialize logs.",
      "Update the tool function specifications and re-test action sequences.",
      "Increase model temperature to encourage tool exploration.",
      "Reduce tool retrieval vector similarity threshold to broaden context.",
    ],
    correct: 1,
  },
  {
    id: 78,
    question:
      "Your team has deployed a generative agent for internal HR use, including summarizing candidate resumes and suggesting interview questions. After deployment, you've noticed that the model occasionally associates certain names or genders with particular roles. Which mitigation strategy is the most effective and scalable for reducing this type of bias in agent outputs?",
    options: [
      "Adjust system prompts to explicitly instruct the agent to avoid assumptions based on demographic features.",
      "Randomly replace names in prompts to reduce identity correlation.",
      "Add more training examples to the training dataset and re-train the model.",
      "Implement guardrails to prevent outputs referencing protected attributes.",
    ],
    correct: 0,
  },
  {
    id: 79,
    question:
      "A financial services agentic AI is being used to automate initial customer onboarding. The agent is completing the process efficiently and accurately, but reviews of its conversations reveal it often uses overly formal and complex language that confuses customers. Which type of evaluation is best suited to address this issue?",
    options: [
      "Controlled user testing sessions to collect user feedback on the clarity and tone of responses.",
      "Compliance review of the agent's access to regulatory guidelines and policy documentation.",
      "Continuous user feedback collection, specifically gathering subjective assessments of the agent's communication style.",
      "Statistical analysis of the agent's decision-making patterns to detect overly formal and complex response choices.",
    ],
    correct: 0,
  },
  {
    id: 80,
    question:
      "You are developing a RAG solution and have decided to use a classifier branch as part of your semantic guardrail system to assess the risk of generated text. Which of the following is a key benefit of using a classifier branch compared to solely relying on prompt filtering?",
    options: [
      "Since a classifier branch does not require training, it can identify potentially problematic content.",
      "Classifier branches primarily focus on detecting factual inaccuracies, rather than stylistic or harmful language.",
      "Classifier branches can automatically adapt to new forms of harmful language.",
      "Classifier branches eliminate the need for human oversight, thereby automating the safety process.",
    ],
    correct: 2,
  },
  {
    id: 81,
    question:
      "Your team notices a spike in failed tool calls from a deployed workflow agent after a recent API schema update. The agent still returns outputs, but many are irrelevant or incomplete. Which maintenance task should be prioritized to restore accurate behavior?",
    options: [
      "Reset the agent's long-term memory and reinitialize logs.",
      "Update the tool function specifications and re-test action sequences.",
      "Increase model temperature to encourage tool exploration.",
      "Reduce tool retrieval vector similarity threshold to broaden context.",
    ],
    correct: 1,
  },
  {
    id: 82,
    question:
      "A medical diagnostics company is deploying an agentic AI system to assist radiologists in analyzing medical imaging. The system must provide AI-generated preliminary diagnoses and allow radiologists to review, modify, and approve all recommendations before patient treatment decisions. Human expertise should remain central, with detailed records of human interventions and decision rationales maintained. Which approach would best balance human oversight with AI support in a safety-critical setting?",
    options: [
      "Design an interactive system that presents AI analysis with confidence scores, allows radiologists to review evidence, modify recommendations, and requires explicit approval with documented reasoning for all decisions.",
      "Design a fully automated system that presents final diagnoses to radiologists for simple approval or rejection, minimizing human interaction to improve efficiency and reduce decision fatigue.",
      "Design a passive monitoring system where AI makes decisions while humans observe without ability to intervene, focusing on post-decision evaluation and quality assurance.",
      "Design a simple notification system that alerts radiologists only when AI confidence falls below predetermined thresholds, otherwise allowing autonomous operation without human review or documentation.",
    ],
    correct: 0,
  },
  {
    id: 83,
    question:
      "A Lead AI Architect at a global financial institution is designing a multi-agent fraud detection system using an agentic AI framework. The system must operate in real time, with distinct agents working collaboratively to monitor and analyze transactional patterns across accounts, retain and share contextual information over time, and escalate suspicious behaviors to a human fraud analyst when needed. Which architectural approach enables intelligent specialization, shared memory, and inter-agent coordination in a dynamic and evolving threat environment?",
    options: [
      "Design a modular multi-agent system where individual agents collaborate asynchronously using shared memory and structured messaging.",
      "Design a multi-agent system where individual agents collaborate synchronously using shared memory and structured messaging.",
      "Design a centralized rule-based service that checks all transactions against static fraud indicators and sends alerts when thresholds are exceeded.",
      "Design an agentic workflow where each agent acts independently on isolated data slices with no inter-agent communication to reduce latency and model complexity.",
      "Design monolithic LLM-based agents that handle all fraud detection tasks within a single loop, without modular roles or multi-agent coordination.",
    ],
    correct: 0,
  },
  {
    id: 84,
    question:
      "Which two coordination patterns are MOST effective for implementing a multi-agent system where agents have different specializations (Research Analyst, Content Writer, Quality Validator)?",
    options: [
      "Sequential pipeline coordination with crew-based structured handoffs.",
      "Peer-to-peer coordination with consensus mechanisms.",
      "Random task distribution with load balancing.",
      "Hierarchical coordination with crew-based task delegation.",
    ],
    correct: [0, 3],
    multiCorrect: true,
  },
];