export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">
              CLOUD CAM LIMITED
            </div>
            <div className="text-sm leading-relaxed text-slate-600">
              Advanced Safety Camera Systems with Telematics and AI in Vehicles
              for fleet owners.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">
              Contact
            </div>
            <div className="text-sm text-slate-600">
              309 Rosebank Road, Avondale, Auckland 1026
            </div>
            <div className="text-sm text-slate-600">
              Email:{" "}
              <a
                className="font-semibold text-slate-800 underline decoration-slate-200 underline-offset-2 transition hover:decoration-slate-600"
                href="mailto:info@cloudcam.co.nz"
              >
                info@cloudcam.co.nz
              </a>
            </div>
            <div className="text-sm text-slate-600">
              Phone:{" "}
              <a
                className="font-semibold text-slate-800 underline decoration-slate-200 underline-offset-2 transition hover:decoration-slate-600"
                href="tel:+64027328591"
              >
                +64 (0)27 328 5916
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">Links</div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              {[
                ["Telematics", "/telematics"],
                ["AI in Vehicles", "/ai-in-vehicles"],
                ["Download", "/download"],
                ["News", "/news"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-slate-700 transition hover:text-slate-900"
                >
                  {label}
                </a>
              ))}
              <a
                href="/contact"
                className="text-slate-700 transition hover:text-slate-900"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {year} CLOUD CAM LIMITED. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

