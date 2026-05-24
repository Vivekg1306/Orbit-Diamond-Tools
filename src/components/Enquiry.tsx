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
      : "Send enquiry";

  return (
    <section id="enquiry" aria-labelledby="enquiry-heading" className="relative overflow-hidden bg-slate50 py-28 dark:bg-navy">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">Enquiry</p>
          <h2 id="enquiry-heading" className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl dark:text-white">
            Tell us about the job. We&apos;ll suggest the tool.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate700 dark:text-white/75">
            Send us the wheel type, application and tolerance you&apos;re after — we&apos;ll match it
            with the right dresser or blade from our line. Custom geometries available.
          </p>

          <div className="mt-10 space-y-6">
            <ContactRow label="Address" value="MIDC Industrial Area, Chikhalthana, Aurangabad, Maharashtra" />
            <ContactRow label="Phone" value="+91 99605 19187" />
            <ContactRow label="Email" value="sales@orbitdiamondtools.com" />
          </div>
        </Reveal>

        <Reveal delay={120}>
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
                rows={5}
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
                Thank you — your enquiry has been received. We&apos;ll reply within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                {errorMsg || "Could not send. Please try again or email us directly."}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-steel">{label}</div>
      <div className="mt-1 text-navy dark:text-white">{value}</div>
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
