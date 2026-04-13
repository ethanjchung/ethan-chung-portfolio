// ============================================================
// StarCursor — Custom cursor with shining star effect
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
      `}</style>

      {/* Star cursor */}
      {isVisible && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "fixed",
            left: `${position.x - 12}px`,
            top: `${position.y - 12}px`,
            pointerEvents: "none",
            zIndex: 9999,
            filter: "drop-shadow(0 0 8px oklch(0.97 0.002 260)) drop-shadow(0 0 4px oklch(0.75 0.01 260))",
            animation: "starShine 1.5s ease-in-out infinite",
          }}
        >
          <defs>
            <style>{`
              @keyframes starShine {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.6; }
              }
            `}</style>
          </defs>
          {/* Star shape */}
          <path
            d="M12 2L15.09 10.26H24L17.55 15.74L20.64 24L12 18.52L3.36 24L6.45 15.74L0 10.26H8.91L12 2Z"
            fill="oklch(0.97 0.002 260)"
          />
          {/* Inner glow */}
          <circle cx="12" cy="12" r="3" fill="oklch(0.97 0.002 260)" opacity="0.8" />
        </svg>
      )}
    </>
  );
}
