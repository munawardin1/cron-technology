"use client";

// UI only for now: the form validates the email but doesn't send it anywhere.
export default function ContactForm() {
  return (
    <form
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white p-2 rounded-2xl sm:rounded-full border border-white/20 max-w-xl shadow-2xl"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        aria-label="Email address"
        className="bg-transparent px-6 py-3.5 text-base sm:text-lg font-medium text-ink placeholder:text-ink/40 focus:outline-hidden w-full font-body border-none"
        placeholder="Enter your email"
        required
        type="email"
      />
      <button
        className="px-8 py-4 rounded-xl sm:rounded-full bg-ink text-cream font-body text-base font-semibold tracking-wide hover:bg-forest transition-colors shrink-0 shadow-lg flex items-center justify-center gap-2"
        type="submit"
      >
        <span>Let&apos;s Start</span>
        <span className="text-xl font-bold inline-flex items-center leading-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </button>
    </form>
  );
}
