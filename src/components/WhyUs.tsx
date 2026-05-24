import Reveal from "./Reveal";

const points = [
  {
    t: "Test & Trust",
    d: "Trial our tools on your own machine before you commit. We back our edges with results, not adjectives.",
  },
  {
    t: "Graded Diamonds",
    d: "Every stone is sized and sorted in-house — no surprises in service life, no variance batch-to-batch.",
  },
  {
    t: "Bonded to Last",
    d: "Wear-resistant matrices developed over years of field data, tuned to specific grinding applications.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-slate50 py-28 dark:bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">Why Orbit</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold text-navy md:text-5xl dark:text-white">
            The metal doesn&apos;t lie  and neither do we.
          </h2>
          <div className="mt-5 inline-flex h-1 w-24 rounded-full bg-steel" />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={i * 140}>
              <div className="card-lift h-full rounded-2xl border border-slate200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-md bg-steel font-display text-sm font-bold text-white">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl font-bold text-navy dark:text-white">{p.t}</h3>
                <p className="mt-3 leading-relaxed text-slate700 dark:text-white/75">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
