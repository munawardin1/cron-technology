"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  categoryLabels,
  pillStyles,
  serviceFilters,
  serviceTiers,
  type ServiceFilter,
  type ServicePill,
} from "@/lib/data";

const activeTabClass = "border-bronze bg-bronze/25 text-cream";
const idleTabClass = "border-white/10 bg-white/[0.04] text-cream/70";

export default function Services() {
  const [filter, setFilter] = useState<ServiceFilter["key"]>("all");
  const [selected, setSelected] = useState<ServicePill | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  function openTooltip(pill: ServicePill) {
    setSelected(pill);
    // Wait for the tooltip to render before scrolling it into view.
    requestAnimationFrame(() => {
      tooltipRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  return (
    <section
      className="w-full bg-ink text-cream py-20 px-8 lg:px-16 min-h-[960px] relative overflow-hidden flex flex-col justify-between"
      id="services"
      style={{
        backgroundImage: "radial-gradient(rgba(181, 139, 90, 0.18) 1.2px, transparent 1.2px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Oversized cropped star emblem */}
      <div className="absolute -right-24 -bottom-36 w-[820px] h-[820px] opacity-15 pointer-events-none select-none -rotate-12 z-0">
        <Image
          alt=""
          className="w-full h-full object-contain filter hue-rotate-30 brightness-90"
          src="/images/cron-star.png"
          width={820}
          height={820}
        />
      </div>

      {/* Heading + call to action */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
          <div>
            <span className="font-mono text-xs font-semibold text-bronze tracking-widest uppercase block mb-4">
              01 / SERVICES
            </span>
            <h2 className="font-headline font-semibold text-6xl md:text-8xl lg:text-[115px] leading-[0.92] md:leading-none tracking-tight text-cream">
              Everything your
              <br />
              business <em className="font-normal italic text-bronze">needs.</em>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end lg:text-right pt-2 lg:pt-4">
            <p className="font-body text-cream/70 text-lg max-w-sm leading-relaxed">
              Software, AI, 3D and strategy. One team, one place.
            </p>
            <Link
              className="bg-bronze text-ink font-medium px-7 py-3 rounded-full hover:brightness-110 transition shadow-lg inline-flex items-center gap-2 mt-4 font-body text-sm"
              href="#contact"
            >
              <span>Book a call</span>
              <span className="font-bold">↗</span>
            </Link>
          </div>
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap items-center gap-2.5 pb-8 border-b border-white/10">
          {serviceFilters.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setFilter(tab.key)}
              className={`font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-full border ${
                filter === tab.key ? activeTabClass : `${idleTabClass} hover:text-cream hover:border-white/20`
              } transition-all flex items-center gap-2`}
            >
              {tab.dotClass && <span className={`w-2 h-2 rounded-full ${tab.dotClass}`}></span>}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* The pile: tumbling sticker heap */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto mt-10 mb-[-1.5rem] flex flex-col items-center justify-end min-h-[480px]">
        {/* Tooltip card, opened by clicking a pill */}
        <div
          ref={tooltipRef}
          className={`${selected ? "" : "hidden "}absolute top-0 z-50 bg-ink/95 backdrop-blur-xl border border-bronze/60 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-w-sm transition-all duration-300`}
        >
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs font-bold text-bronze uppercase tracking-wider">
              {selected ? categoryLabels[selected.category] : "CATEGORY"}
            </span>
            <button
              className="text-white/40 hover:text-white text-xs font-mono"
              type="button"
              aria-label="Close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
          <h4 className="font-headline font-semibold text-xl text-cream mb-1.5">{selected?.title ?? "Title"}</h4>
          <p className="font-body text-xs text-cream/75 mb-3 leading-relaxed">
            {selected?.description ?? "Description"}
          </p>
          <Link
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-bronze hover:underline"
            href="#contact"
          >
            Learn more ↗
          </Link>
        </div>

        {serviceTiers.map((tier, tierIndex) => (
          <div
            key={tierIndex}
            className={`flex flex-wrap items-center justify-center ${tier.className} select-none`}
          >
            {tier.pills.map((pill) => {
              const style = pillStyles[pill.category];
              const visible = filter === "all" || filter === pill.category;
              return (
                <div
                  key={pill.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => openTooltip(pill)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openTooltip(pill);
                    }
                  }}
                  style={
                    visible
                      ? { opacity: 1, pointerEvents: "auto", filter: "none" }
                      : { opacity: 0.3, filter: "grayscale(60%)" }
                  }
                  className={`cursor-pointer px-7 py-3.5 rounded-full font-body font-medium ${pill.sizeClass} ${style.pill} shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:scale-110 hover:-translate-y-3 hover:z-40 transition-transform duration-200 flex items-center gap-2.5 ${pill.rotateClass}`}
                >
                  <span className={`material-symbols-outlined text-lg ${style.icon}`}>{pill.icon}</span>
                  <span>{pill.title}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
