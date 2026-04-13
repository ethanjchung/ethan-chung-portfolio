// ============================================================
// Navbar — Obsidian Editorial
// Fixed top navigation with section links and CTA
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ["projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "oklch(0.08 0.005 260 / 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(1 0 0 / 6%)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Name */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 group"
            >
              <div
                className="w-7 h-7 flex items-center justify-center border"
                style={{ borderColor: "oklch(1 0 0 / 15%)" }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0.002 260)" }}
                >
                  EC
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link link-underline ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ethanjchung"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-1.5 text-xs font-medium transition-all duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  border: "1px solid oklch(1 0 0 / 15%)",
                  color: "oklch(0.75 0.01 260)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 40%)";
                  e.currentTarget.style.color = "oklch(0.97 0.002 260)";
                  e.currentTarget.style.boxShadow = "0 0 12px oklch(0.97 0.002 260 / 0.4), inset 0 0 8px oklch(0.97 0.002 260 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 15%)";
                  e.currentTarget.style.color = "oklch(0.75 0.01 260)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.364c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.685 1.377 3.685 4.344v5.524zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.703 1.96-1.703 1.188 0 1.913.752 1.938 1.703 0 .946-.75 1.704-1.983 1.704zm1.581 11.019H3.656V9.807h3.262v10.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/ethanjchung"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-1.5 text-xs font-medium transition-all duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  border: "1px solid oklch(1 0 0 / 15%)",
                  color: "oklch(0.75 0.01 260)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 40%)";
                  e.currentTarget.style.color = "oklch(0.97 0.002 260)";
                  e.currentTarget.style.boxShadow = "0 0 12px oklch(0.97 0.002 260 / 0.4), inset 0 0 8px oklch(0.97 0.002 260 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 15%)";
                  e.currentTarget.style.color = "oklch(0.75 0.01 260)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              {/* Mobile menu button */}
              <a
                href="https://www.linkedin.com/in/ethanjchung"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden p-2"
                style={{ color: "oklch(0.75 0.01 260)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.364c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.685 1.377 3.685 4.344v5.524zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.703 1.96-1.703 1.188 0 1.913.752 1.938 1.703 0 .946-.75 1.704-1.983 1.704zm1.581 11.019H3.656V9.807h3.262v10.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2"
                style={{ color: "oklch(0.75 0.01 260)" }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "oklch(0.08 0.005 260 / 0.97)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid oklch(1 0 0 / 8%)",
            }}
          >
            <div className="container py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 nav-link text-base"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="hairline mt-2" />
              <a
                href="https://github.com/ethanchung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 nav-link text-base"
              >
                GitHub →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
