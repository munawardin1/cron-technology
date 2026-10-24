import type { Metadata } from "next";
import SectionLink from "@/components/SectionLink";
import { notFound } from "next/navigation";
import AccentText from "@/components/AccentText";
import ProductCard from "@/components/ProductCard";
import ProductVisual from "@/components/ProductVisual";
import SectionHeader from "@/components/SectionHeader";
import StatCards from "@/components/StatCards";
import StepCards from "@/components/StepCards";
import ContactCta from "@/components/sections/ContactCta";
import { products } from "@/lib/data";
import { getProduct, productDetails } from "@/lib/products";

// Every real slug is prebuilt as static HTML; unknown slugs may wait on the server (then 404).
export const instant = false;

// Build one static page per product at build time.
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: `${product.name} — CRON Technologies`,
    description: `${product.name}: ${product.tagline}`,
    openGraph: {
      title: `${product.name} — CRON Technologies`,
      description: `${product.name}: ${product.tagline}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  const detail = productDetails[slug];
  if (!product || !detail) notFound();

  const others = products.filter((item) => item.slug !== product.slug);

  return (
    <>
      {/* Hero: cream canvas from the Home products section, with the product's mockup enlarged */}
      <section className="w-full bg-cream text-ink pt-36 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-bronze tracking-[0.25em] uppercase block mb-3">
                PRODUCTS / {detail.category}
              </span>
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
                <span className="font-mono text-[10px] font-bold tracking-wider text-bronze uppercase">{product.status}</span>
              </div>
              <h1 className="font-headline font-semibold text-4xl sm:text-5xl xl:text-6xl tracking-[-0.03em] text-ink leading-[1.08] sm:leading-none mb-2">
                {product.name}
              </h1>
              <svg
                className="w-44 h-4 text-bronze mb-6 fill-none stroke-current"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 170 16"
              >
                <path d="M2 10 Q 22 2, 42 10 T 82 10 T 122 10 T 162 10 T 168 10"></path>
              </svg>
              <p className="font-headline font-semibold text-2xl sm:text-3xl tracking-[-0.03em] text-ink mb-4">
                <AccentText text={product.tagline} />
              </p>
              <p className="font-body text-base text-ink/70 leading-relaxed mb-8 max-w-md">{detail.intro}</p>
              <div className="flex flex-wrap items-center gap-6">
                <SectionLink
                  className="px-8 py-4 rounded-full bg-ink text-cream font-body text-sm font-semibold tracking-wide hover:bg-forest hover:scale-105 transition-all shadow-xl shadow-black/10 flex items-center gap-2.5 group"
                  href="#contact"
                >
                  <span>Request a demo</span>
                  <span className="text-base font-bold transition-transform group-hover:translate-x-1">→</span>
                </SectionLink>
                <SectionLink
                  className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink border-b-2 border-ink pb-1 hover:text-bronze hover:border-bronze transition-colors"
                  href="/#products"
                >
                  <span className="transition-transform group-hover:-translate-x-1">←</span>
                  <span>ALL PRODUCTS</span>
                </SectionLink>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="group relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-[24px] border border-ink/10 shadow-md overflow-hidden">
                {product.fresh && (
                  <div className="absolute top-4 right-4 z-20 rotate-12">
                    <span className="font-mono text-[11px] font-black px-3 py-1 rounded-full bg-bronze text-ink shadow-md border border-ink/20">
                      Fresh
                    </span>
                  </div>
                )}
                <ProductVisual mockup={product.mockup} size="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-cream text-ink pb-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader
            label="01 / FEATURES"
            title={<AccentText text="Everything included" />}
            text="Built in-house. Shipped, tested, live."
          />
          <StepCards
            items={detail.features.map((item, index) => ({
              number: String(index + 1).padStart(2, "0"),
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      {/* At a glance */}
      <section className="w-full bg-ink text-cream py-24 px-6 lg:px-12 relative overflow-hidden border-y border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader tone="dark" label="02 / AT A GLANCE" title={<AccentText text="Built to work" />} />
          <StatCards items={detail.facts} />
        </div>
      </section>

      {/* More products */}
      <section className="w-full bg-cream text-ink py-28 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeader label="03 / MORE PRODUCTS" title={<AccentText text="Keep exploring" />} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
