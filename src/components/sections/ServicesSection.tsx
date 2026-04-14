"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";

export function ServicesSection() {
  return (
    <SectionWrapper id="services" variant="accent">
      <Container>
        <SectionHeading
          label="שירותים"
          title="טיפולים אסתטיים מתקדמים"
          subtitle="מגוון רחב של טיפולים מותאמים אישית לכל מטופל"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
