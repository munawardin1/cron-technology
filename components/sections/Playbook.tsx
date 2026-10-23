import StepCards from "@/components/StepCards";
import { playbookSteps } from "@/lib/data";

type PlaybookProps = {
  label?: string;
};

export default function Playbook({ label = "03 / PLAYBOOK" }: PlaybookProps) {
  return (
    <section className="w-full bg-cream text-ink py-28 px-6 lg:px-12 relative overflow-hidden" id="playbook">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-sage tracking-[0.25em] uppercase block mb-3">
              {label}
            </span>
            <h2 className="font-headline font-semibold text-5xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-ink leading-tight sm:leading-none">
              How we <span className="font-headline italic font-normal text-bronze">ship.</span>
            </h2>
          </div>
          <p className="font-body text-base text-ink/70 max-w-sm mt-4 md:mt-0">
            No endless discovery meetings. Direct pipeline from roadmap to scale.
          </p>
        </div>
        <StepCards items={playbookSteps} dividerOnFirst />
      </div>
    </section>
  );
}
