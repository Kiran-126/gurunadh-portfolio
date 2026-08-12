import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile, links } from "@/data/portfolio";

function NodeNetwork() {
  const nodes = [
    { cx: 80, cy: 120, r: 3.5, delay: "0s" },
    { cx: 170, cy: 80, r: 4.5, delay: "0.6s" },
    { cx: 260, cy: 115, r: 3.5, delay: "1.2s" },
    { cx: 130, cy: 200, r: 3, delay: "1.8s" },
    { cx: 230, cy: 225, r: 4, delay: "0.4s" },
    { cx: 310, cy: 175, r: 3, delay: "1s" },
    { cx: 195, cy: 152, r: 6, delay: "0.2s" },
  ];
  const edges = [
    [80, 120, 170, 80],
    [170, 80, 260, 115],
    [260, 115, 310, 175],
    [310, 175, 230, 225],
    [230, 225, 130, 200],
    [130, 200, 80, 120],
    [170, 80, 195, 152],
    [260, 115, 195, 152],
    [130, 200, 195, 152],
    [230, 225, 195, 152],
  ];

  return (
    <div className="relative aspect-square w-full max-w-[440px]">
      <div className="absolute inset-0 rounded-full bg-cyan-400/[0.02] blur-3xl" />
      <svg
        viewBox="0 0 400 290"
        className="relative h-full w-full overflow-visible"
        role="img"
        aria-label="Abstract connected AI node network"
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="coreGradient">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="40%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Decorative orbit lines */}
        <ellipse
          cx="195"
          cy="145"
          rx="150"
          ry="95"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          strokeDasharray="2 12"
        />
        <ellipse
          cx="195"
          cy="145"
          rx="105"
          ry="65"
          fill="none"
          stroke="rgba(34,211,238,0.08)"
          strokeWidth="1"
          strokeDasharray="1 10"
          className="animate-spin-slow"
          style={{ transformOrigin: "195px 145px" }}
        />

        {/* Edges */}
        {edges.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#edgeGradient)"
            strokeWidth="0.75"
            strokeDasharray="3 8"
            className="[animation:dashFlow_14s_linear_infinite]"
            style={{ animationDelay: `${i * -1.4}s` }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 2.5}
              fill="rgba(34,211,238,0.05)"
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={
                i === nodes.length - 1
                  ? "url(#coreGradient)"
                  : i % 2
                    ? "#34d399"
                    : "#22d3ee"
              }
              className="[animation:pulseNode_4s_ease-in-out_infinite]"
              style={{ animationDelay: node.delay }}
            />
          </g>
        ))}

        {/* Center core */}
        <circle
          cx="195"
          cy="152"
          r="14"
          fill="rgba(34,211,238,0.05)"
          stroke="rgba(34,211,238,0.2)"
          strokeWidth="1"
        />
        <circle cx="195" cy="152" r="7" fill="url(#coreGradient)" opacity="0.85" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-10">
        <div className="relative z-10">
          <div
            className="animate-fade-up mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[11px] tracking-wide text-slate-300"
            style={{ animationDelay: "0s" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>
            {profile.role}
          </div>

          <h1
            className="animate-fade-up max-w-2xl text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.08s" }}
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>.
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-xl text-lg font-light leading-relaxed text-slate-300 sm:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            {profile.headline}
          </p>

          <p
            className="animate-fade-up mt-5 max-w-lg text-[15px] leading-7 text-slate-400"
            style={{ animationDelay: "0.24s" }}
          >
            {profile.description}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.32s" }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-ghost"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div
            className="animate-fade-up mt-8 flex items-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="h-px w-8 bg-white/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Find me online
            </span>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-slate-400 transition-colors hover:text-cyan-300"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-slate-400 transition-colors hover:text-cyan-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="animate-fade-in relative flex items-center justify-center lg:justify-end"
          style={{ animationDelay: "0.35s" }}
        >
          <NodeNetwork />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-cyan-300 sm:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
