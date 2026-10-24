"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

// A link to a section like "#contact" or "/#services".
// Next.js's <Link> does nothing when the URL already ends in that hash (e.g. tapping
// "Let's talk" a second time), so when the section is on the current page we scroll to it ourselves.
export default function SectionLink({ href, onClick, ...props }: SectionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;

    const [path, hash] = href.split("#");
    if (!hash || (path && path !== window.location.pathname)) return; // another page: normal navigation

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(window.history.state, "", `#${hash}`);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
