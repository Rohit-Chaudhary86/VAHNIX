// src/components/CursorGlowLight.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow({ enabled = true }) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled]);

  // Don't render anything if disabled or on initial load
  if (!enabled) return null;

  return (
    <>
      {/* Large soft glow (main effect) */}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      >
        <div
          className="h-96 w-96 rounded-full opacity-70"
          style={{
            background: "radial-gradient(circle, rgba(216, 180, 254, 0.25) 0%, rgba(167, 243, 208, 0.15) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* Smaller inner glow for extra depth (optional but gorgeous) */}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10"
        animate={{
          x: mousePos.x - 80,
          y: mousePos.y - 80,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 300,
        }}
      >
        <div
          className="h-40 w-40 rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(216, 180, 254, 0.4) 0%, rgba(167, 243, 208, 0.25) 60%, transparent 80%)",
            filter: "blur(50px)",
          }}
        />
      </motion.div>
    </>
  );
}