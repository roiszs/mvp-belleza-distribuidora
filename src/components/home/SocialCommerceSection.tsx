import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

const channels = [
    {
      name: 'Instagram',
      handle: '@linsel.mx',
      title: 'Contenido de producto, lanzamientos y comunidad',
      stat: 'Proveedor mayoreo con entregas locales y envíos nacionales',
      points: ['Lanzamientos', 'Contenido visual', 'Tráfico al ecommerce'],
    },
    {
      name: 'Facebook',
      handle: 'LinSel',
      title: 'Confianza comercial y comunicación de promociones',
      stat: 'Venta y envíos a nivel nacional',
      points: ['Promociones', 'Comunidad', 'Atención comercial'],
    },
    {
      name: 'Website',
      handle: 'linsel.mx',
      title: 'Catálogo, navegación y compra centralizada',
      stat: 'Categorías, productos nuevos, marcas y promociones visibles',
      points: ['Catálogo ordenado', 'Compra web', 'Escalabilidad comercial'],
    },
  ]

export function SocialCommerceSection() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <SectionHeader
          eyebrow="Social commerce"
          title="La tienda también vive desde redes sociales"
          description="Como esta marca vende mucho desde redes, queremos que el ecommerce se vea conectado con este sistema y no separado de el"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {channels.map((channel) => (
            <article
              key={channel.name}
              className="group overflow-hidden rounded-[30px] border border-[var(--color-line)] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(43,33,28,0.07)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {channel.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{channel.handle}</p>
                </div>

                <div className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.14em]">
                  Activo
                </div>
              </div>

              <h3 className="mt-5 text-xl font-medium">{channel.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{channel.stat}</p>

              <div className="mt-5 space-y-2">
                {channel.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl bg-[#faf5ef] px-4 py-3 text-sm text-[var(--color-text)]"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)] transition duration-300 group-hover:translate-x-1">
                Contenido que lleva tráfico al ecommerce →
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}