import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function PromoBanner() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="overflow-hidden rounded-[34px] bg-[var(--color-accent-dark)] px-6 py-10 text-white md:px-10 md:py-14">
          <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Ofertas & promociones</p>
              <h2 className="mt-4 font-serif-display text-3xl md:text-5xl">
                Promociones visibles sin perder elegancia de marca.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                El objetivo no es saturar. Es mostrar oportunidad comercial con una interfaz que siga viéndose premium.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button href="/catalogo" variant="secondary">Ver promociones</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}