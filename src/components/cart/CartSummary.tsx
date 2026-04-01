import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import type { CartItem } from '@/types/cart'

function parseWeightToKg(weightLabel?: string) {
if (!weightLabel) return 0
const value = parseFloat(weightLabel.replace('kg', '').trim())
return Number.isNaN(value) ? 0 : value
}

export function CartSummary({ items }: { items: CartItem[] }) {
const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
const shipping = 149
const total = subtotal + shipping

const totalWeight = items.reduce((acc, item) => {
const weight = parseWeightToKg(item.product.weightLabel)
return acc + weight * item.quantity
}, 0)

return (
<aside className="rounded-[24px] border border-[var(--color-line)] bg-white p-6">
<h2 className="text-xl font-semibold tracking-[-0.02em]">Resumen</h2>

  <div className="mt-6 space-y-4 border-b border-[var(--color-line)] pb-5 text-sm">
    <div className="flex items-center justify-between">
      <span className="text-[var(--color-muted)]">Subtotal</span>
      <span>{formatPrice(subtotal)}</span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-[var(--color-muted)]">Paquetería</span>
      <span>{formatPrice(shipping)}</span>
    </div>

    <div className="flex items-center justify-between">
      <span className="text-[var(--color-muted)]">Peso estimado</span>
      <span>{totalWeight.toFixed(2)} kg</span>
    </div>
  </div>

  <div className="mt-5 flex items-center justify-between">
    <span className="text-sm text-[var(--color-muted)]">Total</span>
    <span className="text-2xl font-semibold tracking-[-0.03em]">{formatPrice(total)}</span>
  </div>

  <div className="mt-6 space-y-3">
    <div className="rounded-[18px] bg-[#faf5ef] p-4 text-sm text-[var(--color-muted)]">
      Paquetería mock: estándar 2–5 días · express 1–2 días
    </div>

    <Button className="w-full">Continuar a checkout</Button>
  </div>
</aside>

)
}