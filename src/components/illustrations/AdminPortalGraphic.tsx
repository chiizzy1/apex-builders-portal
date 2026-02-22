"use client";

import { motion } from "framer-motion";
import { Laptop, RefreshCw, BarChart3, Database } from "lucide-react";

export const AdminPortalGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* PURE GEOMETRY WIREFRAME */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 160 160">
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
          {/* Central Hub */}
          <circle cx="80" cy="80" r="24" strokeDasharray="4 4" />
          <circle cx="80" cy="80" r="8" />

          {/* Radiating Lines */}
          <line x1="80" y1="56" x2="80" y2="20" />
          <line x1="59" y1="92" x2="28" y2="110" />
          <line x1="101" y1="92" x2="132" y2="110" />

          {/* Satellite Nodes */}
          <circle cx="80" cy="20" r="12" />
          <circle cx="28" cy="110" r="12" />
          <circle cx="132" cy="110" r="12" />
        </g>

        {/* Dynamic Data Flow - slow sweeps */}
        <motion.circle
          cx="80"
          cy="80"
          r="24"
          fill="none"
          className="stroke-cyan-400"
          strokeWidth="1.5"
          strokeDasharray="150"
          animate={{ strokeDashoffset: [150, 0, -150] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* High Contrast Central Node */}
        <motion.circle
          cx="80"
          cy="80"
          r="3"
          className="fill-cyan-400"
          stroke="none"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="80"
          cy="20"
          r="2"
          className="fill-cyan-400"
          stroke="none"
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="28"
          cy="110"
          r="2"
          className="fill-cyan-400"
          stroke="none"
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.circle
          cx="132"
          cy="110"
          r="2"
          className="fill-cyan-400"
          stroke="none"
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </svg>
    </div>
  </div>
);
