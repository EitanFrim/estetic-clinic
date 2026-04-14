"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(id: string) {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-effect bg-[var(--color-cream-50)]/90 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo - right side in RTL */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center"
          >
            <Logo variant="monogram" className="h-10 w-auto" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isScrolled
                    ? "text-[var(--color-taupe-700)] hover:text-[var(--color-gold-500)]"
                    : "text-[var(--color-cream-100)] hover:text-[var(--color-gold-400)]"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[var(--color-gold-400)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-500)] md:flex"
            >
              <MessageCircle className="h-4 w-4" />
              קבעו תור
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center md:hidden"
              aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            >
              {isMobileMenuOpen ? (
                <X className={cn("h-6 w-6", isScrolled ? "text-[var(--color-charcoal-900)]" : "text-white")} />
              ) : (
                <Menu className={cn("h-6 w-6", isScrolled ? "text-[var(--color-charcoal-900)]" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--color-charcoal-900)]/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-[var(--color-cream-50)] p-8 shadow-xl md:hidden"
            dir="rtl"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mb-8 flex h-11 w-11 items-center justify-center self-start"
              aria-label="סגור תפריט"
            >
              <X className="h-6 w-6 text-[var(--color-charcoal-900)]" />
            </button>

            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-right text-lg font-medium text-[var(--color-charcoal-900)] transition-colors hover:text-[var(--color-gold-500)]"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-auto">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-gold-400)] px-5 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-gold-500)]"
              >
                <MessageCircle className="h-5 w-5" />
                קבעו תור
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
