"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, MessageSquare, Sparkles } from "lucide-react";

export const ClientPortalGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* PURE GEOMETRY WIREFRAME */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 160 160">
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
          {/* Base Structure: interlocking circles */}
          <circle cx="60" cy="80" r="30" />
          <circle cx="100" cy="80" r="30" />
          <circle cx="60" cy="80" r="8" strokeDasharray="2 2" />
          <circle cx="100" cy="80" r="8" strokeDasharray="2 2" />

          <line x1="60" y1="80" x2="100" y2="80" />
        </g>

        {/* Dynamic Verification Arc */}
        <motion.path
          d="M 60 50 A 30 30 0 0 1 100 50"
          fill="none"
          className="stroke-blue-400"
          strokeWidth="1.5"
          strokeDasharray="80"
          animate={{ strokeDashoffset: [80, -80] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M 100 110 A 30 30 0 0 1 60 110"
          fill="none"
          className="stroke-blue-400"
          strokeWidth="1.5"
          strokeDasharray="80"
          animate={{ strokeDashoffset: [-80, 80] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Secure Nodes */}
        <motion.circle
          cx="60"
          cy="80"
          r="3"
          className="fill-blue-400"
          stroke="none"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
          cx="100"
          cy="80"
          r="3"
          className="fill-blue-400"
          stroke="none"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />

        {/* Intersection Pulse */}
        <motion.circle
          cx="80"
          cy="80"
          r="2"
          className="fill-blue-400"
          stroke="none"
          animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  </div>
);
