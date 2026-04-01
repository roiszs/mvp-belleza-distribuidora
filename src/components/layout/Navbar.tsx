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
<header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(250,247,242,0.94)] backdrop-blur-md">
<Container className="flex min-h-[64px] items-center justify-between gap-4">
<Link href="/" className="font-display text-lg font-semibold tracking-[-0.03em] md:text-xl">
Linsel
</Link>

    <nav className="hidden items-center gap-6 md:flex">
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
        className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-soft)]"
      >
        Ver catálogo
      </Link>
    </div>

    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-text)] md:hidden"
      aria-label="Abrir menú"
      aria-expanded={open}
    >
      <span className="text-lg">{open ? '×' : '☰'}</span>
    </button>
  </Container>

  {open ? (
    <div className="border-t border-[var(--color-line)] bg-[var(--color-bg)] md:hidden">
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