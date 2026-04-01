import Link from 'next/link'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[#f7f1ea]">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif-display text-2xl">Belleza Pro</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
            Ecommerce visual-comercial pensado para evolucionar hacia una operación más robusta,
            moderna y escalable.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">Navegación</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-muted)]">
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/b2b">B2B</Link>
            <Link href="/carrito">Carrito</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Señales de crecimiento</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-muted)]">
            <span>Precios por volumen</span>
            <span>Mayoreo</span>
            <span>Marketplace ready</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}