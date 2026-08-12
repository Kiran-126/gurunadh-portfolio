import { ArrowUpRight, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="reveal"><SectionHeading eyebrow="04 / Education" title="Building the foundations." /></div><div className="mt-12 max-w-4xl space-y-4">{education.map((item) => <article key={item.degree} className="reveal reveal-delay-1 glass group relative overflow-hidden rounded-2xl p-7 transition-all hover:border-cyan-400/30 sm:p-8"><div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-emerald-400 opacity-70" /><div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"><div className="flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5"><GraduationCap className="h-5 w-5 text-cyan-300" /></div><div><h3 className="text-lg font-medium leading-7 text-white">{item.degree}</h3><p className="mt-1 text-sm text-emerald-300">{item.institution}</p></div></div><span className="font-mono text-xs text-slate-500 sm:pt-2">{item.period}</span></div><p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:pl-[60px]">{item.description}</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-slate-300 transition-colors hover:text-cyan-300 sm:ml-[60px]">Open to opportunities <ArrowUpRight className="h-3.5 w-3.5" /></a></article>)}</div></div>
    </section>
  );
}
