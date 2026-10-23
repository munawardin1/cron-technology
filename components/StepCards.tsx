// The white numbered cards from the "03 / PLAYBOOK" section, reused on detail pages.

export type StepCard = {
  number: string;
  title: string;
  description: string;
};

type StepCardsProps = {
  items: StepCard[];
  // The Home playbook has a divider on the first card only (as in the design).
  dividerOnFirst?: boolean;
};

export default function StepCards({ items, dividerOnFirst = false }: StepCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {items.map((item, index) => (
        <div
          key={item.number}
          className="bg-white p-8 rounded-[24px] border border-ink/10 shadow-xs hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-4xl font-bold text-bronze block mb-4">{item.number}</span>
            <h3 className="font-headline font-semibold text-2xl text-ink mb-2">{item.title}</h3>
            <p className="font-body text-sm text-ink/75 leading-relaxed">{item.description}</p>
          </div>
          {dividerOnFirst && index === 0 && <div className="mt-8 pt-4 border-t border-ink/5"></div>}
        </div>
      ))}
    </div>
  );
}
