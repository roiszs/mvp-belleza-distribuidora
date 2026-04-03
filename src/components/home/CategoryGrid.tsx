import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import {
ArrowUpRight,
Droplets,
Paintbrush,
Sparkles,
Wrench,
Shapes,
BadgeCheck,
} from 'lucide-react'

type Category = {
key: string
name: string
description: string
count: number
icon: React.ElementType
}

const categories: Category[] = [
{
key: 'gel-semipermanente',
name: 'Gel semipermanente',
description: 'Colores de alta rotación y sets para salón.',
count: 48,
icon: Droplets,
},
{
key: 'esmaltes',
name: 'Esmaltes & tonos',
description: 'Tonos clásicos, temporada y líneas premium.',
count: 36,
icon: Paintbrush,
},
{
key: 'acrilico',
name: 'Acrílico',
description: 'Polvos, monómero y básicos para técnica.',
count: 22,
icon: Shapes,
},
{
key: 'decoracion',
name: 'Decoración',
description: 'Glitters, piedras, foil y detalles finos.',
count: 54,
icon: Sparkles,
},
{
key: 'tips',
name: 'Tips',
description: 'Formas, tamaños y sets para volumen.',
count: 28,
icon: BadgeCheck,
},
{
key: 'herramientas',
name: 'Herramientas',
description: 'Limas, brocas, lámparas y accesorios.',
count: 31,
icon: Wrench,
},
]

export function CategoryGrid() {
return (
<section className="section-padding pt-0">
<Container>
<SectionHeader
eyebrow="Categorías"
title="Explora por línea de producto"
description="Una navegación más clara y premium para encontrar rápido lo que más se vende en uñas y salón."
/>

    <div className="relative mt-6 rounded-[28px] border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_18px_40px_rgba(43,33,28,0.03)] backdrop-blur-sm md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Categorías destacadas
        </div>

        <Link
          href="/catalogo"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)] md:inline-flex"
        >
          Ver catálogo
          <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
        </Link>

        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:hidden">
          Desliza
        </p>
      </div>

      <div className="mb-4 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

      {/* Mobile: carrusel centrado / Desktop: grid */}
      <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 hide-scrollbar md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((c) => {
          const Icon = c.icon

          return (
            <Link
              key={c.key}
              href={`/catalogo?cat=${encodeURIComponent(c.key)}`}
              className="group relative w-[min(86vw,320px)] shrink-0 snap-center overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-4 shadow-[0_10px_24px_rgba(43,33,28,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(43,33,28,0.06)] hover:border-[var(--color-accent)]/35 active:scale-[0.99] md:w-auto md:p-5"
            >
              {/* highlight superior */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(182,138,120,0.14),transparent)] opacity-70" />

              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/80 p-3 shadow-[0_10px_20px_rgba(43,33,28,0.04)]">
                    <Icon className="h-5 w-5 text-[var(--color-accent-dark)]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Línea
                    </p>
                    <h3 className="mt-1 text-base font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                      {c.name}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/70 px-2 py-1 text-[11px] font-medium text-[var(--color-muted)]">
                  +{c.count}
                </span>
              </div>

              <p className="relative mt-4 min-h-[56px] text-[14px] leading-7 text-[var(--color-muted)] md:text-[15px]">
                {c.description}
              </p>

              <div className="relative mt-5 h-px w-full bg-[linear-gradient(90deg,var(--color-line),transparent)]" />

              <div className="relative mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text)]">
                Explorar
                <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
              </div>

              <div className="pointer-events-none relative mt-4 h-[1px] w-0 bg-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
            </Link>
          )
        })}
      </div>
    </div>
  </Container>
</section>

)
}