"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Solutions", href: "/#solutions" },
    { name: "FAQ", href: "/#faq" },
    { name: "About", href: "/#about" },
  ];

  // Jakub Krehel's "Production Polish" staggered enter recipe
  const containerVariants: Variants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 12, filter: "blur(4px)" },
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", duration: 0.45, bounce: 0 },
    },
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <div className="w-full max-w-6xl bg-slate-lighter/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
        <div className="relative z-50">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 relative" onMouseLeave={() => setHoveredLink(null)}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
            >
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${hoveredLink === link.name ? "text-white" : "text-gray-300"}`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Navigation Toggle (Hamburger) */}
        <div className="flex md:hidden items-center gap-4 relative z-50">
          <Button variant="ghost" size="icon" className="hover:bg-white/5 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Area (Framer Motion Clip-Path Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0px at calc(100% - 32px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 32px) 32px)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 32px) 32px)" }}
            transition={{ type: "spring", duration: 0.6, bounce: 0 }}
            className="fixed inset-0 z-40 bg-[#13151A] flex flex-col p-6 pt-24 h-dvh"
          >
            {/* Dedicated Overlay Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-9 right-10 text-white hover:bg-white/10 z-50 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close navigation menu</span>
            </Button>

            <motion.nav
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-8 mt-4"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors block"
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-8">
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-white/20 hover:bg-white/5 text-white py-6 text-lg"
                  asChild
                >
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button className="w-full py-6 text-lg" onClick={() => setIsOpen(false)}>
                  Get Started
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
