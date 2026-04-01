import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

const signals = [
  {
    title: 'Proveedor mayoreo',
    text: 'Catálogo pensado para compra recurrente, surtido y reposición para negocio.',
  },
  {
    title: 'Entregas locales y envíos nacionales',
    text: 'La comunicación comercial ya puede transmitir cobertura y operación más seria.',
  },
  {
    title: 'Venta desde redes y web',
    text: 'Instagram, Facebook y ecommerce trabajan juntos como parte del mismo canal comercial.',
  },
]

export function CommunityProof() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Confianza"
          title="Señales reales de una operación que sí vende"
          description="En esta etapa es mejor mostrar confianza comercial real que inventar reseñas."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {signals.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-[var(--color-line)] bg-white p-6 transition duration-300 hover:-translate-y-1"
            >
              <span className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.14em]">
                Señal comercial
              </span>
              <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}