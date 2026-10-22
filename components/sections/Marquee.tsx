import { Fragment } from "react";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  // The list is rendered twice so the -50% loop is seamless.
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-bronze text-ink py-4 overflow-hidden select-none shadow-xl border-y-2 border-ink">
      <div className="flex whitespace-nowrap animate-marquee gap-8 font-mono font-bold text-xs uppercase tracking-[0.22em] items-center">
        {items.map((item, index) => (
          <Fragment key={index}>
            <span>{item}</span>
            <span className="text-ink/60">✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
