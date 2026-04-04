import Image from "next/image"
import Link from "next/link"
import { SectionShell } from "@/components/ui/SectionShell"
import { Search } from "lucide-react"

type Product = {
id: string
brand: string
name: string
description: string
price: number
wholesalePrice?: number
image: string
available?: boolean
tags?: string[]
// ✅ IMPORTANTE: este slug debe existir para que "Ver" vaya a /producto/[slug]
slug: string
}

const TOP_FILTERS = ["Todos", "Nuevo", "Oferta", "Mayoreo"] as const

const CATEGORY_FILTERS = [
"Todas",
"Gel semipermanente",
"Acrílico y preparación",
"Tips y construcción",
"Decoración y herramientas",
] as const

// ✅ Mock: reemplaza esto con tus productos reales
// IMPORTANTE: Asegúrate que estos slugs coincidan con tu ruta real /producto/[slug]
const products: Product[] = [
{
id: "p1",
brand: "LE MUSSA",
name: "Gel Semipermanente LeMussa Gama A",
description: "Color profesional para uso en salón, cabina y sets.",
price: 90,
wholesalePrice: 85,
image: "/images/products/gel-semipermanente-a.jpeg",
available: true,
tags: ["MAYOREO"],
slug: "gel-semipermanente-lemussa-gama-a",
},
{
id: "p2",
brand: "LE MUSSA",
name: "Gel Semipermanente The New Nude",
description: "Tonos nude con enfoque visual limpio y comercial.",
price: 90,
wholesalePrice: 85,
image: "/images/products/gel-semipermanente-.jpeg",
available: true,
tags: ["NUEVO"],
// ✅ Este es el que mostraste en tu screenshot
slug: "gel-semipermanente-le-mussa-the-new-nude",
},
{
id: "p3",
brand: "LE MUSSA",
name: "Polvo Acrílico para Uña 12 Piezas",
description: "Presentación comercial con escalas claras para crecer.",
price: 80,
wholesalePrice: 75,
image: "/images/products/polvo-acrilico.jpeg",
available: true,
tags: ["MAYOREO"],
slug: "polvo-acrilico-para-una-12-piezas",
},
{
id: "p4",
brand: "LE MUSSA",
name: "Efecto Espejo 6pz Azul",
description: "Decoración visual para complementar sets y compras rápidas.",
price: 35,
wholesalePrice: 75,
image: "/images/products/efecto-espejo-azul.jpeg",
available: true,
tags: ["OFERTA"],
slug: "efecto-espejo-6pz-azul",
},
{
id: "p5",
brand: "LE MUSSA",
name: "Efecto Flake 12pz",
description: "Set decorativo pensado para variedad y venta complementaria.",
price: 70,
wholesalePrice: 85,
image: "/images/products/flake-1.jpeg",
available: true,
tags: ["TOP VENTAS"],
slug: "efecto-flake-12pz",
},
{
id: "p6",
brand: "JR",
name: "Tips Soft Gel Coffin Cristal 240pz",
description: "Formato ideal para construcción rápida y catálogo sólido.",
price: 50,
wholesalePrice: 85,
image: "/images/products/coffin-1.jpeg",
available: true,
tags: ["NUEVO"],
slug: "tips-soft-gel-coffin-cristal-240pz",
},
]

function mxn(n: number) {
return new Intl.NumberFormat("es-MX", {
style: "currency",
currency: "MXN",
maximumFractionDigits: 0,
}).format(n)
}

function TagPill({ label }: { label: string }) {
return (
<span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-black/60">
{label}
</span>
)
}

function ProductCard({ p }: { p: Product }) {
const discount =
typeof p.wholesalePrice === "number" ? Math.max(0, p.price - p.wholesalePrice) : 0

const isAvailable = p.available !== false

return (
<article
className={[
"group relative overflow-hidden rounded-[22px] border border-black/10",
"bg-white/35 backdrop-blur-sm",
"shadow-[0_1px_0_rgba(255,255,255,0.65)]",
"transition duration-300 hover:bg-white/55 hover:border-black/15",
].join(" ")}
>
{/* brillo sutil */}
<div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background-image:radial-gradient(120%_120%_at_20%_10%,rgba(0,0,0,0.06)_0%,transparent_55%)]" />

  <div className="relative p-5">
    {/* Imagen */}
    <div className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white/40">
      <div className="absolute left-3 top-3 z-10 flex gap-2">
        {(p.tags ?? []).slice(0, 1).map((t) => (
          <span
            key={t}
            className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-black/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="absolute right-3 top-3 z-10">
        <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-black/65">
          {isAvailable ? "Disponible" : "No disponible"}
        </span>
      </div>

      <div className="relative aspect-[4/3] w-full">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 25vw"
          priority={false}
        />
      </div>
    </div>

    {/* Texto */}
    <div className="mt-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">
            {p.brand}
          </div>
          <h3 className="mt-1 line-clamp-2 text-[16px] font-semibold text-black/85">
            {p.name}
          </h3>
        </div>
      </div>

      <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-black/55">{p.description}</p>
    </div>

    {/* Precio */}
    <div className="mt-5 rounded-[18px] border border-black/10 bg-white/30 px-4 py-3">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">PRECIO</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[20px] font-semibold text-black/90">{mxn(p.price)}</span>
            <span className="text-[11px] font-medium tracking-[0.18em] text-black/45">MXN</span>
          </div>
        </div>

        {typeof p.wholesalePrice === "number" && (
          <div className="text-right">
            <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">MAYOREO</div>
            <div className="mt-1 text-[14px] font-semibold text-black/80">
              {mxn(p.wholesalePrice)}
            </div>
            {discount > 0 && <div className="mt-1 text-[12px] text-black/45">Ahorra {mxn(discount)}</div>}
          </div>
        )}
      </div>
    </div>

    {/* Acciones (siempre al fondo) */}
    <div className="mt-4 flex items-center gap-2">
      <button
        type="button"
        disabled={!isAvailable}
        className={[
          "h-11 flex-1 rounded-full bg-black px-4 text-[13px] font-medium text-white transition hover:opacity-90",
          !isAvailable ? "opacity-40 cursor-not-allowed hover:opacity-40" : "",
        ].join(" ")}
      >
        Agregar
      </button>

      {/* ✅ AQUÍ está el fix: Link a /producto/[slug] */}
      <Link
        href={`/producto/${p.slug}`}
        className="h-11 rounded-full border border-black/10 bg-white/55 px-5 text-[13px] font-medium text-black/75 transition hover:bg-white/70 inline-flex items-center justify-center"
      >
        Ver
      </Link>
    </div>
  </div>
</article>

)
}

export default function CatalogPage() {
return (
<SectionShell
eyebrow="Catálogo"
title="Catálogo claro, útil y listo para crecer"
subtitle="Explora gel semipermanente, acrílico, tips, decoración y herramientas con una navegación más limpia y una lectura más útil para compra y envío."
>
{/* FILTER BAR */}
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex flex-wrap gap-2">
{TOP_FILTERS.map((t) => (
<button
key={t}
type="button"
className={[
"rounded-full border border-black/10 bg-white/40 px-4 py-2",
"text-[12px] font-medium text-black/70",
"transition duration-300 hover:bg-white/65 hover:border-black/15",
"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
].join(" ")}
>
{t}
</button>
))}
</div>

    <div className="relative w-full sm:w-[380px]">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
      <input
        className={[
          "h-11 w-full rounded-full border border-black/10 bg-white/40",
          "pl-10 pr-4 text-[13px] text-black/80",
          "outline-none placeholder:text-black/35",
          "transition duration-300 focus:bg-white/65 focus:border-black/15",
        ].join(" ")}
        placeholder="Buscar por producto, marca o categoría"
      />
    </div>
  </div>

  {/* CATEGORY PILLS */}
  <div className="mt-4 flex flex-wrap gap-2">
    {CATEGORY_FILTERS.map((c) => (
      <button
        key={c}
        type="button"
        className={[
          "rounded-full border border-black/10 bg-white/30 px-4 py-2",
          "text-[12px] font-medium text-black/65",
          "transition duration-300 hover:bg-white/55 hover:border-black/15",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
        ].join(" ")}
      >
        {c}
      </button>
    ))}
  </div>

  <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent)]" />

  {/* GRID */}
  <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((p) => (
      <ProductCard key={p.id} p={p} />
    ))}
  </div>
</SectionShell>

)
}