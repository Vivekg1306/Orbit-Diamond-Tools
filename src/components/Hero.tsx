"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/banners/hero-1.png",
    title: "Welcome to Orbit Diamond Tools — your partner in precision.",
    sub: "All types of diamond tools manufacturing and export. Trusted by industries worldwide.",
  },
  {
    image: "/banners/hero-2.png",
    title: "Precision and performance. Reimagined.",
    sub: "Decades of hands-on expertise in grinding, dressing and finishing — delivered from our facility in Maharashtra.",
  },
  {
    image: "/banners/hero-3.png",
    title: "Resin, vitrified & electroplated wheels — built to outperform.",
    sub: "Rigorous quality checks at every stage ensure each wheel meets precise dimensional and performance standards.",
  },
  {
    image: "/banners/hero-4.png",
    title: "Every tool crafted with purpose. Every edge engineered to last.",
    sub: "From single-point dressers to multi-point clusters — each tool is graded, indexed and traceable.",
  },
  {
    image: "/banners/hero-5.png",
    title: "Complete range of diamond tools under one roof.",
    sub: "Mounted points, grinding wheels, dressers, lapping compounds and more — solutions for every grinding challenge.",
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
      className="relative isolate overflow-hidden bg-navy pt-32 md:pt-36"
    >
      {slides.map((slide, idx) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={idx === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />
        </div>
      ))}

      <div className="relative mx-auto max-w-7xl px-6 pb-28 md:pb-36">
        <div key={i} className="animate-fadeUp max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-steel" />
            Manufacturer · Exporter
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl">
            {s.title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
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
              <span className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
            </a>
            <a
              href="#contact-us"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:border-steel hover:bg-steel/20"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 grid max-w-sm grid-cols-3 gap-6 border-t border-white/15 pt-6">
            <Stat n="25+" l="Years" />
            <Stat n="1" l="Production Site" />
            <Stat n="100%" l="QC Inspected" />
          </div>
        </div>

        <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "w-12 bg-steel" : "w-6 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-white/10 bg-navy/80 py-5 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Multipoint Dressers", "MCD Blades", "Single-Point Tools", "Lapping Compounds", "Needle Files", "Profile Dressing", "Diamond Wheels", "PCD Inserts"].map(
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
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-white">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/55">{l}</div>
    </div>
  );
}
