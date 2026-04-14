"use client";

import { motion } from "framer-motion";
import type { LucideProps } from "lucide-react";
import { Sparkles, Droplets, Syringe, Sun, Diamond, Smile } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import type { Service } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Sparkles,
  Droplets,
  Syringe,
  Sun,
  Diamond,
  Smile,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Sparkles;

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group relative overflow-hidden rounded-xl border border-[var(--color-cream-200)] bg-white p-8 transition-all duration-300 hover:border-[var(--color-gold-400)]/30 hover:shadow-lg"
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 right-0 left-0 h-0.5 origin-right scale-x-0 bg-[var(--color-gold-400)] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-cream-100)]">
        <Icon className="h-6 w-6 text-[var(--color-gold-400)]" />
      </div>

      <h3 className="mb-3 font-heading text-xl font-semibold text-[var(--color-charcoal-900)]">
        {service.title}
      </h3>

      <p className="text-sm leading-relaxed text-[var(--color-taupe-500)]">
        {service.description}
      </p>
    </motion.div>
  );
}
