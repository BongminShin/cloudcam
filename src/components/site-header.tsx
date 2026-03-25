import Link from "next/link";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/telematics", label: "Telematics" },
  { href: "/ai-in-vehicles", label: "AI in Vehicles" },
  { href: "/download", label: "Download" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl px-1.5 py-1 transition hover:bg-slate-50"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
            CC
          </span>
          <span className="text-sm font-semibold tracking-tight">CLOUD CAM</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

