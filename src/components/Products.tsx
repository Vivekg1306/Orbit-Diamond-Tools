"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { products } from "@/lib/seo";
import { ProductsItemListJsonLd } from "./JsonLd";

const INITIAL_COUNT = 6;

export default function Products() {
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleProducts = showAll ? products : products.slice(0, INITIAL_COUNT);
  const hasMore = products.length > INITIAL_COUNT;

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative bg-white py-28 dark:bg-navyDeep"
    >
      <ProductsItemListJsonLd />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">Catalogue</p>
              <h2
                id="products-heading"
                className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl dark:text-white"
              >
                Tools, ground to a finer truth.
              </h2>
              <div className="mt-5 inline-flex h-1 w-24 rounded-full bg-steel" />
            </div>
            <a href="#contact-us" className="link-underline-light font-semibold text-steel">
              Request full catalogue →
            </a>
          </div>
        </Reveal>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((p, i) => (
            <div
              key={p.slug}
              className={`transition-all duration-700 ease-out ${
                i >= INITIAL_COUNT
                  ? "animate-[fadeSlideUp_0.6s_ease-out_both]"
                  : ""
              }`}
              style={i >= INITIAL_COUNT ? { animationDelay: `${(i - INITIAL_COUNT) * 80}ms` } : undefined}
            >
              <Reveal delay={i < INITIAL_COUNT ? i * 90 : 0}>
                <article
                  id={`product-${p.slug}`}
                  className="card-lift group relative overflow-hidden rounded-2xl border border-slate200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-slate50 to-sky dark:from-navy dark:to-steel/20">
                    <Image
                      src={p.image}
                      alt={`${p.name} — ${p.description}`}
                      fill
                      sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {p.tag && (
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-steel px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-navy dark:text-white">{p.name}</h3>
                    <Link
                      href={`/products/${p.slug}`}
                      className="shrink-0 text-sm font-semibold text-steel opacity-0 transition group-hover:opacity-100"
                    >
                      Quick view →
                    </Link>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate500 dark:text-white/60">
                    {p.description}
                  </p>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group relative inline-flex items-center gap-2 rounded-full border border-steel/30 bg-white px-8 py-3.5 font-display text-sm font-semibold text-navy shadow-sm transition-all duration-300 hover:border-steel hover:bg-steel hover:text-white hover:shadow-md active:scale-95 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-steel dark:hover:bg-steel"
            >
              <span>{showAll ? "Show Less" : "Explore More"}</span>
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
