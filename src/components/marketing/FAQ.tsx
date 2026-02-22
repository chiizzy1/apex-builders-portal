"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Surface } from "@/components/ui/Surface";

export function FAQ() {
  const faqs = [
    {
      q: "Does it integrate with my existing tools?",
      a: "Yes. Powered by n8n behind the scenes, we can automate notifications via email, SMS, and even ping your team's Slack or Discord when new jobs are requested or completed.",
    },
    {
      q: "What exactly can my clients see?",
      a: "Clients only see their own assigned projects and the progress logs (photos, status updates) you explicitly choose to share. Total privacy and compartmentalization is built into the database.",
    },
    {
      q: "How does the AI Assistant work?",
      a: "The client portal features a custom-trained AI agent. It reads the specific client's project data and safely answers their routine questions (like 'Who is my assigned tech?' or 'What is the remaining balance?') so you don't have to.",
    },
    {
      q: "Is the Technician App easy to use in the field?",
      a: "It's designed specifically for mobile use on job sites. Big buttons, simple photo uploads, easy signature capture, and one-tap asset checkout. Zero training required.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full max-w-3xl mb-32 relative z-10 px-4 md:px-8 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <Surface key={i} className="overflow-hidden transition-all duration-300">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-semibold text-lg">{faq.q}</span>
              <ChevronDown
                className={`size-5 text-gray-400 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="p-6 pt-0 text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </Surface>
        ))}
      </div>
    </section>
  );
}
