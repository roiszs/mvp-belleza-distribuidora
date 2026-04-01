import { Container } from '@/components/layout/Container'

const items = [
{
title: 'Envíos nacionales',
text: 'La tienda puede comunicar cobertura, tiempos y opciones de envío de una forma más clara.',
},
{
title: 'Compra con confianza',
text: 'Una mejor jerarquía visual ayuda a que el catálogo se sienta más ordenado y profesional.',
},
{
title: 'Precios por volumen',
text: 'La presentación del producto ya permite visualizar menudeo, mayoreo y volumen.',
},
{
title: 'Escalable a marketplace',
text: 'La estructura visual deja ver que el ecommerce puede crecer a una operación más robusta.',
},
]

export function TrustBadges() {
return (
<section className="section-padding pt-2 md:pt-4">
<Container>
<div className="rounded-[28px] border border-[var(--color-line)] bg-[#fcf8f3] p-5 md:p-6">
<div className="mb-5">
<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
Confianza
</p>
<h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
Señales claras de compra y crecimiento
</h3>
</div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[24px] border border-[var(--color-line)] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.05)]"
          >
            <h3 className="text-base font-semibold tracking-[-0.02em]">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>

)
}