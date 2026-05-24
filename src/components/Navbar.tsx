"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#blogs", label: "Blogs" },
  { href: "#enquiry", label: "Enquiry" },
  { href: "#services", label: "Increase Your Tool Life" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(10,37,64,0.15)] dark:bg-navyDeep/90 dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.5)]"
          : "bg-white border-b border-slate100 dark:bg-navyDeep dark:border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="relative inline-block h-11 w-11">
            <span className="absolute inset-0 rotate-45 rounded-sm bg-gradient-to-br from-steel to-steelDark" />
            <span className="absolute inset-[6px] rotate-45 bg-white dark:bg-navyDeep" />
            <span className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-steel">
              O
            </span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[22px] font-bold tracking-tight text-navy dark:text-white">
              Orbit Diamond Tools
            </span>
            <span className="block text-[10.5px] uppercase tracking-[0.22em] text-slate500 dark:text-white/55">
              Precision Diamond Tooling · Since 1998
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-slate700 dark:text-white/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-2 transition-colors hover:text-steel dark:hover:text-steel"
            >
              <span className="link-underline-light">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="group relative inline-flex overflow-hidden rounded-md bg-steel px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.7)] transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
            <span className="absolute inset-0 translate-y-full bg-navy transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-navy dark:text-white"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-6 bg-current transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-white transition-all duration-500 dark:bg-navyDeep ${
          open ? "max-h-96 border-t border-slate100 dark:border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-6 py-4 text-slate700 dark:text-white/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 hover:text-steel"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit rounded-md bg-steel px-5 py-2 text-sm font-semibold text-white"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
