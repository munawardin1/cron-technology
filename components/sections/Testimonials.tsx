import TestimonialCarousel from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
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

        <div className="relative overflow-hidden rounded-[32px] bg-ink border border-forest/50 shadow-2xl mb-12 min-h-[700px] lg:min-h-[740px] flex flex-col justify-center items-center px-6 md:px-12 pt-20 pb-28 xl:p-16 select-none">
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
            <div className="absolute top-7 right-6 -rotate-[8deg] xl:top-14 xl:right-32 xl:-rotate-[24deg] bg-cream text-ink px-4 py-1.5 rounded-md shadow-xl border border-ink/20 flex items-center">
              <span className="font-mono font-bold text-xs uppercase tracking-[0.2em]">#REVIEW</span>
            </div>
            <div className="absolute bottom-9 left-6 -rotate-[6deg] xl:bottom-24 xl:left-12 xl:rotate-[68deg] bg-cream text-ink px-4 py-1.5 rounded-md shadow-xl border border-ink/20 flex items-center xl:origin-left">
              <span className="font-mono font-bold text-xs uppercase tracking-[0.2em]">#TESTIMONIAL</span>
            </div>
            <div className="absolute bottom-9 right-6 rotate-[6deg] xl:bottom-auto xl:top-1/2 xl:right-12 xl:rotate-[12deg] bg-cream text-ink px-4 py-1.5 rounded-md shadow-xl border border-ink/20 flex items-center">
              <span className="font-mono font-bold text-xs uppercase tracking-[0.2em]">#SHIPPED</span>
            </div>
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-forest/30 blur-[130px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-bronze/20 blur-[120px]"></div>
          </div>

          <TestimonialCarousel items={testimonials} />
        </div>
      </div>
    </section>
  );
}
