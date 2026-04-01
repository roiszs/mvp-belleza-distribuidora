import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Button } from '@/components/ui/Button'

const features = [
  {
    title: 'Precios por volumen',
    text: 'Estructura lista para mostrar menudeo, mayoreo y escalas especiales por cantidad.',
  },
  {
    title: 'Cotizaciones',
    text: 'Posibilidad futura de solicitudes rápidas para negocios, salones o distribuidores.',
  },
  {
    title: 'Compras recurrentes',
    text: 'Flujo pensado para clientes que compran de forma frecuente y necesitan agilidad.',
  },
  {
    title: 'Atención comercial',
    text: 'Una experiencia orientada a cuentas de negocio, surtido y pedidos más robustos.',
  },
]

export default function B2BPage() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="B2B Vision"
          title="La tienda no solo vende producto; también puede atender negocio."
          description="Este bloque conceptual le ayuda al cliente a visualizar la evolución hacia una operación más robusta sin necesidad de construir todavía toda la lógica real."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-[30px] border border-[var(--color-line)] bg-white p-6">
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{feature.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[34px] bg-[var(--color-accent-dark)] p-8 text-white md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">Próxima evolución</p>
          <h2 className="mt-4 font-serif-display text-3xl md:text-5xl">
            Preparado para crecer a login comercial, reglas de precio, marketplace e inventario.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
            El objetivo del MVP es dejar esa visión visible desde hoy, sin necesidad de construir todavía toda la capa técnica de negocio.
          </p>
          <div className="mt-6">
            <Button href="/catalogo" variant="secondary">Volver al catálogo</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}