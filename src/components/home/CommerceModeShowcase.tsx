'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { featuredProducts } from '@/data/products'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'

const modeCopy = {
  b2c: {
    eyebrow: 'Modo menudeo',
    title: 'Compra personal, lanzamientos y favoritos',
    description:
      'Una experiencia pensada para clientas que compran por gusto, novedad, estilo y confianza visual.',
    points: ['Compra unitaria', 'Promociones visibles', 'Navegación simple', 'Productos nuevos'],
  },
  b2b: {
    eyebrow: 'Modo mayoreo',
    title: 'Compra para negocio, reposición y volumen',
    description:
      'Una experiencia pensada para salones, distribuidores o clientes frecuentes que necesitan mejor precio y mayor claridad comercial.',
    points: ['Precios por volumen', 'Caja 6 / 12 / 24+', 'Atención comercial', 'Recompra frecuente'],
  },
} as const

export function CommerceModeShowcase() {
  const [mode, setMode] = useState<'b2c' | 'b2b'>('b2c')

  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Modo visual"
          title="Compra como cliente o compra como negocio"
          description="No hay login real todavía, pero sí una presentación clara de cómo el ecommerce puede cambiar visualmente entre menudeo y mayoreo."
        />

        <div className="overflow-hidden rounded-[34px] border border-[var(--color-line)] bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="rounded-full bg-[var(--color-soft)] p-1">
              <button
                onClick={() => setMode('b2c')}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  mode === 'b2c'
                    ? 'bg-[var(--color-accent-dark)] text-white'
                    : 'text-[var(--color-text)]'
                }`}
              >
                Menudeo
              </button>
              <button
                onClick={() => setMode('b2b')}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  mode === 'b2b'
                    ? 'bg-[var(--color-accent-dark)] text-white'
                    : 'text-[var(--color-text)]'
                }`}
              >
                Mayoreo
              </button>
            </div>

            <p className="text-sm text-[var(--color-muted)]">
              Vista conceptual para impresionar al cliente desde el frontend
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {modeCopy[mode].eyebrow}
              </p>
              <h3 className="mt-3 font-serif-display text-3xl md:text-4xl">
                {modeCopy[mode].title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] md:text-base">
                {modeCopy[mode].description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {modeCopy[mode].points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[22px] bg-[#faf5ef] px-4 py-4 text-sm text-[var(--color-text)]"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button href="/catalogo">
                  {mode === 'b2c' ? 'Explorar catálogo' : 'Ver visión comercial'}
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {featuredProducts.slice(0, 3).map((product) => {
                const activePrice =
                  mode === 'b2b' ? product.wholesalePrice ?? product.price : product.price

                return (
                  <article
                    key={product.id}
                    className="rounded-[26px] border border-[var(--color-line)] bg-[var(--color-bg)] p-4 transition duration-300 hover:-translate-y-1"
                  >
                    <div className="rounded-[22px] bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                        {product.brand}
                      </p>
                      <h4 className="mt-2 text-base font-medium leading-snug">{product.name}</h4>

                      <div className="mt-4">
                        <p className="text-sm text-[var(--color-muted)]">
                          {mode === 'b2c' ? 'Precio menudeo' : 'Precio mayoreo'}
                        </p>
                        <p className="mt-1 text-2xl font-semibold">{formatPrice(activePrice)}</p>
                      </div>

                      {mode === 'b2b' && product.volumeTiers?.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {product.volumeTiers.slice(0, 3).map((tier) => (
                            <span
                              key={tier.label}
                              className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.14em]"
                            >
                              {tier.minQty}+ pzs
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 rounded-full bg-[var(--color-soft)] px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[var(--color-text)]">
                          Compra individual
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}