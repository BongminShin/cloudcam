export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:pb-20 sm:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live Tracking + AI Monitoring
              </div>

              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Advanced Safety Camera Systems
              </h1>

              <p className="max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
                Telematics, Live Tracking, Live Streaming, Drive History
                Replays, and AI-powered multi-camera monitoring for fleet
                owners.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Contact Us
                </a>
                <a
                  href="/download"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Download
                </a>
              </div>

              <div className="grid gap-3 pt-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold">Live Operations</div>
                  <div className="text-sm text-slate-600">
                    Real-time location and activity.
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold">Evidence & Review</div>
                  <div className="text-sm text-slate-600">
                    Drive history replays for faster decisions.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-900 p-6 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-white/80">
                        Multi-camera Monitoring
                      </div>
                      <div className="mt-1 text-2xl font-semibold">
                        Up to 16 feeds
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/10 px-3 py-2 text-sm">
                      AI Insights
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-4 gap-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] rounded-lg bg-white/10"
                      />
                    ))}
                  </div>
                  <div className="mt-5 text-sm text-white/80">
                    Phone usage • Smoking • Distraction • Drowsiness • On-road
                    behaviour
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="text-xs font-semibold text-slate-900">
                      Telemetics
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      Live tracking & streaming
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="text-xs font-semibold text-slate-900">
                      Drive History
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      Replay and review
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <div className="text-xs font-semibold text-slate-900">
                      IPD Camera
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      Pedestrian detection
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-2xl bg-indigo-200/60 blur-xl" />
              <div className="absolute -right-8 -top-6 h-28 w-28 rounded-2xl bg-blue-200/60 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Teasers */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-2 sm:pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Telematics</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              Live tracking, live streaming, and powerful drive history
              replays.
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">AI in Vehicles</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              SmartView AI detects phone usage, smoking, distractions,
              drowsiness, and on-road behaviour.
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Pedestrian Detection</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              Detect pedestrians from 0.5 to 12 metres in 1080P high definition.
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Customisable Feeds</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              Up to 16 camera feeds, configured to match your operations.
            </div>
          </div>
        </div>
      </section>

      {/* Telematics */}
      <section id="telematics" className="bg-slate-50 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm">
                Telematics
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Live tracking and streaming from your office desk
              </h2>
              <p className="mt-4 max-w-xl text-slate-600">
                You get what you need to know, when you need to know it.
                Telemetics (telematics) gives fleet owners real-time visibility
                into vehicles and drivers.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Live tracking & location updates",
                  "Live streaming for real-time awareness",
                  "Drive history replays for review and training",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      ✓
                    </span>
                    <div className="text-sm leading-relaxed text-slate-700">
                      {t}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Drive History Replay</div>
                  <div className="mt-1 text-sm text-slate-600">
                    Review a trip in seconds.
                  </div>
                </div>
                <div className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                  Replay
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xl bg-slate-100"
                  />
                ))}
              </div>
              <div className="mt-5 text-xs text-slate-500">
                Placeholder dashboard UI (replace with screenshots later).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI in Vehicles */}
      <section id="ai-in-vehicles" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm">
                AI in Vehicles
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                SmartView: multi-camera AI for safer driving
              </h2>
              <p className="mt-4 max-w-xl text-slate-600">
                SmartView utilises AI tech through a multi-camera customisable
                feed of up to 16 cameras. It supports safer drivers by
                monitoring phone usage, smoking, distractions, drowsiness, and
                on-road behaviour.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Phone usage detection",
                  "Smoking monitoring",
                  "Distraction alerts",
                  "Drowsiness prevention",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold">Pedestrian Detection</div>
                <div className="mt-2 text-sm text-slate-600">
                  Detect pedestrians from 0.5 to 12 metres with a 1080P high
                  definition IPD camera and pedestrian tracking.
                </div>
                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-700">
                  Alarm can be connected to other warning devices for remote
                  monitoring.
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-2xl bg-white"
                  />
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Placeholder AI camera feeds (replace with real visuals).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-600">
                AI in Vehicles
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Choose the right device for your fleet
              </h2>
            </div>
            <a
              href="/ai-in-vehicles"
              className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
            >
              Explore AI in Vehicles
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "X1N",
                audience: "Light",
                desc: "For smaller vehicles and straightforward monitoring needs.",
                points: ["Efficient AI monitoring", "Quick deployment", "Ideal for vans"],
              },
              {
                name: "X3N",
                audience: "All Round",
                desc: "Balanced performance for mixed fleets and daily operations.",
                points: ["Multi-camera support", "SmartView alerts", "Flexible configurations"],
              },
              {
                name: "X5N",
                audience: "Heavy",
                desc: "Built for heavy-duty fleets where reliability matters most.",
                points: ["Robust for heavy use", "Advanced monitoring workflows", "Operational resilience"],
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-slate-600">
                    {p.audience}
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {p.name}
                  </div>
                </div>
                <div className="mt-3 text-xl font-semibold">{p.name}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </div>
                <div className="mt-5 space-y-2">
                  {p.points.map((t) => (
                    <div key={t} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        ✓
                      </span>
                      <span className="text-slate-700">{t}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Request a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-600">Download</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Brochures & product materials
              </h2>
            </div>
            <a
              href="/download"
              className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
            >
              View all downloads
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              { title: "Company Brochure", desc: "Overview of Telematics and AI in Vehicles." },
              { title: "Product Overview (X Series)", desc: "X1N / X3N / X5N summary and use-cases." },
              { title: "Technical Spec Sheet", desc: "Key features and installation notes." },
            ].map((d) => (
              <a
                key={d.title}
                href="/download"
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
              >
                <div className="text-sm font-semibold">{d.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {d.desc}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Download
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-slate-200">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="bg-slate-50 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-600">News</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Latest updates from Cloud Cam
              </h2>
            </div>
            <a
              href="/news"
              className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
            >
              See more
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              { title: "SmartView AI Improvements", date: "2026-03", desc: "Refinements to alerts and multi-camera workflows." },
              { title: "New X Series Configurations", date: "2026-02", desc: "Updated device bundles for different fleet needs." },
              { title: "Case Study: Safer Operations", date: "2026-01", desc: "How fleets used AI monitoring and replay to reduce risk." },
            ].map((n) => (
              <a
                key={n.title}
                href="/news"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
              >
                <div className="text-xs font-semibold text-slate-500">
                  {n.date}
                </div>
                <div className="mt-2 text-lg font-semibold">{n.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {n.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold text-slate-600">
                  Ready to get started?
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                  Contact Cloud Cam Limited
                </h2>
                <p className="mt-4 text-slate-600">
                  Tell us about your fleet. We will recommend the right device
                  setup and AI monitoring configuration.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Contact Sales
                </a>
                <a
                  href="/download"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Get Brochures
                </a>
                <div className="sm:col-span-2 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                  Email: <span className="font-semibold text-slate-800">info@cloudcam.co.nz</span> ·
                  Phone: <span className="font-semibold text-slate-800">+64 (0)27 328 5916</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
