// ============================================================
// FooterSection — Obsidian Editorial
// Contact form + resume download + social links
// Section number: 04
// ============================================================

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { toast } from "sonner";
import { HERO_DATA } from "@/lib/portfolio-data";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    background: "oklch(0.10 0.005 260)",
    border: "1px solid oklch(1 0 0 / 8%)",
    color: "oklch(0.85 0.005 260)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "2px",
  };

  const labelStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "0.7rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "oklch(0.45 0.01 260)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <footer
      id="contact"
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
            <p className="section-number mb-2">Contact</p>
            <h2
              className="font-bold leading-none"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.97 0.002 260)",
                letterSpacing: "-0.02em",
              }}
            >
              Let's Talk
            </h2>
          </div>
          <div className="hairline flex-1 mb-3 hidden md:block" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: "oklch(0.55 0.012 260)", fontWeight: 300, maxWidth: "36ch" }}
            >
              Got a question, opportunity, or just want to chat? I'd love to hear from you. Drop me a line anytime.
            </p>

            {/* Email */}
            <a
              href={`mailto:${HERO_DATA.email}`}
              className="flex items-center gap-3 group w-fit"
            >
              <div
                className="w-9 h-9 flex items-center justify-center border transition-all duration-200"
                style={{ borderColor: "oklch(1 0 0 / 10%)", color: "oklch(0.45 0.01 260)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 30%)";
                  e.currentTarget.style.color = "oklch(0.85 0.005 260)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 10%)";
                  e.currentTarget.style.color = "oklch(0.45 0.01 260)";
                }}
              >
                <Mail size={15} />
              </div>
              <span
                className="link-underline"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", color: "oklch(0.65 0.01 260)" }}
              >
                {HERO_DATA.email}
              </span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { href: HERO_DATA.githubUrl, icon: <Github size={16} />, label: "GitHub" },
                { href: HERO_DATA.linkedinUrl, icon: <Linkedin size={16} />, label: "LinkedIn" },
                { href: HERO_DATA.twitterUrl, icon: <Twitter size={16} />, label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-10 h-10 flex items-center justify-center border transition-all duration-200"
                  style={{ borderColor: "oklch(1 0 0 / 10%)", color: "oklch(0.45 0.01 260)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "oklch(1 0 0 / 30%)";
                    e.currentTarget.style.color = "oklch(0.85 0.005 260)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "oklch(1 0 0 / 10%)";
                    e.currentTarget.style.color = "oklch(0.45 0.01 260)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Resume download */}
            <a
              href={HERO_DATA.resumeUrl}
              download
              className="flex items-center gap-2.5 w-fit px-5 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                border: "1px solid oklch(1 0 0 / 12%)",
                color: "oklch(0.65 0.01 260)",
                letterSpacing: "0.06em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "oklch(1 0 0 / 30%)";
                e.currentTarget.style.color = "oklch(0.97 0.002 260)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "oklch(1 0 0 / 12%)";
                e.currentTarget.style.color = "oklch(0.65 0.01 260)";
              }}
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 25%)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 8%)"; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 25%)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 8%)"; }}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 25%)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "oklch(1 0 0 / 8%)"; }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2.5 py-3 px-6 text-sm font-medium transition-all duration-200 self-start"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: sending ? "oklch(0.75 0.01 260)" : "oklch(0.97 0.002 260)",
                  color: "oklch(0.08 0.005 260)",
                  letterSpacing: "0.05em",
                  opacity: sending ? 0.7 : 1,
                  cursor: sending ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!sending) e.currentTarget.style.background = "oklch(0.85 0.005 260)";
                }}
                onMouseLeave={(e) => {
                  if (!sending) e.currentTarget.style.background = "oklch(0.97 0.002 260)";
                }}
              >
                <Send size={14} />
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-20 pt-8"
          style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
        >
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "oklch(0.30 0.006 260)" }}
          >
            © {new Date().getFullYear()} Ethan Chung. All rights reserved.
          </span>
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "oklch(0.25 0.005 260)" }}
          >
            Built with React + TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}
