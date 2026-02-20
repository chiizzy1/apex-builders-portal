"use client";

import React, { useState, useRef, useEffect } from "react";
import { N8N_WEBHOOKS } from "@/lib/constants";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What's the current status of my project?",
  "Who is my assigned technician?",
  "When is the estimated completion date?",
  "What invoices are pending payment?",
];

const INITIAL_MESSAGE: Message = {
  id: "initial",
  role: "assistant",
  content:
    "Hi Sarah! I'm your Apex AI assistant. I have full visibility into your kitchen renovation at 124 Maple Drive. Ask me anything — project status, your assigned crew, upcoming milestones, or invoice questions.",
  timestamp: new Date(),
};

export default function ClientAIAssistant() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const messageText = text ?? input.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(N8N_WEBHOOKS.AI_CHAT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          sessionId: "sarah-jenkins-demo",
          clientName: "Sarah Jenkins",
          projectAddress: "124 Maple Drive",
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const reply = data.reply ?? data.message ?? data.output ?? "I didn't quite catch that. Could you rephrase?";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex-1 w-full h-[calc(100vh-6rem)] max-w-[1600px] mx-auto px-4 lg:px-8 py-6 flex gap-6 relative">
      {/* Left Panel: Thread History */}
      <aside className="hidden lg:flex flex-col w-[30%] min-w-[320px] bg-[#21242D] rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5">
        {/* Header Section */}
        <div className="p-6 pb-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-2xl size-12 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl">token</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight text-white">Apex Builders</h1>
              <p className="text-slate-400 text-xs font-medium tracking-wide uppercase">AI Assistant</p>
            </div>
          </div>

          <button
            onClick={() => setMessages([INITIAL_MESSAGE])}
            className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0df2f2]/20 to-[#0df2f2]/10 hover:from-[#0df2f2]/30 hover:to-[#0df2f2]/20 text-[#0df2f2] border border-[#0df2f2]/30 rounded-full py-3 px-4 transition-all duration-300 shadow-[0_0_15px_rgba(13,242,242,0.3)] hover:shadow-[0_0_20px_rgba(13,242,242,0.5)] mb-6"
          >
            <span className="material-symbols-outlined text-xl">add</span>
            <span className="font-bold text-sm">New Consultation</span>
          </button>
        </div>

        {/* Suggested Questions */}
        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2 custom-scrollbar">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 mb-3">Quick Questions</p>
          {SUGGESTED_QUESTIONS.map((question, i) => (
            <button
              key={i}
              onClick={() => sendMessage(question)}
              disabled={isLoading}
              className="w-full text-left p-4 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-[#0df2f2]/20 transition-colors group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="text-slate-300 group-hover:text-white text-sm transition-colors">{question}</p>
            </button>
          ))}
        </div>

        {/* Bottom User Profile */}
        <div className="p-4 mt-auto border-t border-white/5">
          <div className="flex items-center gap-3">
            <div
              className="size-10 rounded-full bg-center bg-cover border-2 border-[#0df2f2]/30"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbLfSofdnV3CtHDehntqILFjCiXZK0sCqv076HD_hBzWq60WctceanRMIUnXMlXCVENBRqazdMx4cwe3EHiuAmW2wtO2ZCWYDstpZkj63jorhrsmccGuTnoEvIWqYuIeD0RlcvQeQvgRXGxzL5LgNjUqLe14zvMAwoxnZMIhkZJSM8MVCMHwhrUxv4jvIPLSBR_YO6gO9xOxruGhfH6rgP944ASuZ1OvS2HifVmSPK95NxhmKoWy1pe1rD89zjoOzAzyapHa3RTCM")',
              }}
            />
            <div>
              <p className="text-white font-semibold text-sm">Sarah Jenkins</p>
              <p className="text-slate-400 text-xs">Homeowner · 124 Maple Drive</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Panel: Chat Area */}
      <main className="flex-1 flex flex-col bg-[#21242D] rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="size-12 rounded-2xl bg-gradient-to-br from-[#0df2f2]/30 to-blue-600/20 border border-[#0df2f2]/20 flex items-center justify-center shadow-[0_0_20px_rgba(13,242,242,0.2)]">
                <span className="material-symbols-outlined text-[#0df2f2] text-2xl">smart_toy</span>
              </div>
              <span className="absolute -bottom-1 -right-1 size-4 bg-green-500 rounded-full border-2 border-[#21242D]"></span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">Apex AI Assistant</h2>
              <p className="text-slate-400 text-xs">Online · Connected to your project</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-400 text-xs font-medium">Live</span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 custom-scrollbar">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              {/* Avatar */}
              {message.role === "assistant" ? (
                <div className="size-10 rounded-2xl bg-gradient-to-br from-[#0df2f2]/30 to-blue-600/20 border border-[#0df2f2]/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(13,242,242,0.2)]">
                  <span className="material-symbols-outlined text-[#0df2f2] text-xl">smart_toy</span>
                </div>
              ) : (
                <div
                  className="size-10 rounded-2xl bg-center bg-cover border border-white/10 shrink-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbLfSofdnV3CtHDehntqILFjCiXZK0sCqv076HD_hBzWq60WctceanRMIUnXMlXCVENBRqazdMx4cwe3EHiuAmW2wtO2ZCWYDstpZkj63jorhrsmccGuTnoEvIWqYuIeD0RlcvQeQvgRXGxzL5LgNjUqLe14zvMAwoxnZMIhkZJSM8MVCMHwhrUxv4jvIPLSBR_YO6gO9xOxruGhfH6rgP944ASuZ1OvS2HifVmSPK95NxhmKoWy1pe1rD89zjoOzAzyapHa3RTCM")',
                  }}
                />
              )}

              {/* Bubble */}
              <div
                className={`max-w-[70%] ${
                  message.role === "user"
                    ? "bg-[#0df2f2] text-[#13151A] rounded-3xl rounded-tr-sm px-5 py-4"
                    : "bg-[#2A2D36] text-slate-100 rounded-3xl rounded-tl-sm px-5 py-4 border border-white/5"
                }`}
              >
                <p className={`text-sm leading-relaxed ${message.role === "user" ? "font-medium" : ""}`}>{message.content}</p>
                <p className={`text-[10px] mt-2 ${message.role === "user" ? "text-[#13151A]/50" : "text-slate-500"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex gap-4">
              <div className="size-10 rounded-2xl bg-gradient-to-br from-[#0df2f2]/30 to-blue-600/20 border border-[#0df2f2]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#0df2f2] text-xl">smart_toy</span>
              </div>
              <div className="bg-[#2A2D36] rounded-3xl rounded-tl-sm px-5 py-4 border border-white/5 flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="size-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="size-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="shrink-0 px-6 pb-6 pt-4 border-t border-white/5">
          <div className="flex items-center gap-3 bg-[#13151A] border border-white/10 rounded-2xl px-4 py-2 focus-within:border-[#0df2f2]/40 transition-colors">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about your project..."
              disabled={isLoading}
              className="flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:outline-none focus:ring-0 px-2 py-3 h-12 disabled:opacity-50"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              className="h-10 px-6 bg-[#0df2f2] text-[#13151A] rounded-full font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(13,242,242,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none"
            >
              <span>Send</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
            </button>
          </div>
          <div className="text-center mt-3">
            <p className="text-[10px] text-slate-500 opacity-50">Apex AI can make mistakes. Verify important project details.</p>
          </div>
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #374151; border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #4B5563; }
        `,
        }}
      />
    </div>
  );
}
