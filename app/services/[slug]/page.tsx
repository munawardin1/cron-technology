import type { Metadata } from "next";
import Image from "next/image";
import SectionLink from "@/components/SectionLink";
import { notFound } from "next/navigation";
import AccentText from "@/components/AccentText";
import SectionHeader from "@/components/SectionHeader";
import ServicePillLink from "@/components/ServicePillLink";
import StatCards from "@/components/StatCards";
import StepCards from "@/components/StepCards";
import ContactCta from "@/components/sections/ContactCta";
import Playbook from "@/components/sections/Playbook";
import { pillStyles } from "@/lib/data";
import {
  categoryLabel,
  engagementFacts,
  getService,
  serviceDetails,
  services,
  servicesInCategory,
} from "@/lib/services";

// Every real slug is prebuilt as static HTML; unknown slugs may wait on the server (then 404).
export const instant = false;

// Build one static page per service at build time.
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} — CRON Technologies`,
    description: service.description,
    openGraph: {
      title: `${service.title} — CRON Technologies`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const style = pillStyles[service.category];
  const related = servicesInCategory(service.category, service.slug);
  const category = categoryLabel(service.category);

  return (
    <>
      {/* Hero: same dark dotted canvas and cropped star as the Home services section */}
      <section
        className="w-full bg-ink text-cream pt-36 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(rgba(181, 139, 90, 0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="absolute -right-24 -bottom-36 w-[820px] h-[820px] opacity-15 pointer-events-none select-none -rotate-12 z-0">
          <Image
            alt=""
            className="w-full h-full object-contain filter hue-rotate-30 brightness-90"
            src="/images/cron-star.png"
            width={820}
            height={820}
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            <SectionLink
              href="/#services"
              className="font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-cream/70 hover:text-cream hover:border-white/20 transition-all flex items-center gap-2"
            >
              ← ALL SERVICES
            </SectionLink>
            <span className="font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-full border border-bronze bg-bronze/25 text-cream flex items-center gap-2">
              {category}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs font-semibold text-bronze tracking-widest uppercase block mb-4">
                SERVICES / {category}
              </span>
              <h1 className="font-headline font-semibold text-5xl sm:text-7xl lg:text-[96px] leading-[0.95] sm:leading-none tracking-tight text-cream mb-6">
                <AccentText text={service.title} />
              </h1>
              <p className="font-body text-cream/70 text-lg max-w-xl leading-relaxed mb-8">{detail.intro}</p>
              <SectionLink
                className="bg-bronze text-ink font-medium px-7 py-3 rounded-full hover:brightness-110 transition shadow-lg inline-flex items-center gap-2 font-body text-sm"
                href="#contact"
              >
                <span>Book a call</span>
                <span className="font-bold">↗</span>
              </SectionLink>
            </div>

            {/* The service's own sticker from the pile */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div
                className={`px-7 py-3.5 rounded-full font-body font-medium text-[20px] sm:text-[26px] ${style.pill} shadow-[0_12px_32px_rgba(0,0,0,0.45)] flex items-center gap-3 ${service.rotateClass}`}
              >
                <span className={`material-symbols-outlined text-lg ${style.icon}`}>{service.icon}</span>
                <span>{service.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="w-full bg-cream text-ink py-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            label="01 / WHAT YOU GET"
            title={<AccentText text="What we deliver" />}
            text={service.description}
          />
          <StepCards
            items={detail.deliverables.map((item, index) => ({
              number: String(index + 1).padStart(2, "0"),
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <Playbook label="02 / HOW WE WORK" />

      {/* Engagement */}
      <section className="w-full bg-ink text-cream py-24 px-6 lg:px-12 relative overflow-hidden border-y border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            tone="dark"
            label="03 / ENGAGEMENT"
            title={
              <>
                Built for <span className="font-headline italic font-normal text-bronze">results,</span> not noise.
              </>
            }
          />
          <StatCards items={engagementFacts(service.category)} />
        </div>
      </section>

      {/* More services in the same category */}
      <section
        className="w-full bg-ink text-cream py-24 px-6 lg:px-12 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(rgba(181, 139, 90, 0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            tone="dark"
            label={`04 / MORE IN ${category}`}
            title={<AccentText text="Pairs well with" />}
            text="One team covers the whole stack, so these slot straight in."
          />
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6">
            {related.map((item) => (
              <ServicePillLink key={item.slug} service={item} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
