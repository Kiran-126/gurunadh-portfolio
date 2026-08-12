import { Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal">
          <SectionHeading
            eyebrow="05 / Beyond the build"
            title="Learning happens in many rooms."
            description="A space for the events, communities, and milestones that shape the journey."
          />
        </div>
        <div className="reveal reveal-delay-1 mt-10">
          <div className="glass flex items-center gap-4 rounded-2xl p-7 sm:p-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/5">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Achievements, certifications, and milestones will be added as I
              continue to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
