import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { SiInstagram, SiFacebook, SiTiktok } from 'react-icons/si'

type Channel = {
name: 'Instagram' | 'Facebook' | 'TikTok Shop'
handle: string
title: string
text: string
points: string[]
}

const channels: Channel[] = [
{
name: 'Instagram',
handle: '@linsel.mx',
title: 'Contenido visual, lanzamientos y comunidad',
text: 'Ideal para mostrar nuevos tonos, sets, tutoriales y llevar tráfico al catálogo.',
points: ['Lanzamientos', 'Contenido visual', 'Tráfico al ecommerce'],
},
{
name: 'Facebook',
handle: 'LinSel',
title: 'Promociones, confianza y atención comercial',
text: 'Canal fuerte para promociones, mensajes y cercanía con clientas y salones.',
points: ['Promociones', 'Comunidad', 'Atención comercial'],
},
{
name: 'TikTok Shop',
handle: '@linsel.mx',
title: 'Venta directa y productos virales',
text: 'Canal clave para conversión rápida: videos, lives y productos de alta rotación conectados al catálogo.',
points: ['TikTok Shop', 'Videos & lives', 'Alta rotación', 'Catalogo'],
},
]

function BrandIcon({ name }: { name: Channel['name'] }) {
const Icon =
name === 'Instagram' ? SiInstagram : name === 'Facebook' ? SiFacebook : SiTiktok

return (
<div className="rounded-[18px] border border-[var(--color-line)] bg-white/80 p-3 shadow-[0_10px_20px_rgba(43,33,28,0.04)]">
<div className="text-[18px] text-[var(--color-accent-dark)]">
<Icon />
</div>
</div>
)
}

export function SocialCommerceSection() {
return (
<section className="section-padding pt-0">
<Container>
<SectionHeader
eyebrow="Canales"
title="Instagram, Facebook y TikTok Shop trabajando juntos"
description="La idea no es reemplazar redes sociales, sino convertir mejor desde una tienda más clara, premium y confiable."
/>

    {/* Wrapper premium (mismo lenguaje que Reseñas) */}
    <div className="relative mt-6 rounded-[28px] border border-[var(--color-line)] bg-white/70 p-4 shadow-[0_18px_40px_rgba(43,33,28,0.03)] backdrop-blur-sm md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Social commerce
        </div>

        {/* CTA pro (solo desktop) */}
        <a
          href="/catalogo"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-text)] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(43,33,28,0.05)] md:inline-flex"
        >
          Ver catálogo
          <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
        </a>

        {/* hint mobile */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:hidden">
          Desliza
        </p>
      </div>

      {/* micro-acento */}
      <div className="mb-4 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

      {/* Carrusel centrado (sin peek) / Grid desktop */}
      <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 hide-scrollbar md:mx-0 md:mt-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
        {channels.map((channel) => (
          <article
            key={channel.name}
            className="group relative w-[min(86vw,320px)] shrink-0 snap-center overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)] p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(43,33,28,0.06)] hover:border-[var(--color-accent)]/35 active:scale-[0.99] active:shadow-[0_14px_28px_rgba(43,33,28,0.07)] md:w-auto md:p-5"
          >
            {/* top highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(182,138,120,0.18),transparent)] opacity-70" />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <BrandIcon name={channel.name} />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {channel.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{channel.handle}</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/70 px-2 py-1 text-[11px] font-medium text-[var(--color-muted)]">
                <BadgeCheck className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                Activo
              </span>
            </div>

            {/* Title + text */}
            <h3 className="relative mt-4 text-lg font-semibold tracking-[-0.02em] text-[var(--color-text)]">
              {channel.title}
            </h3>

            <p className="relative mt-2 min-h-[84px] text-[14px] leading-7 text-[var(--color-muted)] md:min-h-[90px] md:text-[15px]">
              {channel.text}
            </p>

            <div className="relative mt-5 h-px w-full bg-[linear-gradient(90deg,var(--color-line),transparent)]" />

            {/* Points */}
            <div className="relative mt-4 flex flex-wrap gap-2">
              {channel.points.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text)]"
                >
                  {point}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </Container>
</section>

)
}