export default function TelematicsPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm">
              Telematics
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Telemetics offers real-time visibility
            </h1>
            <p className="mt-4 text-slate-600">
              FMS offers live tracking, live streaming, and drive history
              replays so powerful you’ll wonder how you managed without them.
              Get what you need to know, when you need to know it from your
              office desk.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Live Tracking",
                desc: "Know where your fleet is in real time.",
              },
              {
                title: "Live Streaming",
                desc: "Monitor operations and events as they happen.",
              },
              {
                title: "Drive History Replays",
                desc: "Review trips for training, investigations, and improvements.",
              },
              {
                title: "Powerful Fleet Visibility",
                desc: "Make faster decisions with clear evidence and context.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div className="text-sm font-semibold">{c.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {c.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Talk to Sales
            </a>
            <a
              href="/download"
              className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Get Telematics Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

