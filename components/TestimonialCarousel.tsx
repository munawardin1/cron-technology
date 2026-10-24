"use client";

import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { Testimonial } from "@/lib/data";

// The stacked review cards from the "05 / PROOF" section, with working
// previous / next buttons, dots and swipe. Every card stays mounted in the same grid cell,
// so the stack keeps the height of the longest review and never jumps.
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const swipeStart = useRef<number | null>(null);

  function go(index: number, dir: 1 | -1) {
    setDirection(dir);
    setActive((index + items.length) % items.length);
  }
  const next = () => go(active + 1, 1);
  const previous = () => go(active - 1, -1);

  function onPointerDown(event: PointerEvent) {
    swipeStart.current = event.clientX;
  }
  function onPointerUp(event: PointerEvent) {
    if (swipeStart.current === null) return;
    const dx = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (dx < -50) next();
    else if (dx > 50) previous();
  }

  return (
    <div className="relative z-10 w-full max-w-[740px] my-auto pt-6">
      {/* Back card: the design's rotate-4 class doesn't exist in Tailwind v3, so it is not rotated */}
      <div className="absolute inset-0 bg-cream/50 rounded-[32px] border border-bronze/30 shadow-xl scale-90 translate-y-6 translate-x-4 pointer-events-none"></div>
      <div className="absolute inset-0 bg-cream/75 rounded-[32px] border border-bronze/30 shadow-xl -rotate-6 scale-95 -translate-y-3 -translate-x-3 pointer-events-none"></div>

      <div
        className="grid touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipeStart.current = null)}
        aria-roledescription="carousel"
        aria-label="Client reviews"
      >
        {items.map((testimonial, index) => {
          const isActive = index === active;
          return (
            <div
              key={testimonial.name}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
              aria-hidden={!isActive}
              style={{ "--card-from": `${direction * 48}px` } as CSSProperties}
              className={`[grid-area:1/1] relative bg-cream text-ink p-8 md:p-10 rounded-[32px] shadow-2xl border border-bronze/40 rotate-2 hover:rotate-0 transition-transform duration-300 ${
                isActive ? "animate-card-in" : "invisible opacity-0"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-bronze overflow-hidden bg-forest/20 flex items-center justify-center font-headline font-bold text-lg text-ink shadow-xs shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-xl text-ink leading-snug">{testimonial.name}</div>
                    <div className="font-mono text-xs uppercase tracking-wider text-ink/70 font-medium">
                      {testimonial.role}
                    </div>
                    <div className="flex items-center gap-1 text-bronze text-sm mt-1 select-none" aria-label="5 out of 5 stars">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink/5 border border-ink/10 font-mono text-[11px] font-bold tracking-wider text-ink uppercase">
                  <span className="w-2 h-2 rounded-full bg-bronze"></span>
                  VERIFIED CLIENT
                </div>
              </div>
              <p className="font-body text-lg md:text-xl text-ink font-normal leading-relaxed md:leading-7 mb-6">
                {testimonial.quote}
              </p>
              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="font-mono text-xs text-ink/60 uppercase tracking-wider">{testimonial.project}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          aria-label="Previous review"
          onClick={previous}
          className="w-10 h-10 rounded-full border border-bronze/60 bg-ink/70 text-cream flex items-center justify-center font-mono hover:bg-bronze hover:text-ink transition-colors shadow-lg"
          type="button"
        >
          &lt;
        </button>
        <div className="flex items-center gap-2">
          {items.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show review ${index + 1}`}
              aria-current={index === active}
              onClick={() => go(index, index > active ? 1 : -1)}
              className={
                index === active
                  ? "w-2.5 h-2.5 rounded-full bg-bronze transition-colors"
                  : "w-2 h-2 rounded-full bg-cream/40 hover:bg-cream/80 transition-colors cursor-pointer"
              }
            ></button>
          ))}
        </div>
        <button
          aria-label="Next review"
          onClick={next}
          className="w-10 h-10 rounded-full border border-bronze/60 bg-ink/70 text-cream flex items-center justify-center font-mono hover:bg-bronze hover:text-ink transition-colors shadow-lg"
          type="button"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
