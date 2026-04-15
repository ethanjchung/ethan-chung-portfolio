// ============================================================
// AboutSection — Obsidian Editorial
// Brief about section between hero and projects
// Uses about-portrait.webp illustration
// ============================================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ABOUT_PORTRAIT = "/about-portrait.png";

const STATS = [
  { value: "2nd Year", label: "@ UBC" },
  { value: "Undeclared", label: "Major" },
  { value: "4", label: "Languages" },
  { value: "∞", label: "Still Learning" },
];

const TOP_STATS = STATS.slice(0, 2);
const BOTTOM_STATS = STATS.slice(2);

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24"
      ref={ref}
      style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div
              className="relative w-64 h-64 lg:w-72 lg:h-72"
              style={{ border: "1px solid oklch(1 0 0 / 8%)" }}
            >
              <img
                src={ABOUT_PORTRAIT}
                alt="Ethan Chung — Developer Illustration"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.9)" }}
              />
              {/* Corner accent */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full"
                style={{ border: "1px solid oklch(1 0 0 / 4%)", zIndex: -1 }}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <div>
              <p className="section-number mb-3">About me</p>
              <p
                className="text-xl leading-relaxed font-light"
                style={{ color: "oklch(0.72 0.01 260)", maxWidth: "60ch" }}
              >
                I'm a second-year student at UBC with strong interests in AI, web development, and Product Management. I enjoy learning new technologies and new problem-solving approaches.
              </p>
            </div>

            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.50 0.01 260)", maxWidth: "58ch", fontWeight: 300 }}
            >
              This portfolio is a small snapshot of my learning journey so far. I'm excited about learning new tech and ideas, eventually building real applications that solve problems.
            </p>

            {/* Stats row - Top row (2nd Year @ UBC, Undeclared) */}
            <div className="grid grid-cols-2 gap-6 pt-4" style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}>
              {TOP_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.07 }}
                  className="flex flex-col gap-1"
                >
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.75rem",
                      color: "oklch(0.97 0.002 260)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "oklch(0.40 0.008 260)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats row - Bottom row (Languages, Still Learning) */}
            <div className="grid grid-cols-2 gap-6">
              {BOTTOM_STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + (idx + 2) * 0.07 }}
                  className="flex flex-col gap-1"
                >
                  <span
                    className="font-bold"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.75rem",
                      color: "oklch(0.97 0.002 260)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "oklch(0.40 0.008 260)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
