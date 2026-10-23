"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState);

  return (
    <>
      <form
        action={formAction}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white p-2 rounded-2xl sm:rounded-full border border-white/20 max-w-xl shadow-2xl"
      >
        <input
          // Re-mount after each submit so a failed attempt keeps what was typed
          key={state.submittedAt ?? 0}
          defaultValue={state.status === "error" ? state.email : ""}
          aria-label="Email address"
          className="bg-transparent px-6 py-3.5 text-base sm:text-lg font-medium text-ink placeholder:text-ink/40 focus:outline-hidden w-full font-body border-none"
          placeholder="Enter your email"
          required
          type="email"
          name="email"
          autoComplete="email"
        />
        {/* Honeypot: hidden from people, but bots fill it in */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] w-px h-px opacity-0"
        />
        <button
          className="px-8 py-4 rounded-xl sm:rounded-full bg-ink text-cream font-body text-base font-semibold tracking-wide hover:bg-forest transition-colors shrink-0 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
          type="submit"
          disabled={pending}
        >
          <span>{pending ? "Sending…" : "Let's Start"}</span>
          <span className="text-xl font-bold inline-flex items-center leading-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </button>
      </form>
      <p
        aria-live="polite"
        className={`font-body text-sm mt-4 empty:hidden ${state.status === "error" ? "text-bronze" : "text-cream/70"}`}
      >
        {state.message}
      </p>
    </>
  );
}
