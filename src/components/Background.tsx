/**
 * Ambient background: layered, subtle, non-distracting.
 *  - faint grid (masked)
 *  - two drifting gradient glows (cyan + emerald)
 *  - a few floating particles
 *  - a soft vignette so content stays the focus
 *
 * Pure CSS/SVG — no canvas, no library. Pointer-events disabled.
 */
export default function Background() {
  const particles = [
    { left: "15%", top: "25%", size: 2.5, delay: "0s", dur: "8s" },
    { left: "75%", top: "35%", size: 2, delay: "2s", dur: "10s" },
    { left: "45%", top: "72%", size: 2, delay: "1s", dur: "9s" },
    { left: "85%", top: "65%", size: 2.5, delay: "3s", dur: "11s" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-[#070710]" />

      {/* grid */}
      <div className="grid-bg absolute inset-0 opacity-40" />

      {/* drifting glows */}
      <div
        className="animate-drift absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="animate-drift-slow absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.10) 0%, transparent 65%)",
        }}
      />

      {/* floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-float absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "rgba(34,211,238,0.5)",
            boxShadow: "0 0 6px rgba(34,211,238,0.5)",
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      {/* top vignette to keep navbar legible */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070710] to-transparent" />
    </div>
  );
}
