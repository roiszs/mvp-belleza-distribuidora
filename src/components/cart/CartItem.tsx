import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import type { CartItem as CartItemType } from '@/types/cart'

export function CartItem({ item }: { item: CartItemType }) {
  return (
    <article className="flex gap-4 rounded-[28px] border border-[var(--color-line)] bg-white p-4">
      <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-[#f1e8de]">
        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.15em] text-[var(--color-muted)]">{item.product.brand}</p>
          <h3 className="mt-1 text-base font-medium">{item.product.name}</h3>
          <p className="mt-1 text-sm text-[var(--color-muted)]">Cantidad: {item.quantity}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-[var(--color-muted)]">{formatPrice(item.product.price)} c/u</p>
          <p className="font-semibold">{formatPrice(item.product.price * item.quantity)}</p>
        </div>
      </div>
    </article>
  )
}