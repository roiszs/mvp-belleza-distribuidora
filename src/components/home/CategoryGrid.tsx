import Image from 'next/image'
import Link from 'next/link'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Container } from '@/components/layout/Container'
import { categories } from '@/data/categories'

export function CategoryGrid() {
  return (
    <section className="section-padding pt-6 md:pt-8">
      <Container>
        <SectionHeader
          eyebrow="Categorías"
          title="Explora por línea de producto"
          description="Una navegación más clara, limpia y lista para compra."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="/catalogo"
              className="group surface-card overflow-hidden rounded-[24px] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.05)]"
            >
              <div className="relative aspect-[4/3.5] overflow-hidden bg-[#efe5da] md:aspect-[4/3.9]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.00)_45%,rgba(31,26,23,0.22)_100%)]" />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-text)]">
                  Explorar
                </div>
              </div>

              <div className="p-3.5 md:p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-[-0.02em]">
                    {category.name}
                  </h3>
                  <span className="text-sm text-[var(--color-muted)]">→</span>
                </div>

                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}