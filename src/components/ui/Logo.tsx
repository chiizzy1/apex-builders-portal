import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Abstract "A" / Building Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
        {/* Glow behind the logo */}
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Pillar */}
          <path d="M30 80 L50 20 L60 20 L40 80 Z" fill="currentColor" className="text-white backdrop-blur-sm" />
          {/* Right Pillar (overlapping/accentuated) */}
          <path d="M50 20 L70 80 L55 80 L40 35 Z" fill="url(#primaryGradient)" className="text-primary" />
          {/* Horizontal Crossbeam (Architectural feel) */}
          <rect x="35" y="55" width="25" height="12" transform="skewX(-15)" fill="currentColor" className="text-white" />

          <defs>
            <linearGradient id="primaryGradient" x1="50" y1="20" x2="70" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-primary)" />
              <stop offset="1" stopColor="#f97316" /> {/* Primary to Orange transition */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <span className="text-xl font-extrabold tracking-tight text-white leading-none">APEX</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase leading-tight mt-0.5">Builders</span>
        </div>
      )}
    </div>
  );
}
