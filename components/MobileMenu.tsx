"use client";

import { useEffect, useState } from "react";
import NavLinks from "@/components/NavLinks";

// Phones and small tablets only (below md), where the design hides the nav pill.
// Built from the navbar's own styles: the frosted pill container and the same link pills.
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="md:hidden w-10 h-10 rounded-full bg-black/5 border border-black/5 flex flex-col items-center justify-center gap-[5px] transition-all"
      >
        <span
          className={`block w-4 h-[1.5px] rounded-full bg-ink transition-transform duration-300 ${
            open ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-4 h-[1.5px] rounded-full bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-4 h-[1.5px] rounded-full bg-ink transition-transform duration-300 ${
            open ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        ></span>
      </button>

      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full px-6 pt-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1.5 bg-white/90 backdrop-blur-xl border border-black/5 shadow-xl rounded-[28px] p-2">
          <NavLinks
            onNavigate={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            activeClass="px-5 py-3 rounded-full font-body text-sm font-semibold text-ink bg-cream shadow-xs transition-all"
            idleClass="px-5 py-3 rounded-full font-body text-sm font-medium text-ink/70 hover:text-ink hover:bg-black/5 transition-all"
          />
          <div className="flex items-center gap-2 px-5 py-3">
            <span className="w-2 h-2 rounded-full bg-bronze animate-ping"></span>
            <span className="font-mono text-[10px] font-bold tracking-widest text-ink/70 uppercase">SYSTEMS ONLINE</span>
          </div>
        </nav>
      </div>
    </>
  );
}
