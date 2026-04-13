// ============================================================
// StarCursor — Custom cursor with shining dot effect
// ============================================================

import { useEffect, useState } from "react";

export default function StarCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"], input, select, textarea {
          cursor: none !important;
        }
        
        @keyframes dotShine {
          0%, 100% { 
            box-shadow: 0 0 12px oklch(0.97 0.002 260), 0 0 24px oklch(0.75 0.01 260 / 0.6), inset 0 0 4px oklch(1 0 0 / 0.8);
            opacity: 1;
          }
          50% { 
            box-shadow: 0 0 8px oklch(0.97 0.002 260), 0 0 16px oklch(0.75 0.01 260 / 0.4), inset 0 0 2px oklch(1 0 0 / 0.5);
            opacity: 0.7;
          }
        }
      `}</style>

      {/* Shining dot cursor */}
      {isVisible && (
        <div
          style={{
            position: "fixed",
            left: `${position.x - 6}px`,
            top: `${position.y - 6}px`,
            pointerEvents: "none",
            zIndex: 9999,
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "oklch(0.97 0.002 260)",
            boxShadow: "0 0 12px oklch(0.97 0.002 260), 0 0 24px oklch(0.75 0.01 260 / 0.6), inset 0 0 4px oklch(1 0 0 / 0.8)",
            animation: "dotShine 1.5s ease-in-out infinite",
          }}
        />
      )}
    </>
  );
}
