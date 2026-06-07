import Reveal from "./Reveal";

const benefits = [
  "No resetting to redundant",
  "No re-lapping needed",
  "Maintenance-free operation",
  "Rapid dressing without scoring",
  "Resistant to shock and impact",
  "Economical — much cheaper than single point",
  "Available in 3, 5, 9, 13 or 17 diamond clusters",
  "Ideal for coarse or rough dressing up to 80 grit",
];

export default function Featured() {
  return (
    <section className="relative overflow-hidden bg-slate50 py-28 dark:bg-navy">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal>
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rotate-6 rounded-2xl border border-steel/20 bg-white shadow-xl dark:border-white/10 dark:bg-white/5" />
            <div className="absolute inset-4 -rotate-3 rounded-2xl border border-slate200 bg-white shadow-md animate-floatY dark:border-white/10 dark:bg-white/5" />
            <div className="absolute inset-10 rounded-2xl bg-gradient-to-br from-sky to-white ring-1 ring-steel/10 dark:from-steel/20 dark:to-navyDeep dark:ring-white/10" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-7xl text-steel">◆</div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate500 dark:text-white/60">
                  Multi-Point · Grade A
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-steel">Featured Product</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-navy md:text-5xl dark:text-white">
              Multipoint Diamond Dressers
            </h2>
            <p className="mt-5 leading-relaxed text-slate700 dark:text-white/75">
              Cluster type diamond dressers consist of small natural rough diamonds set in a geometric
              pattern in a single layer and sintered into a special wear-resistant bond. Since more than
              one diamond comes in contact with the wheel, the work load is divided — and these tools
              replace large single points while offering significant cost savings.
            </p>
          </Reveal>

          <div role="list" className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 80}>
                <div
                  role="listitem"
                  className="flex items-center gap-3 rounded-lg border border-slate200 bg-white px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-steel text-[10px] text-white">
                    ✓
                  </span>
                  {b}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
