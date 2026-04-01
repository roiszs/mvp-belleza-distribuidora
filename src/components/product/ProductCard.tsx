import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types/product'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const savings =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
      : null

  const tiers = product.volumeTiers?.slice(0, 3) ?? []

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="surface-card group overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(43,33,28,0.08)]"
    >
      <div className="relative aspect-[4/4.5] overflow-hidden bg-[#f3ede6]">
        {product.badge ? (
          <div className="absolute left-4 top-4 z-20">
            <Badge tone={product.isOnSale ? 'accent' : 'default'}>{product.badge}</Badge>
          </div>
        ) : null}

        {savings ? (
          <div className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)]">
            Ahorra {savings}%
          </div>
        ) : null}

        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />

        {product.images[1] ? (
          <Image
            src={product.images[1]}
            alt={`${product.name} alterna`}
            fill
            className="object-cover opacity-0 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
          />
        ) : null}

        <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.00)_0%,rgba(31,26,23,0.18)_100%)] p-4">
          <div className="flex items-center justify-between text-white/95">
            <span className="text-xs uppercase tracking-[0.16em]">{product.brand}</span>
            <span className="text-xs uppercase tracking-[0.16em]">{product.stock} stock</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-medium leading-snug">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--color-muted)]">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold">{formatPrice(product.price)}</p>
              {product.compareAtPrice ? (
                <p className="text-sm text-[var(--color-muted)] line-through">
                  {formatPrice(product.compareAtPrice)}
                </p>
              ) : null}
            </div>

            {product.wholesalePrice ? (
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Mayoreo desde {formatPrice(product.wholesalePrice)}
              </p>
            ) : null}
          </div>

          <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] transition duration-300 group-hover:translate-x-1">
            Ver detalle →
          </span>
        </div>

        {tiers.length ? (
          <div className="flex flex-wrap gap-2">
            {tiers.map((tier) => (
              <span
                key={tier.label}
                className="rounded-full bg-[var(--color-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[var(--color-text)]"
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