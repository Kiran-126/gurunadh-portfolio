import { BrainCircuit, Code2, Cpu, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { about, focusAreas } from "@/data/portfolio";

const iconMap = { BrainCircuit, Code2, Cpu, GraduationCap };

type IconName = keyof typeof iconMap;

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="reveal">
            <SectionHeading
              eyebrow="01 / About"
              title="Curious by nature. Practical by design."
            />
            <div className="mt-7 h-px w-20 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {focusAreas.map((area) => {
                const Icon = iconMap[area.icon as IconName];
                return (
                  <span
                    key={area.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                  >
                    <Icon className="h-3.5 w-3.5 text-cyan-300/80" />
                    {area.label}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <div className="space-y-5 text-[15px] leading-8 text-slate-300">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
