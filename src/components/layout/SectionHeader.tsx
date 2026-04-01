export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-8 max-w-2xl md:mb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif-display text-3xl leading-tight md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] md:text-base">{description}</p>
      ) : null}
    </div>
  )
}