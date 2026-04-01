'use client'

import { useMemo, useState } from 'react'
import { products } from '@/data/products'
import { ProductGrid } from '@/components/product/ProductGrid'

type TabKey = 'todos' | 'nuevo' | 'oferta' | 'mayoreo'

const tabs: { key: TabKey; label: string }[] = [
{ key: 'todos', label: 'Todos' },
{ key: 'nuevo', label: 'Nuevo' },
{ key: 'oferta', label: 'Oferta' },
{ key: 'mayoreo', label: 'Mayoreo' },
]

export function CatalogView() {
const [activeTab, setActiveTab] = useState<TabKey>('todos')
const [activeCategory, setActiveCategory] = useState<string>('Todas')
const [search, setSearch] = useState('')

const categories = useMemo(() => {
const unique = Array.from(new Set(products.map((product) => product.category)))
return ['Todas', ...unique]
}, [])

const filteredProducts = useMemo(() => {
let result = [...products]
if (activeTab === 'nuevo') {
    result = result.filter((product) => product.isNew)
  }
  
  if (activeTab === 'oferta') {
    result = result.filter((product) => product.isOnSale)
  }
  
  if (activeTab === 'mayoreo') {
    result = result.filter((product) => product.isWholesale)
  }
  
  if (activeCategory !== 'Todas') {
    result = result.filter((product) => product.category === activeCategory)
  }
  
  if (search.trim()) {
    const term = search.toLowerCase()
    result = result.filter((product) => {
      return (
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.subcategory.toLowerCase().includes(term)
      )
    })
  }
  
  return result
}, [activeTab, activeCategory, search])

return (
<div className="space-y-6">
<div className="rounded-[20px] border border-[var(--color-line)] bg-[rgba(250,247,242,0.96)] p-3 shadow-[0_10px_30px_rgba(43,33,28,0.06)] backdrop-blur-md md:sticky md:top-16 md:z-30 md:rounded-[24px] md:p-4">
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
<div className="flex flex-wrap gap-2">
{tabs.map((tab) => (
<button
key={tab.key}
onClick={() => setActiveTab(tab.key)}
className={`rounded-full px-4 py-2 text-sm font-semibold transition ${                     activeTab === tab.key                       ? 'bg-[var(--color-accent-dark)] text-white'                       : 'border border-[var(--color-line)] bg-white text-[var(--color-text)] hover:bg-[var(--color-soft)]'                   }`}
>
{tab.label}
</button>
))}
</div>
<div className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-muted)]">
          {filteredProducts.length} productos
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
        <input
          type="text"
          placeholder="Buscar por producto, marca o categoría"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="min-h-[44px] rounded-full border border-[var(--color-line)] bg-white px-4 text-sm outline-none placeholder:text-[var(--color-muted)]"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? 'bg-[var(--color-soft)] text-[var(--color-text)]'
                  : 'border border-[var(--color-line)] bg-white text-[var(--color-muted)] hover:bg-[#faf5ef]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="grid gap-3 rounded-[20px] border border-[var(--color-line)] bg-white p-4 md:grid-cols-3 md:gap-4 md:rounded-[24px] md:p-5">
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Compra más clara
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text)]">
        Cada producto muestra presentación, tamaño y peso para facilitar la compra y la preparación de envío.
      </p>
    </div>

    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Menudeo + mayoreo
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text)]">
        Puedes visualizar productos unitarios, ofertas y opciones con precio por volumen.
      </p>
    </div>

    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Minimalista y útil
      </p>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text)]">
        El catálogo mantiene una presentación limpia sin perder información práctica para operación.
      </p>
    </div>
  </div>

  <ProductGrid products={filteredProducts} />
</div>
)
}