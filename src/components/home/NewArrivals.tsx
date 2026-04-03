'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { ArrowUpRight, BadgeCheck, Eye, ShoppingCart, Sparkles } from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

export function NewArrivals() {
const featured = products.slice(0, 10) // mostramos más, pero 4 visibles en desktop + scroll

return (
<section className="section-padding">
<Container>
<SectionHeader
eyebrow="Destacados"
title="Productos nuevos y favoritos"
description="Selección pensada para mostrar rotación, novedad y compra rápida con una lectura premium."
/>

    <div className="relative mt-6 rounded-[28px] border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_18px_40px_rgba(43,33,28,0.03)] backdrop-blur-sm md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Nuevos & favoritos
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Precios en MXN
          </p>

          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)]"
          >
            Ver catálogo
            <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
          </Link>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:hidden">
          Desliza
        </p>
      </div>

      <div className="mb-4 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

      {/* 4 visibles en desktop, resto scroll horizontal */}
      <div className="mt-4 overflow-x-auto pb-2 hide-scrollbar">
        <div className="grid auto-cols-[minmax(260px,1fr)] grid-flow-col gap-4 md:auto-cols-[minmax(260px,1fr)] lg:auto-cols-[minmax(270px,1fr)]">
          {featured.map((p) => {
            const hasWholesale = typeof p.wholesalePrice === 'number' && p.wholesalePrice > 0
            const saving = hasWholesale ? p.price - (p.wholesalePrice as number) : 0

            return (
              <article
                key={p.id}
                className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[22px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-3 shadow-[0_10px_24px_rgba(43,33,28,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(43,33,28,0.055)] hover:border-[var(--color-accent)]/35 active:scale-[0.99]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(182,138,120,0.12),transparent)] opacity-70" />

                {/* Imagen */}
                <Link href={`/producto/${p.slug}`} className="block">
                  <div className="relative mb-3 overflow-hidden rounded-[18px] border border-[var(--color-line)] bg-[#f3ede6]">
                    <div className="relative aspect-[4/3] w-full">
                      {p.images?.[0] ? (
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 84vw, (max-width: 1280px) 28vw, 22vw"
                          priority={false}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm text-[var(--color-muted)]">
                          Imagen del producto
                        </div>
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.00)_55%,rgba(31,26,23,0.14)_100%)]" />
                    </div>

                    <div className="absolute left-2 top-2 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text)]">
                      {p.badge ?? 'Nuevo'}
                    </div>
                  </div>
                </Link>

                {/* Header */}
                <div className="relative flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {p.brand}
                    </p>

                    <Link href={`/producto/${p.slug}`} className="block">
                      <h3 className="mt-1.5 line-clamp-2 text-[13px] font-semibold leading-5 tracking-[-0.01em] text-[var(--color-text)]">
                        {p.name}
                      </h3>
                    </Link>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/70 px-2 py-1 text-[10px] font-medium text-[var(--color-muted)]">
                    <BadgeCheck className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                    Disponible
                  </span>
                </div>

                {/* Descripción */}
                <p className="relative mt-2 min-h-[52px] line-clamp-2 text-[13px] leading-6 text-[var(--color-muted)]">
                  {p.shortDescription}
                </p>

                {/* Precio base SIEMPRE */}
                <div className="relative mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/60 px-2.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  Precio base
                </div>

                {/* Precios */}
                <div className="relative mt-3">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        Precio
                      </p>
                      <p className="mt-1.5 text-[20px] font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                        {formatPrice(p.price)}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        Mayoreo
                      </p>
                      <p className="mt-1 text-[11px] font-medium text-[var(--color-muted)]">
                        {hasWholesale ? `Ahorra ${formatPrice(saving)}` : '—'}
                      </p>
                      <p className="mt-1 text-[13px] font-semibold tracking-[-0.01em] text-[var(--color-text)]">
                        {hasWholesale ? formatPrice(p.wholesalePrice as number) : '—'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 h-px w-full bg-[linear-gradient(90deg,var(--color-line),transparent)]" />
                </div>

                {/* Footer pegado abajo */}
                <div className="mt-auto pt-4">
                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {p.sizeLabel ? (
                      <span className="rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text)]">
                        {p.sizeLabel}
                      </span>
                    ) : null}

                    {p.weightLabel ? (
                      <span className="rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text)]">
                        {p.weightLabel}
                      </span>
                    ) : null}

                    {p.badge ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text)]">
                        <Sparkles className="h-4 w-4 text-[var(--color-muted)]" />
                        {p.badge}
                      </span>
                    ) : null}
                  </div>

                  {/* Botones SIEMPRE visibles */}
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => console.log('Agregar al carrito:', p.id)}
                      className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[var(--color-accent-dark)] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#3a2d26] shadow-[0_10px_24px_rgba(43,33,28,0.10)]"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Agregar
                    </button>

                    <Link
                      href={`/producto/${p.slug}`}
                      className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-4 py-2.5 text-[13px] font-semibold text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)]"
                    >
                      <Eye className="h-4 w-4 text-[var(--color-muted)]" />
                      Ver
                    </Link>
                  </div>
                </div>

                <div className="pointer-events-none relative mt-3 h-[1px] w-0 bg-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100" />
              </article>
            )
          })}
        </div>
      </div>

      {/* Mobile footer */}
      <div className="mt-4 flex items-center justify-between md:hidden">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Precios en MXN
        </p>
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)]"
        >
          Ver catálogo
          <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
        </Link>
      </div>
    </div>
  </Container>
</section>

)
}