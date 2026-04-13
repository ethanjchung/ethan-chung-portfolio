// ============================================================
// ScrollToTop — Obsidian Editorial
// Floating button that appears after scrolling down
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center transition-all duration-200"
          style={{
            border: "1px solid oklch(1 0 0 / 12%)",
            background: "oklch(0.11 0.006 260)",
            color: "oklch(0.55 0.012 260)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "oklch(1 0 0 / 30%)";
            e.currentTarget.style.color = "oklch(0.97 0.002 260)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "oklch(1 0 0 / 12%)";
            e.currentTarget.style.color = "oklch(0.55 0.012 260)";
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={15} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
