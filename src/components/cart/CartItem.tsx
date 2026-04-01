import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import type { CartItem } from '@/types/cart'

type Props = {
item: CartItem
}

export function CartItem({ item }: Props) {
const product = item.product
const productName: string = item.product.name 
const imageSrc = product.images[0]
const imageAlt = String(product.name)

return (
<article className="rounded-[24px] border border-[var(--color-line)] bg-white p-4">
<div className="flex flex-col gap-4 sm:flex-row">
<div className="relative h-24 w-24 overflow-hidden rounded-[18px] bg-[#f1e8de]">
<Image
src={imageSrc}
alt={imageAlt}
fill
className="object-cover"
/>
</div>
<div className="flex flex-1 flex-col justify-between gap-3"></div>
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
        {product.brand}
      </p>

      <h3 className="mt-1 text-base font-semibold tracking-[-0.02em]">
        {product.name}
      </h3>

      <p className="mt-1 text-sm text-[var(--color-muted)]">
        Cantidad: {item.quantity}
      </p>
    </div>

    <div className="grid gap-2 rounded-[18px] bg-[#faf5ef] p-3 md:grid-cols-3">
      <div className="text-sm">
        <span className="text-[var(--color-muted)]">Presentación: </span>
        <span className="font-medium text-[var(--color-text)]">
          {product.presentation ?? '—'}
        </span>
      </div>

      <div className="text-sm">
        <span className="text-[var(--color-muted)]">Tamaño: </span>
        <span className="font-medium text-[var(--color-text)]">
          {product.sizeLabel ?? '—'}
        </span>
      </div>

      <div className="text-sm">
        <span className="text-[var(--color-muted)]">Peso: </span>
        <span className="font-medium text-[var(--color-text)]">
          {product.weightLabel ?? '—'}
        </span>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <p className="text-sm text-[var(--color-muted)]">
        {formatPrice(product.price)} c/u
      </p>

      <p className="font-semibold tracking-[-0.02em]">
        {formatPrice(product.price * item.quantity)}
      </p>
    </div>
  </div>
</article>
)
}