"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

// No form service is configured, so the form opens the guest's mail app addressed to the
// Wesley Chapel inbox (mailto fallback, recorded in the client's status.md).
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Website message from ${f.get("name")}`;
    const body = `${f.get("message")}\n\n${f.get("name")}\n${f.get("email")}\n${f.get("phone") || ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "mt-2 w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-ink focus:border-strait focus:outline-none";
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Phone <span className="font-normal text-ink/60">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="block text-sm font-semibold">
        Message
        <textarea name="message" required rows={5} className={field} />
      </label>
      <button type="submit" className="rounded-full bg-ink px-7 py-4 font-semibold text-cream hover:bg-night">
        Send message
      </button>
      <p className="text-sm text-ink/60" aria-live="polite">
        {sent
          ? "Your email app should open with the message ready. If it didn't, write to us at " + site.email + "."
          : "Sends from your own email app. For tonight's table, booking online or calling is fastest."}
      </p>
    </form>
  );
}
