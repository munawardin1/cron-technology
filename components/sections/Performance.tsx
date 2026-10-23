import StatCards from "@/components/StatCards";
import { stats } from "@/lib/data";

export default function Performance() {
  return (
    <section className="w-full bg-ink text-cream py-24 px-6 lg:px-12 relative overflow-hidden border-y border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs font-bold text-mist tracking-[0.25em] uppercase block mb-3">
            04 / PERFORMANCE
          </span>
          <h2 className="font-headline font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-cream leading-tight sm:leading-none">
            Built for <span className="font-headline italic font-normal text-bronze">results,</span> not noise.
          </h2>
        </div>
        <StatCards items={stats} />
      </div>
    </section>
  );
}
