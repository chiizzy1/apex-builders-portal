"use client";

import { motion } from "framer-motion";

export function ProblemStatement() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto py-24 md:py-32 px-4 relative z-10 flex flex-col items-center text-center"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          You lost three jobs today because <br className="hidden md:block" />
          <span className="text-gray-400">you were too busy doing a job.</span>
        </h2>

        <div className="w-16 h-1 bg-primary/30 rounded-full my-4"></div>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
          Spreadsheets, disconnected text messages, and lost tools are eating your margins. If you manage a blue-collar business,
          you need to track subcontractors, show clients progress, and chase invoices at the same time.
        </p>

        <p className="text-xl md:text-2xl font-medium text-white/90 max-w-2xl">It is simply too much for basic software.</p>
      </motion.div>
    </section>
  );
}
