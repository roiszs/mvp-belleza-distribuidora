import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden section-padding">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Beauty commerce, elevated
            </p>
            <h1 className="font-serif-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
              Una tienda que se ve premium,
              <span className="block">vende mejor y puede crecer.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
              Un ecommerce visual-comercial pensado para productos de uñas, con una experiencia más limpia,
              moderna y preparada para evolucionar hacia mayoreo, volumen e integraciones futuras.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/catalogo">Explorar catálogo</Button>
              <Button href="/b2b" variant="secondary">Ver visión B2B</Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold">+120</p>
                <p className="text-sm text-[var(--color-muted)]">SKUs listos para escalar</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">B2C + B2B</p>
                <p className="text-sm text-[var(--color-muted)]">Experiencia comercial híbrida</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">Marketplace-ready</p>
                <p className="text-sm text-[var(--color-muted)]">Estructura visual preparada</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="surface-card overflow-hidden rounded-[34px] bg-[#efe5da] p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] bg-[linear-gradient(180deg,#f3ebe1_0%,#e6d7ca_100%)] p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Nuevo drop</p>
                  <h3 className="mt-3 font-serif-display text-3xl">Gel tones</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    Colores neutros, textura profesional y presentación pensada para una marca más seria.
                  </p>
                </div>
                <div className="rounded-[28px] bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">B2B ready</p>
                  <h3 className="mt-3 text-2xl font-medium">Menudeo, mayoreo y volumen</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    Señales visuales claras para compradores frecuentes, negocios y distribuidores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}