"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppWindow, MessageSquareText } from "lucide-react";
import { ChatPanel } from "./ChatPanel";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen && hasUnread) {
      setHasUnread(false);
    }
  };

  return (
    <>
      {/* The Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
        <AnimatePresence>
          {!isOpen && hasUnread && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ delay: 2, type: "spring", stiffness: 400, damping: 20 }}
              className="px-4 py-2 bg-[#13151A] border border-white/10 rounded-xl shadow-2xl flex items-center gap-2 cursor-pointer relative"
              onClick={toggleOpen}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-slate-200">Have a question?</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleOpen}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
            isOpen
              ? "bg-[#1E2128] border border-white/10 text-white"
              : "bg-primary text-background before:absolute before:inset-0 before:rounded-full before:bg-primary/40 before:animate-ping before:opacity-75"
          }`}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <div className="relative z-10 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AppWindow className="size-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageSquareText className="size-6 ml-0.5" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </div>

      {/* The Chat Panel View */}
      <ChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
