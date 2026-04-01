import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden section-padding pb-10 md:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-14 top-10 h-56 w-56 rounded-full bg-[#ead8c8]/60 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#f2e7dc]/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#e3d2c6]/50 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Uñas · mayoreo · social commerce
            </p>

            <h1 className="font-serif-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
            Gel semipermanente, acrílico,
            <span className="block">tips y herramientas para vender mejor.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
                Descubre colecciones de gel, productos para preparación, decoración y herramientas
                para cabina, salón y reventa. Compra por pieza o visualiza precios pensados para
                mayoreo y volumen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/catalogo">Explorar catálogo</Button>
              <Button href="/b2b" variant="secondary">
                Ver visión B2B
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="surface-card rounded-[24px] p-4 transition duration-300 hover:-translate-y-1">
                <p className="text-2xl font-semibold">+120</p>
                <p className="text-sm text-[var(--color-muted)]">SKUs listos para escalar</p>
              </div>

              <div className="surface-card rounded-[24px] p-4 transition duration-300 hover:-translate-y-1">
                <p className="text-2xl font-semibold">B2C + B2B</p>
                <p className="text-sm text-[var(--color-muted)]">Experiencia comercial híbrida</p>
              </div>

              <div className="surface-card rounded-[24px] p-4 transition duration-300 hover:-translate-y-1">
                <p className="text-2xl font-semibold">Marketplace-ready</p>
                <p className="text-sm text-[var(--color-muted)]">Estructura visual preparada</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="surface-card overflow-hidden rounded-[34px] p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="group relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#f3ebe1_0%,#e6d7ca_100%)] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(43,33,28,0.10)]">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.25)_45%,transparent_100%)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Nuevo drop
                  </p>
                  <h3 className="mt-3 font-serif-display text-3xl transition duration-300 group-hover:translate-y-[-2px]">
                    Gel tones
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    Colores neutros, textura profesional y presentación pensada para una marca más seria.
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.14em]">
                      Clean shades
                    </span>
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.14em]">
                      New arrival
                    </span>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-[28px] bg-white p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#fcfaf7] hover:shadow-[0_24px_50px_rgba(43,33,28,0.08)]">
                  <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-[var(--color-soft)] blur-2xl transition duration-500 group-hover:scale-125" />
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    B2B ready
                  </p>
                  <h3 className="mt-3 text-2xl font-medium transition duration-300 group-hover:translate-y-[-2px]">
                    Menudeo, mayoreo y volumen
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    Señales visuales claras para compradores frecuentes, negocios y distribuidores.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs uppercase tracking-[0.14em]">
                      Caja 6+
                    </span>
                    <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs uppercase tracking-[0.14em]">
                      Caja 12+
                    </span>
                    <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs uppercase tracking-[0.14em]">
                      Volumen 24+
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[28px] border border-[var(--color-line)] bg-[#faf5ef] p-5 transition duration-300 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Social commerce
                  </p>
                  <h3 className="mt-3 text-xl font-medium">Del contenido en redes al carrito</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    El ecommerce no compite con TikTok, Instagram o Facebook. Se apoya en ellos para convertir mejor.
                  </p>
                </div>

                <div className="rounded-[28px] border border-[var(--color-line)] bg-white p-5 transition duration-300 hover:-translate-y-1">
                  <p className="text-sm font-medium">Promesa visual</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    Más premium que un ecommerce común. Más comercial y claro que una marca puramente editorial.
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