"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, Mail, Send } from "lucide-react";

export const ClientPortalFeatureGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* 
        PURE GEOMETRY WIREFRAME 
        Minimal 1px strokes, no fills, extreme contrast on the single data point.
      */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 160 160">
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
          {/* Base Connection Nodes */}
          <circle cx="30" cy="80" r="16" strokeDasharray="2 2" />
          <circle cx="130" cy="80" r="16" strokeDasharray="2 2" />

          {/* Structural Connecting Lines */}
          <path d="M 46 80 C 70 80, 90 40, 130 40" opacity="0.5" />
          <path d="M 46 80 C 70 80, 90 120, 130 120" opacity="0.5" />

          <line x1="46" y1="80" x2="114" y2="80" opacity="0.5" />
        </g>

        {/* The Active Connection Arc */}
        <motion.path
          d="M 46 80 C 70 80, 90 40, 130 40"
          fill="none"
          className="stroke-blue-400"
          strokeWidth="1.5"
          strokeDasharray="120"
          animate={{ strokeDashoffset: [120, -120] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* The High Contrast 'Data Packet' Node */}
        <g>
          <motion.circle
            cx="80"
            cy="80"
            r="3"
            className="fill-blue-400"
            stroke="none"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Pulse */}
          <motion.circle
            cx="80"
            cy="80"
            r="1"
            fill="none"
            className="stroke-blue-400"
            animate={{ r: [3, 12], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </g>

        {/* End Point Nodes */}
        <circle cx="30" cy="80" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="130" cy="40" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  </div>
);
