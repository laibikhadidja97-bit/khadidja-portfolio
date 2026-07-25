import { Code2, Server, Smartphone, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { skills } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Mobile: Smartphone,
  "Databases & Tools": Database,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="A full-stack toolkit, front to back"
          description="The technologies I use to design, build, and ship reliable products."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => {
            const Icon = icons[group.title] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="card h-full hover:border-accent/30 hover:bg-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
