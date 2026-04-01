import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export function PromoBanner() {
return (
<section className="section-padding pt-0">
<Container>
<div className="overflow-hidden rounded-[28px] bg-[var(--color-accent-dark)] px-6 py-8 text-white md:px-8 md:py-10">
<div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
<div>
<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
Ofertas y promociones
</p>
<h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
Promociones visibles, sin perder el look premium de la tienda.
</h2>
<p className="mt-3 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
Una selección de productos pensada para comunicar precio, oportunidad y compra rápida
sin romper la estética limpia del ecommerce.
</p>
</div>

        <div className="md:justify-self-end">
          <Button href="/catalogo" variant="light">
            Ver promociones
          </Button>
        </div>
      </div>
    </div>
  </Container>
</section>

)
}