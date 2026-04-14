"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-start"
      )}
    >
      {label && (
        <motion.span
          variants={fadeInUp}
          className="mb-3 inline-block text-xs font-medium tracking-[0.2em] text-[var(--color-gold-400)]"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className={cn(
          "font-heading text-3xl font-bold md:text-4xl lg:text-5xl",
          dark ? "text-[var(--color-cream-100)]" : "text-[var(--color-charcoal-900)]"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "mt-4 text-lg",
            dark ? "text-[var(--color-taupe-300)]" : "text-[var(--color-taupe-500)]"
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeInUp}
        className={cn(
          "mt-6 h-0.5 w-12 bg-[var(--color-gold-400)]",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}
