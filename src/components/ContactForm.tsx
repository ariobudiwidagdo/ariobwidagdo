"use client";
import React, { useState } from "react";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { profile } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionaries";

// text-base on mobile keeps iOS Safari from zooming in when an input is focused
const inputClass =
  "w-full rounded-xl border bg-background px-4 py-3 text-base transition-colors placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 sm:text-sm";

export default function ContactForm({ t }: { t: Dictionary["contact"] }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Loaded on demand so EmailJS isn't part of the initial page bundle
      const emailjs = (await import("@emailjs/browser")).default;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Send email to recipient (Ario)
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: "Ario Bwidagdo",
          to_email: profile.email,
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        publicKey
      );

      // Send confirmation email to sender, in the language they're browsing in
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: form.name,
          to_email: form.email,
          from_name: "Ario Bwidagdo",
          from_email: profile.email,
          message: t.confirmBody.replace("{message}", form.message),
          reply_to: profile.email,
          subject: t.confirmSubject,
        },
        publicKey
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border bg-card p-5 sm:p-8">
      {status === "success" && (
        <p role="status" className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {t.success}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 rounded-lg bg-red-500/10 p-4 text-sm text-red-700 dark:text-red-300">
          <XCircle className="h-4 w-4 shrink-0" />
          {t.error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            {t.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            {t.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            inputMode="email"
            placeholder={t.emailPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          {t.message}
        </label>
        <textarea
          name="message"
          id="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder={t.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-2 px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> {t.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> {t.send}
          </>
        )}
      </button>
    </form>
  );
}
