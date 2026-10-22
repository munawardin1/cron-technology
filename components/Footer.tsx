import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <div className="w-full bg-cream p-[32px] overflow-hidden">
      <footer
        className="w-full bg-ink text-cream rounded-[40px] overflow-hidden relative p-10 lg:p-16 select-none shadow-2xl"
        style={{
          backgroundImage: "radial-gradient(rgba(246, 241, 232, 0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div
          className="absolute -top-16 -right-16 w-[520px] h-[520px] pointer-events-none select-none -rotate-12 z-0"
          style={{ opacity: 0.12 }}
        >
          <Image
            alt=""
            className="w-full h-full object-contain filter hue-rotate-30 brightness-90"
            src="/images/cron-star.png"
            width={520}
            height={520}
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="max-w-md">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-full border border-bronze flex items-center justify-center p-2 shrink-0">
                  <Image
                    alt="CRON Logo"
                    className="w-full h-full object-contain"
                    src="/images/cron-star.png"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="font-mono text-sm font-semibold tracking-[0.2em] text-cream uppercase">
                  CRON TECHNOLOGIES
                </span>
              </div>
              <p className="font-body text-sm text-cream/70 max-w-md leading-relaxed mt-3">
                Creative technology studio engineering custom software, autonomous AI, and spatial 3D.
              </p>
              <div className="flex items-center gap-3 mt-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-cream text-ink flex items-center justify-center font-bold text-xs shadow-md hover:opacity-90 transition"
                    href={social.href}
                  >
                    {social.short}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-2">
              <Link
                className="bg-bronze text-ink font-semibold px-7 py-3.5 rounded-full hover:brightness-105 transition tracking-wide text-sm flex items-center gap-2 shadow-lg"
                href="#contact"
              >
                <span>Start a project</span>
                <span className="text-base font-bold">↗</span>
              </Link>
            </div>
          </div>

          <div className="w-full h-px border-t border-cream/20 my-10"></div>

          <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-10 xl:gap-8 pb-10">
            <div className="w-full">
              {/* A <p>, not an <h1>: the page keeps a single h1 in the hero.
                  font-bold matches how the design rendered (Fraunces was only loaded up to 700). */}
              <p className="font-headline font-bold text-cream whitespace-nowrap text-4xl sm:text-6xl md:text-8xl lg:text-[115px] xl:text-[115px] leading-none tracking-tight select-none">
                Cron Technologies
              </p>
            </div>
          </div>

          <div className="w-full h-px border-t border-cream/20 my-2"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-body text-cream/60 pt-6 gap-4">
            <p className="text-left">A Cron company © 2026. Built with speed and craft.</p>
            <div className="flex items-center gap-6 font-mono text-xs tracking-wider uppercase text-cream/60">
              <a className="hover:text-cream transition-colors" href="#">
                PRIVACY
              </a>
              <a className="hover:text-cream transition-colors" href="#">
                TERMS
              </a>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cream/80">
                <span className="w-2 h-2 rounded-full bg-bronze"></span>
                <span>ALL SYSTEMS GREEN</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
