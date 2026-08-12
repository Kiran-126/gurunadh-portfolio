import { ArrowUpRight, ExternalLink, Github, Leaf, Route } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const iconMap = { Route, Leaf };
type IconName = keyof typeof iconMap;

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="03 / Selected work"
            title="Projects with a purpose."
            description="A small selection of systems built to explore practical problems across hardware, data, and intelligent software."
          />
          <span className="hidden font-mono text-xs text-slate-600 sm:block">
            02 CASE STUDIES
          </span>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon as IconName];
            return (
              <article
                key={project.number}
                className={`reveal reveal-delay-${index + 1} group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/25 hover:bg-white/[0.04] sm:p-9`}
              >
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.07] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs text-cyan-300/60">
                    {project.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-300 transition-all duration-300 group-hover:border-cyan-400/25 group-hover:bg-cyan-400/[0.08]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="relative mt-7 text-xl font-medium tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-7 flex items-center gap-2 border-t border-white/[0.06] pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                  <span className="text-xs text-slate-300">
                    {project.highlight}
                  </span>
                </div>

                <div className="relative mt-6 flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-ghost !px-4 !py-2 text-xs"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="btn btn-ghost cursor-not-allowed !px-4 !py-2 text-xs opacity-40">
                      <Github className="h-3.5 w-3.5" />
                      GitHub link to be added
                    </span>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-primary !px-4 !py-2 text-xs"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
