"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BeforeAfterSlider } from "@/components/common/BeforeAfterSlider";
import { GALLERY_ITEMS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[number] }) {
  if (item.image) {
    return (
      <div className="group relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-3 right-3 rounded-full bg-[var(--color-charcoal-900)]/70 px-3 py-1 text-xs font-medium text-white">
          {item.label}
        </div>
      </div>
    );
  }

  return <BeforeAfterSlider label={item.label} />;
}

export function GallerySection() {
  return (
    <SectionWrapper id="gallery">
      <Container>
        <SectionHeading
          label="גלריה"
          title="תוצאות שמדברות בעד עצמן"
          subtitle="לפני ואחרי - תוצאות אמיתיות של מטופלים שלנו"
        />

        {/* Desktop: horizontal scroll */}
        <div className="hidden md:block">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {GALLERY_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                custom={index}
                className="w-72 flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <GalleryCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:hidden"
        >
          {GALLERY_ITEMS.slice(0, 4).map((item, index) => (
            <motion.div key={item.id} variants={fadeInUp} custom={index}>
              <GalleryCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
