import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import {
Truck,
ShieldCheck,
Percent,
Boxes,
ArrowUpRight,
BadgeCheck,
} from 'lucide-react'

const items = [
{
title: 'Envíos nacionales',
description:
'Cobertura, tiempos y opciones de envío comunicadas de forma clara para preparar pedidos sin fricción.',
icon: Truck,
tag: 'Logística',
},
{
title: 'Compra con confianza',
description:
'Jerarquía visual y lectura comercial que ayudan a decidir más rápido y con menos dudas.',
icon: ShieldCheck,
tag: 'Confiabilidad',
},
{
title: 'Precios por volumen',
description:
'Presentación lista para visualizar menudeo, mayoreo y escalas por cantidad sin saturar la UI.',
icon: Percent,
tag: 'Mayoreo',
},
{
title: 'Escalable a marketplace',
description:
'Estructura visual preparada para crecer a catálogo más robusto e integraciones futuras.',
icon: Boxes,
tag: 'Crecimiento',
},
]

export function TrustBadges() {
return (
<section className="section-padding">
<Container>
<SectionHeader
eyebrow="Confianza"
title="Señales claras de compra y crecimiento"
description="Elementos visuales pensados para transmitir seriedad: logística, claridad comercial y escalabilidad."
/>


    <div className="relative mt-6 rounded-[28px] border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_18px_40px_rgba(43,33,28,0.03)] backdrop-blur-sm md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Confianza
        </div>

        {/* CTA pro (solo desktop) */}
        <a
          href="/catalogo"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)] md:inline-flex"
        >
          Ver catálogo
          <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
        </a>

        {/* hint mobile */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:hidden">
          Desliza
        </p>
      </div>

      <div className="mb-4 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

      {/* Carrusel centrado (sin peek) / Grid desktop */}
      <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 hide-scrollbar md:mx-0 md:mt-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <article
              key={item.title}
              className="group relative w-[min(86vw,320px)] shrink-0 snap-center overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(43,33,28,0.06)] hover:border-[var(--color-accent)]/35 active:scale-[0.99] active:shadow-[0_14px_28px_rgba(43,33,28,0.07)] md:w-auto md:p-5"
            >
              {/* top highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(182,138,120,0.16),transparent)] opacity-70" />

              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/80 p-3 shadow-[0_10px_20px_rgba(43,33,28,0.04)]">
                    <Icon className="h-5 w-5 text-[var(--color-accent-dark)]" />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {item.tag}
                    </p>
                    <p className="mt-1 text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)]">
                      {item.title}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/70 px-2 py-1 text-[11px] font-medium text-[var(--color-muted)]">
                  <BadgeCheck className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                  OK
                </span>
              </div>

              <p className="relative mt-4 min-h-[96px] text-[14px] leading-7 text-[var(--color-muted)] md:min-h-[110px] md:text-[15px]">
                {item.description}
              </p>

              <div className="relative mt-5 h-px w-full bg-[linear-gradient(90deg,var(--color-line),transparent)]" />

              {/* micro-acento */}
              <div className="pointer-events-none relative mt-4 h-[1px] w-0 bg-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
            </article>
          )
        })}
      </div>
    </div>
  </Container>
</section>

)
}