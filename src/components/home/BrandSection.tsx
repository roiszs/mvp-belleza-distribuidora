import { Container } from '@/components/layout/Container'
import { brands } from '@/data/brands'
import type { Brand } from '@/types/brand'

function BrandPill({ brand }: { brand: Brand }) {
const accent = brand.accent ?? '148 163 184' // fallback slate

return (
<button
type="button"
className={[
'group relative w-full overflow-hidden rounded-full',
'border border-black/10 bg-white/35 backdrop-blur-sm',
'px-6 py-3 text-center',
'text-[13px] font-medium tracking-[-0.01em] text-black/80',
'transition duration-300 ease-out',
'hover:-translate-y-[2px] hover:border-black/15 hover:bg-white/55',
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15',
].join(' ')}
style={{
// CSS var para usar el accent (rgb "r g b")
['--accent' as any]: accent,
boxShadow: '0 1px 0 rgba(255,255,255,0.65) inset',
}}
aria-label={`Marca ${brand.name}`}
>
{/* tinte elegante al hover */}
<span
className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
style={{
background:
'radial-gradient(120% 120% at 30% 20%, rgba(var(--accent)/0.22) 0%, rgba(var(--accent)/0.08) 35%, rgba(255,255,255,0) 70%)',
}}
/>

  {/* brillo sutil */}
  <span
  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
  style={{
    backgroundImage: `
      radial-gradient(140% 140% at 25% 15%,
        rgb(var(--accent) / 0.48) 0%,
        rgb(var(--accent) / 0.22) 35%,
        rgb(255 255 255 / 0) 72%
      ),
      radial-gradient(120% 120% at 85% 85%,
        rgb(var(--accent) / 0.22) 0%,
        rgb(255 255 255 / 0) 65%
      )
    `,
  }}
/>

  {/* texto */}
  <span className="relative z-10">{brand.name}</span>
</button>

)
}

export function BrandSection() {
return (
<section className="py-14">
<Container>
{/* envolvente premium */}
<div className="rounded-[28px] border border-black/10 bg-white/25 p-7 backdrop-blur-sm">
{/* header */}
<div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/35 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-black/60">
<span className="h-1.5 w-1.5 rounded-full bg-black/30" />
MARCAS
</div>

          <h2 className="mt-4 font-display text-[2.1rem] leading-[1.05] text-black/90 md:text-[2.6rem]">
            Marcas con presencia clara dentro del catálogo
          </h2>

          <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-black/55">
            Una mejor presentación de marcas ayuda a que la tienda se sienta más seria, más ordenada y
            mejor surtida.
          </p>
        </div>

        {/* chips derecha (opcionales, ligeros) */}
        <div className="mt-3 flex gap-2 md:mt-0">
          <span className="rounded-full border border-black/10 bg-white/35 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-black/55">
            DISTRIBUIDORA
          </span>
          <span className="rounded-full border border-black/10 bg-white/35 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-black/55">
            CURADO VISUAL
          </span>
        </div>
      </div>

      {/* grid marcas */}
      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand) => (
          <BrandPill key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  </Container>
</section>

)
}