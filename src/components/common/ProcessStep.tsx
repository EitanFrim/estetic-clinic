"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { ProcessStep as ProcessStepType } from "@/lib/constants";

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isLast: boolean;
}

export function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="relative flex flex-col items-center text-center"
    >
      {/* Number circle */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-gold-400)] bg-white">
        <span className="font-heading text-xl font-bold text-[var(--color-gold-400)]">
          {step.number}
        </span>
      </div>

      <h3 className="mb-3 font-heading text-xl font-semibold text-[var(--color-charcoal-900)]">
        {step.title}
      </h3>

      <p className="max-w-xs text-sm leading-relaxed text-[var(--color-taupe-500)]">
        {step.description}
      </p>

      {/* Connecting arrow - hidden on mobile and last item */}
      {!isLast && (
        <div className="absolute top-8 -left-[calc(50%-2rem)] hidden w-[calc(100%-4rem)] md:block">
          <svg
            viewBox="0 0 200 2"
            className="w-full text-[var(--color-gold-400)]/30"
          >
            <line
              x1="0"
              y1="1"
              x2="200"
              y2="1"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}
