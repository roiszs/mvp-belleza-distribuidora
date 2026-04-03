'use client'

import { useMemo, useState } from 'react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/Button'
import {
ArrowUpRight,
BadgeCheck,
ShoppingBag,
Building2,
Sparkles,
Package,
} from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

type Mode = 'b2c' | 'b2b'

function ModePill({
active,
onClick,
icon,
label,
}: {
active: boolean
onClick: () => void
icon: React.ReactNode
label: string
}) {
return (
<button
type="button"
onClick={onClick}
className={[
'relative inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-4 text-[12px] font-semibold tracking-[-0.01em] transition',
active
? 'text-white'
: 'text-[var(--color-text)] hover:bg-white/60',
].join(' ')}
>
<span
className={[
'pointer-events-none absolute inset-0 rounded-full transition',
active
? 'bg-[var(--color-accent-dark)] shadow-[0_12px_28px_rgba(43,33,28,0.16)]'
: 'bg-transparent',
].join(' ')}
/>
<span className="relative inline-flex items-center gap-2">
<span className="opacity-90">{icon}</span>
{label}
</span>
</button>
)
}

function ProductMiniCard({
brand,
name,
price,
subtitle,
badge,
}: {
brand: string
name: string
price: number
subtitle: string
badge: string
}) {
return (
<article className="group relative overflow-hidden rounded-[24px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-4 shadow-[0_10px_24px_rgba(43,33,28,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(43,33,28,0.06)] hover:border-[var(--color-accent)]/35 active:scale-[0.99] active:shadow-[0_14px_28px_rgba(43,33,28,0.07)]">
<div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(182,138,120,0.14),transparent)] opacity-70" />


  <div className="relative flex items-start justify-between gap-3">
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {brand}
      </p>
      <h4 className="mt-2 text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)]">
        {name}
      </h4>
    </div>

    <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/70 px-2 py-1 text-[11px] font-medium text-[var(--color-muted)]">
      <BadgeCheck className="h-3.5 w-3.5 text-[var(--color-accent)]" />
      {badge}
    </span>
  </div>

  <div className="relative mt-4 rounded-[18px] border border-[var(--color-line)] bg-white/70 p-3">
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
      {subtitle}
    </p>
    <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[var(--color-text)]">
      {formatPrice(price)}
    </p>
  </div>

  <div className="pointer-events-none relative mt-4 h-[1px] w-0 bg-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
</article>

)
}

export function CommerceModeShowcase() {
const [mode, setMode] = useState<Mode>('b2c')

const featured = useMemo(() => {
// Tomamos 3 productos mock para demo (si tienes flags, puedes filtrar por nuevo/oferta)
return products.slice(0, 3)
}, [])

return (
<section className="section-padding pt-0">
<Container>
<SectionHeader
eyebrow="Menudeo + Mayoreo"
title="Una lectura comercial simple y clara"
description="El mismo catálogo puede servir para compra individual y para negocio, sin construir todavía login ni reglas completas."
/>

    <div className="relative mt-6 rounded-[28px] border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_18px_40px_rgba(43,33,28,0.03)] backdrop-blur-sm md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Commerce mode
        </div>

        <a
          href="/catalogo"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)] md:inline-flex"
        >
          Ver catálogo
          <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
        </a>

        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:hidden">
          Toca para cambiar
        </p>
      </div>

      <div className="mb-4 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy + toggle + benefits */}
        <div className="relative overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-5 shadow-[0_10px_24px_rgba(43,33,28,0.03)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(182,138,120,0.14),transparent)] opacity-80" />

          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {mode === 'b2c' ? 'Menudeo' : 'Mayoreo'}
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-text)] md:text-3xl">
              {mode === 'b2c'
                ? 'Compra individual y productos de alta rotación'
                : 'Compra por caja, volumen y condiciones de negocio'}
            </h3>

            <p className="mt-3 max-w-xl text-[14px] leading-7 text-[var(--color-muted)] md:text-[15px]">
              {mode === 'b2c'
                ? 'Una vista clara para clientas que compran por pieza, por tono o por producto específico.'
                : 'Pensado para salones y distribuidores: escalas, cotización rápida y recompra más ágil.'}
            </p>

            {/* Toggle */}
            <div className="mt-5 inline-flex rounded-full border border-[var(--color-line)] bg-white/70 p-1">
              <ModePill
                active={mode === 'b2c'}
                onClick={() => setMode('b2c')}
                icon={<ShoppingBag className="h-4 w-4" />}
                label="Menudeo"
              />
              <ModePill
                active={mode === 'b2b'}
                onClick={() => setMode('b2b')}
                icon={<Building2 className="h-4 w-4" />}
                label="Mayoreo"
              />
            </div>

            {/* Benefits */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {mode === 'b2c' ? (
                <>
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Compra unitaria
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      Selección rápida y claridad de precio por pieza.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Productos nuevos
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      Novedades visibles sin romper el minimalismo.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Promociones
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      Ofertas claras para compra inmediata.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Navegación simple
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      Categorías, filtros y lectura cómoda.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Escalas 6+ / 12+ / 24+
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      Lectura por caja y volumen sin complicar.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Cotización rápida
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      Flujo futuro para solicitudes comerciales.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Recompra
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      Pensado para reposición y pedidos frecuentes.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-[var(--color-line)] bg-white/70 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Operación escalable
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      Listo para crecer a inventario y marketplace.
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/catalogo">Explorar catálogo</Button>
              <Button href="/b2b" variant="secondary">
                Ver visión B2B
              </Button>
            </div>
          </div>
        </div>

        {/* Right: mini cards demo */}
        <div className="relative">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {featured.map((p) => (
              <ProductMiniCard
                key={p.id}
                brand={p.brand}
                name={p.name}
                price={mode === 'b2c' ? p.price : p.wholesalePrice ?? p.price}
                subtitle={mode === 'b2c' ? 'Precio menudeo' : 'Precio mayoreo'}
                badge={mode === 'b2c' ? 'Individual' : 'Mayoreo'}
              />
            ))}
          </div>

          <div className="mt-4 rounded-[26px] border border-[var(--color-line)] bg-white/70 p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-[18px] border border-[var(--color-line)] bg-white/80 p-3 shadow-[0_10px_20px_rgba(43,33,28,0.04)]">
                <Sparkles className="h-5 w-5 text-[var(--color-accent-dark)]" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Señal visual
                </p>
                <p className="mt-1 text-sm font-semibold tracking-[-0.01em] text-[var(--color-text)]">
                  Vista comercial lista para crecer
                </p>
              </div>
            </div>

            <p className="mt-3 text-[14px] leading-7 text-[var(--color-muted)] md:text-[15px]">
              Este bloque muestra dirección B2C/B2B sin login real. En la fase final, aquí vivirán reglas por
              cantidad, cotización y compras recurrentes.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Menudeo', 'Mayoreo', 'Volumen', 'Cotización'].map((x) => (
                <span
                  key={x}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text)]"
                >
                  <Package className="h-4 w-4 text-[var(--color-muted)]" />
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

)
}