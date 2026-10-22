import { playbookSteps } from "@/lib/data";

export default function Playbook() {
  return (
    <section className="w-full bg-cream text-ink py-28 px-6 lg:px-12 relative overflow-hidden" id="playbook">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-sage tracking-[0.25em] uppercase block mb-3">
              03 / PLAYBOOK
            </span>
            <h2 className="font-headline font-semibold text-5xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-ink leading-tight sm:leading-none">
              How we <span className="font-headline italic font-normal text-bronze">ship.</span>
            </h2>
          </div>
          <p className="font-body text-base text-ink/70 max-w-sm mt-4 md:mt-0">
            No endless discovery meetings. Direct pipeline from roadmap to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {playbookSteps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white p-8 rounded-[24px] border border-ink/10 shadow-xs hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-4xl font-bold text-bronze block mb-4">{step.number}</span>
                <h3 className="font-headline font-semibold text-2xl text-ink mb-2">{step.title}</h3>
                <p className="font-body text-sm text-ink/75 leading-relaxed">{step.description}</p>
              </div>
              {/* In the design only the first card has this divider */}
              {index === 0 && <div className="mt-8 pt-4 border-t border-ink/5"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
