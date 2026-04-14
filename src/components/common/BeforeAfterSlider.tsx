"use client";

import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  label: string;
  className?: string;
}

export function BeforeAfterSlider({ label, className }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // RTL: reverse the calculation
    const x = rect.right - clientX;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[3/4] cursor-col-resize select-none overflow-hidden rounded-xl",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* "Before" placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream-200)] to-[var(--color-taupe-300)]">
        <div className="flex h-full items-center justify-center">
          <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[var(--color-charcoal-900)]">
            לפני
          </span>
        </div>
      </div>

      {/* "After" placeholder - clipped */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold-400)]/20 to-[var(--color-cream-100)]"
        style={{ clipPath: `inset(0 ${sliderPosition}% 0 0)` }}
      >
        <div className="flex h-full items-center justify-center">
          <span className="rounded-full bg-[var(--color-gold-400)]/80 px-4 py-2 text-sm font-medium text-white">
            אחרי
          </span>
        </div>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ right: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 right-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--color-gold-400)] shadow-md">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
            <path
              fill="currentColor"
              d="M8 5v14l-7-7 7-7zm8 0v14l7-7-7-7z"
            />
          </svg>
        </div>
      </div>

      {/* Label badge */}
      <div className="absolute bottom-4 right-4 rounded-full bg-[var(--color-charcoal-900)]/70 px-3 py-1 text-xs font-medium text-white">
        {label}
      </div>
    </div>
  );
}
