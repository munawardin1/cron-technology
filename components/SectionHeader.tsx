import type { ReactNode } from "react";

// The section header pattern used across the design: a mono label, a large Fraunces heading
// and an optional short paragraph on the right (as in "03 / PLAYBOOK").
type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  text?: string;
  tone?: "light" | "dark";
};

export default function SectionHeader({ label, title, text, tone = "light" }: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
      <div>
        <span
          className={`font-mono text-xs font-bold tracking-[0.25em] uppercase block mb-3 ${dark ? "text-mist" : "text-sage"}`}
        >
          {label}
        </span>
        <h2
          className={`font-headline font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight sm:leading-none ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {text && (
        <p className={`font-body text-base max-w-sm ${dark ? "text-cream/70" : "text-ink/70"}`}>{text}</p>
      )}
    </div>
  );
}
