import Reveal from "./Reveal";

const industries = [
  {
    icon: "⚙️",
    title: "Automobile",
    desc: "Crankshaft, camshaft & gear grinding — precision dressers for high-volume production lines.",
  },
  {
    icon: "✈️",
    title: "Aerospace & Defence",
    desc: "Tight-tolerance grinding of turbine blades, bearing races and landing gear components.",
  },
  {
    icon: "🔩",
    title: "Carbide & HSS Cutting Tools",
    desc: "Resharpening and manufacturing of drills, end mills, inserts and taps with diamond wheels.",
  },
  {
    icon: "🏭",
    title: "Machine Tools & Bearings",
    desc: "Cylindrical, centreless and internal grinding for shafts, rollers and bearing races.",
  },
  {
    icon: "🔬",
    title: "Ceramics & Glass",
    desc: "Precision shaping of technical ceramics, optical glass and semiconductor substrates.",
  },
  {
    icon: "⚡",
    title: "Steel & Heavy Engineering",
    desc: "Surface grinding, thread grinding and profile dressing for large-scale steel manufacturing.",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative bg-white py-28 dark:bg-navyDeep">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">Industries We Serve</p>
          <h2 id="services-heading" className="mt-3 max-w-3xl font-display text-4xl font-bold text-navy md:text-5xl dark:text-white">
            Dressing solutions for every grinding environment.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-slate700 dark:text-white/75">
            Our diamond tools are trusted across diverse sectors — wherever precision grinding determines
            product quality, you&apos;ll find Orbit tools on the shop floor.
          </p>
          <div className="mt-5 inline-flex h-1 w-24 rounded-full bg-steel" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 80}>
              <div className="card-lift group h-full rounded-2xl border border-slate200 bg-white p-8 shadow-sm transition-colors hover:border-steel/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-steel/40">
                <div className="mb-4 text-3xl">{ind.icon}</div>
                <h3 className="font-display text-xl font-bold text-navy transition-colors group-hover:text-steel dark:text-white dark:group-hover:text-steel">
                  {ind.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate700 dark:text-white/70">
                  {ind.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <a
              href="#contact-us"
              className="group relative inline-flex items-center gap-2 rounded-full border border-steel/30 bg-white px-8 py-3.5 font-display text-sm font-semibold text-navy shadow-sm transition-all duration-300 hover:border-steel hover:bg-steel hover:text-white hover:shadow-md active:scale-95 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-steel dark:hover:bg-steel"
            >
              <span>Discuss Your Application</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
