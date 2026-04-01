import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types/product'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="surface-card group overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/4.3] overflow-hidden bg-[#f3ede6]">
        {product.badge ? (
          <div className="absolute left-4 top-4 z-10">
            <Badge tone={product.isOnSale ? 'accent' : 'default'}>{product.badge}</Badge>
          </div>
        ) : null}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="space-y-3 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">{product.brand}</p>
          <h3 className="mt-2 text-lg font-medium leading-snug">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--color-muted)]">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-base font-semibold">{formatPrice(product.price)}</p>
            {product.wholesalePrice ? (
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Mayoreo desde {formatPrice(product.wholesalePrice)}
              </p>
            ) : null}
          </div>

          <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
            Ver más
          </span>
        </div>
      </div>
    </Link>
  )
}