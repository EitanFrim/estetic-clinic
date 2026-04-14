"use client";

import { motion } from "framer-motion";
import { heroTextReveal, heroCharacter } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={heroTextReveal}
      initial="hidden"
      animate="visible"
      className={cn("flex flex-wrap justify-center gap-x-3", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={heroCharacter}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
