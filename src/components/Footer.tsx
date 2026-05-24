export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-diamond-grid opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-block h-10 w-10">
              <span className="absolute inset-0 rotate-45 rounded-sm bg-gradient-to-br from-steel to-steelDark" />
              <span className="absolute inset-[6px] rotate-45 bg-navy" />
              <span className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-white">
                O
              </span>
            </span>
            <span className="font-display text-xl font-bold tracking-tight">Orbit Diamond Tools</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Precision diamond tooling for industrial grinding — engineered, indexed, traceable.
          </p>
        </div>

        <FooterCol
          title="Catalogue"
          items={["Multipoint Dressers", "MCD Blades", "Single-Point", "Lapping Compounds", "Needle Files"]}
        />
        <FooterCol title="Company" items={["About", "Tool Life", "Blogs", "Enquiry", "Contact"]} />

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">Visit</h4>
          <div className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-white/80">
            <span className="mt-0.5 inline-grid h-8 w-8 shrink-0 place-items-center rounded-full bg-steel/15 ring-1 ring-steel/30">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-steel"
                aria-hidden
              >
                <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <address className="not-italic">
              <span className="font-semibold text-white">Address:</span> 1st Floor, Plot No. K-1,
              Shop No. 109 I Wing, Udyog Bhawan-2, Near By Godrej Industries Ltd, MIDC, Anand Nagar,
              Ambernath East, 421506
            </address>
          </div>
          <div className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-white/80">
            <span className="mt-0.5 inline-grid h-8 w-8 shrink-0 place-items-center rounded-full bg-steel/15 ring-1 ring-steel/30">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-steel"
                aria-hidden
              >
                <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.86 19.86 0 0 1 2 4.09 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.21a16 16 0 0 0 6.58 6.58l1.46-1.61a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1z" />
              </svg>
            </span>
            <span className="pt-1.5">
              <span className="font-semibold text-white">Phone:</span> +91 99605 19187
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-6 text-xs text-white/55 md:flex-row">
        <span>© {new Date().getFullYear()} Orbit Diamond Tools. All rights reserved.</span>
        <span>Crafted with precision · Made in India</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-white/70">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="link-underline hover:text-white">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
