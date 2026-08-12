import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile, links } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section for nav highlighting
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong border-b border-white/10 py-3"
          : "border-b border-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="group flex items-center gap-2.5"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-sm font-semibold text-cyan-300 transition-colors group-hover:border-cyan-400/50">
            {"{ }"}
            <span className="absolute inset-0 rounded-lg bg-cyan-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === link.href
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {active === link.href && (
                  <span className="absolute inset-0 rounded-full border border-cyan-400/30 bg-cyan-400/5" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contact");
            }}
            className="btn btn-primary hidden sm:inline-flex"
          >
            Let&apos;s Connect
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-[64px] z-40 bg-[#070710]/95 backdrop-blur-xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-6 py-8">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={open ? "animate-fade-up" : ""}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="flex items-center justify-between border-b border-white/5 py-4 text-lg text-slate-200 transition-colors hover:text-cyan-300"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500" />
                </a>
              </li>
            ))}
            <li className="mt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
                className="btn btn-primary w-full justify-center"
              >
                Let&apos;s Connect
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
            <li className="mt-4 flex justify-center gap-6 text-sm text-slate-400">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-cyan-300"
              >
                GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
