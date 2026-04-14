"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { fadeInUp, slideInFromRight, slideInFromLeft } from "@/lib/animations";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <Container>
        <SectionHeading
          label="אודות"
          title="הפילוסופיה שלנו"
          subtitle="שילוב מושלם בין מדע רפואי לאמנות אסתטית"
        />

        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Doctor placeholder */}
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-[var(--color-cream-200)] to-[var(--color-taupe-300)]">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-[var(--color-gold-400)]/20" />
                  <p className="font-heading text-lg font-semibold text-[var(--color-taupe-700)]">
                    ד״ר חיים טל
                  </p>
                  <p className="text-sm text-[var(--color-taupe-500)]">
                    תמונת הרופא
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative gold corner */}
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-xl border-2 border-[var(--color-gold-400)]/30" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-[var(--color-charcoal-900)]">
              ד״ר חיים טל
            </h3>
            <div className="h-0.5 w-12 bg-[var(--color-gold-400)]" />
            <p className="text-base leading-relaxed text-[var(--color-taupe-500)]">
              ד״ר חיים טל הוא מומחה בתחום האסתטיקה הרפואית והדנטלית, עם ניסיון
              עשיר בטיפולי בוטוקס, פילרים, עיצוב חיוך וטיפולי עור מתקדמים.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-taupe-500)]">
              בקליניקה שלנו, אנו מאמינים שכל מטופל ייחודי. אנו משלבים טכנולוגיות
              מתקדמות עם גישה אישית כדי להשיג תוצאות טבעיות ומרשימות שמשדרגות
              את המראה ומחזקות את הביטחון העצמי.
            </p>

            {/* Video placeholder */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 overflow-hidden rounded-xl"
            >
              <div className="group relative aspect-video cursor-pointer bg-gradient-to-bl from-[var(--color-cream-100)] to-[var(--color-cream-200)]">
                <div className="flex h-full items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold-400)] text-white shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-sm text-[var(--color-taupe-500)]">
                  צפו בסרטון הקליניקה
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
