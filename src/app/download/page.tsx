export default function DownloadPage() {
  const items = [
    {
      title: "Company Brochure",
      desc: "Overview of Telematics + AI in Vehicles and key benefits.",
      cta: "Request brochure",
      query: "brochure",
    },
    {
      title: "X Series Product Overview",
      desc: "X1N / X3N / X5N summary and recommended use-cases.",
      cta: "Request overview",
      query: "x-series",
    },
    {
      title: "Technical Spec Sheet",
      desc: "Key features, camera options, and installation notes.",
      cta: "Request specs",
      query: "spec-sheet",
    },
  ];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm">
            Download
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Get brochures and product materials
          </h1>
          <p className="mt-4 text-slate-600">
            If you need the latest documents, request them and our team will
            share the appropriate files.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="text-sm font-semibold">{it.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {it.desc}
              </div>
              <a
                href={`/contact?request=${encodeURIComponent(it.query)}`}
                className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {it.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-semibold">Note</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Download links can be wired to your files once you upload them to{" "}
            <span className="font-semibold text-slate-800">/public</span> or a
            storage provider. For now, requests route to the contact form.
          </p>
        </div>
      </section>
    </div>
  );
}

