import { brands } from '@/data/brands'
import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'

export function BrandSection() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Marcas"
          title="Marcas con mejor presencia visual"
          description="Este bloque ayuda a transmitir surtido, distribución y mayor robustez comercial."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="surface-card flex min-h-[120px] items-center justify-center rounded-[24px] px-6 text-center text-lg font-medium"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}