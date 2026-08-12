import { BrainCircuit, Code2, Database, Globe, Wrench } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

const iconMap = { Code2, BrainCircuit, Globe, Database, Wrench };

type IconName = keyof typeof iconMap;

export default function Skills() {
  return (
    <section
      id="skills"
      className="section border-y border-white/[0.05] bg-white/[0.01]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal">
          <SectionHeading
            eyebrow="02 / Capabilities"
            title="Tools I use to bring ideas to life."
            description="A growing toolkit shaped by coursework, projects, and a habit of learning by building."
          />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon as IconName];
            return (
              <div
                key={category.title}
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 ${index === 1 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.04]">
                    <Icon className="h-4.5 w-4.5 text-cyan-300/90" />
                  </div>
                  <h3 className="text-sm font-medium capitalize tracking-wide text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-emerald-400/25 hover:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
