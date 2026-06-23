"use client";

import { useState } from "react";

const LEVELS = ["Beginner", "Intermediate", "Advanced", "Rangapravesham"];

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet — acknowledge locally so the form feels alive.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border-t-4 border-green bg-white p-8 text-center shadow-sm">
        <p className="font-heading text-2xl font-semibold text-purple">
          Thank you!
        </p>
        <p className="mt-2 font-body text-deep-navy/70">
          We&apos;ve received your enquiry and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border-t-4 border-pink bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-ui text-sm font-semibold text-deep-navy/80">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-purple/20 bg-ivory px-4 py-2.5 font-body text-deep-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20"
          />
        </label>
        <label className="block">
          <span className="font-ui text-sm font-semibold text-deep-navy/80">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            required
            className="mt-1 w-full rounded-lg border border-purple/20 bg-ivory px-4 py-2.5 font-body text-deep-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-ui text-sm font-semibold text-deep-navy/80">
          Email
        </span>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-purple/20 bg-ivory px-4 py-2.5 font-body text-deep-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20"
        />
      </label>

      <label className="block">
        <span className="font-ui text-sm font-semibold text-deep-navy/80">
          Interested level
        </span>
        <select
          name="level"
          className="mt-1 w-full rounded-lg border border-purple/20 bg-ivory px-4 py-2.5 font-body text-deep-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20"
        >
          {LEVELS.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="font-ui text-sm font-semibold text-deep-navy/80">
          Message
        </span>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-purple/20 bg-ivory px-4 py-2.5 font-body text-deep-navy outline-none transition focus:border-pink focus:ring-2 focus:ring-pink/20"
        />
      </label>

      <button
        type="submit"
        className="mt-2 rounded-full bg-pink px-8 py-3 font-ui font-bold text-white transition-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
      >
        Send Enquiry
      </button>
    </form>
  );
}
