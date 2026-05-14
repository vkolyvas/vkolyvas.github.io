"use client";

import { motion } from "framer-motion";

const experience = [
  {
    title: "Solutions Manager",
    company: "OTE Group of Companies (HTO)",
    period: "Apr 2025 – Present · 1 yr 2 mos",
    location: "Marousi, Attiki, Greece · Hybrid",
    highlights: [
      "Lead the design, development, and delivery of ICT and software solutions",
      "Guide and coordinate vendor engineering teams (frontend, backend, and full-stack)",
      "Support business development and solution proposals",
      "Perform risk management across solution delivery projects",
    ],
    skills: ["Technical Leadership", "Software Solution Architecture", "Vendor Management"],
  },
  {
    title: "Network Solution Architecture / Senior Engineering",
    company: "OTE Group of Companies (HTO)",
    period: "Sep 2018 – Apr 2025 · 6 yrs 8 mos",
    location: "Marousi, Attiki, Greece · Hybrid",
    highlights: [
      "Architected Fixed Access and broadband network infrastructure across nationwide deployments",
      "Technical lead of cross-functional teams for design, deployment, and lifecycle management",
      "Defined technical standards for access and aggregation networks",
      "Architectural leadership for FTTH, NGA, UFBB, and RURAL Broadband programs",
    ],
    skills: ["DevOps for Telecom", "Vendor Management", "Network Architecture"],
  },
  {
    title: "Senior DevOps Network Engineer (Infrastructure Automation)",
    company: "OTE Group of Companies (HTO)",
    period: "Apr 2015 – Sep 2018 · 3 yrs 6 mos",
    location: "Marousi, Attiki, Greece · On-site",
    highlights: [
      "Implemented DevOps practices for Core IP, Metro Ethernet, and Access networks",
      "Introduced automation and CI/CD into telecom infrastructure deployment",
      "Improved deployment speed and reliability of network configurations",
    ],
    skills: ["DevOps", "Network Architecture", "CI/CD"],
  },
  {
    title: "Senior Network Engineer",
    company: "OTE Group of Companies (HTO)",
    period: "Dec 2010 – Apr 2015 · 4 yrs 5 mos",
    location: "Marousi, Attiki, Greece · On-site",
    highlights: [
      "Designed and deployed telecom infrastructure solutions",
      "Supported network performance optimization and complex troubleshooting",
      "Participated in rollout of Core IP and broadband access infrastructure",
    ],
    skills: ["Network Design", "Teamwork", "Telecom"],
  },
  {
    title: "Wireless Network Engineer",
    company: "OTE Group of Companies (HTO)",
    period: "Dec 2006 – Dec 2010 · 4 yrs 1 mo",
    location: "Athens, Attiki, Greece",
    highlights: [
      "Wireless Core Network Design and Implementation",
      "Wireless Backhauling Rollout for inter-station communication",
      "Radiation Laboratory Development (ISO 9001 calibrated)",
      "Environmental Impact Assessment (EIA) for all OTE stations",
    ],
    skills: ["Interpersonal Skills", "Wireless Networks", "Radiation Assessment"],
  },
];

const education = [
  {
    degree: "Master of Science (MSc), Advanced Information Systems",
    school: "University of Piraeus",
    period: "2009 – 2011",
    skills: ["Interpersonal Skills", "Solution Architecture"],
  },
  {
    degree: "Bachelor's degree, Automation & Robotics Engineering",
    school: "Technological Education Institute of Piraeus",
    period: "2000 – 2004",
    skills: ["Engineering", "Automation"],
  },
];

const volunteer = {
  title: "Group Lead",
  organization: "World Organization of the Scout Movement (WOSM)",
  period: "Nov 2010 – Nov 2015 · 5 yrs 1 mo",
  description: "Leadership on a team of 8 scouts, under 21 years old",
};

export function CV() {
  return (
    <section id="cv" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-medium mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-[var(--border)] pl-8 space-y-12">
        {experience.map((job, i) => (
          <motion.div
            key={job.title + job.period}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-2 w-3 h-3 rounded-full bg-[var(--foreground)]" />
            <div className="mb-2">
              <h3 className="text-lg font-medium">{job.title}</h3>
              <p className="text-[var(--muted)] text-sm">{job.company}</p>
              <p className="text-xs text-[var(--muted)]">{job.period}</p>
              <p className="text-xs text-[var(--muted)]">{job.location}</p>
            </div>
            <ul className="space-y-1 mb-3">
              {job.highlights.map((h) => (
                <li key={h} className="text-sm text-[var(--muted)] before:content-['–'] before:mr-2">
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((s) => (
                <span key={s} className="px-2 py-1 text-xs border border-[var(--border)] rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-medium mt-16 mb-8"
      >
        Education
      </motion.h3>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree} className="border border-[var(--border)] rounded-xl p-6">
            <h4 className="font-medium">{edu.degree}</h4>
            <p className="text-sm text-[var(--muted)]">{edu.school}</p>
            <p className="text-xs text-[var(--muted)] mb-3">{edu.period}</p>
            <div className="flex flex-wrap gap-2">
              {edu.skills.map((s) => (
                <span key={s} className="px-2 py-1 text-xs border border-[var(--border)] rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-medium mt-16 mb-8"
      >
        Volunteering
      </motion.h3>
      <div className="border border-[var(--border)] rounded-xl p-6">
        <h4 className="font-medium">{volunteer.title}</h4>
        <p className="text-sm text-[var(--muted)]">{volunteer.organization}</p>
        <p className="text-xs text-[var(--muted)] mb-2">{volunteer.period}</p>
        <p className="text-sm text-[var(--muted)]">{volunteer.description}</p>
      </div>
    </section>
  );
}