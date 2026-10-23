// The dark stat cards from the "04 / PERFORMANCE" section, reused on detail pages.

export type StatCard = {
  icon: string;
  iconClass: string;
  badge: string;
  badgeClass: string;
  value: string;
  description: string;
};

export default function StatCards({ items }: { items: StatCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.badge}
          className="relative bg-white/[0.03] border border-white/10 hover:border-bronze/40 p-10 rounded-[28px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-8">
            <span className={`material-symbols-outlined ${item.iconClass} text-3xl`}>{item.icon}</span>
            <span className={`${item.badgeClass} font-mono text-[10px] font-black px-3 py-1 rounded-full`}>
              {item.badge}
            </span>
          </div>
          <div>
            <div className="font-mono font-bold text-6xl lg:text-7xl text-cream mb-3 tracking-tight">{item.value}</div>
            <p className="font-body text-sm text-cream/70">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
