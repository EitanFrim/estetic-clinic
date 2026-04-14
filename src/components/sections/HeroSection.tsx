"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import { AnimatedText } from "@/components/common/AnimatedText";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { fadeIn, fadeInUp } from "@/lib/animations";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
);

export function HeroSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function scrollToServices() {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal-900)] via-[var(--color-charcoal-900)]/95 to-[var(--color-taupe-700)]" />

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, var(--color-gold-400) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* 3D Scene - desktop only */}
      {isDesktop && <HeroScene />}

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <span className="inline-block text-xs font-medium tracking-[0.3em] text-[var(--color-gold-400)]">
            קליניקה לאסתטיקה רפואית
          </span>
        </motion.div>

        <AnimatedText
          text="ד״ר חיים טל"
          className="text-glow font-heading text-5xl font-bold text-white md:text-7xl lg:text-8xl"
        />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mx-auto mt-6 max-w-lg text-lg text-[var(--color-cream-200)]/80 md:text-xl"
        >
          רפואה אסתטית ואמנות הפנים
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[var(--color-gold-400)] px-8 py-3.5 font-semibold text-white transition-all hover:bg-[var(--color-gold-500)] hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            קבעו תור
          </a>
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 rounded-full border border-[var(--color-cream-200)]/30 px-8 py-3.5 font-medium text-[var(--color-cream-200)] transition-all hover:border-[var(--color-gold-400)]/50 hover:text-[var(--color-gold-400)]"
          >
            השירותים שלנו
            <ChevronDown className="h-4 w-4" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
}
