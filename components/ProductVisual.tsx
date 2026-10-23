import type { ReactNode } from "react";
import type { ProductMockup } from "@/lib/data";

// The colored top area of each product card, with its floating UI mockup.
const mockups: Record<ProductMockup, (cardClass: string) => ReactNode> = {
  finmatrix: (cardClass) => (
    <div className="h-full bg-forest p-5 flex flex-col justify-center items-center relative overflow-hidden select-none">
      <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
      <div className={`w-full max-w-[190px] bg-ink/80 backdrop-blur-md rounded-xl p-3 border border-white/15 shadow-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 ${cardClass}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] text-cream/70 uppercase tracking-wider">TREASURY ARB</span>
          <span className="font-mono text-[9px] font-bold text-mist">+31.8%</span>
        </div>
        <svg className="w-full h-14 mb-2" fill="none" viewBox="0 0 160 50">
          <path className="stroke-bronze" d="M0 42 Q 35 30, 70 38 T 120 12 T 160 5" fill="none" strokeWidth="2"></path>
          <path className="fill-bronze" d="M0 42 Q 35 30, 70 38 T 120 12 T 160 5 L 160 50 L 0 50 Z" opacity="0.15"></path>
          <circle className="fill-bronze" cx="120" cy="12" r="2.5"></circle>
          <circle className="fill-mist" cx="160" cy="5" r="2.5"></circle>
        </svg>
        <div className="flex justify-between items-center text-[8px] font-mono text-cream/50 border-t border-white/10 pt-1.5">
          <span>SURVEILLANCE</span>
          <span className="text-bronze font-bold">ONLINE</span>
        </div>
      </div>
    </div>
  ),
  metromatrix: (cardClass) => (
    <div className="h-full bg-bronze p-5 flex flex-col justify-center items-center relative overflow-hidden select-none">
      <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-white/20 blur-2xl pointer-events-none"></div>
      <div className={`w-full max-w-[190px] bg-ink/85 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 text-cream ${cardClass}`}>
        <div className="flex items-center justify-between mb-2 text-mist">
          <span className="font-mono text-[9px] uppercase tracking-wider">ROUTING MESH</span>
          <span className="material-symbols-outlined text-sm text-bronze">hub</span>
        </div>
        <div className="relative w-full h-16 rounded-lg bg-black/30 border border-white/10 p-2 flex flex-col justify-between overflow-hidden mb-2">
          <div className="flex justify-between items-center text-[8px] font-mono text-mist">
            <span>NODES</span>
            <span className="text-bronze font-bold">12,480</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <span className="w-2 h-2 rounded-full bg-bronze animate-ping"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-mist"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-cream/70"></span>
          </div>
          <div className="text-[8px] font-mono text-cream/60 truncate">LATENCY &lt; 4ms</div>
        </div>
        <div className="flex justify-between items-center text-[8px] font-mono text-cream/70 pt-1 border-t border-white/10">
          <span>DISPATCH</span>
          <span className="text-mist font-bold">ACTIVE</span>
        </div>
      </div>
    </div>
  ),
  leadmagnet: (cardClass) => (
    <div className="h-full bg-ink p-5 flex flex-col justify-center items-center relative overflow-hidden select-none">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--color-cream)_1px,transparent_1px)] [background-size:12px_12px]"></div>
      <div className={`w-full max-w-[190px] bg-white/[0.06] backdrop-blur-md rounded-xl p-3 border border-white/15 shadow-xl -rotate-2 group-hover:rotate-0 transition-transform duration-300 text-cream relative z-10 ${cardClass}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-mist">PIPELINE</span>
          <span className="w-2 h-2 rounded-full bg-forest animate-ping"></span>
        </div>
        <div className="space-y-1.5 mb-2.5">
          <div className="bg-white/10 rounded-sm px-2 py-1 flex items-center justify-between font-mono text-[8px]">
            <span className="text-cream/80">Verify Rate</span>
            <span className="text-bronze font-bold">99.4%</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-bronze h-full w-[99.4%]"></div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[8px] font-mono text-cream/50 border-t border-white/10 pt-1.5">
          <span>ENRICH VELOCITY</span>
          <span className="text-cream font-bold">50k/HR</span>
        </div>
      </div>
    </div>
  ),
  trading: (cardClass) => (
    <div className="h-full bg-sand p-5 flex flex-col justify-center items-center relative overflow-hidden select-none">
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-bronze/20 blur-xl pointer-events-none"></div>
      <div className={`w-full max-w-[170px] bg-ink text-cream rounded-2xl p-3 border border-ink/20 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-300 ${cardClass}`}>
        <div className="flex items-center justify-between mb-2 font-mono text-[8px]">
          <span className="text-bronze font-bold">ETH/USD</span>
          <span className="text-mist">3,421.10</span>
        </div>
        {/* Candlesticks: body + wick */}
        <div className="h-16 flex items-end justify-between gap-1 px-1 py-1 bg-black/40 rounded-lg border border-white/5 mb-2">
          <div className="w-1.5 h-8 bg-forest rounded-xs relative">
            <div className="w-0.5 h-11 bg-forest absolute -top-1.5 left-0.5 -z-10"></div>
          </div>
          <div className="w-1.5 h-11 bg-forest rounded-xs relative">
            {/* No height here: the design's h-13 class doesn't exist in Tailwind v3, so this wick never rendered. */}
            <div className="w-0.5 bg-forest absolute -top-1 left-0.5 -z-10"></div>
          </div>
          <div className="w-1.5 h-6 bg-bronze rounded-xs relative">
            <div className="w-0.5 h-9 bg-bronze absolute -top-1.5 left-0.5 -z-10"></div>
          </div>
          <div className="w-1.5 h-10 bg-forest rounded-xs relative">
            <div className="w-0.5 h-12 bg-forest absolute -top-1 left-0.5 -z-10"></div>
          </div>
          <div className="w-1.5 h-12 bg-forest rounded-xs relative">
            <div className="w-0.5 h-14 bg-forest absolute -top-1 left-0.5 -z-10"></div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[7px] font-mono text-cream/60">
          <span>LATENCY [0.3ms]</span>
          <span className="text-bronze font-bold">SPREAD CAPTURE</span>
        </div>
      </div>
    </div>
  ),
};

type ProductVisualProps = {
  mockup: ProductMockup;
  // "hero" enlarges the floating UI card for the product detail page.
  size?: "card" | "hero";
};

export default function ProductVisual({ mockup, size = "card" }: ProductVisualProps) {
  return mockups[mockup](size === "hero" ? "scale-125 sm:scale-150" : "");
}
