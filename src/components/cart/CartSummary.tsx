import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import type { CartItem } from '@/types/cart'

export function CartSummary({ items }: { items: CartItem[] }) {
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  const shipping = 149
  const total = subtotal + shipping

  return (
    <aside className="rounded-[30px] border border-[var(--color-line)] bg-white p-6">
      <h2 className="text-xl font-medium">Resumen</h2>

      <div className="mt-6 space-y-4 border-b border-[var(--color-line)] pb-5 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-[var(--color-muted)]">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[var(--color-muted)]">Paquetería</span>
          <span>{formatPrice(shipping)}</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-[var(--color-muted)]">Total</span>
        <span className="text-2xl font-semibold">{formatPrice(total)}</span>
      </div>

      <div className="mt-6 space-y-3">
        <div className="rounded-2xl bg-[#faf5ef] p-4 text-sm text-[var(--color-muted)]">
          Paquetería mock: Estándar 2–5 días · Express 1–2 días
        </div>
        <Button className="w-full">Continuar a checkout</Button>
      </div>
    </aside>
  )
}