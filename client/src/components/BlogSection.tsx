// ============================================================
// BlogSection — Obsidian Editorial
// Technical writing / blog posts section
// Section number: 03
// Background: blog-cover.webp for featured post
// ============================================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/portfolio-data";

const BLOG_COVER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663549822151/Ri5Fdu3R25Rjouxk7ERwah/blog-cover-HBuBmeJibMNVgZMBmFbgs3.webp";

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = BLOG_POSTS.filter((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <section
      id="blog"
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
            <p className="section-number mb-2">03 — Writing</p>
            <h2
              className="font-bold leading-none"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.97 0.002 260)",
                letterSpacing: "-0.02em",
              }}
            >
              Technical Articles
            </h2>
          </div>
          <div className="hairline flex-1 mb-3 hidden md:block" />
        </motion.div>

        {/* Featured posts — 2 column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
        >
          {featured.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              className="group relative overflow-hidden"
              style={{
                border: "1px solid oklch(1 0 0 / 8%)",
                background: "oklch(0.11 0.006 260)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "oklch(1 0 0 / 20%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "oklch(1 0 0 / 8%)";
              }}
            >
              {/* Cover image area */}
              {idx === 0 && (
                <div
                  className="h-40 overflow-hidden"
                  style={{
                    backgroundImage: `url(${BLOG_COVER})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ background: "oklch(0.08 0.005 260 / 0.6)" }}
                  />
                </div>
              )}

              <div className="p-7">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.40 0.008 260)" }}
                  >
                    {formatDate(post.date)}
                  </span>
                  <div className="w-1 h-1 rounded-full" style={{ background: "oklch(0.30 0.006 260)" }} />
                  <div className="flex items-center gap-1" style={{ color: "oklch(0.40 0.008 260)" }}>
                    <Clock size={11} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}>
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-semibold mb-3 leading-snug group-hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.1rem",
                    color: "oklch(0.97 0.002 260)",
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "oklch(0.50 0.01 260)" }}
                >
                  {post.excerpt}
                </p>

                {/* Tags + Read link */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs font-medium shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.75 0.01 260)" }}
                  >
                    Read
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Rest of posts — horizontal list */}
        <div className="flex flex-col">
          {rest.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
              className="group flex items-start gap-6 py-6 cursor-pointer"
              style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
            >
              {/* Date column */}
              <div className="shrink-0 w-24 hidden sm:block">
                <span
                  className="text-xs"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.35 0.008 260)" }}
                >
                  {formatDate(post.date)}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="font-medium mb-1.5 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.85 0.005 260)", fontSize: "0.95rem" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "oklch(0.45 0.01 260)" }}
                >
                  {post.excerpt.slice(0, 120)}...
                </p>
              </div>

              {/* Tags + read time */}
              <div className="shrink-0 flex flex-col items-end gap-2 hidden md:flex">
                <div className="flex items-center gap-1" style={{ color: "oklch(0.35 0.008 260)" }}>
                  <Clock size={10} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}>
                    {post.readTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: "0.6rem" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div
                className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5"
                style={{ color: "oklch(0.55 0.012 260)" }}
              >
                <ArrowUpRight size={15} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
