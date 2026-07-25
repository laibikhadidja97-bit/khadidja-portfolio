import Link from "next/link";
import { ArrowUpRight, Eye, Github, Lock } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work"
          description="Production platforms I've designed and built — from multi-tenant SaaS and ERP to e-commerce and healthcare."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => {
            const hasLink = Boolean(
              project.live || project.repo || project.caseStudy,
            );
            return (
              <Reveal key={project.title} delay={(i % 2) * 0.08}>
                <article
                  className={`group card flex h-full flex-col hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 ${
                    project.featured ? "md:min-h-[280px]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {project.badge && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent-soft">
                          {project.badge}
                        </span>
                      )}
                      <h3 className="mt-1.5 font-display text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400">{project.tagline}</p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — source code`}
                          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} — live demo`}
                          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 transition-all hover:border-accent/40 hover:text-white group-hover:bg-accent/10"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      ) : project.caseStudy ? (
                        <Link
                          href={project.caseStudy}
                          aria-label={`${project.title} — view project`}
                          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 transition-all hover:border-accent/40 hover:text-white group-hover:bg-accent/10"
                        >
                          <Eye size={17} />
                        </Link>
                      ) : !project.repo ? (
                        <span
                          title="Private client project"
                          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-500"
                        >
                          <Lock size={15} />
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft transition-colors hover:text-white"
                    >
                      Visit live site
                      <ArrowUpRight size={15} />
                    </a>
                  ) : project.caseStudy ? (
                    <Link
                      href={project.caseStudy}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft transition-colors hover:text-white"
                    >
                      View project
                      <ArrowUpRight size={15} />
                    </Link>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
