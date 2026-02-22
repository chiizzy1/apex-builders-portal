"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "ai",
      content:
        "Hi there! I'm the digital concierge for Apex Builders.\n\nLooking to streamline your operations, build a custom portal, or just curious about our services? Let's chat!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    // Add user message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userMessage,
    };
    setMessages((prev) => [...prev, newUserMsg]);

    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          message: userMessage,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const data = await response.json();

      // Add AI response
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: data.response || "I received your message, but I don't have a configured response right now.",
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Chat error:", error);
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "ai",
          content:
            "Sorry, I seem to be having trouble connecting to my brain right now. Please try again or reach out via the contact form.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-24 right-6 w-[380px] h-[600px] max-h-[80vh] z-50 flex flex-col overflow-hidden 
                     bg-[#13151A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
        >
          {/* Header */}
          <div className="relative flex items-center justify-between p-4 border-b border-white/5 bg-linear-to-r from-primary/10 to-transparent">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary overflow-hidden">
                <Sparkles className="size-5" />
                <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white tracking-wide">Apex Concierge</span>
                <span className="text-xs text-primary font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close chat"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
              >
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
                    msg.role === "user" ? "bg-slate-800 text-slate-300" : "bg-primary/20 text-primary border border-primary/30"
                  }`}
                >
                  {msg.role === "user" ? <User className="size-4" /> : <Bot className="size-4" />}
                </div>

                <div
                  className={`px-4 py-3 rounded-2xl whitespace-pre-wrap text-[15px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-background font-medium rounded-tr-sm"
                      : "bg-[#1E2128] border border-white/5 text-slate-200 rounded-tl-sm shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 max-w-[85%]">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-primary/20 text-primary border border-primary/30">
                  <Bot className="size-4" />
                </div>
                <div className="px-5 py-4 rounded-2xl bg-[#1E2128] border border-white/5 rounded-tl-sm flex items-center gap-2">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-slate-500"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-slate-500"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-slate-500"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-[#13151A]">
            <form
              onSubmit={handleSubmit}
              className="relative flex items-center bg-[#1E2128] border border-white/10 rounded-full focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-inner px-2 py-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-transparent border-none text-white placeholder-slate-500 text-[15px] pl-4 pr-12 py-1 outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-background hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {isLoading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4 ml-0.5" />}
              </button>
            </form>
            <div className="mt-2 text-center">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                Powered by AI <Sparkles className="size-3 text-primary/50" />
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
