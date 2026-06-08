import Reveal from "./Reveal";

const stats = [
  { v: "25+", l: "Years of Craft" },
  { v: "1", l: "Production Site" },
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
            Orbit Diamond Tools is a team of skilled engineers and toolmakers with deep roots in
            industrial grinding and finishing. Grinding technology is the most important factor in
            today&apos;s high-tech products — the performance of a grinding wheel depends upon the
            dressing process, and the dressing tool is the responsible factor.
          </p>
          <p className="mt-5 leading-relaxed text-slate500 dark:text-white/60">
            We provide dressing solutions to industries as diverse as Automobile, Ceramics, Carbide
            &amp; HSS Cutting Tools, Glass, Refractories, Machine Tools, Steel, Aerospace, Engineering
            and many more. Every tool that leaves our floor is graded, indexed and traceable —
            because grinding is too unforgiving a process for guesswork.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-xl border border-slate200 bg-slate50 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-steel font-display text-lg font-bold text-white">
              NM
            </div>
            <div>
              <div className="font-display text-sm font-bold text-navy dark:text-white">Mr. N. Mishra</div>
              <div className="text-xs text-slate500 dark:text-white/55">Founder &amp; Managing Director</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-slate200 pt-8 dark:border-white/10">
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
