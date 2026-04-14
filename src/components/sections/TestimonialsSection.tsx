"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: "rtl",
    align: "start",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Auto-play
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <motion.section
      id="testimonials"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="overflow-x-clip bg-[var(--color-charcoal-900)]/95 py-20 md:py-32"
    >
      <Container>
        <SectionHeading
          label="המלצות"
          title="מה המטופלים שלנו אומרים"
          dark
        />

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-taupe-500)]/30 text-[var(--color-cream-200)] transition-colors hover:border-[var(--color-gold-400)] hover:text-[var(--color-gold-400)] disabled:opacity-30"
              aria-label="הקודם"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-taupe-500)]/30 text-[var(--color-cream-200)] transition-colors hover:border-[var(--color-gold-400)] hover:text-[var(--color-gold-400)] disabled:opacity-30"
              aria-label="הבא"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
