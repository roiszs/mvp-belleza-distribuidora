import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Star, BadgeCheck } from 'lucide-react'

const testimonials = [
{
name: 'Paola M.',
role: 'Nail artist',
quote:
'Me gustó mucho más esta forma de ver los productos. Se siente limpio, ordenado y mucho más fácil para comprar.',
tag: 'Compra más clara',
rating: 5,
},
{
name: 'Studio Nude',
role: 'Salón',
quote:
'La parte de mayoreo y volumen ayuda bastante. Ya se ve como una tienda pensada también para negocio.',
tag: 'Mayoreo útil',
rating: 5,
},
{
name: 'Karen R.',
role: 'Cliente frecuente',
quote:
'Los productos lucen mejor, las categorías se entienden rápido y la tienda se siente más confiable.',
tag: 'Más confianza',
rating: 5,
},
]

function Stars({ value = 5 }: { value?: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < value)
  
  return (
  <div className="flex items-center gap-2">
  <div className="flex items-center gap-1">
  {stars.map((on, idx) => (
  <Star
  key={idx}
  className={
  on
  ? 'h-4 w-4 text-[var(--color-accent)]'
  : 'h-4 w-4 text-[var(--color-line)]'
  }
  fill={on ? 'currentColor' : 'none'}
  />
  ))}
  </div>
  
    <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/70 px-2 py-1 text-[11px] font-medium text-[var(--color-muted)]">
      <BadgeCheck className="h-3.5 w-3.5 text-[var(--color-accent)]" />
      Compra verificada
    </span>
  </div>
  
  )
  }


export function CommunityProof() {
return (
<section className="section-padding">
<Container>
<SectionHeader
eyebrow="Reseñas"
title="Lo que opinan nuestros clientes"
description="Una sección visual pensada para transmitir confianza, comunidad y una experiencia de compra más cercana."
/>


    {/* Wrapper premium */}
    <div className="relative mt-6 rounded-[28px] border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_18px_40px_rgba(43,33,28,0.03)] backdrop-blur-sm md:p-6">
      {/* hint superior */}
      <div className="mb-4 flex items-center justify-between gap-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
      <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
      Opinión destacada
      </div>

      {/* CTA pro (solo desktop) */}
      <a
      href="/catalogo"
      className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)] md:inline-flex"

      > 
      Ver catálogo
      <span className="text-[var(--color-muted)]">→</span>

      </a>

      {/* hint mobile */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:hidden">
      Desliza
      </p>
      </div>

      {/* Carrusel móvil / Grid desktop */}
      <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 hide-scrollbar md:mx-0 md:mt-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="w-[min(86vw,320px)] shrink-0 snap-center rounded-[26px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(43,33,28,0.06)] md:w-auto md:snap-start hover:border-[var(--color-accent)]/35 active:scale-[0.99] active:shadow-[0_14px_28px_rgba(43,33,28,0.07)]"
           >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text)]">
                  {item.tag}
                </div>
              
              </div>

              <div className="text-sm">
              <Stars value={item.rating} />
              </div>
            </div>

            {/* Quote */}
            <p className="mt-4 min-h-[120px] text-[14px] leading-7 text-[var(--color-text)] md:min-h-[110px] md:text-[15.5px]">
            <span className="text-[var(--color-accent-dark)]">“</span>
            {item.quote}
            <span className="text-[var(--color-accent-dark)]">”</span>
            </p>

            {/* Divider */}
            <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,var(--color-line),transparent)]" />

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold tracking-[-0.01em]">{item.name}</p>
                <p className="text-sm text-[var(--color-muted)]">{item.role}</p>
              </div>

              <div className="rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                5.0
              </div>
            </div>

            {/* Hover accent */}
            <div className="pointer-events-none mt-4 h-[1px] w-0 bg-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </div>
  </Container>
</section>

)
}