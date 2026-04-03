import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { IconBadge } from '@/components/ui/IconBadge'
import { Sparkles, Layers, ShoppingBag, ShieldCheck, ArrowUpRight } from 'lucide-react'

export function Hero() {
return (
<section className="relative overflow-hidden section-padding pb-8 md:pb-10">
{/* Fondo suave */}
<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-14 top-10 h-44 w-44 rounded-full bg-[#ead8c8]/50 blur-3xl" />
<div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#f2e7dc]/60 blur-3xl" />
<div className="absolute left-1/2 top-1/3 h-44 w-44 -translate-x-1/2 rounded-full bg-[#f7efe6]/60 blur-3xl" />
</div>

  <Container className="relative">
    <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      {/* Lado izquierdo */}
      <div className="w-full min-w-0 max-w-xl pt-2">
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] shadow-[0_12px_24px_rgba(43,33,28,0.03)]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span className="truncate">Uñas · mayoreo · social commerce</span>
        </div>

        <h1 className="font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl md:text-5xl">
          Belleza profesional
          <span className="block">para uñas</span>
        </h1>

        <p className="mt-4 max-w-lg text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base">
          Gel semipermanente, acrílico, tips, decoración y herramientas con una experiencia más limpia,
          clara y preparada para crecer a menudeo, mayoreo y volumen.
        </p>

        <div className="mt-5 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/catalogo" className="w-full sm:w-auto">
            Explorar catálogo
          </Button>
          <Button href="/b2b" variant="secondary" className="w-full sm:w-auto">
            Evolución B2B
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="surface-card rounded-[20px] p-4">
            <p className="text-xl font-semibold tracking-[-0.03em]">+120</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">SKUs listos para escalar</p>
          </div>

          <div className="surface-card rounded-[20px] p-4">
            <p className="text-xl font-semibold tracking-[-0.03em]">B2C + B2B</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Experiencia comercial híbrida</p>
          </div>

          <div className="surface-card rounded-[20px] p-4">
            <p className="text-xl font-semibold tracking-[-0.03em]">Marketplace</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Listo para crecer</p>
          </div>
        </div>
      </div>

      {/* Lado derecho */}
      <div className="relative">
        <div className="surface-card overflow-hidden rounded-[28px] p-4">
          {/* Fila superior: MOBILE 1 columna (más cuadrado) / DESKTOP 2 columnas */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Card 1 - Nuevo Drop */}
            <div className="relative min-h-[260px] rounded-[22px] bg-[linear-gradient(180deg,#f3ebe1_0%,#e6d7ca_100%)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.06)]">
              <IconBadge className="border-white/50 bg-white/70">
                <Sparkles className="h-[18px] w-[18px] text-[var(--color-accent-dark)]" />
              </IconBadge>

              <div className="pr-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Nuevo drop
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">Gel tones</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
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
            </div>

            {/* Card 2 - B2B Ready */}
            <div className="relative min-h-[260px] rounded-[22px] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.05)]">
              <IconBadge>
                <Layers className="h-[18px] w-[18px] text-[var(--color-accent-dark)]" />
              </IconBadge>

              <div className="pr-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  B2B ready
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                  Menudeo, mayoreo y volumen
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
                  Compra por pieza, por caja o por volumen con una lectura comercial mucho más clara.
                </p>

                {/* Chips: wrap para no alargar */}
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
          </div>

          {/* Fila inferior: MOBILE 1 columna / DESKTOP 2 columnas asimétricas */}
          <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            {/* Card 3 - Social Commerce */}
            <div className="relative min-h-[240px] rounded-[22px] border border-[var(--color-line)] bg-[#faf5ef] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,33,28,0.04)]">
              <IconBadge className="bg-white/70">
                <ShoppingBag className="h-[18px] w-[18px] text-[var(--color-accent-dark)]" />
              </IconBadge>

              <div className="pr-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Social commerce
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em]">
                  De redes sociales al carrito
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
                  El ecommerce acompaña Instagram, Facebook y TikTok para convertir mejor.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                  Ver canales
                  <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)]" />
                </div>
              </div>
            </div>

            {/* Card 4 - Promesa visual */}
            <div className="relative min-h-[240px] rounded-[22px] border border-[var(--color-line)] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,33,28,0.04)]">
              <IconBadge>
                <ShieldCheck className="h-[18px] w-[18px] text-[var(--color-accent-dark)]" />
              </IconBadge>

              <div className="pr-12">
                <p className="text-sm font-semibold tracking-[-0.02em]">Promesa visual</p>
                <p className="mt-2 max-w-[28ch] text-sm leading-6 text-[var(--color-muted)] [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
                  Minimalista, más premium y más claro para comprar.
                </p>

                <div className="mt-4 h-px w-16 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />

                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Compra confiable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hint mobile */}
        <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)] md:hidden">
          Desliza en otras secciones para ver más
        </p>
      </div>
    </div>
  </Container>
</section>

)
}