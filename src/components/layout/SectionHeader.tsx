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
  <div className="mb-6 max-w-3xl md:mb-8">
  {eyebrow ? (
  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
  {eyebrow}
  </p>
  ) : null}
  
    <h2 className="font-display text-3xl font-semibold leading-[1.04] tracking-[-0.04em] md:text-5xl">
      {title}
    </h2>
  
    {description ? (
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-[15px]">
        {description}
      </p>
    ) : null}
  </div>
  
  )
  }