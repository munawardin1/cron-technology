import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactCta() {
  return (
    <section className="w-full bg-cream text-ink py-28 px-6 lg:px-12 relative overflow-hidden border-t border-ink/10" id="contact">
      <div className="max-w-[1440px] mx-auto relative">
        <div
          className="relative bg-ink text-cream rounded-[32px] p-8 sm:p-16 lg:p-20 overflow-hidden shadow-2xl border border-white/10"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(181, 139, 90, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(47, 90, 60, 0.35) 0%, transparent 55%), linear-gradient(135deg, rgb(14, 26, 19) 0%, rgb(20, 38, 28) 50%, rgb(8, 16, 11) 100%)",
          }}
        >
          <Image
            alt=""
            className="absolute -right-20 -bottom-24 w-[480px] h-[480px] pointer-events-none -rotate-12 object-contain"
            src="/images/cron-star.png"
            width={480}
            height={480}
          />
          <div className="max-w-3xl relative z-10">
            <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-cream leading-[1.1] sm:leading-10 lg:leading-none mb-4">
              Let&apos;s build <span className="font-headline italic font-normal text-bronze">something.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-cream/70 mb-10 leading-relaxed sm:leading-7 max-w-xl">
              Got a bold project? Drop your email and we&apos;ll reply within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
