"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProcessStep } from "@/components/common/ProcessStep";
import { PROCESS_STEPS } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";

export function ProcessSection() {
  return (
    <SectionWrapper id="process" variant="accent">
      <Container>
        <SectionHeading
          label="תהליך"
          title="המסע שלכם לביטחון עצמי"
          subtitle="שלושה שלבים פשוטים לתוצאות מרשימות"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-3 md:gap-8"
        >
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
