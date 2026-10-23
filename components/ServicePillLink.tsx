import Link from "next/link";
import { pillStyles } from "@/lib/data";
import type { Service } from "@/lib/services";

// A sticker from the Home services pile, as a link to that service's page.
export default function ServicePillLink({ service }: { service: Service }) {
  const style = pillStyles[service.category];

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-body font-medium text-[15px] ${service.sizeClass} ${style.pill} shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:scale-110 hover:-translate-y-3 hover:z-40 transition-transform duration-200 flex items-center gap-2 sm:gap-2.5 ${service.rotateClass}`}
    >
      <span className={`material-symbols-outlined text-lg ${style.icon}`}>{service.icon}</span>
      <span>{service.title}</span>
    </Link>
  );
}
