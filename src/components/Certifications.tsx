"use client";

import { motion } from "framer-motion";

const certs = [
  {
    name: "NVIDIA-Certified Professional Agentic AI",
    issuer: "NVIDIA",
    status: "In Progress",
    date: "2026",
    credentialId: "NCP-AAI",
    skills: ["Multi-Agent Systems", "Distributed Reasoning", "Scalability", "Ethical Safeguards"],
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    status: "Verified",
    date: "Jan 2026",
    credentialId: "gej5xj6jqcgf",
    skills: ["Claude Skills", "Software Solution Architecture", "Agentic AI"],
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional",
    issuer: "Oracle",
    status: "Verified",
    date: "Oct 2025",
    expires: "Oct 2027",
    credentialId: "A3C869C7E874AA1ACBCC639CA787AFFC56738DA5F62CA0116B33451D4840F7F5",
    skills: ["OCI", "Multicloud Architecture", "Cloud Engineering"],
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
    issuer: "Oracle",
    status: "Verified",
    date: "Oct 2025",
    expires: "Oct 2027",
    credentialId: "E3D659DAF0C3A84786C7120C9464013E057597854B1C28EE83D60107A56320A9",
    skills: ["Software Solution Architecture", "Solution Architecture"],
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    status: "Verified",
    date: "Oct 2025",
    expires: "Oct 2027",
    credentialId: "A495AE3F17191EFD4B26EEA81B2B426996CD4C5A9A581A40E1E2A32F5E19D16D",
    skills: ["Chatbots", "Generative AI"],
  },
  {
    name: "Microsoft Copilot for Productivity",
    issuer: "Microsoft",
    status: "Verified",
    date: "Mar 2025",
    credentialId: "ac6e99f7b5b1b0968d281a95449f8a74b55843e5ad27f0834206a75e315ea045",
    skills: ["Microsoft 365", "Microsoft Copilot"],
  },
  {
    name: "AWS Certified Solutions Architect Professional (SAP-C02)",
    issuer: "AWS",
    status: "Verified",
    date: "Apr 2025",
    expires: "Apr 2028",
    credentialId: "30fbd50d38d44e36b6b65cfdc6fdfeca",
    skills: ["Software Solution Architecture", "Software Solution Management"],
  },
  {
    name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "AWS",
    status: "Verified",
    date: "Mar 2024",
    expires: "Mar 2027",
    credentialId: "4ec04c6ed601489098f4ba46117065c4",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
  },
  {
    name: "ChatGPT Prompt Engineering for Developers",
    issuer: "OpenAI",
    status: "Verified",
    date: "Jun 2024",
    credentialId: "cfa485cf-b527-48a1-85df-b17ebae4dc09",
    skills: ["Prompt Engineering", "Python"],
  },
  {
    name: "Generative AI Learning Path",
    issuer: "Google Cloud Skills Boost",
    status: "Verified",
    date: "Aug 2023",
    skills: ["Large Language Models (LLM)", "Generative AI"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-medium mb-12"
      >
        Certifications
      </motion.h2>
      <div className="space-y-6">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="p-6 border border-[var(--border)] rounded-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-lg font-medium">{cert.name}</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-[var(--foreground)] text-[var(--background)]">
                {cert.status}
              </span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-3">
              {cert.issuer} · {cert.date}
              {cert.expires && ` · Expires ${cert.expires}`}
            </p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs border border-[var(--border)] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}