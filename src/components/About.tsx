import Reveal from "./Reveal";

const stats = [
  { v: "25+", l: "Years of Craft" },
  { v: "2", l: "Production Sites" },
  { v: "40+", l: "Countries Served" },
  { v: "100%", l: "QC Inspected" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative bg-white py-28 dark:bg-navyDeep">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">About Orbit</p>
          <h2 id="about-heading" className="mt-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl dark:text-white">
            A workshop where <span className="text-steel-gradient">precision</span> is a habit, not a claim.
          </h2>
          <div className="mt-8 inline-flex h-1 w-24 rounded-full bg-steel" />
        </Reveal>

        <Reveal delay={120}>
          <p className="text-lg leading-relaxed text-slate700 dark:text-white/80">
            Orbit Diamond Tools brings together engineers, machinists and metallurgists with decades of
            collective experience in precision tooling. An above-average rate of investment in new
            machines and continuous process improvement has positioned us among the leading
            manufacturers of diamond dressers, blades and lapping compounds.
          </p>
          <p className="mt-5 leading-relaxed text-slate500 dark:text-white/60">
            Every tool that leaves our floor is graded, indexed and traceable — because grinding is too
            unforgiving a process for guesswork.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate200 pt-8 dark:border-white/10">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div>
                  <div className="font-display text-4xl font-bold text-navy dark:text-white">{s.v}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate500 dark:text-white/55">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
