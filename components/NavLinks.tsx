"use client";

import SectionLink from "@/components/SectionLink";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

// Which nav pill is highlighted. Home keeps "Services" active, as in the design;
// product pages highlight "Products".
export function useActiveNavHref(): string {
  const pathname = usePathname();
  return pathname.startsWith("/products") ? "/#products" : "/#services";
}

type NavLinksProps = {
  activeClass: string;
  idleClass: string;
  onNavigate?: () => void;
  tabIndex?: number;
};

export default function NavLinks({ activeClass, idleClass, onNavigate, tabIndex }: NavLinksProps) {
  const activeHref = useActiveNavHref();

  return navLinks.map((link) => (
    <SectionLink
      key={link.href}
      href={link.href}
      onClick={onNavigate}
      tabIndex={tabIndex}
      aria-current={link.href === activeHref ? "page" : undefined}
      className={link.href === activeHref ? activeClass : idleClass}
    >
      {link.label}
    </SectionLink>
  ));
}
