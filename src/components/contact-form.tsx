"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type ContactFormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

export function ContactForm({ initialRequest }: { initialRequest?: string }) {
  const initialTopic = initialRequest
    ? decodeURIComponent(initialRequest)
    : "";

  const [form, setForm] = useState<ContactFormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: initialTopic,
    message: "",
  });
  const [status, setStatus] = useState<
    { type: "idle" } | { type: "submitting" } | { type: "success" } | { type: "error"; message: string }
  >({ type: "idle" });

  function setField<K extends keyof ContactFormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.type === "submitting") return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    const topic = form.topic.trim();

    if (!name) {
      setStatus({ type: "error", message: "Please enter your name." });
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }
    if (!message) {
      setStatus({ type: "error", message: "Please enter a message." });
      return;
    }

    setStatus({ type: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          name,
          email,
          message,
          topic,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg = data?.error ?? "Something went wrong. Please try again.";
        setStatus({ type: "error", message: msg });
        return;
      }

      setStatus({ type: "success" });
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        topic: topic ? topic : "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          Name *
          <input
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          Company
          <input
            value={form.company}
            onChange={(e) => setField("company", e.target.value)}
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
            placeholder="Company / Organisation"
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          Email *
          <input
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-700">
          Phone
          <input
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
            placeholder="+64 ..."
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-semibold text-slate-700">
        Topic
        <input
          value={form.topic}
          onChange={(e) => setField("topic", e.target.value)}
          className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
          placeholder="e.g. Telematics, X Series, Downloads"
        />
      </label>

      <label className="space-y-2 text-sm font-semibold text-slate-700">
        Message *
        <textarea
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          rows={6}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
          placeholder="Tell us about your fleet and what you want to achieve."
        />
      </label>

      {status.type === "error" ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-semibold text-rose-700">
          {status.message}
        </div>
      ) : null}
      {status.type === "success" ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
          Thanks! Your message has been received. We will contact you soon.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status.type === "submitting"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.type === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <div className="text-xs text-slate-500">
        This demo form validates inputs and posts to our API route. To enable
        email delivery, connect an email provider in <code>src/app/api/contact/route.ts</code>.
      </div>
    </form>
  );
}

