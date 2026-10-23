import Link from "next/link";
import ProductVisual from "@/components/ProductVisual";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;

  return (
    <div
      className={`group bg-white rounded-[24px] border border-ink/10 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden h-[480px]${
        product.fresh ? " relative" : ""
      }`}
    >
      {product.fresh && (
        <div className="absolute top-3 right-3 z-20 rotate-12">
          <span className="font-mono text-[9px] font-black px-2.5 py-0.5 rounded-full bg-bronze text-ink shadow-md border border-ink/20">
            Fresh
          </span>
        </div>
      )}
      <Link href={href} className="h-[70%] block" tabIndex={-1} aria-hidden="true">
        <ProductVisual mockup={product.mockup} />
      </Link>
      <div className="h-[30%] bg-white p-5 flex items-center justify-between border-t border-ink/5">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
            <span className="font-mono text-[10px] font-bold tracking-wider text-bronze uppercase">{product.status}</span>
          </div>
          <h3 className="font-headline font-semibold text-lg text-ink leading-tight">
            <Link href={href}>{product.name}</Link>
          </h3>
          <p className="font-body text-xs text-ink/70">{product.tagline}</p>
        </div>
        <Link
          aria-label={`${product.name} details`}
          className="w-9 h-9 rounded-full bg-bronze/10 text-bronze group-hover:bg-bronze group-hover:text-ink flex items-center justify-center transition-colors shrink-0 shadow-xs"
          href={href}
        >
          <span className="font-bold text-sm">↗</span>
        </Link>
      </div>
    </div>
  );
}
