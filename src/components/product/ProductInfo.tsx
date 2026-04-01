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
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {product.brand}
      </p>

      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
        {product.name}
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
        {product.description}
      </p>
    </div>
  </div>

  <div className="rounded-[24px] border border-[var(--color-line)] bg-white p-5">
    <div className="flex flex-wrap items-end gap-5 border-b border-[var(--color-line)] pb-5">
      <div>
        <p className="text-sm text-[var(--color-muted)]">Precio menudeo</p>
        <p className="mt-1 text-3xl font-semibold tracking-[-0.03em]">
          {formatPrice(product.price)}
        </p>
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

    <div className="grid gap-3 border-b border-[var(--color-line)] py-5 md:grid-cols-3">
      <div className="rounded-[18px] bg-[#faf5ef] p-4">
        <p className="text-sm text-[var(--color-muted)]">Presentación</p>
        <p className="mt-1 font-semibold">{product.presentation ?? '—'}</p>
      </div>

      <div className="rounded-[18px] bg-[#faf5ef] p-4">
        <p className="text-sm text-[var(--color-muted)]">Tamaño</p>
        <p className="mt-1 font-semibold">{product.sizeLabel ?? '—'}</p>
      </div>

      <div className="rounded-[18px] bg-[#faf5ef] p-4">
        <p className="text-sm text-[var(--color-muted)]">Peso estimado</p>
        <p className="mt-1 font-semibold">{product.weightLabel ?? '—'}</p>
      </div>
    </div>

    {product.volumeTiers?.length ? (
      <div className="space-y-3 border-b border-[var(--color-line)] py-5">
        <p className="text-sm font-semibold">Opciones por volumen</p>

        <div className="grid gap-3">
          {product.volumeTiers.map((tier) => (
            <div
              key={tier.label}
              className="flex items-center justify-between rounded-[18px] bg-[#faf5ef] px-4 py-3 text-sm"
            >
              <span>
                {tier.label} · {tier.minQty}+ piezas
              </span>
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
      <Button variant="secondary" className="w-full border-[var(--color-accent)] text-[var(--color-accent-dark)]">
        Solicitar precio mayoreo
      </Button>
    </div>
  </div>

  <div className="grid gap-4 md:grid-cols-3">
    <div className="rounded-[22px] border border-[var(--color-line)] bg-white p-4">
      <p className="text-sm font-semibold">Envío nacional</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        Información pensada para facilitar cálculo y preparación de envío.
      </p>
    </div>

    <div className="rounded-[22px] border border-[var(--color-line)] bg-white p-4">
      <p className="text-sm font-semibold">Compra con confianza</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        Ficha clara, ordenada y lista para comunicar mejor el producto.
      </p>
    </div>

    <div className="rounded-[22px] border border-[var(--color-line)] bg-white p-4">
      <p className="text-sm font-semibold">Pensado para mayoreo</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        Preparado para mostrar compras por caja, volumen y recompra.
      </p>
    </div>
  </div>
  </div>
)
}