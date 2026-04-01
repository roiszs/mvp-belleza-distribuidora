import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { ProductGrid } from '@/components/product/ProductGrid'
import { featuredProducts } from '@/data/products'

export function NewArrivals() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Productos"
          title="Nuevos lanzamientos y favoritos"
          description="La idea aquí es enseñar catálogo con una presentación más aspiracional, pero sin perder intención de compra."
        />
        <ProductGrid products={featuredProducts} />
      </Container>
    </section>
  )
}