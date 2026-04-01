import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden section-padding pb-8 md:pb-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-14 top-10 h-44 w-44 rounded-full bg-[#ead8c8]/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#f2e7dc]/60 blur-3xl" />
      </div>

      <Container className="relative">
      <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
      <div className="max-w-xl">
<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
Uñas · mayoreo · social commerce
</p>

<h1 className="font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.6rem] md:text-[3.2rem]">
Belleza profesional
<span className="block">para uñas</span>
</h1>

<p className="mt-4 max-w-lg text-base leading-8 text-[var(--color-muted)] md:text-lg">
Gel semipermanente, acrílico, tips, decoración y herramientas con una experiencia
más limpia, clara y preparada para crecer a menudeo, mayoreo y volumen.
</p>

<div className="mt-6 flex flex-wrap gap-3">
<Button href="/catalogo">Explorar catálogo</Button>
<Button href="/b2b" variant="secondary">
Evolución B2B
</Button>
</div>

<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="surface-card rounded-[18px] p-3 md:rounded-[20px] md:p-4">
<p className="text-xl font-semibold tracking-[-0.03em]">+120</p>
<p className="mt-1 text-sm text-[var(--color-muted)]">SKUs listos para escalar</p>
</div>

<div className="surface-card rounded-[18px] p-3 md:rounded-[20px] md:p-4">
  <p className="text-xl font-semibold tracking-[-0.03em]">B2C + B2B</p>
  <p className="mt-1 text-sm text-[var(--color-muted)]">Experiencia comercial híbrida</p>
</div>

<div className="surface-card rounded-[18px] p-3 md:rounded-[20px] md:p-4">
  <p className="text-xl font-semibold tracking-[-0.03em]">Marketplace-ready</p>
  <p className="mt-1 text-sm text-[var(--color-muted)]">Estructura lista para crecer</p>
</div>


</div>
</div>

          <div className="relative">
            <div className="surface-card overflow-hidden rounded-[28px] p-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] bg-[linear-gradient(180deg,#f3ebe1_0%,#e6d7ca_100%)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.06)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Nuevo drop
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">Gel tones</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    Colores neutros y productos de alta rotación con una presentación más limpia.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                      Clean shades
                    </span>
                    <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                      New arrival
                    </span>
                  </div>
                </div>

                <div className="rounded-[22px] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.05)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    B2B ready
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                    Menudeo, mayoreo y volumen
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    Compra por pieza, por caja o por volumen con una lectura comercial mucho más clara.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                      Caja 6+
                    </span>
                    <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                      Caja 12+
                    </span>
                    <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                      Volumen 24+
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[22px] border border-[var(--color-line)] bg-[#faf5ef] p-5 transition duration-300 hover:-translate-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Social commerce
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">
                    De redes sociales al carrito
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    El ecommerce acompaña Instagram, Facebook y TikTok para convertir mejor.
                  </p>
                </div>

                <div className="rounded-[22px] border border-[var(--color-line)] bg-white p-5 transition duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold tracking-[-0.02em]">Promesa visual</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    Minimalista, más premium y más claro para comprar.
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