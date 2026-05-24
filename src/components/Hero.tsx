"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Precision diamond tooling, engineered for production at scale.",
    sub: "A group of engineers and metallurgists with decades of industrial experience in precision tool manufacturing.",
    tagTop: "YOU NEED THE BEST",
    tagMid: "WHEN YOU NEED TO",
    tagBig: "produce the",
    tagAccent: "best",
  },
  {
    title: "Sharper edges. Stronger bonds. Longer service life.",
    sub: "Continuous process improvement and uncompromising QC across two production sites.",
    tagTop: "ENGINEERED",
    tagMid: "TO OUTLAST",
    tagBig: "every",
    tagAccent: "cycle",
  },
  {
    title: "Test it on your machine. Trust the result.",
    sub: "Our Test & Trust program lets you trial our dressers and blades risk-free, on your own equipment.",
    tagTop: "PROVEN",
    tagMid: "IN THE FIELD",
    tagBig: "by the",
    tagAccent: "metal",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-slate50 to-white pt-32 md:pt-36 dark:from-navy dark:to-navyDeep"
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-sky/70 blur-3xl dark:bg-steel/15" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[360px] w-[360px] rounded-full bg-steel/10 blur-3xl animate-floatY dark:bg-steel/15" />

      <CurvedLines />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 md:grid-cols-2 md:pb-32">
        <div key={i} className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-steel/20 bg-steel/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-steel dark:border-steel/40 dark:bg-steel/10">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-steel" />
            Manufacturer · Exporter
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy md:text-6xl dark:text-white">
            {s.title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate700 md:text-lg dark:text-white/75">
            {s.sub}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#products"
              className="group relative inline-flex overflow-hidden rounded-md bg-steel px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.7)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
              <span className="absolute inset-0 translate-y-full bg-navy transition-transform duration-500 group-hover:translate-y-0 dark:bg-white dark:text-navy" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-slate200 bg-white px-7 py-3.5 font-semibold text-navy hover:border-steel hover:text-steel transition-colors dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-steel dark:hover:text-steel"
            >
              Our Story
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-slate200 pt-6 dark:border-white/10">
            <Stat n="25+" l="Years" />
            <Stat n="40+" l="Countries" />
            <Stat n="100%" l="QC Inspected" />
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
          <Triangle
            className="absolute left-1/2 top-0 h-[55%] w-[80%] -translate-x-1/2 animate-fadeUp"
            label="Wheels & Dressers"
          />
          <Triangle
            className="absolute bottom-0 left-[6%] h-[45%] w-[44%] rotate-180 [animation-delay:120ms] animate-fadeUp"
            label="MCD Blades"
          />
          <Triangle
            className="absolute bottom-0 right-[6%] h-[45%] w-[44%] rotate-180 [animation-delay:240ms] animate-fadeUp"
            label="Multi-Point"
          />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-6 rounded-full border border-steel/15 animate-spinSlow dark:border-white/10" />
            <div className="absolute inset-16 rounded-full border border-steel/10 animate-spinSlow [animation-direction:reverse] dark:border-white/10" />
          </div>

          <div className="absolute -bottom-2 right-0 rounded-lg border border-slate200 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate500 dark:text-white/55">
              {s.tagTop} · {s.tagMid}
            </div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-base font-medium text-slate700 dark:text-white/80">
                {s.tagBig}
              </span>
              <span className="font-display text-3xl font-bold text-steel">{s.tagAccent}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-slate200 bg-white py-5 dark:border-white/10 dark:bg-white/5">
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate500 dark:text-white/55">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Multipoint Dressers", "MCD Blades", "Single-Point Tools", "Lapping Compounds", "Needle Files", "Profile Dressing"].map(
              (t, j) => (
                <span key={`${k}-${j}`} className="flex items-center gap-14">
                  <span className="text-steel">◆</span>
                  <span>{t}</span>
                </span>
              ),
            ),
          )}
        </div>
      </div>

      <div className="absolute bottom-24 left-6 z-10 hidden md:flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === i ? "w-12 bg-steel" : "w-6 bg-slate200 dark:bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-navy dark:text-white">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-slate500 dark:text-white/55">{l}</div>
    </div>
  );
}

function Triangle({ className, label }: { className?: string; label: string }) {
  return (
    <div className={`${className ?? ""} [clip-path:polygon(50%_0%,100%_100%,0%_100%)]`}>
      <div className="h-full w-full bg-gradient-to-br from-white via-sky to-slate100 shadow-[inset_0_0_40px_rgba(37,99,235,0.12)] ring-1 ring-inset ring-steel/10 dark:from-white/10 dark:via-steel/15 dark:to-white/5 dark:ring-white/10">
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <div className="text-3xl text-steel">◆</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-navy/80 dark:text-white/85">
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurvedLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0a2540" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="1240"
          cy="100"
          rx={300 + i * 140}
          ry={200 + i * 90}
          fill="none"
          stroke="url(#g1)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
