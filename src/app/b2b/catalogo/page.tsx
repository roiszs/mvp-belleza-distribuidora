"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Search, BadgeCheck, Building2, FileText, Truck, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

type Product = {
id: string;
brand: string;
name: string;
description: string;
price: number; // menudeo
wholesalePrice?: number; // mayoreo
image: string;
available?: boolean;
tags?: string[];
category?: string; // para filtro categoría
};

const TOP_FILTERS = ["Todos", "Nuevo", "Oferta", "Mayoreo"] as const;

const CATEGORY_FILTERS = [
"Todas",
"Gel semipermanente",
"Acrílico y preparación",
"Tips y construcción",
"Decoración y herramientas",
] as const;

// ✅ Mock B2B (puedes reemplazar por tu data real)
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
category: "Gel semipermanente",
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
category: "Gel semipermanente",
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
category: "Acrílico y preparación",
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
category: "Decoración y herramientas",
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
category: "Decoración y herramientas",
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
category: "Tips y construcción",
},
];

function mxn(n: number) {
return new Intl.NumberFormat("es-MX", {
style: "currency",
currency: "MXN",
maximumFractionDigits: 0,
}).format(n);
}

/**

- Demo: escalas B2B por cantidad total del pedido
- 1–5 Menudeo
- 6–11 Mayoreo
- 12–23 Mayoreo+
- 24+ Volumen
*/
function getTier(totalQty: number) {
if (totalQty >= 24) return { key: "Volumen 24+", note: "Mejor precio por escala", nextAt: null as number | null };
if (totalQty >= 12) return { key: "Mayoreo+", note: "Optimiza margen por caja", nextAt: 24 };
if (totalQty >= 6) return { key: "Mayoreo", note: "Precio por pieza más competitivo", nextAt: 12 };
return { key: "Menudeo", note: "Compra flexible por pieza", nextAt: 6 };
}

function matchesTopFilter(p: Product, filter: (typeof TOP_FILTERS)[number]) {
if (filter === "Todos") return true;
const tags = (p.tags ?? []).map((t) => t.toLowerCase());
if (filter === "Nuevo") return tags.includes("nuevo");
if (filter === "Oferta") return tags.includes("oferta");
if (filter === "Mayoreo") return tags.includes("mayoreo");
return true;
}

function matchesCategory(p: Product, category: (typeof CATEGORY_FILTERS)[number]) {
if (category === "Todas") return true;
return (p.category ?? "").toLowerCase() === category.toLowerCase();
}

function computeUnitPrice(p: Product, tierKey: string) {
// Demo simple: el mayoreo base es p.wholesalePrice; a Mayoreo+ y Volumen se les aplica un delta.
const base = typeof p.wholesalePrice === "number" ? p.wholesalePrice : p.price;
if (tierKey === "Volumen 24+") return Math.max(1, Math.round(base * 0.92)); // -8%
if (tierKey === "Mayoreo+") return Math.max(1, Math.round(base * 0.96)); // -4%
if (tierKey === "Mayoreo") return base;
return p.price;
}

function Pill({ children }: { children: React.ReactNode }) {
return (
<span className="inline-flex items-center rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-black/60">
{children}
</span>
);
}

function SoftButton({
children,
active,
onClick,
}: {
children: React.ReactNode;
active?: boolean;
onClick?: () => void;
}) {
return (
<button
type="button"
onClick={onClick}
className={[
"rounded-full border px-4 py-2 text-[12px] font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
active ? "border-black/20 bg-white/70 text-black/80" : "border-black/10 bg-white/35 text-black/65 hover:bg-white/60 hover:border-black/15",
].join(" ")}
>
{children}
</button>
);
}

function ProductCard({
p,
tierKey,
onAdd,
onView,
}: {
p: Product;
tierKey: string;
onAdd: () => void;
onView: () => void;
}) {
const unit = computeUnitPrice(p, tierKey);
const discountVsRetail = Math.max(0, p.price - unit);

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
<div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background-image:radial-gradient(120%_120%_at_20%_10%,rgba(0,0,0,0.07)_0%,transparent_55%)]" />

  <div className="relative p-5">
    {/* Imagen */}
    <div className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white/40">
      <div className="absolute left-3 top-3 z-10 flex gap-2">
        {(p.tags ?? []).slice(0, 1).map((t) => (
          <span
            key={t}
            className="rounded-full border border-black/10 bg-white/75 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-black/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="absolute right-3 top-3 z-10">
        <span className="rounded-full border border-black/10 bg-white/75 px-3 py-1 text-[11px] font-medium text-black/65">
          {p.available === false ? "No disponible" : "Disponible"}
        </span>
      </div>

      <div className="relative aspect-[4/3] w-full">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
    </div>

    {/* Texto */}
    <div className="mt-4">
      <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">{p.brand}</div>
      <h3 className="mt-1 line-clamp-2 text-[16px] font-semibold text-black/85">{p.name}</h3>
      <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-black/55">{p.description}</p>
    </div>

    {/* Precio B2B */}
    <div className="mt-5 rounded-[18px] border border-black/10 bg-white/30 px-4 py-3">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">PRECIO ({tierKey})</div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[20px] font-semibold text-black/90">{mxn(unit)}</span>
            <span className="text-[11px] font-medium tracking-[0.18em] text-black/45">MXN</span>
          </div>
          {discountVsRetail > 0 && (
            <div className="mt-1 text-[12px] text-black/45">Ahorra {mxn(discountVsRetail)} vs menudeo</div>
          )}
        </div>

        <div className="text-right">
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">MENudeo</div>
          <div className="mt-1 text-[14px] font-semibold text-black/70">{mxn(p.price)}</div>
        </div>
      </div>
    </div>

    {/* Acciones */}
    <div className="mt-4 flex items-center gap-2">
      <button
        type="button"
        onClick={onAdd}
        className="h-11 flex-1 rounded-full bg-black px-4 text-[13px] font-medium text-white transition hover:opacity-90"
      >
        Agregar a pedido
      </button>
      <button
        type="button"
        onClick={onView}
        className="h-11 rounded-full border border-black/10 bg-white/55 px-5 text-[13px] font-medium text-black/75 transition hover:bg-white/75"
      >
        Ver
      </button>
    </div>
  </div>
</article>

);
}

export default function B2BCatalogPage() {
const [topFilter, setTopFilter] = useState<(typeof TOP_FILTERS)[number]>("Todos");
const [category, setCategory] = useState<(typeof CATEGORY_FILTERS)[number]>("Todas");
const [q, setQ] = useState("");
const [orderQty, setOrderQty] = useState(7); // demo: ya tiene 7 piezas en pedido
const [lastAdded, setLastAdded] = useState<string | null>(null);

const tier = getTier(orderQty);

const filtered = products
.filter((p) => matchesTopFilter(p, topFilter))
.filter((p) => matchesCategory(p, category))
.filter((p) => {
if (!q.trim()) return true;
const hay = `${p.name} ${p.brand} ${(p.tags ?? []).join(" ")} ${p.category ?? ""}`.toLowerCase();
return hay.includes(q.trim().toLowerCase());
});

const progress =
tier.nextAt == null ? 100 : Math.min(100, Math.round((orderQty / tier.nextAt) * 100));

return (
<SectionShell
eyebrow="B2B"
title="Catálogo B2B — Studio Nude"
subtitle="Vista demo con escalas por volumen, pedido recurrente y señales de operación. (Sin lógica real todavía)."
rightSlot={
<div className="hidden items-center gap-2 md:flex">
<Pill>
<BadgeCheck className="mr-2 h-4 w-4" />
Cuenta verificada
</Pill>
<Pill>
<Building2 className="mr-2 h-4 w-4" />
Neto 7
</Pill>
</div>
}
>
{/* HEADER B2B PANEL */}
<div className="rounded-[24px] border border-black/10 bg-white/35 p-5 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)]">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<div className="text-[11px] font-medium tracking-[0.22em] text-black/45">CUENTA</div>
<div className="mt-1 text-[18px] font-semibold text-black/85">Studio Nude</div>
<div className="mt-1 text-[13px] text-black/55">Condición: Neto 7 · Pago: Transferencia · Estado: Verificada</div>
</div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <div className="rounded-[18px] border border-black/10 bg-white/30 px-4 py-3">
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">NIVEL</div>
          <div className="mt-1 text-[14px] font-semibold text-black/80">{tier.key}</div>
        </div>
        <div className="rounded-[18px] border border-black/10 bg-white/30 px-4 py-3">
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">PEDIDO</div>
          <div className="mt-1 text-[14px] font-semibold text-black/80">{orderQty} piezas</div>
        </div>
        <div className="rounded-[18px] border border-black/10 bg-white/30 px-4 py-3">
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">ENVÍO</div>
          <div className="mt-1 flex items-center gap-2 text-[14px] font-semibold text-black/80">
            <Truck className="h-4 w-4" />
            24–48h
          </div>
        </div>
      </div>
    </div>

    {/* Progress to next tier */}
    <div className="mt-4 rounded-[18px] border border-black/10 bg-white/25 px-4 py-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">ESCALAS</div>
          <div className="mt-1 text-[13px] text-black/60">
            {tier.nextAt == null ? (
              <>Ya estás en <span className="font-semibold text-black/80">{tier.key}</span>. {tier.note}.</>
            ) : (
              <>
                Te faltan{" "}
                <span className="font-semibold text-black/80">{Math.max(0, tier.nextAt - orderQty)}</span>{" "}
                piezas para <span className="font-semibold text-black/80">{tier.nextAt === 12 ? "Mayoreo+" : "Volumen 24+"}</span>.
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Pill>
            <FileText className="mr-2 h-4 w-4" />
            Cotización rápida
          </Pill>
          <Pill>
            <Sparkles className="mr-2 h-4 w-4" />
            Reorden
          </Pill>
        </div>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/10">
        <div className="h-full rounded-full bg-black/35" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Pill>1–5 Menudeo</Pill>
        <Pill>6–11 Mayoreo</Pill>
        <Pill>12–23 Mayoreo+</Pill>
        <Pill>24+ Volumen</Pill>
      </div>
    </div>

    {lastAdded && (
      <div className="mt-3 text-[13px] text-black/60">
        ✅ Agregaste <span className="font-semibold text-black/80">{lastAdded}</span> · Pedido ahora:{" "}
        <span className="font-semibold text-black/80">{orderQty} piezas</span>
      </div>
    )}
  </div>

  {/* FILTER BAR */}
  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex flex-wrap gap-2">
      {TOP_FILTERS.map((t) => (
        <SoftButton key={t} active={topFilter === t} onClick={() => setTopFilter(t)}>
          {t}
        </SoftButton>
      ))}
    </div>

    <div className="relative w-full sm:w-[380px]">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
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
      <SoftButton key={c} active={category === c} onClick={() => setCategory(c)}>
        {c}
      </SoftButton>
    ))}
  </div>

  <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent)]" />

  {/* GRID */}
  <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {filtered.map((p) => (
      <ProductCard
        key={p.id}
        p={p}
        tierKey={tier.key}
        onAdd={() => {
          setOrderQty((x) => x + 1);
          setLastAdded(p.name);
        }}
        onView={() => {
          // ✅ para que no rompa nada: usamos el mismo patrón que tu proyecto ya usa.
          // Si tu “ver” real va a /producto/[slug], solo cambia esta línea a tu slug real.
          const slug = p.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\\u0300-\\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          window.location.href = `/producto/${slug}`;
        }}
      />
    ))}
  </div>

 {/* Footer small nav */}
<div className="mt-8 flex items-center justify-between text-[13px] text-black/55">
  <span>{filtered.length} productos</span>

  <Link
    href="/b2b"
    className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-white/60 px-5 text-[13px] font-semibold text-black/80 shadow-[0_1px_0_rgba(255,255,255,0.75)] transition hover:border-black/15 hover:bg-white/80 hover:shadow-[0_10px_22px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15"
  >
    Ver visión B2B <span className="text-black/40">↗</span>
  </Link>
</div>

</SectionShell>
);
}
