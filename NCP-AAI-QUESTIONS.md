# NCP-AAI Practice Questions

NVIDIA-Certified Professional Agentic AI exam preparation questions.

---

## 1. Multi-Agent Workflow Optimization

An AI engineer is evaluating an underperforming multi-agent workflow built with NVIDIA agentic frameworks.

Which analysis approach most effectively identifies optimization opportunities in agent coordination and communication patterns?

- Monitor workflow completion times using analysis that subsumes inter-agent communication costs, coordination overhead, and task allocation balance.
- Focus exclusively on individual agent accuracy without analyzing workflow-level efficiency, coordination costs, or overall system throughput.
- Evaluate agents individually, allowing the toolkit to automatically infer interaction effects, communication patterns, and emergent behaviors from coordination.
- **Trace agent interaction patterns using observability features, measure communication overhead, identify redundant operations, and analyze task distribution efficiency.** ✓

---

## 2. Agentic AI System Evaluation

You are tasked with comparing two agentic AI systems — System A and System B — both designed to generate marketing copy. You've run identical prompts and have recorded the generated outputs.

To objectively assess which system is performing better, what is the most appropriate approach?

- Measure the click-through rate for each system's marketing copy as the primary indicator of performance.
- Implement a human-in-the-loop to subjectively rate each output on a scale of 1 to 5 based on the user's personal preference.
- **Implement a benchmark pipeline that automatically compares the generated outputs using metrics like relevance, creativity, and grammatical correctness.** ✓
- Gather ratings from a panel of users, with each rating marketing copy on a 1 to 5 scale for overall impression of relevance, creativity, and grammatical correctness.

---

## 3. Parameter Tuning Evaluation Methods

When analyzing suboptimal agent response quality after deployment, which parameter tuning evaluation methods effectively identify the optimal configuration adjustments? *(Choose two.)*

- **Design ablation studies systematically varying individual parameters while holding others constant to isolate each parameter's impact on agent behavior and performance.** ✓
- Apply identical parameter settings across all agent types and tasks, promoting consistency and simplifying comparison across different use cases.
- **Implement A/B testing frameworks comparing temperature, top-k, and top-p variations while measuring task-specific quality metrics and user satisfaction scores.** ✓
- Use production traffic directly for parameter experiments, enabling real-world insights and faster identification of impactful settings.
- Randomly adjust all parameters simultaneously, allowing for broader exploration of the parameter space in a shorter time frame.

---

## 4. Brand Voice Adherence Metric

An agentic AI is tasked with generating marketing copy for various campaigns. It's consistently producing high-quality text and generating significant engagement. However, qualitative feedback from brand managers indicates that the content lacks a distinct "brand voice" and feels generic.

Which of the following metrics would be most valuable for evaluating the agent's adherence to the brand's established voice?

- A metric assessing the agent's ability to tailor its language and messaging for distinct audience segments based on demographic and psychographic data.
- **A metric evaluating the agent's textual similarity to a formalized brand style guide, analyzing factors such as tone, approved vocabulary, and prescribed sentence structures.** ✓
- A metric tracking the average word count and sentence length of the agent's copy, focusing on stylistic efficiency as a potential proxy for brand alignment.
- A metric quantifying how frequently the agent's output is shared, liked, or reposted on major social platforms, using this as an indicator of effective brand representation.

---

## 5. Global Scalable Deployment

A social media company wants to expand its agentic system to support global users, minimize downtime, and ensure smooth operation during usage spikes. The team is considering various deployment and scaling strategies to achieve these goals.

Which solution most effectively supports reliable and scalable deployment for an agentic AI system serving a global user base?

- Integrating MLOps practices for continuous deployment and rapid model updates in production environments
- **Designing a distributed system architecture with multi-region deployment, automated failover, and dynamic resource allocation** ✓
- Implementing containerization with Docker to simplify deployment and streamline updates
- Using hardware profiling to optimize agent workloads for efficient GPU utilization across all deployed instances

---

## 6. Real-World AI Agent Enhancement

A development team is building a customer support agent that interacts with users via chat. The agent must reliably fetch information from external databases, handle occasional API failures without crashing, and improve its responses by learning from user feedback over time.

Which of the following tasks is most critical when enhancing an AI agent to handle real-world interactions and improve over time?

- Applying a well-structured training process with foundational generative models and prompt engineering
- Utilizing internal knowledge bases to support agent responses alongside external APIs
- **Implementing retry logic for error handling and integrating user feedback loops for iterative improvement** ✓
- Designing conversation flows that provide consistent responses based on predefined scripts

---

## 7. Tool-Using Agent Evaluation

You're evaluating the performance of a tool-using agent (e.g., one that issues API calls or executes functions).

From the list below, what are two important features to evaluate? *(Choose two.)*

- **Tool use accuracy** ✓
- Tokens per second
- **Tool use rate** ✓
- Task completion rate

---

## 8. Prompt Engineering for Multi-Step Tasks

When analyzing an agent's failure to complete multi-step financial analysis tasks, which evaluation approach best identifies prompt engineering improvements needed for reliable task decomposition and execution?

- **Implement systematic prompt testing with chain-of-thought reasoning templates, step-by-step decomposition analysis, and success rate tracking across tasks of varying complexity.** ✓
- Focus primarily on response speed optimization as a primary focus over reasoning quality, step completion accuracy, and prompt clarity for complex analytical requirements.
- Test only final output accuracy as this will automatically include intermediate reasoning steps, decomposition quality, and prompt structure effectiveness for complex workflows.
- Rely on generic prompt templates which are by default already optimized for general use, instead of tailoring them to financial terminology, calculation needs, or specialized multi-step analysis patterns.

---

## 9. CPU Alert Detection Failure

A recently deployed Agentic AI system designed for automated incident response within a cloud infrastructure has been consistently failing to identify and resolve 'high-priority' alerts — specifically, those related to increased CPU utilization across several virtual machines. Initial logs show the agent is primarily focusing on alerts with related network traffic spikes, ignoring the CPU metrics.

What is the most appropriate initial step for a senior Agentic AI engineer to take to resolve this issue, considering the system's reliance on benchmarking and iterative improvement?

- Review the agent's evaluation framework, focusing on the defined benchmarks used to assess its response efficiency and impact on overall system performance.
- Replace the agent's underlying AI model with a more powerful, general-purpose machine learning engine as a first step in investigating current benchmarks.
- Implement a new synthetic data set containing a wide variety of CPU load profiles to train the agent's decision-making model.
- **Review the agent's sensitivity thresholds, focusing on CPU utilization alerts to maximize detection accuracy.** ✓

---

## 10. Kubernetes + NVIDIA GPU Deployment

You are deploying a multi-agent customer-support system on Kubernetes using NVIDIA GPU nodes and Triton Inference Server. Traffic spikes during product launches. You need <100ms response times, zero downtime, automatic GPU scaling, and full monitoring.

Which deployment setup best achieves cost-effective, reliable, low-latency scaling?

- Set up one mixed GPU node pool with Cluster Autoscaler min=0, scale by network throughput, monitor via metrics-server and logs, and skip readiness probes for fast startup.
- Place GPU pods on on-demand nodes in one zone, disable Cluster Autoscaler, run a fixed pod count for bursts, scale on CPU usage, and monitor with default health checks.
- **Deploy GPU pods in a node pool spanning all zones, mix GPU types, enable Cluster and Horizontal Pod Autoscalers using Prometheus GPU and latency metrics, and monitor with NVIDIA DCGM and Grafana.** ✓
- Use spot-instance node pools across zones, enable Cluster Autoscaler with capped nodes, scale on memory usage, and monitor with logs and cluster events.

---

## 11. Inconsistent AI Agent Performance

An engineer has created a working AI agent solution providing helpful services to users. However, during live testing, the AI agent does not perform tasks consistently.

Which two potential solutions might help with this issue? *(Choose two.)*

- Remove schema validations and assertions on tool outputs to avoid inconsistency.
- Increase randomness (e.g., temperature) and remove fixed seeds to avoid determinism.
- **Identify where dividing the tasks into subtasks and handling them by multiple agents can help.** ✓
- **Refine the prompt given to the AI Agent; be clear on objectives** ✓

---

## 12. Scaling Agentic Workloads on NVIDIA Infrastructure

Which two deployment patterns are MOST suitable for scaling agentic workloads on NVIDIA Infrastructure? *(Choose two.)*

- Bare metal deployment with manual resource allocation
- Static virtual machine deployment with fixed resources
- Serverless deployment without GPU acceleration
- **Containerized deployment with NIM (NVIDIA Inference Microservices)** ✓
- **Kubernetes orchestration with Horizontal Pod Autoscaling (HPA)** ✓

---

## 13. Autonomous Agent vs Predefined Workflow

In the context of agent development, how does an autonomous agent differ from a predefined workflow when applied to complex enterprise tasks?

- Agents optimize for execution speed under fixed input-output mappings, while workflows prioritize goal alignment through adaptive reasoning and memory mechanisms.
- **Workflows provide deterministic task sequencing with conditional branching, while agents adapt decisions dynamically based on goals, context, and environment feedback.** ✓
- Workflows emphasize parallelism and distributed coordination of processes, while agents emphasize serialization and isolated problem solving.

---

## 14. Cost-Optimized Scaling for Mixed-Complexity Workloads

An e-commerce platform is implementing an AI-powered customer support system that handles inquiries ranging from simple FAQ responses to complex product recommendations and technical troubleshooting. The system experiences unpredictable traffic patterns with sudden spikes during sales events and varying complexity requirements. Simple questions comprise the majority of requests but require minimal compute, while complex product recommendations need sophisticated reasoning. The company wants to optimize costs while maintaining service quality across all query types.

Which approach would provide the MOST cost-optimized scaling strategy for this variable-workload, mixed-complexity environment?

- Deploy specialized NVIDIA NIM microservices using a single large model configuration that handles all agent functions on high-capacity GPUs, with auto-scaling infrastructure that maintains constant resource allocation across all traffic patterns.
- Deploy specialized NVIDIA NIM microservices on CPU-optimized infrastructure with auto-scaling capabilities to minimize hardware costs, while accepting longer inference times for cost optimization benefits.
- **Deploy specialized NVIDIA NIM microservices with an LLM router to dynamically route requests to appropriate models based on complexity, combined with auto-scaling infrastructure that scales different model types independently.** ✓
- Deploy multiple specialized NVIDIA NIM microservices with identical high-capacity models across all available GPUs, implementing auto-scaling infrastructure without request complexity differentiation or dynamic model selection capabilities.

---

## 15. Multi-Agent State Management Analysis

When evaluating coordination failures in a multi-agent system managing distributed manufacturing workflows, which analysis approach best identifies state management and planning synchronization issues?

- Monitor agent outputs individually to confirm local correctness and examine results of specific workflow steps.
- **Deploy distributed state tracing across agents, analyze transition timing, study communication overhead, and verify synchronization accuracy.** ✓
- Assess synchronization methods during design reviews and use simulations to evaluate coordination across representative workflow scenarios.
- Track workflow throughput and task completions to measure performance trends and highlight workflow outcomes.

---

## 16. LLM-as-a-Judge High Similarity Scores

You are evaluating your RAG pipeline. You notice that the LLM-as-a-Judge consistently assigns high similarity scores to responses that contain irrelevant information.

What should you investigate as the most likely potential cause with the least development effort?

- The temperature setting used by the LLM during response generation.
- The size of the knowledge base used to power the RAG pipeline.
- The quality of the synthetic questions used for evaluation.
- **The prompt used to instruct the LLM-as-a-Judge to assess the response.** ✓

---

## 17. NVIDIA Framework for Better Agent Training

What NVIDIA framework can be used to train a better agent?

- NeMo-RL
- NeMo Guardrails
- **TensorRT-LLM** ✓

---

## 18. Multi-Modal Agent Performance Bottlenecks

When analyzing performance bottlenecks in a multi-modal agent processing customer support tickets with text, images, and voice inputs, which evaluation approach most effectively identifies optimization opportunities?

- Measure total response time as this analyzes aggregated performance trends across modalities, model loading times, and opportunities for parallel execution.
- **Profile end-to-end latency across modalities, measure model switching overhead, analyze batch processing opportunities, and evaluate Triton's dynamic batching for multi-modal workloads.** ✓
- Optimize each modality independently using dedicated profiling of cross-modal interactions, shared resource constraints, and pipeline execution strategies.
- Extend evaluation to accuracy and quality metrics, incorporating resource usage patterns, latency observations, and their impact on user experience.

---

## 19. Tool Invocation Prompt Design

You are designing a virtual assistant that helps users check weather updates via external APIs. During testing, the agent frequently calls the incorrect tools, often hallucinating endpoints or returning incorrect formats. You suspect the prompt structure might be the root cause of these failures.

Which prompt design best supports consistent tool invocation in this agent?

- Rely on the agent's internal knowledge to infer tool usage
- Include tool names in natural language but without parameter examples
- Provide only a generic system instruction with no examples
- **Use structured prompt templates with few-shot tool usage examples** ✓

---

## 20. Production Agentic AI Deployment Practices

A company is deploying a multi-agent AI system to handle large-scale customer interactions. They want to ensure the system is highly available, cost-effective, and scalable across multiple NVIDIA GPUs using container orchestration tools.

Which practice is most crucial for successfully deploying and scaling an agentic AI system in production?

- Use a static assignment of requests across agents to maintain consistent agent operation and simplify coordination while scaling infrastructure resources as needed.
- Optimize GPU utilization frameworks with workload optimization separate from cost analysis, prioritizing resource performance for peak load scenarios in deployment.
- Deploy agents on a single machine to obtain a dimensioning baseline and thereby reduce setup complexity before expanding system scope.
- **Implementing automated workload management and resource scheduling frameworks to optimize GPU utilization and maintain service availability.** ✓

---

## 21. Orchestration Methods for Complex Agentic Workflows

Which two orchestration methods are MOST suitable for implementing complex agentic workflows that require both external data access and specialized task delegation? *(Choose two.)*

- **Agentic orchestration with specialized expert system delegation** ✓
- **Retrieval-based orchestration for external data** ✓
- Prompt chaining to accomplish state management
- Manual workflow coordination without automation
- Static rule-based routing with predefined pathways

---

## 22. Fleet Performance Analysis

When analyzing inconsistent performance across a fleet of customer service agents handling similar queries, which evaluation approach most effectively identifies root causes and optimization opportunities?

- Assess performance data from recently improved agents and highlight strong results, using outcome comparisons to identify areas with the greatest impact on service quality.
- Average performance metrics across all agents as this will smooth individual variations, query distribution differences, and temporal factors affecting agent behavior and accuracy.
- **Deploy stratified evaluation sampling across agent variants, query complexity levels, and temporal patterns while tracking decision paths using comparative analytics.** ✓
- Review performance across both high- and low-accuracy agent groups, comparing case outcomes and identifying patterns contributing to top and bottom results.

---

## 23. Multi-Modal Medical Document Agent

You are designing an AI agent for summarizing medical documents that include images and text as well. It must extract key information and recognize dates.

Which feature is most critical for ensuring the agent performs well across multiple input and output formats?

- Use of guardrails to filter out hallucinated content
- Retry logic implementation to ensure robustness during API failures
- Chain-of-thought prompting for reasoning accuracy
- **Multi-modal model integration to handle both text and vision inputs** ✓

---

## 24. LLM Research Paper Summarization

You're working with an LLM to automatically summarize research papers. The summaries often omit critical findings.

What's the best way to ensure that the summaries accurately reflect the core insights of the research papers?

- Asking the LLM to "summarize the paper."
- Asking the LLM to "understand" the paper to generate a summary.
- Having the LLM generate the summaries and then manually review every output.
- **Asking the LLM to "extract the key findings."** ✓

---

## 25. Orchestration Pattern Flexibility

When designing complex agentic workflows that include both sequential and parallel task execution, which orchestration pattern offers the greatest flexibility?

- Graph-based workflow orchestration incorporating conditional branches
- Linear pipeline orchestration with a fixed task sequence
- **Event-driven orchestration that triggers tasks reactively, in series or in parallel** ✓

---

## 26. Tool Integration Architecture

When designing tool integration for an agent that needs to perform mathematical calculations, web searches, and API calls, which architecture pattern provides the most scalable and maintainable approach?

- External tool services with manual configuration for each agent instance
- **Microservice-based tool architecture with standardized interfaces** ✓
- Monolithic tool handler with conditional logic for different tool types
- Embedded tool functions within the main agent code

---

## 27. Multi-Agent Fraud Detection Architecture

A Lead AI Architect at a global financial institution is designing a multi-agent fraud detection system using an agentic AI framework. The system must operate in real time, with distinct agents working collaboratively to monitor and analyze transactional patterns across accounts, retain and share contextual information over time, and escalate suspicious behaviors to a human fraud analyst when needed.

Which architectural approach enables intelligent specialization, shared memory, and inter-agent coordination in a dynamic and evolving threat environment?

- **Design a modular multi-agent system where individual agents collaborate asynchronously using shared memory and structured messaging.** ✓
- Design a multi-agent system where individual agents collaborate synchronously using shared memory and structured messaging.
- Design a centralized rule-based service that checks all transactions against static fraud indicators and sends alerts when thresholds are exceeded.
- Design an agentic workflow where each agent acts independently on isolated data slices with no inter-agent communication to reduce latency and model complexity.
- Design monolithic LLM-based agents that handle all fraud detection tasks within a single loop, without modular roles or multi-agent coordination.

---

## 28. RAG Similarity Score Aggregation

You're evaluating the RAG pipeline by comparing its responses to synthetic questions. You've collected a large set of similarity scores.

What's the primary benefit of aggregating these scores into a single metric (e.g., average similarity)?

- Aggregation identifies the specific chunks within the RAG pipeline that are contributing to the highest similarity scores.
- **Aggregation reduces the complexity of the evaluation process and allows for a more overall assessment of the pipeline's effectiveness.** ✓
- Aggregation provides a more accurate representation of the RAG pipeline's performance.
- Aggregation eliminates the need for qualitative analysis of the RAG pipeline's responses.

---

## 29. Scalability Bottleneck Analysis

When evaluating an agent's degrading response times under increasing load, which analysis approach most effectively identifies scalability bottlenecks and optimization opportunities?

- Track average response time while examining stage-by-stage processing metrics, resource usage trends, and potential components impacting scalability.
- Test at fixed, low load levels while using controlled stress scenarios to compare with performance under production-like traffic patterns.
- **Profile each major system stage using distributed tracing, analyze GPU utilization with NVIDIA performance tools, and map queuing delays against varying workload patterns.** ✓
- Focus on model inference duration while also measuring preprocessing time, tool-calling latency, and response formatting in the end-to-end pipeline.

---

## 30. Communication Style Evaluation

A financial services agentic AI is being used to automate initial customer onboarding. The agent is completing the process efficiently and accurately, but reviews of its conversations reveal it often uses overly formal and complex language that confuses customers.

Which type of evaluation is best suited to address this issue?

- **Controlled user testing sessions to collect user feedback on the clarity and tone of responses** ✓
- Compliance review of the agent's access to regulatory guidelines and policy documentation
- Continuous user feedback collection, specifically gathering subjective assessments of the agent's communication style
- Statistical analysis of the agent's decision-making patterns to detect overly formal and complex response choices

---

## 31. Dynamic Conversation Management Design

A company is deploying an AI-powered customer support agent that integrates external APIs and handles a wide range of customer inputs dynamically.

Which of the following strategies are appropriate when designing an AI agent for dynamic conversation management and external system interaction? *(Choose two.)*

- **Integrating a feedback loop from user interactions to iteratively improve agent behavior.** ✓
- Using rule-based logic as the primary framework to maintain consistency in agent decisions.
- **Implementing retry logic for API failures to ensure robustness in external communications.** ✓
- Preferring hardcoded responses for frequent queries to deliver reliable and low-latency answers.

---

## 32. Kubernetes vs Slurm

What benefits does a Kubernetes deployment offer over Slurm?

- **Kubernetes provides autoscaling, auto-restarts, dynamic task scheduling, error isolation with containers, and integrated monitoring.** ✓
- Kubernetes is the best option for both training and inference, offering advantages for resource management and workload visibility over traditional HPC schedulers like Slurm.
- Kubernetes is more optimized for batch jobs to achieve high throughput, and also provides for monitoring and failover in large-scale workloads.

---

## 33. Tool Selection Strategy

When implementing tool orchestration for an agent that needs to dynamically select from multiple tools (calculator, web search, API calls), which selection strategy provides the most reliable results?

- Random dynamic tool selection with retry mechanisms and usage examples
- **LLM-based tool selection with structured tool descriptions and usage examples** ✓
- Rule-based selection with predefined tool mappings and usage examples
- Configuration-based tool selection with manual specifications and usage examples

---

## 34. Triton Configuration Optimization

When analyzing throughput bottlenecks in a multi-modal agent processing text, images, and audio, which Triton configuration evaluations identify optimization opportunities? *(Choose two.)*

- **Analyze model ensemble pipelines for sequential dependencies, identify parallelization opportunities, and optimize inter-model data transfer using Triton's scheduler.** ✓
- **Profile GPU memory allocation patterns across modalities, implement model instance batching strategies, and tune concurrency limits to maximize utilization.** ✓
- Deploy each modality on separate Triton instances, allowing Triton to automatically manage ensemble coordination, shared memory usage, and pipeline integration.
- Use a single model instance per GPU, allowing Triton to automatically optimize concurrency, batching, and multi-instance settings for throughput scaling.

---

## 35. Robust and Scalable Deployment

A company plans to launch a multi-agent system that must serve thousands of users simultaneously. The team needs to ensure the system remains reliable, scales efficiently as demand increases, and operates in a cost-effective manner.

Which approach is most effective for achieving robust and scalable deployment of an agentic AI system in production?

- Running agents without load balancing to reduce infrastructure complexity and achieve robust and scalable deployment of an agentic system
- Establishing a continuous monitoring framework to track system performance and adapt resources as usage patterns evolve
- Deploying all agents on a single server with ongoing performance monitoring to maximize hardware utilization
- **Orchestrating agents using containerization platforms, combined with load balancing and ongoing performance monitoring** ✓

---

## 36. Continuous Agent Refinement

A team is evaluating multiple versions of an AI agent designed for customer support. They want to identify which version completes tasks more efficiently, responds accurately, and improves over time using user feedback.

Which practice is most important to ensure continuous refinement and optimal performance of the AI agent?

- Comparing agents on isolated tasks without standardized benchmarking pipelines
- Relying solely on offline benchmarks without incorporating live user feedback during tuning
- **Implementing an evaluation framework that quantifies task efficiency and incorporates human-in-the-loop feedback** ✓
- Tuning model parameters once before deployment to maximize initial accuracy

---

## 37. Synthetic QA Generation for RAG

You are using an LLM-as-a-Judge to evaluate a RAG pipeline.

What is the primary benefit of synthetically generating question-answer pairs, rather than relying solely on human-created test cases?

- Synthetically generated questions are more challenging and reveal deeper flaws in the RAG pipeline.
- Synthetic generation eliminates the need for any human validation of the RAG pipeline's output.
- Synthetically generated answers are inherently more accurate than those produced by the LLMs
- **Synthetic generation allows for systematic testing of the RAG pipeline across a wider range of scenarios and query types.** ✓

---

## 38. User Feedback Translation to Optimization

When analyzing user feedback patterns to improve a technical documentation agent, which evaluation methods effectively translate feedback into actionable optimization strategies? *(Choose two.)*

- Collect broad user feedback as-is, enabling rapid accumulation of suggestions and diverse perspectives for potential future analysis.
- **Design iterative feedback loops with version tracking, A/B testing of improvements, and regression monitoring to ensure changes enhance rather than degrade performance** ✓
- Incorporate user suggestions rapidly to maximize responsiveness and demonstrate continuous adaptation to evolving user needs.
- **Implement feedback categorization systems grouping issues by type (accuracy, clarity, completeness) with quantitative impact scoring and improvement prioritization matrices** ✓

---

## 39. Supply Chain Agent Complaint Investigation

After a series of adjustments in a supply chain agentic system, the agent has dramatically reduced shipping times and minimized costs, but the team is receiving a high volume of complaints from customers regarding delayed deliveries.

Which metric is MOST important to prioritize when investigating this situation?

- The agent's ability to predict future demand fluctuations, as accurate forecasting is crucial for effective logistics.
- The total cost savings achieved through the agent's optimization, which represents a significant financial benefit.
- **The percentage of delivery times that fall within the acceptable delay window, considering customer satisfaction as a key factor.** ✓
- The agent's adherence to the prescribed delivery schedules, as it's demonstrably improving efficiency.

---

## 40. Inter-Agent Message Routing

When implementing inter-agent communication for a distributed agentic system running across multiple NVIDIA GPU nodes, which message routing pattern provides the best balance of reliability and performance?

- Database-based message queuing with polling
- Direct TCP connections between all agent pairs
- **Event-driven message routing with distributed broker clusters** ✓
- Centralized message broker with topic-based routing

---

## 41. Inconsistent Agent Output

Your agent is generating inconsistent and contradictory statements.

Which approach would be most suitable to improve the agent's output?

- **Employing Reflexion** ✓
- Increasing the number of generated plans
- Using Decomposition-First Planning
- Decreasing the length of prompts

---

## 42. Technical Translation Quality Improvement

You're utilizing an LLM to translate complex technical documentation into multiple languages. The translations often lack nuance and fail to capture the original intent.

What's the most effective strategy for improving the quality of the translations?

- **Providing the LLM with a glossary of key terms, concepts in all languages and the dataset of previously translated text.** ✓
- Training the LLM on a dataset of translated texts.
- Providing the LLM with guidance to "translate the documents" without additional guidance, so it can use trained knowledge.
- Providing the LLM with guidance to translate "with high accuracy" without additional guidance, so it can use trained knowledge.