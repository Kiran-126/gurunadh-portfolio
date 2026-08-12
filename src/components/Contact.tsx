import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { links } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/[0.06] via-white/[0.02] to-emerald-400/[0.05] p-8 sm:p-12 lg:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/[0.06] blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="reveal">
              <SectionHeading
                eyebrow="06 / Contact"
                title="Let's Build Something Meaningful."
                description="I'm always interested in learning, building, and exploring meaningful technology solutions."
              />
            </div>

            <div className="reveal reveal-delay-1 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`mailto:${links.email}`}
                className="btn btn-primary justify-center"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="btn btn-ghost !p-3"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="btn btn-ghost !p-3"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6 text-xs text-slate-400">
            <a
              href={`mailto:${links.email}`}
              className="transition-colors hover:text-cyan-300"
            >
              {links.email}
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-cyan-300"
            >
              {links.github}
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-cyan-300"
            >
              {links.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
