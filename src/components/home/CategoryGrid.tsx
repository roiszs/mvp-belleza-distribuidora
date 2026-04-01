import Image from 'next/image'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Container } from '@/components/layout/Container'
import { categories } from '@/data/categories'

export function CategoryGrid() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Categorías"
          title="Explora por línea de producto"
          description="Una navegación más clara ayuda a que el catálogo se sienta ordenado, moderno y listo para crecer."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article key={category.id} className="surface-card overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/4.6] bg-[#efe5da]">
                <Image src={category.image} alt={category.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{category.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}