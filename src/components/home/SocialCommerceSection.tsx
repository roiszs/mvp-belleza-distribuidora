import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

const channels = [
  {
    name: 'Instagram',
    handle: '@linsel.mx',
    title: 'Contenido visual, lanzamientos y comunidad',
    stat: 'Productos, tonos nuevos y contenido que lleva tráfico a la tienda',
    points: ['Lanzamientos', 'Contenido visual', 'Tráfico al ecommerce'],
  },
  {
    name: 'Facebook',
    handle: 'LinSel',
    title: 'Promociones, confianza y atención comercial',
    stat: 'Canal ideal para mantener promociones y comunicación con clientas',
    points: ['Promociones', 'Comunidad', 'Atención comercial'],
  },
  {
    name: 'Website',
    handle: 'linsel.mx',
    title: 'Catálogo más claro y experiencia de compra centralizada',
    stat: 'Categorías, producto, mayoreo y navegación en un solo lugar',
    points: ['Catálogo ordenado', 'Compra web', 'Escalabilidad comercial'],
  },
]

export function SocialCommerceSection() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <SectionHeader
          eyebrow="Canales"
          title="Instagram, Facebook y tienda trabajando juntos"
          description="La idea no es reemplazar redes sociales, sino convertir mejor desde una tienda más clara, más premium y más confiable."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {channels.map((channel) => (
            <article
              key={channel.name}
              className="rounded-[24px] border border-[var(--color-line)] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.05)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {channel.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{channel.handle}</p>
                </div>

                <div className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                  Activo
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">{channel.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{channel.stat}</p>

              <div className="mt-4 space-y-2">
                {channel.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[18px] bg-[#faf5ef] px-4 py-3 text-sm text-[var(--color-text)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}