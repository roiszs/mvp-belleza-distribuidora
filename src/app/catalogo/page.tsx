import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { ProductGrid } from '@/components/product/ProductGrid'
import { products } from '@/data/products'

const tabs = ['Todos', 'Nuevo', 'Oferta', 'Mayoreo']
const filters = ['Geles', 'Acrílico', 'Herramientas', 'Cuidado']

export default function CatalogPage() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Catálogo"
          title="Descubre una tienda más ordenada, clara y lista para vender"
          description="Aquí mostramos una estructura comercial moderna con filtros visuales simples y producto mejor presentado."
        />

        <div className="mb-8 flex flex-col gap-4 rounded-[28px] border border-[var(--color-line)] bg-white p-5">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  index === 0
                    ? 'bg-[var(--color-accent-dark)] text-white'
                    : 'bg-[var(--color-soft)] text-[var(--color-text)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-2 text-sm text-[var(--color-muted)]"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <ProductGrid products={products} />
      </Container>
    </section>
  )
}