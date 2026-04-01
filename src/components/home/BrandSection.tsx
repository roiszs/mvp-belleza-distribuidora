import { brands } from '@/data/brands'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

export function BrandSection() {
return (
<section className="section-padding pb-6 md:pb-8">
<Container>
<SectionHeader
eyebrow="Marcas"
title="Marcas con presencia clara dentro del catálogo"
description="Una mejor presentación de marcas ayuda a que la tienda se sienta más seria, más ordenada y mejor surtida."
/>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="flex min-h-[96px] items-center justify-center rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-8 text-center text-base font-semibold tracking-[-0.02em] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.05)]"
        >
          {brand.name}
        </div>
      ))}
    </div>
  </Container>
</section>

)
}