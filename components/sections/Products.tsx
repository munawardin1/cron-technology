import SectionLink from "@/components/SectionLink";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function Products() {
  return (
    <section
      className="w-full bg-cream text-ink py-28 px-6 lg:px-12 relative overflow-hidden border-t border-ink/10"
      id="products"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left column */}
          <div className="lg:col-span-3 flex flex-col items-start pr-0 lg:pr-4">
            <span className="font-mono text-xs font-bold text-bronze tracking-[0.25em] uppercase block mb-3">
              02 / OUR PRODUCTS
            </span>
            <h2 className="font-headline font-semibold text-5xl sm:text-6xl lg:text-5xl xl:text-6xl tracking-[-0.03em] text-ink leading-[1.08] sm:leading-none mb-2">
              Products built to <span className="font-headline italic font-normal text-bronze">work.</span>
            </h2>
            <svg
              className="w-44 h-4 text-bronze mb-6 fill-none stroke-current"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 170 16"
            >
              <path d="M2 10 Q 22 2, 42 10 T 82 10 T 122 10 T 162 10 T 168 10"></path>
            </svg>
            <p className="font-body text-base text-ink/70 leading-relaxed mb-8 max-w-sm">
              Built in-house. Shipped, tested, live.
            </p>
            <SectionLink
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink border-b-2 border-ink pb-1 hover:text-bronze hover:border-bronze transition-colors"
              href="#contact"
            >
              <span>SEE ALL PRODUCTS</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </SectionLink>
          </div>

          {/* Product cards */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
