import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className="w-full bg-cream text-ink py-28 px-6 lg:px-12 relative overflow-hidden" id="work">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-sage tracking-[0.25em] uppercase block mb-3">
              05 / PROOF
            </span>
            <h2 className="font-headline font-semibold text-5xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-ink leading-tight sm:leading-none">
              Recent <span className="font-headline italic font-normal text-bronze">drops.</span>
            </h2>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-ink border border-forest/50 shadow-2xl mb-12 min-h-[700px] lg:min-h-[740px] flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16 select-none">
          <div className="absolute top-8 left-8 sm:left-10 z-20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-bronze"></span>
          </div>

          {/* Typographic background: the letters of "reviews", quote marks and hashtag badges */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
            <span className="absolute -top-28 -left-16 font-headline font-semibold text-[380px] sm:text-[460px] leading-none text-forest/90 -rotate-[18deg] select-none">
              r
            </span>
            <span className="absolute -top-32 left-[20%] font-headline font-semibold text-[400px] sm:text-[500px] leading-none text-bronze/85 rotate-[22deg] select-none">
              e
            </span>
            <span className="absolute -top-24 right-[-4%] font-headline font-semibold text-[380px] sm:text-[480px] leading-none text-forest/85 -rotate-[35deg] select-none">
              v
            </span>
            <span className="absolute top-[28%] -left-20 font-headline font-semibold text-[360px] sm:text-[440px] leading-none text-forest/80 rotate-[15deg] select-none">
              i
            </span>
            <span className="absolute -bottom-36 left-[22%] sm:left-[26%] font-headline font-semibold text-[420px] sm:text-[520px] leading-none text-forest/90 -rotate-[8deg] select-none">
              e
            </span>
            <span className="absolute -bottom-32 right-[-6%] font-headline font-semibold text-[420px] sm:text-[540px] leading-none text-bronze/80 rotate-[16deg] select-none">
              w
            </span>
            <div className="absolute top-24 left-16 sm:left-24 text-ink text-7xl sm:text-8xl font-headline font-bold -rotate-12 select-none opacity-90">
              “
            </div>
            <div className="absolute bottom-20 right-28 sm:right-36 text-ink text-7xl sm:text-8xl font-headline font-bold rotate-12 select-none opacity-90">
              ”
            </div>
            <div className="absolute top-14 right-20 sm:right-32 -rotate-[24deg] bg-cream text-ink px-4 py-1.5 rounded-md shadow-xl border border-ink/20 flex items-center">
              <span className="font-mono font-bold text-xs uppercase tracking-[0.2em]">#REVIEW</span>
            </div>
            <div className="absolute bottom-24 left-6 sm:left-12 rotate-[68deg] bg-cream text-ink px-4 py-1.5 rounded-md shadow-xl border border-ink/20 flex items-center origin-left">
              <span className="font-mono font-bold text-xs uppercase tracking-[0.2em]">#TESTIMONIAL</span>
            </div>
            <div className="absolute top-1/2 right-6 sm:right-12 rotate-[12deg] bg-cream text-ink px-4 py-1.5 rounded-md shadow-xl border border-ink/20 flex items-center">
              <span className="font-mono font-bold text-xs uppercase tracking-[0.2em]">#SHIPPED</span>
            </div>
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-forest/30 blur-[130px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-bronze/20 blur-[120px]"></div>
          </div>

          {/* Stacked review cards */}
          <div className="relative z-10 w-full max-w-[740px] my-auto pt-6">
            {/* Back card: the design's rotate-4 class doesn't exist in Tailwind v3, so it is not rotated */}
            <div className="absolute inset-0 bg-cream/50 rounded-[32px] border border-bronze/30 shadow-xl scale-90 translate-y-6 translate-x-4 pointer-events-none"></div>
            <div className="absolute inset-0 bg-cream/75 rounded-[32px] border border-bronze/30 shadow-xl -rotate-6 scale-95 -translate-y-3 -translate-x-3 pointer-events-none"></div>

            <div className="relative bg-cream text-ink p-8 md:p-10 rounded-[32px] shadow-2xl border border-bronze/40 rotate-2 hover:rotate-0 transition-transform duration-300">
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
              <p className="font-body text-lg md:text-xl text-ink font-normal leading-relaxed md:leading-7 mb-6">{testimonial.quote}</p>
              <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="font-mono text-xs text-ink/60 uppercase tracking-wider">{testimonial.project}</span>
              </div>
            </div>

            {/* Carousel controls */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-bronze/60 bg-ink/70 text-cream flex items-center justify-center font-mono hover:bg-bronze hover:text-ink transition-colors shadow-lg"
                type="button"
              >
                &lt;
              </button>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-bronze"></span>
                <span className="w-2 h-2 rounded-full bg-cream/40 hover:bg-cream/80 transition-colors cursor-pointer"></span>
                <span className="w-2 h-2 rounded-full bg-cream/40 hover:bg-cream/80 transition-colors cursor-pointer"></span>
              </div>
              <button
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-bronze/60 bg-ink/70 text-cream flex items-center justify-center font-mono hover:bg-bronze hover:text-ink transition-colors shadow-lg"
                type="button"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
