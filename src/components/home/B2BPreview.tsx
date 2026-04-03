import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import {
Building2,
BadgePercent,
Repeat,
FileText,
Headset,
ArrowUpRight,
BadgeCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const features = [
{
title: 'Precios escalonados',
description: 'Compra por pieza, caja o volumen con lectura comercial más clara.',
icon: BadgePercent,
tag: 'Menudeo / Mayoreo',
},
{
title: 'Cotizaciones',
description: 'Solicitud rápida para mayoreo, listas de compra y precios especiales.',
icon: FileText,
tag: 'B2B',
},
{
title: 'Compra recurrente',
description: 'Pensado para reposición y pedidos frecuentes de salones.',
icon: Repeat,
tag: 'Recompra',
},
{
title: 'Atención a negocios',
description: 'Flujo futuro para cuentas, soporte comercial y condiciones.',
icon: Headset,
tag: 'Soporte',
},
]

export function B2BPreview() {
return (
<section className="section-padding">
<Container>
<SectionHeader
eyebrow="Evolución B2B"
title="Una tienda pensada para vender también a negocio"
description="Además de venta unitaria, esta propuesta deja ver cómo el ecommerce puede crecer a mayoreo, volumen, atención comercial y recompras."
/>

    <div className="relative mt-6 rounded-[28px] border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_18px_40px_rgba(43,33,28,0.03)] backdrop-blur-sm md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          B2B vision
        </div>

        {/* CTA pro (solo desktop) */}
        <a
          href="/b2b"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)] md:inline-flex"
        >
          Ver visión B2B
          <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
        </a>

        {/* hint mobile */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:hidden">
          Desliza
        </p>
      </div>

      <div className="mb-4 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

      {/* Bloque “wow” (sin backend): tarjeta comercial */}
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-5 shadow-[0_10px_24px_rgba(43,33,28,0.03)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(182,138,120,0.14),transparent)] opacity-80" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-[18px] border border-[var(--color-line)] bg-white/80 p-3 shadow-[0_10px_20px_rgba(43,33,28,0.04)]">
                <Building2 className="h-5 w-5 text-[var(--color-accent-dark)]" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Modo negocio
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                  Compra por caja y volumen
                </h3>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/70 px-2 py-1 text-[11px] font-medium text-[var(--color-muted)]">
              <BadgeCheck className="h-3.5 w-3.5 text-[var(--color-accent)]" />
              Preparado
            </span>
          </div>

          <p className="relative mt-3 max-w-xl text-[14px] leading-7 text-[var(--color-muted)] md:text-[15px]">
            Visualiza precios por nivel sin login real: el cliente entiende la dirección del
            ecommerce desde hoy, sin construir aún la lógica completa.
          </p>

          <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { label: 'Caja 6+', sub: 'Precio mayoreo' },
              { label: 'Caja 12+', sub: 'Mejor margen' },
              { label: 'Volumen 24+', sub: 'Escala negocio' },
            ].map((x) => (
              <div
                key={x.label}
                className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(43,33,28,0.06)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {x.sub}
                </p>
                <p className="mt-2 text-base font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                  {x.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/b2b">Ver visión B2B</Button>
            <Button href="/catalogo" variant="secondary">
              Explorar catálogo
            </Button>
          </div>
        </div>

        {/* Cards features: carrusel mobile / grid desktop */}
        <div className="relative">
          <div className="mt-0 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 hide-scrollbar lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 lg:pb-0">
            {features.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="group relative w-[min(86vw,320px)] shrink-0 snap-center overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(43,33,28,0.06)] hover:border-[var(--color-accent)]/35 active:scale-[0.99] active:shadow-[0_14px_28px_rgba(43,33,28,0.07)] lg:w-auto lg:p-5"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(182,138,120,0.14),transparent)] opacity-70" />

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

                  <p className="relative mt-4 min-h-[84px] text-[14px] leading-7 text-[var(--color-muted)] md:min-h-[90px] md:text-[15px]">
                    {item.description}
                  </p>

                  <div className="relative mt-5 h-px w-full bg-[linear-gradient(90deg,var(--color-line),transparent)]" />

                  <div className="pointer-events-none relative mt-4 h-[1px] w-0 bg-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

)
}