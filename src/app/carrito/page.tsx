import { Container } from '@/components/layout/Container'
import { CartItem } from '@/components/cart/CartItem'
import { CartSummary } from '@/components/cart/CartSummary'
import { mockCart } from '@/data/cart'

export default function CartPage() {
return (
<section className="relative overflow-hidden section-padding pb-10 pt-10 md:pb-14 md:pt-12">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-16 top-8 h-52 w-52 rounded-full bg-[#ead8c8]/28 blur-3xl" />
<div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#f2e7dc]/30 blur-3xl" />
<div className="absolute left-1/2 top-1/3 h-40 w-40 rounded-full bg-[#efe4d8]/18 blur-3xl" />
</div>


  <Container className="relative">
    <div className="max-w-5xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 shadow-[0_6px_16px_rgba(43,33,28,0.03)] backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Carrito · resumen · envío
        </span>
      </div>

      <h1 className="font-display text-[2rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--color-text)] sm:text-[2.6rem] md:text-[3.5rem]">
        Resumen de compra claro
        <span className="block">y útil para preparar envío</span>
      </h1>

      <p className="mt-4 max-w-4xl text-[0.98rem] leading-8 text-[var(--color-muted)] md:text-[1.02rem]">
        Además del producto y el subtotal, esta vista ayuda a revisar presentación, tamaño y peso
        estimado de cada artículo para una operación más ordenada.
      </p>

      <div className="mt-4 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />
    </div>

    <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        {mockCart.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <div className="rounded-[28px] border border-[var(--color-line)] bg-white/90 p-2 shadow-[0_14px_30px_rgba(43,33,28,0.03)] backdrop-blur-sm">
        <CartSummary items={mockCart} />
      </div>
    </div>
  </Container>
</section>

)
}