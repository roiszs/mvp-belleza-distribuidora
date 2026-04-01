import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { ProductGrid } from '@/components/product/ProductGrid'
import { featuredProducts } from '@/data/products'

export function NewArrivals() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Destacados"
          title="Productos nuevos y favoritos del catálogo"
          description="Una selección pensada para mostrar lo más buscado en gel, acrílico, decoración y herramientas."
        />

        <ProductGrid products={featuredProducts} />
      </Container>
    </section>
  )
}