"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="flex flex-col items-center gap-2"
    >
      <span className="text-xs tracking-widest text-[var(--color-cream-200)]/70">
        גלילה למטה
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="h-10 w-6 rounded-full border-2 border-[var(--color-cream-200)]/40"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mt-2 h-2 w-1 rounded-full bg-[var(--color-gold-400)]"
        />
      </motion.div>
    </motion.div>
  );
}
