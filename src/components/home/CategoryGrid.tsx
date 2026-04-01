import Image from 'next/image'
import Link from 'next/link'
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
            <Link
              key={category.id}
              href="/catalogo"
              className="group surface-card overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/4.8] overflow-hidden bg-[#efe5da]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.00)_30%,rgba(31,26,23,0.30)_100%)]" />
                <div className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[var(--color-text)]">
                  Explorar
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium transition duration-300 group-hover:translate-y-[-2px]">
                    {category.name}
                  </h3>
                  <span className="text-sm text-[var(--color-muted)] transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {category.description}
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Ver colección
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}