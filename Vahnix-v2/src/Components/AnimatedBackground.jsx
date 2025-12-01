// src/components/AnimatedBackgroundLight.jsx
import React from "react";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{
        // DARKER + RICHER BACKGROUND GRADIENT
        background:
          "linear-gradient(135deg, #f3e9ff 0%, #e8f1ff 45%, #e4fff2 100%)",
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* DARKER GRADIENT OVERLAY */}
          <linearGradient id="g1-premium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d6baff" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#baf7eb" stopOpacity="0.28" />
            <stop offset="65%" stopColor="#ffe4c7" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#b8ffe8" stopOpacity="0.38" />
          </linearGradient>

          {/* STRONGER GLOW */}
          <filter id="premium-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feFlood floodColor="#ffffff" floodOpacity="0.35" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* BASE FILL */}
        <rect width="100%" height="100%" fill="url(#g1-premium)" />

        {/* DARKER LAVENDER CIRCUITS */}
        <g
          stroke="#9a5fff"         // darker purple
          strokeOpacity="0.55"      // stronger visibility
          strokeWidth="2"
          filter="url(#premium-glow)"
          className="animate-slideX"
        >
          <path d="M0 120 L500 120 L540 180 L1400 180" fill="none" />
          <path d="M0 360 L400 360 L450 420 L1400 420" fill="none" />
          <path d="M0 580 L300 580 L350 640 L1400 640" fill="none" />
        </g>

        {/* DARKER MINT CIRCUITS */}
        <g
          stroke="#3cbfa5"         // darker mint
          strokeOpacity="0.55"
          strokeWidth="2"
          filter="url(#premium-glow)"
          className="animate-slideY"
        >
          <path d="M0 220 L350 220 L420 290 L1400 290" fill="none" />
          <path d="M0 480 L600 480 L680 550 L1400 550" fill="none" />
          <path d="M0 720 L450 720 L520 790 L1400 790" fill="none" />
        </g>

        {/* DARKER & MORE VISIBLE ORBS */}
        <circle
          cx="20%"
          cy="30%"
          r="140"
          fill="#cfa5ff"
          opacity="0.18"
          filter="url(#premium-glow)"
        />

        <circle
          cx="80%"
          cy="70%"
          r="200"
          fill="#7df2d4"
          opacity="0.16"
          filter="url(#premium-glow)"
        />
      </svg>

      {/* Motion Keyframes */}
      <style jsx>{`
        @keyframes slideX {
          from {
            transform: translateX(-500px);
          }
          to {
            transform: translateX(300px);
          }
        }
        @keyframes slideY {
          from {
            transform: translateY(-400px);
          }
          to {
            transform: translateY(200px);
          }
        }
        .animate-slideX {
          animation: slideX 65s linear infinite;
        }
        .animate-slideY {
          animation: slideY 78s linear infinite reverse;
        }
      `}</style>
    </div>
  );
}
