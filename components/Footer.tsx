import { socials, profile } from "@/lib/data";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-white/10">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.name}
              className="grid h-9 w-9 place-items-center rounded-lg text-slate-400 transition-colors hover:text-white"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
