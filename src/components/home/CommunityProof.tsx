import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

const testimonials = [
{
name: 'Paola M.',
role: 'Nail artist',
quote:
'Me gustó mucho más esta forma de ver los productos. Se siente limpio, ordenado y mucho más fácil para comprar.',
},
{
name: 'Studio Nude',
role: 'Salón',
quote:
'La parte de mayoreo y volumen ayuda bastante. Ya se ve como una tienda pensada también para negocio.',
},
{
name: 'Karen R.',
role: 'Cliente frecuente',
quote:
'Los productos lucen mejor, las categorías se entienden rápido y la tienda se siente más confiable.',
},
]

export function CommunityProof() {
return (
<section className="section-padding">
<Container>
<SectionHeader
eyebrow="Reseñas"
title="Lo que opinan nuestras clientas"
description="Una sección visual pensada para transmitir confianza, comunidad y una experiencia de compra más cercana."
/>

<div className="mt-6 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto hide-scrollbar px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
      {testimonials.map((item) => (
        <article
          key={item.name}
          className="w-[280px] shrink-0 snap-start rounded-[24px] border border-[var(--color-line)] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.05)] lg:w-auto"
        >
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)]">
              Opinión destacada
            </span>
            <span className="text-sm text-[var(--color-accent)]">★★★★★</span>
          </div>

          <p className="mt-4 text-[15px] leading-7 text-[var(--color-text)]">
            “{item.quote}”
          </p>

          <div className="mt-5 border-t border-[var(--color-line)] pt-4">
            <p className="text-sm font-semibold tracking-[-0.01em]">{item.name}</p>
            <p className="text-sm text-[var(--color-muted)]">{item.role}</p>
          </div>
        </article>
      ))}
    </div>
  </Container>
</section>

)
}