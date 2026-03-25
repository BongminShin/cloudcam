import { ContactForm } from "@/components/contact-form";

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { request?: string };
}) {
  const request = searchParams?.request;

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm">
              Contact
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Get in touch with Cloud Cam Limited
            </h1>
            <p className="mt-4 text-slate-600">
              Tell us about your fleet and we will recommend the right device
              setup and AI monitoring configuration.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold">Email</div>
                <a
                  className="mt-2 block text-sm font-semibold text-slate-900 underline decoration-slate-200 underline-offset-4"
                  href="mailto:info@cloudcam.co.nz"
                >
                  info@cloudcam.co.nz
                </a>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold">Phone</div>
                <a
                  className="mt-2 block text-sm font-semibold text-slate-900 underline decoration-slate-200 underline-offset-4"
                  href="tel:+64027328591"
                >
                  +64 (0)27 328 5916
                </a>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold">Address</div>
                <div className="mt-2 text-sm text-slate-600">
                  309 Rosebank Road, Avondale, Auckland 1026
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <ContactForm initialRequest={request} />
          </div>
        </div>
      </section>
    </div>
  );
}

