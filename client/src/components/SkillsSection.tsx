// ============================================================
// SkillsSection — Obsidian Editorial
// Skills matrix with animated proficiency bars + open-source contributions
// Section number: 02
// ============================================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitMerge, GitPullRequest } from "lucide-react";
import { SKILLS_CATEGORIES, OPEN_SOURCE } from "@/lib/portfolio-data";

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-medium"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.75 0.01 260)" }}
        >
          {name}
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.40 0.008 260)" }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-28"
      ref={ref}
      style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
    >
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end gap-6 mb-16"
        >
          <div>
            <p className="section-number mb-2">02 — Skills</p>
            <h2
              className="font-bold leading-none"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.97 0.002 260)",
                letterSpacing: "-0.02em",
              }}
            >
              Technical Matrix
            </h2>
          </div>
          <div className="hairline flex-1 mb-3 hidden md:block" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {SKILLS_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-semibold"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "oklch(0.97 0.002 260)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.category}
                </span>
                <div className="hairline flex-1" />
              </div>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.1 + skillIdx * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-xs font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "oklch(0.55 0.012 260)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Open Source Contributions
            </span>
            <div className="hairline flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {OPEN_SOURCE.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.08 }}
                className="flex items-start gap-4 p-4 group transition-all duration-200"
                style={{
                  border: "1px solid oklch(1 0 0 / 6%)",
                  background: "oklch(0.10 0.005 260)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 16%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 6%)";
                }}
              >
                <div
                  className="mt-0.5 shrink-0"
                  style={{ color: item.merged ? "#4ade80" : "oklch(0.45 0.01 260)" }}
                >
                  {item.merged ? <GitMerge size={15} /> : <GitPullRequest size={15} />}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-semibold"
                      style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.75 0.01 260)" }}
                    >
                      {item.project}
                    </span>
                    <span
                      className="text-xs px-1.5 py-0.5"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.6rem",
                        color: item.merged ? "#4ade80" : "oklch(0.45 0.01 260)",
                        border: `1px solid ${item.merged ? "#4ade8030" : "oklch(1 0 0 / 8%)"}`,
                      }}
                    >
                      {item.merged ? "merged" : "open"}
                    </span>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "oklch(0.50 0.01 260)" }}
                  >
                    {item.contribution}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
