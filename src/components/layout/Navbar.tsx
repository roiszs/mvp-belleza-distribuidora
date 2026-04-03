'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Container } from './Container'

const links = [
{ href: '/', label: 'Inicio' },
{ href: '/catalogo', label: 'Catálogo' },
{ href: '/b2b', label: 'B2B' },
{ href: '/carrito', label: 'Carrito' },
]

export function Navbar() {
const [open, setOpen] = useState(false)

return (
<header className="sticky top-0 z-50 border-b border-[rgba(232,222,210,0.75)] bg-[rgba(250,247,242,0.78)]">
<Container className="flex min-h-[72px] items-center justify-between gap-4">
<Link
href="/"
className="font-display text-[1.9rem] font-semibold tracking-[-0.05em] text-[var(--color-text)]"
>
Linsel
</Link>

    <nav className="hidden items-center gap-7 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
        >
          {link.label}
        </Link>
      ))}
    </nav>

    <div className="hidden md:block">
      <Link
        href="/catalogo"
        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-line)] bg-white/90 px-5 py-2 text-sm font-semibold text-[var(--color-text)] shadow-[0_8px_18px_rgba(43,33,28,0.035)] transition hover:bg-[var(--color-soft)]"
      >
        Ver catálogo
      </Link>
    </div>

    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/92 text-[var(--color-text)] shadow-[0_8px_18px_rgba(43,33,28,0.035)] md:hidden"
      aria-label="Abrir menú"
      aria-expanded={open}
    >
      <span className="text-lg">{open ? '×' : '☰'}</span>
    </button>
  </Container>

  {open ? (
    <div className="border-t border-[var(--color-line)] bg-[rgba(250,247,242,0.97)] md:hidden">
      <Container className="py-4">
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[18px] border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-soft)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  ) : null}
</header>

)
}