"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  variant?: "default" | "accent" | "dark";
}

const variantStyles = {
  default: "bg-[var(--color-cream-50)]",
  accent: "bg-[var(--color-sage-100)]",
  dark: "bg-[var(--color-charcoal-900)] text-[var(--color-cream-100)]",
};

export function SectionWrapper({
  children,
  id,
  className,
  variant = "default",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={cn("py-20 md:py-32", variantStyles[variant], className)}
      aria-label={id}
    >
      {children}
    </motion.section>
  );
}
