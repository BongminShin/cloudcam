export default function NewsPage() {
  const posts = [
    {
      title: "SmartView AI Improvements",
      date: "2026-03",
      desc: "Refinements to alerts and multi-camera workflows.",
    },
    {
      title: "New X Series Configurations",
      date: "2026-02",
      desc: "Updated device bundles for different fleet needs.",
    },
    {
      title: "Case Study: Safer Operations",
      date: "2026-01",
      desc: "How fleets used AI monitoring and replay to reduce risk.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm">
            News
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Latest updates
          </h1>
          <p className="mt-4 text-slate-600">
            Product announcements, AI improvements, and fleet stories from Cloud
            Cam Limited.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {posts.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="text-xs font-semibold text-slate-500">{p.date}</div>
              <div className="mt-2 text-xl font-semibold">{p.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.desc}
              </div>
              <a
                href="/contact"
                className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Ask about this
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

