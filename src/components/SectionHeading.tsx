type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-[2.5rem] lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}
