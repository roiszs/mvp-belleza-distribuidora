import Link from 'next/link'
import { Container } from './Container'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/b2b', label: 'B2B' },
  { href: '/carrito', label: 'Carrito' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(250,247,242,0.88)] backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-serif-display text-xl tracking-[0.08em]">
          BELLEZA PRO
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-muted)]">
          Compra premium
        </div>
      </Container>
    </header>
  )
}