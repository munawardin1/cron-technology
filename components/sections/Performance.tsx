import { stats } from "@/lib/data";

export default function Performance() {
  return (
    <section className="w-full bg-ink text-cream py-24 px-6 lg:px-12 relative overflow-hidden border-y border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs font-bold text-mist tracking-[0.25em] uppercase block mb-3">
            04 / PERFORMANCE
          </span>
          <h2 className="font-headline font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] text-cream leading-tight sm:leading-none">
            Built for <span className="font-headline italic font-normal text-bronze">results,</span> not noise.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.badge}
              className="relative bg-white/[0.03] border border-white/10 hover:border-bronze/40 p-10 rounded-[28px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className={`material-symbols-outlined ${stat.iconClass} text-3xl`}>{stat.icon}</span>
                <span className={`${stat.badgeClass} font-mono text-[10px] font-black px-3 py-1 rounded-full`}>
                  {stat.badge}
                </span>
              </div>
              <div>
                <div className="font-mono font-bold text-6xl lg:text-7xl text-cream mb-3 tracking-tight">
                  {stat.value}
                </div>
                <p className="font-body text-sm text-cream/70">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
