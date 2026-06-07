"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/seo";

export default function ProductPageClient({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images;

  return (
    <div className="min-h-screen bg-white dark:bg-navyDeep">
      {/* Back navigation */}
      <div className="border-b border-slate200 bg-slate50/50 dark:border-white/10 dark:bg-navy/50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate500 transition-colors hover:text-steel dark:text-white/60 dark:hover:text-steel"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white dark:bg-navyDeep">
              <Image
                src={images[activeIndex]}
                alt={`${product.name} — image ${activeIndex + 1}`}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-contain transition-all duration-500 ease-out"
                priority
              />

              {/* Navigation arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/80 shadow-md transition-all hover:bg-white hover:shadow-lg dark:bg-navy/80 dark:hover:bg-navy"
                    aria-label="Previous image"
                  >
                    <svg className="h-5 w-5 text-navy dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/80 shadow-md transition-all hover:bg-white hover:shadow-lg dark:bg-navy/80 dark:hover:bg-navy"
                    aria-label="Next image"
                  >
                    <svg className="h-5 w-5 text-navy dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                      i === activeIndex
                        ? "border-steel ring-2 ring-steel/30 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product details */}
          <div className="flex flex-col justify-center">
            {product.tag && (
              <span className="mb-4 inline-block w-fit rounded-full bg-steel/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-steel">
                {product.tag}
              </span>
            )}

            <h1 className="font-display text-3xl font-bold text-navy md:text-4xl dark:text-white">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate500 dark:text-white/60">
              {product.description}
            </p>

            <div className="mt-8 h-px bg-slate200 dark:bg-white/10" />

            <p className="mt-8 leading-relaxed text-slate700 dark:text-white/80">
              {product.details}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-steel px-8 py-3.5 text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-steelDark hover:shadow-md active:scale-95"
              >
                Contact Us
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 rounded-full border border-steel/30 px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-200 hover:border-steel hover:bg-steel/5 active:scale-95 dark:border-white/20 dark:text-white dark:hover:border-steel"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
