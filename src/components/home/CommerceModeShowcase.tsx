'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { featuredProducts } from '@/data/products'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'

const modeCopy = {
b2c: {
eyebrow: 'Menudeo',
title: 'Compra individual y productos de alta rotación',
description:
'Una vista clara para clientas que compran por pieza, por tono o por producto específico.',
points: ['Compra unitaria', 'Promociones visibles', 'Productos nuevos', 'Navegación simple'],
},
b2b: {
eyebrow: 'Mayoreo',
title: 'Compra para negocio, salón o reposición',
description:
'Una vista pensada para clientes que necesitan precio por volumen, compra por caja y recompra frecuente.',
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
description="Una forma clara de mostrar cómo la tienda puede adaptarse a menudeo o mayoreo sin complicar la experiencia."
/>

      <div className="section-soft overflow-hidden rounded-[24px] p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="rounded-full bg-[var(--color-soft)] p-1">
          <button
            onClick={() => setMode('b2c')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              mode === 'b2c'
                ? 'bg-[var(--color-accent-dark)] text-white'
                : 'text-[var(--color-text)]'
            }`}
          >
            Menudeo
          </button>

          <button
            onClick={() => setMode('b2b')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              mode === 'b2b'
                ? 'bg-[var(--color-accent-dark)] text-white'
                : 'text-[var(--color-text)]'
            }`}
          >
            Mayoreo
          </button>
        </div>

        <p className="text-sm text-[var(--color-muted)]">Tienes dos opciones</p>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] md:mt-6 md:gap-6">
        <div className="flex flex-col">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {modeCopy[mode].eyebrow}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            {modeCopy[mode].title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] md:text-base">
            {modeCopy[mode].description}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {modeCopy[mode].points.map((point) => (
              <div
                key={point}
                className="rounded-[18px] bg-[#faf5ef] px-4 py-4 text-sm font-medium text-[var(--color-text)]"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="mt-5">
            <Button href="/catalogo">
              {mode === 'b2c' ? 'Explorar catálogo' : 'Ver catálogo comercial'}
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
                className="flex h-full rounded-[22px] border border-[var(--color-line)] bg-[var(--color-bg)] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.04)]"
              >
                <div className="flex w-full flex-col rounded-[18px] bg-white p-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      {product.brand}
                    </p>

                    <h4 className="mt-2 min-h-[84px] text-sm font-semibold leading-7 tracking-[-0.01em]">
                      {product.name}
                    </h4>

                    <div className="mt-4">
                      <p className="text-sm text-[var(--color-muted)]">
                        {mode === 'b2c' ? 'Precio menudeo' : 'Precio mayoreo'}
                      </p>

                      <p className="mt-1 text-xl font-semibold tracking-[-0.03em]">
                        {formatPrice(activePrice)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-5">
                    {mode === 'b2b' && product.volumeTiers?.length ? (
                      <div className="flex min-h-[60px] flex-wrap content-start gap-2">
                        {product.volumeTiers.slice(0, 3).map((tier) => (
                          <span
                            key={tier.label}
                            className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]"
                          >
                            {tier.minQty}+ pzs
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="min-h-[60px]">
                        <div className="inline-flex rounded-full bg-[var(--color-soft)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)]">
                          Compra individual
                        </div>
                      </div>
                    )}
                  </div>
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