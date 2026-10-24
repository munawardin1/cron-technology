"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import SectionLink from "@/components/SectionLink";
import { navLinks } from "@/lib/data";

// Which nav pill is highlighted.
// - Home: follows the section in view as the visitor scrolls ("scroll spy"). Above the first
//   section (the hero) "Services" stays active, as in the design.
// - Service pages: "Services". Product pages: "Products".
// After a click, the clicked link stays active until the smooth scroll settles, so the
// highlight doesn't flicker through the sections in between.
function useActiveNavHref(): [string, (href: string) => void] {
  const pathname = usePathname();
  const [spied, setSpied] = useState("/#services");
  const [clicked, setClicked] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    let frame = 0;
    let settle: ReturnType<typeof setTimeout> | undefined;

    const compute = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = navLinks[0].href;
      for (const link of navLinks) {
        const section = document.getElementById(link.href.split("#")[1]);
        if (section && section.getBoundingClientRect().top <= line) current = link.href;
      }
      // The last section is short, so treat "scrolled to the bottom" as reaching it.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = navLinks[navLinks.length - 1].href;
      }
      setSpied(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute);
      // Release a clicked link once scrolling has stopped for a moment.
      clearTimeout(settle);
      settle = setTimeout(() => setClicked(null), 150);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  let active = "/#services";
  if (pathname.startsWith("/products")) active = "/#products";
  else if (pathname === "/") active = clicked ?? spied;

  const onClickLink = (href: string) => {
    if (pathname === "/") setClicked(href);
  };

  return [active, onClickLink];
}

type NavLinksProps = {
  activeClass: string;
  idleClass: string;
  // When set, the active background is a single pill that slides between links
  // (used by the horizontal desktop nav). The parent must be `relative`.
  indicatorClass?: string;
  onNavigate?: () => void;
  tabIndex?: number;
};

export default function NavLinks({ activeClass, idleClass, indicatorClass, onNavigate, tabIndex }: NavLinksProps) {
  const [activeHref, onClickLink] = useActiveNavHref();
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState<{ left: number; top: number; width: number; height: number; ready: boolean; animate: boolean }>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    ready: false,
    animate: false,
  });

  useLayoutEffect(() => {
    if (!indicatorClass) return;
    const measure = () => {
      const el = linkRefs.current[activeHref];
      if (!el || !el.offsetWidth) return;
      setPill((previous) => ({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
        ready: true,
        // No slide on the very first placement, only when it moves afterwards.
        animate: previous.ready,
      }));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeHref, indicatorClass]);

  return (
    <>
      {indicatorClass && (
        <span
          aria-hidden="true"
          className={`absolute pointer-events-none ${indicatorClass} ${
            pill.animate ? "transition-[left,width,top,height] duration-300 ease-out motion-reduce:transition-none" : ""
          } ${pill.ready ? "opacity-100" : "opacity-0"}`}
          style={{ left: pill.left, top: pill.top, width: pill.width, height: pill.height }}
        ></span>
      )}
      {navLinks.map((link) => (
        <SectionLink
          key={link.href}
          ref={(el) => {
            linkRefs.current[link.href] = el;
          }}
          href={link.href}
          onClick={() => {
            onClickLink(link.href);
            onNavigate?.();
          }}
          tabIndex={tabIndex}
          aria-current={link.href === activeHref ? "page" : undefined}
          className={link.href === activeHref ? activeClass : idleClass}
        >
          {link.label}
        </SectionLink>
      ))}
    </>
  );
}
