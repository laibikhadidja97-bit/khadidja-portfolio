import { Briefcase, GraduationCap, Award } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { experiences, education, certifications } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
        />

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <ol className="relative border-l border-white/10">
              {experiences.map((exp, i) => (
                <Reveal key={exp.org} delay={i * 0.08}>
                  <li className="mb-10 ml-6 last:mb-0">
                    <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent/40 bg-bg">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-medium text-accent-soft">
                        @ {exp.org}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">
                      {exp.period}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {exp.points.map((p, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                        >
                          <Briefcase
                            size={15}
                            className="mt-0.5 shrink-0 text-accent-soft/70"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Education & certifications */}
          <div className="space-y-5">
            <Reveal>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-white">
                  <GraduationCap size={20} className="text-accent-soft" />
                  <h3 className="font-display font-semibold">Education</h3>
                </div>
                <ul className="mt-4 space-y-4">
                  {education.map((e) => (
                    <li key={e.title}>
                      <p className="font-medium text-slate-200">{e.title}</p>
                      <p className="text-sm text-slate-400">{e.detail}</p>
                      <p className="text-xs text-slate-500">
                        {e.org} · {e.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2.5 text-white">
                  <Award size={20} className="text-accent-soft" />
                  <h3 className="font-display font-semibold">Certifications</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <li key={c} className="text-sm text-slate-400">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
