import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function B2BPreview() {
return (
<section className="section-padding">
<Container>
<div className="grid gap-6 rounded-[28px] border border-[var(--color-line)] bg-white p-6 md:grid-cols-[1fr_1fr] md:p-8">
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
Evolución B2B
</p>
<h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
Una tienda pensada para vender también a negocio.
</h2>
<p className="mt-3 text-sm leading-7 text-[var(--color-muted)] md:text-base">
Además de la venta unitaria, esta propuesta deja ver cómo el ecommerce puede crecer a
compra por caja, precios por volumen, atención comercial y flujo de recompra para salones
y distribuidores.
</p>

        <div className="mt-5">
          <Button href="/b2b">Ver visión B2B</Button>
        </div>
      </div>

      <div className="mt-6 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto hide-scrollbar px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0">
      <div className="w-[260px] shrink-0 snap-start rounded-[22px] bg-[#faf5ef] p-5 sm:w-auto">
          <p className="text-sm font-semibold tracking-[-0.02em]">Precios escalonados</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
            Compra por pieza, caja o volumen con lectura comercial más clara.
          </p>
        </div>

        <div className="w-[260px] shrink-0 snap-start rounded-[22px] bg-[#faf5ef] p-5 sm:w-auto">
          <p className="text-sm font-semibold tracking-[-0.02em]">Atención a negocios</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
            Espacio para solicitudes de mayoreo y cotización.
          </p>
        </div>

        <div className="w-[260px] shrink-0 snap-start rounded-[22px] bg-[#faf5ef] p-5 sm:w-auto">
          <p className="text-sm font-semibold tracking-[-0.02em]">Compra recurrente</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
            Pensado para reposición y pedidos frecuentes.
          </p>
        </div>

        <div className="w-[260px] shrink-0 snap-start rounded-[22px] bg-[#faf5ef] p-5 sm:w-auto">
          <p className="text-sm font-semibold tracking-[-0.02em]">Operación escalable</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
            Preparado para crecer a catálogo más robusto e integraciones futuras.
          </p>
        </div>
      </div>
    </div>
  </Container>
</section>

)
}