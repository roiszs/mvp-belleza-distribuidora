import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function B2BPreview() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-8 rounded-[36px] border border-[var(--color-line)] bg-white p-6 md:grid-cols-[1fr_1fr] md:p-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Evolución B2B
            </p>
            <h2 className="mt-4 font-serif-display text-3xl md:text-5xl">
              Una tienda pensada para vender también a negocio.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] md:text-base">
              Aunque este MVP no incluye login ni reglas reales de negocio, sí deja ver cómo la experiencia podrá crecer hacia mayoreo, volumen, cotizaciones y recompra.
            </p>
            <div className="mt-6">
              <Button href="/b2b">Ver concepto B2B</Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-[#faf5ef] p-5">
              <p className="text-sm font-medium">Precios escalonados</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">Menudeo, caja, mayoreo y volumen.</p>
            </div>
            <div className="rounded-[28px] bg-[#faf5ef] p-5">
              <p className="text-sm font-medium">Atención a negocios</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">Solicitud de cotización y pedidos frecuentes.</p>
            </div>
            <div className="rounded-[28px] bg-[#faf5ef] p-5">
              <p className="text-sm font-medium">Compra recurrente</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">Visión para salones, distribuidores y puntos de venta.</p>
            </div>
            <div className="rounded-[28px] bg-[#faf5ef] p-5">
              <p className="text-sm font-medium">Operación escalable</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">Preparado visualmente para inventario y marketplace.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}