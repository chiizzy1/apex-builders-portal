"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Map } from "lucide-react";

export const FieldTrackingGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* 
        PURE GEOMETRY WIREFRAME 
        Minimal 1px strokes, no fills, extreme contrast on the single data point.
      */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 160 160">
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
          {/* Base Radar Rings */}
          <circle cx="80" cy="80" r="30" />
          <circle cx="80" cy="80" r="60" strokeDasharray="2 4" />

          {/* Crosshairs */}
          <line x1="80" y1="10" x2="80" y2="150" strokeDasharray="2 2" />
          <line x1="10" y1="80" x2="150" y2="80" strokeDasharray="2 2" />
        </g>

        {/* The Sweeping Radar Line */}
        <motion.g
          style={{ transformOrigin: "80px 80px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <line x1="80" y1="80" x2="80" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <path d="M 80 80 L 80 20 A 60 60 0 0 1 122 38 Z" fill="url(#radarSweep)" opacity="0.1" />
        </motion.g>

        {/* The High Contrast 'Ping' Node */}
        <g>
          <motion.circle
            cx="110"
            cy="28"
            r="3"
            className="fill-accent-cyan"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Ping Echo */}
          <motion.circle
            cx="110"
            cy="28"
            r="1"
            fill="none"
            className="stroke-accent-cyan"
            animate={{ r: [3, 15], opacity: [0.8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        </g>

        <defs>
          <linearGradient id="radarSweep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);
