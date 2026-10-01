type SectionHeaderProps = {
  number?: string;
  eyebrow?: string;
  heading: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  number,
  eyebrow,
  heading,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <header
      className={["max-w-5xl", className].filter(Boolean).join(" ")}
      data-reveal="fade-up"
    >
      <div className="flex items-center gap-5">
        <p className="eyebrow shrink-0 text-green">
          {[number, eyebrow].filter(Boolean).join(" / ")}
        </p>
        <span className="h-px flex-1 bg-border-soft" aria-hidden="true" />
      </div>
      <h1 className="display-lg mt-6 max-w-4xl text-green">
        {heading}
      </h1>
      {description ? (
        <p className="body-lg mt-7 max-w-2xl text-muted">{description}</p>
      ) : null}
    </header>
  );
}
