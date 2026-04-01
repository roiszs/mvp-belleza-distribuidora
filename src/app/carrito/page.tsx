import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { CartItem } from '@/components/cart/CartItem'
import { CartSummary } from '@/components/cart/CartSummary'
import { mockCart } from '@/data/cart'

export default function CartPage() {
return (
<section className="section-padding">
<Container>
<SectionHeader
eyebrow="Carrito"
title="Resumen de compra claro y útil para preparar envío"
description="Además del producto y el subtotal, esta vista ya ayuda a revisar presentación, tamaño y peso estimado de cada artículo."
/>

    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        {mockCart.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <CartSummary items={mockCart} />
    </div>
  </Container>
</section>

)
}