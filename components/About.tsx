import { Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="About"
          title="Turning ideas into products that ship"
        />

        <div className="grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 space-y-5">
            {profile.bio.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-slate-300">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                <Sparkles size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                My philosophy
              </h3>
              <p className="mt-2 leading-relaxed text-slate-400">
                &ldquo;{profile.philosophy}&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
