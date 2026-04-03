import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export function Hero() {
return (
<section className="relative overflow-x-hidden section-padding pb-10 pt-10 md:pb-14 md:pt-12">
<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -left-16 top-6 h-56 w-56 rounded-full bg-[#ead8c8]/32 blur-3xl" />
<div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#f2e7dc]/38 blur-3xl" />
<div className="absolute left-1/2 top-1/3 h-44 w-44 rounded-full bg-[#efe4d8]/22 blur-3xl" />
</div>

  <Container className="relative">
    <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
      {/* LEFT COLUMN */}
      <div className="w-full min-w-0 max-w-xl pt-2">
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 shadow-[0_6px_16px_rgba(43,33,28,0.03)] backdrop-blur-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span className="truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Uñas · mayoreo · social commerce
          </span>
        </div>

        <h1 className="font-display text-[1.9rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--color-text)] sm:text-[3rem] md:text-[4.4rem]">
          Belleza profesional
          <span className="block">para uñas</span>
        </h1>

        <p className="mt-5 max-w-lg text-[0.98rem] leading-8 text-[var(--color-muted)] md:text-[1.08rem]">
          Gel semipermanente, acrílico, tips, decoración y herramientas con una experiencia
          más limpia, clara y preparada para crecer a menudeo, mayoreo y volumen.
        </p>

        <div className="mt-5 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/catalogo">Explorar catálogo</Button>
          <Button href="/b2b" variant="secondary">
            Evolución B2B
          </Button>
        </div>

        {/* MOBILE STATS */}
        <div className="mt-8 -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto hide-scrollbar px-4 pb-2 lg:hidden">
          <div className="w-[220px] shrink-0 snap-start rounded-[22px] border border-[var(--color-line)] bg-white/90 p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)]">
            <p className="text-[1.9rem] font-semibold leading-none tracking-[-0.04em]">+120</p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              SKUs listos para escalar
            </p>
          </div>

          <div className="w-[220px] shrink-0 snap-start rounded-[22px] border border-[var(--color-line)] bg-white/90 p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)]">
            <p className="text-[1.9rem] font-semibold leading-tight tracking-[-0.04em]">
              B2C + B2B
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              Experiencia comercial híbrida
            </p>
          </div>

          <div className="w-[220px] shrink-0 snap-start rounded-[22px] border border-[var(--color-line)] bg-white/90 p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)]">
            <p className="text-[1.9rem] font-semibold leading-tight tracking-[-0.04em]">
              Listo para marketplace
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              Estructura lista para crecer
            </p>
          </div>
        </div>

        {/* DESKTOP STATS */}
        <div className="mt-8 hidden grid-cols-3 gap-3 lg:grid">
        <div className="rounded-[22px] border border-[var(--color-line)] bg-white/90 p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)]">
        <p className="text-[1.7rem] font-semibold leading-none tracking-[-0.035em]">+120</p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        SKUs listos para escalar
        </p>
        </div>

        <div className="rounded-[22px] border border-[var(--color-line)] bg-white/90 p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)]">
        <p className="text-[1.55rem] font-semibold leading-tight tracking-[-0.03em]">
        B2C + B2B
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        Experiencia comercial híbrida
        </p>
        </div>

        <div className="rounded-[22px] border border-[var(--color-line)] bg-white/90 p-4 shadow-[0_10px_24px_rgba(43,33,28,0.035)]">
        <p className="text-[1.35rem] font-semibold leading-tight tracking-[-0.025em]">
        Listo para marketplace
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        Estructura lista para crecer
        </p>
        </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="grid w-full min-w-0 gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] border border-[#e7d7c8] bg-[linear-gradient(180deg,#f3e8dc_0%,#ead9ca_100%)] p-6 shadow-[0_18px_40px_rgba(43,33,28,0.045)]">
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Nuevo drop
            </p>
            <h3 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.04em] md:text-[1.75rem]">
              Gel tones
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Colores neutros y productos de alta rotación con una presentación más limpia.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                Clean shades
              </span>
              <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                New arrival
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[var(--color-line)] bg-white/94 p-6 shadow-[0_18px_40px_rgba(43,33,28,0.04)]">
            <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 rounded-full bg-[var(--color-soft)] blur-2xl" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              B2B ready
            </p>
            <h3 className="mt-3 text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[1.75rem]">
              Menudeo, mayoreo y volumen
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Compra por pieza, por caja o por volumen con una lectura comercial mucho más clara.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
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

        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] border border-[var(--color-line)] bg-[#faf5ef]/90 p-5 shadow-[0_10px_24px_rgba(43,33,28,0.03)]">
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

          <div className="rounded-[24px] border border-[var(--color-line)] bg-white/92 p-5 shadow-[0_10px_24px_rgba(43,33,28,0.03)]">
            <p className="text-sm font-semibold tracking-[-0.02em]">Promesa visual</p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              Minimalista, más premium y más claro para comprar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

)
}