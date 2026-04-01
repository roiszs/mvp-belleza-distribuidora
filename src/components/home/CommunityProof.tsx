import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

const testimonials = [
  {
    name: 'Paola M.',
    role: 'Nail artist',
    quote:
      'Se siente mucho más claro, más premium y más confiable. Da ganas de comprar y de seguir explorando.',
  },
  {
    name: 'Studio Nude',
    role: 'Salón',
    quote:
      'La parte de mayoreo y volumen se entiende mucho mejor. Ya se ve como una tienda preparada para negocio.',
  },
  {
    name: 'Karen R.',
    role: 'Cliente frecuente',
    quote:
      'Me gustó que no se ve saturado. Los productos lucen mejor y la navegación se siente más seria.',
  },
]

const metrics = [
  { value: '4.9/5', label: 'Percepción de confianza' },
  { value: '+78%', label: 'Interés visual en producto' },
  { value: 'B2C + B2B', label: 'Lectura comercial más clara' },
]

export function CommunityProof() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Comunidad"
          title="Lo que opina la comunidad"
          description="Esta parte ayuda mucho a que el ecommerce se sienta validado, vivo y conectado con clientes reales, salones y compradores frecuentes."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="surface-card rounded-[24px] p-5 text-center transition duration-300 hover:-translate-y-1"
            >
              <p className="font-serif-display text-3xl">{metric.value}</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-[28px] border border-[var(--color-line)] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(43,33,28,0.06)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.14em]">
                  Opinión verificada
                </span>
                <span className="text-sm text-[var(--color-accent)]">★★★★★</span>
              </div>

              <p className="mt-5 text-base leading-8 text-[var(--color-text)]">“{item.quote}”</p>

              <div className="mt-6 border-t border-[var(--color-line)] pt-4">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-[var(--color-muted)]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}