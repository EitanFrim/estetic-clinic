import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/constants";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-[var(--color-charcoal-900)] border border-[var(--color-taupe-700)]/20 p-8">
      <Quote className="mb-4 h-8 w-8 text-[var(--color-gold-400)] opacity-50" />

      <p className="mb-6 flex-1 text-base leading-relaxed text-[var(--color-cream-200)]">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-[var(--color-gold-400)] text-[var(--color-gold-400)]"
          />
        ))}
      </div>

      <div>
        <p className="font-heading font-semibold text-[var(--color-cream-100)]">
          {testimonial.name}
        </p>
        <p className="text-sm text-[var(--color-taupe-300)]">
          {testimonial.treatment}
        </p>
      </div>
    </div>
  );
}
