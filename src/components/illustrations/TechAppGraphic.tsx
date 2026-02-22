"use client";

import { motion } from "framer-motion";
import { Smartphone, MapPin, CheckCircle2, Navigation } from "lucide-react";

export const TechAppGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* PURE GEOMETRY WIREFRAME */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 160 160">
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
          {/* Base Triangulation Grid */}
          <path d="M 20 120 L 80 40 L 140 100 L 80 140 Z" />
          <path d="M 20 120 L 140 100" />
          <path d="M 80 40 L 80 140" />

          {/* Nodes */}
          <circle cx="20" cy="120" r="4" />
          <circle cx="80" cy="40" r="4" />
          <circle cx="140" cy="100" r="4" />
          <circle cx="80" cy="140" r="4" />
          <circle cx="80" cy="100" r="4" />
        </g>

        {/* Dynamic Route Line */}
        <motion.path
          d="M 20 120 L 80 100 L 140 100"
          fill="none"
          className="stroke-purple-400"
          strokeWidth="1.5"
          strokeDasharray="140"
          animate={{ strokeDashoffset: [140, -140] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* High Contrast Moving Vehicle/Tech Node */}
        <motion.circle r="3" className="fill-purple-400" stroke="none">
          <animateMotion dur="8s" repeatCount="indefinite" path="M 20 120 L 80 100 L 140 100" />
        </motion.circle>

        {/* Destination Pulse */}
        <motion.circle
          cx="140"
          cy="100"
          r="8"
          fill="none"
          className="stroke-purple-400"
          animate={{ scale: [0.8, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
    </div>
  </div>
);
