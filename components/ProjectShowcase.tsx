import Link from "next/link";
import { ArrowLeft, Check, ExternalLink, ImageOff, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import { asset } from "@/lib/base";
import type { Showcase, Screenshot } from "@/lib/data";

type Props = { showcase: Showcase; screenshots: Screenshot[] };

export default function ProjectShowcase({ showcase, screenshots }: Props) {
  const note =
    showcase.privateNote ?? {
      title: "Private product",
      body: "Shown for preview only. The source code is not publicly available.",
    };

  return (
    <>
      <Navbar />
      <main id="main" className="pt-28 pb-20">
        <div className="container-x">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          {/* Header */}
          <Reveal className="mt-8">
            <div className="glass overflow-hidden rounded-3xl">
              <div className="relative flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
                <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-[100px]" />
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(showcase.cover)}
                    alt={`${showcase.title} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span className="eyebrow">
                    {showcase.eyebrow ?? "Project Showcase"}
                  </span>
                  <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {showcase.title}
                  </h1>
                  <p className="mt-1 text-slate-400">{showcase.tagline}</p>
                  {showcase.live && (
                    <a
                      href={showcase.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-4 !py-2.5 text-sm"
                    >
                      <ExternalLink size={16} />
                      Open live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {/* Overview + features */}
            <div className="lg:col-span-2 space-y-8">
              <Reveal>
                <p className="text-lg leading-relaxed text-slate-300">
                  {showcase.intro}
                </p>
              </Reveal>

              <Reveal>
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-white">
                  <Sparkles size={20} className="text-accent-soft" />
                  Key features
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {showcase.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-sm text-slate-300"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Tech sidebar */}
            <div className="space-y-5">
              <Reveal>
                <div className="glass rounded-2xl p-6">
                  <h2 className="font-display font-semibold text-white">
                    Tech stack
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {showcase.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="glass rounded-2xl p-6 text-sm text-slate-400">
                  <p className="font-medium text-slate-200">{note.title}</p>
                  <p className="mt-1.5 leading-relaxed">{note.body}</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Screenshots gallery */}
          <section className="mt-16">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-white">
                Screenshots
              </h2>
              <p className="mt-2 text-slate-400">
                A look inside the application.
              </p>
            </Reveal>

            {screenshots.length > 0 ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {screenshots.map((shot, i) => (
                  <Reveal key={shot.src} delay={(i % 2) * 0.06}>
                    <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <a
                        href={asset(shot.src)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset(shot.src)}
                          alt={shot.alt}
                          loading="lazy"
                          className="aspect-video w-full bg-white/[0.02] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </a>
                      {shot.caption && (
                        <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-slate-400">
                          {shot.caption}
                        </figcaption>
                      )}
                    </figure>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal className="mt-8">
                <div className="glass flex flex-col items-center justify-center rounded-2xl border-dashed p-12 text-center">
                  <ImageOff size={30} className="text-slate-500" />
                  <p className="mt-3 font-medium text-slate-300">
                    Screenshots coming soon
                  </p>
                  <p className="mt-1 max-w-md text-sm text-slate-500">
                    Add images to{" "}
                    <code className="rounded bg-white/5 px-1.5 py-0.5 text-slate-300">
                      public/screenshots/{showcase.slug}/
                    </code>{" "}
                    and list them in <code className="text-slate-300">lib/data.ts</code>.
                  </p>
                </div>
              </Reveal>
            )}
          </section>

          <div className="mt-14 text-center">
            <Link href="/#contact" className="btn-primary">
              Interested? Let&apos;s talk
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
