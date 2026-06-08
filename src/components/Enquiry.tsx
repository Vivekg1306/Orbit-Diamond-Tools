"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "country" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  const phoneDigits = values.phone.replace(/\D/g, "");
  if (!phoneDigits) {
    errors.phone = "Phone number is required.";
  } else if (phoneDigits.length !== 10) {
    errors.phone = "Phone number must be exactly 10 digits.";
  }

  if (values.message && values.message.length > 2000) {
    errors.message = "Requirements must be under 2000 characters.";
  }

  return errors;
}

export default function Enquiry() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      country: String(data.get("country") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Could not send. Please try again.");
        return;
      }
      setStatus("sent");
      form.reset();
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Network error");
    }
  }

  function clearError(field: keyof Errors) {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  const buttonLabel =
    status === "sending"
      ? "Sending…"
      : status === "sent"
      ? "Sent — we'll be in touch"
      : "Send Message";

  return (
    <section id="contact-us" aria-labelledby="contact-heading" className="relative overflow-hidden bg-slate50 py-28 dark:bg-navy">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">Contact Us</p>
            <h2 id="contact-heading" className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl dark:text-white">
              Let&apos;s discuss your requirements.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-slate700 dark:text-white/75">
              Send us the wheel type, application and tolerance you&apos;re after — we&apos;ll match it
              with the right dresser or blade from our line. Custom geometries available.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-slate200 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_-30px_rgba(37,99,235,0.4)]"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Full name"
                  name="name"
                  required
                  error={errors.name}
                  onChange={() => clearError("name")}
                />
                <Input label="Company" name="company" />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  required
                  error={errors.email}
                  onChange={() => clearError("email")}
                />
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  error={errors.phone}
                  maxLength={15}
                  inputMode="numeric"
                  placeholder="10-digit number"
                  onChange={() => clearError("phone")}
                />
                <Input label="Country" name="country" className="sm:col-span-2" />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-slate500 dark:text-white/60">
                  Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={() => clearError("message")}
                  className={`mt-2 w-full rounded-md border bg-white p-3 text-navy outline-none transition focus:ring-2 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 ${
                    errors.message
                      ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-400"
                      : "border-slate200 focus:border-steel focus:ring-steel/20 dark:border-white/15"
                  }`}
                  placeholder="Wheel diameter, application, tolerance, quantity…"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative mt-6 inline-flex overflow-hidden rounded-md bg-steel px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.7)] disabled:cursor-not-allowed disabled:opacity-80"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {buttonLabel}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="absolute inset-0 translate-y-full bg-navy transition-transform duration-500 group-hover:translate-y-0" />
              </button>

              {status === "sent" && (
                <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                  Thank you — your message has been received. We&apos;ll reply within one business day.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                  {errorMsg || "Could not send. Please try again or email us directly."}
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-8">
              <div className="space-y-6">
                <ContactRow
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  }
                  label="Address"
                  value="Plot No. K-1, Shop No. 109 I Wing, Udyog Bhawan-2, Near By Godrej Industries Ltd, MIDC, Anand Nagar, Ambernath East, 421506"
                />
                <ContactRow
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.86 19.86 0 0 1 2 4.09 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.21a16 16 0 0 0 6.58 6.58l1.46-1.61a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
                    </svg>
                  }
                  label="Phone"
                  value="+91 99605 19187"
                />
                <ContactRow
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  }
                  label="Email"
                  value="orbitdiamondtools@gmail.com"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate200 shadow-lg dark:border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d73.1833!3d19.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzAwLjEiTiA3M8KwMTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Orbit Diamond Tools Location"
                  className="w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 inline-grid h-10 w-10 shrink-0 place-items-center rounded-full bg-steel/10 text-steel ring-1 ring-steel/20 dark:bg-steel/15 dark:ring-steel/30">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-steel">{label}</div>
        <div className="mt-1 text-navy dark:text-white">{value}</div>
      </div>
    </div>
  );
}

type InputProps = {
  label: string;
  name: string;
  type?: string;
  className?: string;
  required?: boolean;
  error?: string;
  maxLength?: number;
  inputMode?: "text" | "numeric" | "email" | "tel" | "search" | "url";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  label,
  name,
  type = "text",
  className = "",
  required = false,
  error,
  maxLength,
  inputMode,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold uppercase tracking-widest text-slate500 dark:text-white/60">
        {label}
        {required && <span className="ml-1 text-steel">*</span>}
      </span>
      <input
        name={name}
        type={type}
        maxLength={maxLength}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={onChange}
        {...(error ? { "aria-invalid": "true" as const } : {})}
        className={`mt-2 w-full rounded-md border bg-white p-3 text-navy outline-none transition focus:ring-2 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-400"
            : "border-slate200 focus:border-steel focus:ring-steel/20 dark:border-white/15"
        }`}
      />
      {error && (
        <span className="mt-1.5 block text-xs font-medium text-red-600 dark:text-red-400">
          {error}
        </span>
      )}
    </label>
  );
}
