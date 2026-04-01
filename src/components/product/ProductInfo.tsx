import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/types/product'
import { QuantitySelector } from './QuantitySelector'

export function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{product.category}</Badge>
          {product.badge ? <Badge tone="accent">{product.badge}</Badge> : null}
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">{product.brand}</p>
          <h1 className="mt-3 font-serif-display text-3xl leading-tight md:text-5xl">{product.name}</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
            {product.description}
          </p>
        </div>
      </div>

      <div className="surface-card rounded-[28px] p-5">
        <div className="flex flex-wrap items-end gap-5 border-b border-[var(--color-line)] pb-5">
          <div>
            <p className="text-sm text-[var(--color-muted)]">Precio menudeo</p>
            <p className="mt-1 text-3xl font-semibold">{formatPrice(product.price)}</p>
          </div>
          {product.wholesalePrice ? (
            <div>
              <p className="text-sm text-[var(--color-muted)]">Precio mayoreo</p>
              <p className="mt-1 text-xl font-semibold text-[var(--color-accent-dark)]">
                {formatPrice(product.wholesalePrice)}
              </p>
            </div>
          ) : null}
        </div>

        {product.volumeTiers?.length ? (
          <div className="space-y-3 border-b border-[var(--color-line)] py-5">
            <p className="text-sm font-medium">Escala de volumen</p>
            <div className="grid gap-3">
              {product.volumeTiers.map((tier) => (
                <div
                  key={tier.label}
                  className="flex items-center justify-between rounded-2xl bg-[#faf5ef] px-4 py-3 text-sm"
                >
                  <span>{tier.label} · {tier.minQty}+ piezas</span>
                  <span className="font-semibold">{formatPrice(tier.price)}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-4 py-5">
          <div>
            <p className="text-sm text-[var(--color-muted)]">Disponibilidad</p>
            <p className="mt-1 font-medium">{product.stock} piezas disponibles</p>
          </div>
          <QuantitySelector />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <Button className="w-full">Agregar al carrito</Button>
          <Button variant="secondary" className="w-full">Solicitar mayoreo</Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-[24px] border border-[var(--color-line)] bg-white p-4">
          <p className="text-sm font-medium">Envío nacional</p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">Opciones visuales preparadas para paquetería estándar y express.</p>
        </div>
        <div className="rounded-[24px] border border-[var(--color-line)] bg-white p-4">
          <p className="text-sm font-medium">Compra confiable</p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">Presentación diseñada para transmitir orden, catálogo real y marca seria.</p>
        </div>
        <div className="rounded-[24px] border border-[var(--color-line)] bg-white p-4">
          <p className="text-sm font-medium">Escalable a B2B</p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">Listo para crecer a precios por volumen, cotización y compras recurrentes.</p>
        </div>
      </div>
    </div>
  )
}