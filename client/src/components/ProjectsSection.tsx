// ============================================================
// ProjectsSection — Obsidian Editorial
// Grid of project cards with live demo + repo links
// Section number: 01
// ============================================================

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const STATUS_COLORS: Record<string, string> = {
  Production: "#4ade80",
  Active: "#60a5fa",
  Beta: "#f59e0b",
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28" ref={ref}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end gap-6 mb-16"
        >
          <div>
            <h2
              className="font-bold leading-none"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.97 0.002 260)",
                letterSpacing: "-0.02em",
              }}
            >
              Projects
            </h2>
          </div>
          <div className="hairline flex-1 mb-3 hidden md:block" />
          <a
            href="https://github.com/ethanchung"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm mb-3 link-underline"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.55 0.012 260)", letterSpacing: "0.05em" }}
          >
            All repos →
          </a>
        </motion.div>

        {/* Featured projects (larger cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="project-card p-7 flex flex-col gap-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: STATUS_COLORS[project.status] || "#94a3b8" }}
                    />
                    <span
                      className="text-xs"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.45 0.01 260)", letterSpacing: "0.08em" }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3
                    className="font-semibold text-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0.002 260)" }}
                  >
                    {project.title}
                  </h3>
                </div>

              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "oklch(0.55 0.012 260)" }}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2" style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium link-underline transition-colors duration-200"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.55 0.012 260)", letterSpacing: "0.05em" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "oklch(0.85 0.005 260)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "oklch(0.55 0.012 260)"; }}
                >
                  <Github size={13} />
                  Source
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium link-underline transition-colors duration-200"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.55 0.012 260)", letterSpacing: "0.05em" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "oklch(0.85 0.005 260)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "oklch(0.55 0.012 260)"; }}
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rest of projects (smaller cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {rest.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="project-card p-5 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: STATUS_COLORS[project.status] || "#94a3b8" }}
                  />
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.45 0.01 260)", letterSpacing: "0.08em" }}
                  >
                    {project.status}
                  </span>
                </div>

              </div>

              <h3
                className="font-semibold text-base"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0.002 260)" }}
              >
                {project.title}
              </h3>

              <p className="text-xs leading-relaxed flex-1" style={{ color: "oklch(0.50 0.01 260)" }}>
                {project.description.slice(0, 100)}...
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: "0.6rem" }}>{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-3" style={{ borderTop: "1px solid oklch(1 0 0 / 6%)", paddingTop: "0.75rem" }}>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs link-underline"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.45 0.01 260)", letterSpacing: "0.05em" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "oklch(0.75 0.01 260)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "oklch(0.45 0.01 260)"; }}
                >
                  <Github size={11} />
                  Repo
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs link-underline"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.45 0.01 260)", letterSpacing: "0.05em" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "oklch(0.75 0.01 260)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "oklch(0.45 0.01 260)"; }}
                  >
                    <ExternalLink size={11} />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
