import Reveal from "./Reveal";

const services = [
  "Angular & Centerless Grinders",
  "Carbide & Steel Grinding",
  "Profile Wheel Dressing",
  "Large Wheel Grinding",
  "Finish Grinding Operations",
  "Surface Finishing Systems",
  "Specialty & Custom Tooling",
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative bg-white py-28 dark:bg-navyDeep">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">Tool Life Enhancement</p>
          <h2 id="services-heading" className="mt-3 max-w-3xl font-display text-4xl font-bold text-navy md:text-5xl dark:text-white">
            Engineered solutions for seven critical grinding environments.
          </h2>
          <div className="mt-5 inline-flex h-1 w-24 rounded-full bg-steel" />
        </Reveal>

        <div className="mt-14 divide-y divide-slate200 border-y border-slate200 dark:divide-white/10 dark:border-white/10">
          {services.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <a
                href="#enquiry"
                className="group flex items-center justify-between gap-6 px-2 py-6 transition-colors hover:bg-slate50 dark:hover:bg-white/5"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-lg font-bold text-steel/70">0{i + 1}</span>
                  <span className="font-display text-2xl font-semibold text-navy transition-colors group-hover:text-steel md:text-3xl dark:text-white dark:group-hover:text-steel">
                    {s}
                  </span>
                </div>
                <span className="text-slate500 transition-transform group-hover:translate-x-2 group-hover:text-steel dark:text-white/55">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
