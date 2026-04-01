import { Container } from '@/components/layout/Container'

const items = [
  {
    title: 'Envíos nacionales',
    text: 'Bloque visual preparado para mostrar paquetería, tiempos y cobertura.',
  },
  {
    title: 'Compra con confianza',
    text: 'Jerarquía clara, producto bien presentado y señales de marca seria.',
  },
  {
    title: 'Precios por volumen',
    text: 'La interfaz deja ver cómo podrá crecer hacia mayoreo y compras recurrentes.',
  },
  {
    title: 'Marketplace future-ready',
    text: 'Sin integrarlo aún, el frontend ya comunica estructura para una operación más robusta.',
  },
]

export function TrustBadges() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[var(--color-line)] bg-white p-5">
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}