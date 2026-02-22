"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, DollarSign } from "lucide-react";

export const RealTimeMetricsGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* 
        PURE GEOMETRY WIREFRAME 
        Minimal 1px strokes, no fills, extreme contrast on the single data point.
      */}
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 160 160">
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2">
          {/* Base Grid / Coordinate System */}
          <line x1="20" y1="130" x2="140" y2="130" strokeDasharray="2 2" />
          <line x1="20" y1="20" x2="20" y2="130" strokeDasharray="2 2" />

          <line x1="20" y1="94" x2="140" y2="94" opacity="0.5" />
          <line x1="20" y1="58" x2="140" y2="58" opacity="0.5" />
        </g>

        {/* The Data Curve */}
        <path
          d="M 20 110 C 50 110, 60 40, 90 60 C 110 70, 120 30, 140 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* Active Data Trace */}
        <motion.path
          d="M 20 110 C 50 110, 60 40, 90 60 C 110 70, 120 30, 140 30"
          fill="none"
          className="stroke-purple-400"
          strokeWidth="1.5"
          strokeDasharray="200"
          animate={{ strokeDashoffset: [200, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* The High Contrast 'Metric' Node tracking the curve */}
        {/* We simulate the node following the path since pure SVG motion along path requires complex SMIL or JS. 
            For this geometric style, pulsing key nodes is cleaner. */}
        <g>
          {/* Start Node */}
          <circle cx="20" cy="110" r="2" fill="currentColor" opacity="0.3" />

          {/* Peak Node 1 */}
          <circle cx="75" cy="49" r="2" fill="currentColor" opacity="0.3" />

          {/* The Live Final Node */}
          <motion.circle
            cx="140"
            cy="30"
            r="3"
            className="fill-purple-400"
            stroke="none"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="140"
            cy="30"
            r="1"
            fill="none"
            className="stroke-purple-400"
            animate={{ r: [3, 10], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </g>
      </svg>
    </div>
  </div>
);
