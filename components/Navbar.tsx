import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-xl border-b border-black/5 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Left: star logo + wordmark */}
        <Link className="flex items-center gap-2.5 group" href="/">
          <div className="w-9 h-9 rounded-full bg-bronze/10 border border-bronze/30 flex items-center justify-center p-1.5 group-hover:scale-105 transition-all">
            <Image
              alt="CRON Logo"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:rotate-45"
              src="/images/cron-star.png"
              width={24}
              height={24}
              priority
            />
          </div>
          <span className="font-headline font-semibold text-2xl tracking-tight text-ink">Cron</span>
        </Link>

        {/* Center: frosted pill with section links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-black/5 shadow-xs rounded-full px-2 py-1.5">
          <NavLinks
            activeClass="px-5 py-2 rounded-full font-body text-xs font-semibold text-ink bg-cream shadow-xs transition-all"
            idleClass="px-5 py-2 rounded-full font-body text-xs font-medium text-ink/70 hover:text-ink hover:bg-black/5 transition-all"
          />
        </nav>

        {/* Right: status chip + CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5">
            <span className="w-2 h-2 rounded-full bg-bronze animate-ping"></span>
            <span className="font-mono text-[10px] font-bold tracking-widest text-ink/70 uppercase">
              SYSTEMS ONLINE
            </span>
          </div>
          <Link
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink text-cream font-body text-xs font-semibold whitespace-nowrap hover:bg-forest hover:scale-105 transition-all shadow-md"
            href="#contact"
          >
            <span>Let&apos;s talk</span>
            <span className="text-sm font-bold">↗</span>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
