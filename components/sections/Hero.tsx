import Image from "next/image";
import SectionLink from "@/components/SectionLink";
import { orbitCards, sprintTeam, trustedBy } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="relative pt-36 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12 bg-white text-ink overflow-hidden select-none border-b border-black/5"
      style={{
        backgroundImage: "radial-gradient(rgba(14, 26, 19, 0.08) 1.2px, transparent 1.2px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Faint warm haze behind the star */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[720px] h-[720px] rounded-full bg-bronze/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-[520px] h-[520px] rounded-full bg-mist/15 blur-[120px] pointer-events-none"></div>

      {/* Oversized faint star watermark */}
      <Image
        alt=""
        className="absolute -left-32 -top-24 w-[740px] h-[740px] opacity-[0.04] pointer-events-none -rotate-12 object-contain filter grayscale"
        src="/images/cron-star.png"
        width={740}
        height={740}
        loading="eager"
      />

      {/* Rotating circular text badge */}
      <div className="hidden md:flex absolute top-28 right-10 lg:right-16 z-20 items-center justify-center w-28 h-28 pointer-events-none">
        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <defs>
            <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circlePath"></path>
          </defs>
          <text className="font-mono text-[8.5px] font-bold uppercase tracking-[0.24em] fill-ink/70">
            <textPath href="#circlePath">A CRON COMPANY · BUILD · SHIP · DROP ·</textPath>
          </text>
        </svg>
        <div className="absolute w-6 h-6 flex items-center justify-center p-0.5">
          <Image
            alt="Cron mark"
            className="w-full h-full object-contain"
            src="/images/cron-star.png"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Main centered content */}
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink/5 border border-black/5 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-bronze"></span>
          <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-ink/75 uppercase">
            STUDIO EDITION · 2026
          </span>
        </div>
        <h1 className="font-headline font-semibold text-5xl sm:text-7xl lg:text-[96px] xl:text-[108px] leading-[0.95] sm:leading-none tracking-[-0.03em] text-ink mb-5 max-w-4xl">
          We build. We ship.
          <br />
          We <span className="font-normal italic text-bronze">drop.</span>
        </h1>
        <p className="font-body text-base sm:text-lg text-ink/60 max-w-xl mb-8 font-normal leading-relaxed sm:leading-7">
          Software, AI agents and 3D, built to ship fast.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <SectionLink
            className="px-8 py-4 rounded-full bg-ink text-cream font-body text-sm font-semibold tracking-wide hover:bg-forest hover:scale-105 transition-all shadow-xl shadow-black/10 flex items-center gap-2.5 group"
            href="#contact"
          >
            <span>Start a project</span>
            <span className="text-base font-bold transition-transform group-hover:translate-x-1">→</span>
          </SectionLink>
          <SectionLink
            className="px-8 py-4 rounded-full bg-white border border-black/10 text-ink font-body text-sm font-semibold tracking-wide hover:bg-black/5 hover:border-black/20 transition-all shadow-xs flex items-center gap-2"
            href="#work"
          >
            <span className="material-symbols-outlined text-lg text-bronze">play_circle</span>
            <span>Watch showreel</span>
          </SectionLink>
        </div>
      </div>

      {/* Centerpiece: star emblem with orbiting cards */}
      <div className="relative max-w-[1440px] mx-auto w-full min-h-[420px] md:min-h-[520px] lg:min-h-[580px] flex items-center justify-center mt-4">
        {/* Dashed connectors from the side cards to the star */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden xl:block" fill="none">
          <path
            d="M 180 180 C 260 260, 420 280, 620 300"
            opacity="0.45"
            className="stroke-bronze"
            strokeDasharray="4 6"
            strokeWidth="1.5"
          ></path>
          <path
            d="M 1260 180 C 1180 260, 1020 280, 820 300"
            opacity="0.45"
            className="stroke-bronze"
            strokeDasharray="4 6"
            strokeWidth="1.5"
          ></path>
        </svg>

        {/* Left floating card */}
        <div className="hidden xl:flex absolute left-6 top-12 z-20 hover:rotate-0 hover:scale-105 transition-all duration-300 w-72 bg-white/90 backdrop-blur-md rounded-[28px] p-5 border border-black/5 shadow-xl flex-col gap-2 text-left">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-2xl bg-bronze/15 text-bronze flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">graphic_eq</span>
            </div>
            <span className="font-mono text-[10px] font-bold text-ink/50 tracking-wider uppercase">SPRINT 01</span>
          </div>
          <h4 className="font-headline font-semibold text-lg text-ink leading-snug mt-1">
            Ideas into <span className="italic font-normal text-bronze">product.</span>
          </h4>
          <p className="font-body text-xs text-ink/60">Brief it. We build it.</p>
          <div className="mt-2 pt-2 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-ink/50">
            <span>EST. TIME</span>
            <span className="text-ink font-bold">14 DAYS</span>
          </div>
        </div>

        {/* Right floating card */}
        <div className="hidden xl:flex absolute right-6 top-14 z-20 hover:rotate-0 hover:scale-105 transition-all duration-300 w-72 bg-white/90 backdrop-blur-md rounded-[28px] p-5 border border-black/5 shadow-xl flex-col gap-2 text-left">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {sprintTeam.map((member) => (
                <div
                  key={member.initials}
                  className={`w-7 h-7 rounded-full ${member.className} font-mono text-[9px] font-bold flex items-center justify-center border-2 border-white`}
                >
                  {member.initials}
                </div>
              ))}
            </div>
            <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-forest/10 text-forest">
              ACTIVE
            </span>
          </div>
          <h4 className="font-headline font-semibold text-lg text-ink leading-snug mt-1">Shipped, not slideware.</h4>
          <p className="font-body text-xs text-ink/60">Live in weeks.</p>
          <div className="mt-2 pt-2 border-t border-black/5 flex items-center justify-between text-[10px] font-mono text-ink/50">
            <span>DEPLOYMENT</span>
            <span className="text-forest font-bold">100% PROD</span>
          </div>
        </div>

        {/* Central star emblem */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-[620px]">
          {/* Phones and small tablets (below md): the cards zig-zag down the screen, right then left,
              floating over the star, which sits centred behind them.
              md and up: both wrappers use `contents`, so the star is back in the flow and the cards
              orbit it with their absolute positions, exactly as in the design. */}
          <div className="relative w-full md:contents">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:static">
              <div className="absolute w-[440px] h-[440px] sm:w-[540px] sm:h-[540px] rounded-full border border-dashed border-bronze/30 pointer-events-none"></div>
              <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-black/5 pointer-events-none"></div>

              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center p-4">
                <div className="absolute bottom-4 w-3/4 h-10 rounded-full bg-black/15 blur-2xl pointer-events-none"></div>
                <Image
                  alt="CRON Star Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(181,139,90,0.4)] animate-pulse-glow transition-transform duration-500"
                  src="/images/cron-star.png"
                  width={384}
                  height={384}
                  preload
                />
              </div>
            </div>

            <div className="relative flex flex-col gap-6 w-full py-10 md:contents">
          {orbitCards.map((card, index) => (
            <div
              key={card.title}
              className={`w-[68%] max-w-80 md:max-w-none ${
                index % 2 === 0 ? "self-end rotate-2" : "self-start -rotate-2"
              } md:w-auto md:self-auto md:rotate-0 md:absolute ${card.positionClass} z-20 bg-white/80 backdrop-blur-md border border-bronze/25 rounded-[28px] p-3 sm:p-4 shadow-lg flex items-center gap-2.5 sm:gap-3.5 hover:scale-105 transition-all`}
            >
              <div className={`w-9 h-9 rounded-2xl ${card.iconBoxClass} flex items-center justify-center shrink-0`}>
                <span className={`material-symbols-outlined text-base ${card.iconClass}`}>{card.icon}</span>
              </div>
              <div className="text-left">
                <div className="font-headline font-semibold text-sm text-ink leading-tight">{card.title}</div>
                <div className="font-body text-[11px] text-ink/60">{card.description}</div>
              </div>
            </div>
          ))}
            </div>
          </div>

          {/* Deploy snippet */}
          <div className="mt-6 md:mt-0 md:absolute md:-bottom-6 z-20 bg-ink text-cream rounded-2xl px-5 py-2.5 shadow-xl border border-bronze/40 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-bronze animate-ping"></span>
            <span className="font-mono text-[11px] font-medium text-mist">
              &gt; cron.deploy(<span className="text-bronze">&apos;production&apos;</span>)
            </span>
            <span className="font-mono text-[10px] text-cream/50 border-l border-white/20 pl-2">0.42s</span>
          </div>
        </div>
      </div>

      {/* Bottom details bar */}
      <div className="max-w-[1440px] mx-auto w-full pt-16 mt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-ink/70 font-body text-xs relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-8 h-0.5 bg-bronze"></div>
          <span className="font-medium">Trusted by 50+ venture teams</span>
          <div className="flex -space-x-1.5">
            {trustedBy.map((team) => (
              <div
                key={team.initials}
                className={`w-6 h-6 rounded-full ${team.className} text-[9px] font-mono flex items-center justify-center border border-white`}
              >
                {team.initials}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-bronze text-sm">✦</span>
          <span className="font-medium text-ink">Less noise. More shipped.</span>
        </div>
      </div>
    </section>
  );
}
