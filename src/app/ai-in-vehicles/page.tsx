export default function AiInVehiclesPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm">
              AI in Vehicles
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              SmartView utilises AI tech through multi-camera feeds
            </h1>
            <p className="mt-4 text-slate-600">
              SmartView utilises AI tech through a multi-camera customisable
              feed of up to 16 cameras. It supports safer drivers through
              monitoring phone usage, smoking, distractions, drowsiness, and
              on-road behaviour.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Phone usage monitoring",
                "Smoking detection",
                "Distraction alerts",
                "Drowsiness prevention",
                "On-road behaviour insights",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">Pedestrian Detection</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                Detect pedestrians from 0.5 to 12 metres in full high definition
                1080P, supported by pedestrian tracking and a warning box.
              </div>
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-700">
                The alarm can be further connected to other warning devices
                with an interface allowing live feed for remote monitoring.
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl bg-white" />
              ))}
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Placeholder visual (replace later with real product images).
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-600">
                Device Line-up
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                X Series: X1N (Light) / X3N (All Round) / X5N (Heavy)
              </h2>
            </div>
            <a
              href="/contact"
              className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
            >
              Recommend the right setup
            </a>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "X1N",
                tag: "Light",
                desc: "Designed for light vehicles and efficient AI monitoring.",
              },
              {
                name: "X3N",
                tag: "All Round",
                desc: "Balanced performance for mixed fleets and daily operations.",
              },
              {
                name: "X5N",
                tag: "Heavy",
                desc: "Heavy-duty reliability for demanding fleet environments.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-600">
                    {p.tag}
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {p.name}
                  </div>
                </div>
                <div className="mt-3 text-xl font-semibold">{p.name}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </div>
                <a
                  href="/contact"
                  className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Get Product Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

