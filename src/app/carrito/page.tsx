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
          title="Una experiencia clara y limpia antes del checkout"
          description="No necesitamos un checkout real todavía. Solo una presentación ordenada que mantenga la sensación premium."
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