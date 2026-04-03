import { Container } from "@/components/layout/Container"

type Props = {
eyebrow?: string
title: string
subtitle?: string
rightSlot?: React.ReactNode
children: React.ReactNode
className?: string
}

export function SectionShell({
eyebrow,
title,
subtitle,
rightSlot,
children,
className = "",
}: Props) {
return (
<section className={`py-10 ${className}`}>
<Container className="relative">
{/* panel premium */}
<div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/35 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)]">
{/* textura / glow sutil */}
<div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(120%_120%_at_20%_10%,rgba(0,0,0,0.06)_0%,transparent_55%),radial-gradient(120%_120%_at_90%_90%,rgba(0,0,0,0.05)_0%,transparent_60%)]" />

```
      <div className="relative px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow ? (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-black/65">
                <span className="h-1.5 w-1.5 rounded-full bg-black/35" />
                <span className="uppercase">{eyebrow}</span>
              </div>
            ) : null}

            <h2 className="font-display text-[28px] leading-[1.05] tracking-[-0.02em] text-black sm:text-[40px]">
              {title}
            </h2>

            {subtitle ? (
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-black/65 sm:text-[15px]">
                {subtitle}
              </p>
            ) : null}
          </div>

          {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </div>
  </Container>
</section>

)
}