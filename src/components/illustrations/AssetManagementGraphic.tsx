"use client";

import { motion } from "framer-motion";
import { Wrench, ShieldAlert, CheckCircle2 } from "lucide-react";

export const AssetManagementGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* 
        PURE GEOMETRY WIREFRAME 
        Minimal 1px strokes, no fills, extreme contrast on the single data point.
      */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 160 160">
        <g stroke="currentColor" strokeWidth="1" fill="none">
          {/* Base Gauge Track */}
          <path d="M 40 120 A 60 60 0 1 1 120 120" opacity="0.1" />

          {/* Active Data Arc */}
          <motion.path
            d="M 40 120 A 60 60 0 1 1 120 120"
            strokeDasharray="280"
            className="stroke-accent-cyan"
            opacity="0.5"
            animate={{ strokeDashoffset: [280, 180, 220, 120] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center Hub */}
          <circle cx="80" cy="80" r="4" opacity="0.3" fill="currentColor" />
          <circle cx="80" cy="80" r="12" strokeDasharray="2 2" opacity="0.2" />

          {/* Primary Indicator Needle Node */}
          <motion.g
            style={{ transformOrigin: "80px 80px" }}
            animate={{ rotate: [0, 100, 60, 160] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* The Needle Line */}
            <line x1="80" y1="68" x2="80" y2="24" stroke="currentColor" opacity="0.2" />

            {/* The High Contrast 'Reading' Node */}
            <circle cx="80" cy="20" r="3" className="fill-accent-cyan" stroke="none" />
            {/* Node Pulse */}
            <motion.circle
              cx="80"
              cy="20"
              r="1"
              fill="none"
              className="stroke-accent-cyan"
              animate={{ r: [3, 8], opacity: [0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          </motion.g>

          {/* Scale Markers */}
          <path d="M 45 110 L 50 105" opacity="0.2" />
          <path d="M 25 80 L 32 80" opacity="0.2" />
          <path d="M 45 50 L 50 55" opacity="0.2" />
          <path d="M 80 25 L 80 32" opacity="0.2" />
          <path d="M 115 50 L 110 55" opacity="0.2" />
          <path d="M 135 80 L 128 80" opacity="0.2" />
          <path d="M 115 110 L 110 105" opacity="0.2" />
        </g>
      </svg>
    </div>
  </div>
);
