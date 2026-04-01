import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types/product'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
const tiers = product.volumeTiers?.slice(0, 3) ?? []

return (
<Link
href={`/producto/${product.slug}`}
className="group overflow-hidden rounded-[24px] border border-[var(--color-line)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(43,33,28,0.05)]"
>
<div className="relative aspect-[4/4.5] overflow-hidden bg-[#f3ede6]">
{product.badge ? (
<div className="absolute left-4 top-4 z-20">
<Badge tone={product.isOnSale ? 'accent' : 'default'}>{product.badge}</Badge>
</div>
) : null}
<Image
      src={product.images[0]}
      alt={product.name}
      fill
      className="object-cover transition duration-700 group-hover:scale-[1.04]"
    />

    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.00)_55%,rgba(31,26,23,0.16)_100%)]" />
  </div>

  <div className="p-4">
    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
      {product.brand}
    </p>

    <h3 className="mt-2 text-base font-semibold leading-6 tracking-[-0.02em]">
      {product.name}
    </h3>

    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
      {product.shortDescription}
    </p>

    <div className="mt-4 grid gap-2 rounded-[18px] bg-[#faf5ef] p-3">
      {product.presentation ? (
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="text-[var(--color-muted)]">Presentación</span>
          <span className="font-medium text-[var(--color-text)]">{product.presentation}</span>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="text-[var(--color-muted)]">Tamaño</span>
        <span className="font-medium text-[var(--color-text)]">{product.sizeLabel ?? '—'}</span>
      </div>

      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="text-[var(--color-muted)]">Peso</span>
        <span className="font-medium text-[var(--color-text)]">{product.weightLabel ?? '—'}</span>
      </div>
    </div>

    <div className="mt-4 flex items-end justify-between gap-3">
      <div>
        <p className="text-base font-semibold tracking-[-0.02em]">
          {formatPrice(product.price)}
        </p>

        {product.wholesalePrice ? (
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Mayoreo desde {formatPrice(product.wholesalePrice)}
          </p>
        ) : null}
      </div>

      <span className="text-sm text-[var(--color-muted)]">→</span>
    </div>

    {tiers.length ? (
      <div className="mt-4 flex flex-wrap gap-2">
        {tiers.map((tier) => (
          <span
            key={tier.label}
            className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)]"
          >
            {tier.minQty}+ pzs
          </span>
        ))}
      </div>
    ) : null}
  </div>
</Link>
)
}