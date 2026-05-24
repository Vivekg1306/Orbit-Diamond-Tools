"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import type { Product } from "@/lib/seo";

interface QuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickView({ product, onClose }: QuickViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // Reset index when product changes & animate in
  useEffect(() => {
    if (product) {
      setActiveIndex(0);
      // Trigger enter animation on next frame
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [product]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300); // wait for exit animation
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (product) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, handleClose]);

  if (!product) return null;

  const images = product.images;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        visible ? "bg-black/60 backdrop-blur-sm" : "bg-black/0 backdrop-blur-0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
    >
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-navy transition-all duration-300 ease-out ${
          visible
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-6"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/10 text-slate700 transition-colors hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          aria-label="Close quick view"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid gap-0 md:grid-cols-[3fr_2fr]">
          {/* Image gallery */}
          <div className="relative bg-gradient-to-br from-slate50 to-sky/30 p-8 dark:from-navyDeep dark:to-steel/10">
            {/* Main image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={images[activeIndex]}
                alt={`${product.name} — image ${activeIndex + 1}`}
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover transition-all duration-500 ease-out"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                      i === activeIndex
                        ? "border-steel ring-2 ring-steel/30 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Navigation arrows for multiple images */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-8 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/80 shadow transition-all hover:bg-white dark:bg-navy/80 dark:hover:bg-navy"
                  aria-label="Previous image"
                >
                  <svg className="h-4 w-4 text-navy dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-8 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/80 shadow transition-all hover:bg-white dark:bg-navy/80 dark:hover:bg-navy"
                  aria-label="Next image"
                >
                  <svg className="h-4 w-4 text-navy dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Product details */}
          <div className="flex flex-col justify-center p-8">
            {product.tag && (
              <span className="mb-3 inline-block w-fit rounded-full bg-steel/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-steel">
                {product.tag}
              </span>
            )}
            <h3 className="font-display text-2xl font-bold text-navy dark:text-white">
              {product.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate500 dark:text-white/60">
              {product.details}
            </p>
            <div className="mt-8">
              <a
                href="#enquiry"
                onClick={handleClose}
                className="inline-flex items-center gap-2 rounded-full bg-steel px-6 py-3 text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-steelDark hover:shadow-md active:scale-95"
              >
                Enquire Now
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
