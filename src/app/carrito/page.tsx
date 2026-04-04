import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, Box, Package, Scale, Truck } from "lucide-react";

type CartItem = {
  id: string;
  brand: string;
  name: string;
  image: string;
  qty: number;
  unitPrice: number;
  presentation: string;
  sizeLabel: string; // e.g. "15 ml"
  weightKg: number; // per item
};

function mxn(n: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}

function Line() {
  return (
    <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent)]" />
  );
}

function Pill({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-black/60">
      {icon}
      {children}
    </span>
  );
}

function SoftPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[24px] border border-black/10",
        "bg-white/35 backdrop-blur-sm",
        "shadow-[0_1px_0_rgba(255,255,255,0.65)]",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(120%_120%_at_18%_10%,rgba(0,0,0,0.05)_0%,transparent_55%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function ItemCard({ item }: { item: CartItem }) {
  const total = item.unitPrice * item.qty;
  const totalWeight = item.weightKg * item.qty;

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[22px] border border-black/10",
        "bg-white/35 backdrop-blur-sm",
        "shadow-[0_1px_0_rgba(255,255,255,0.65)]",
        "transition duration-300 hover:bg-white/55 hover:border-black/15",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background-image:radial-gradient(120%_120%_at_20%_10%,rgba(0,0,0,0.06)_0%,transparent_55%)]" />

      <div className="relative p-4 sm:p-5">
        <div className="flex gap-4">
          {/* thumb */}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[18px] border border-black/10 bg-white/40 sm:h-24 sm:w-24">
            <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
          </div>

          {/* main */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">
                  {item.brand}
                </div>
                <h3 className="mt-1 line-clamp-2 text-[15px] font-semibold text-black/85 sm:text-[16px]">
                  {item.name}
                </h3>

                <div className="mt-2 flex flex-wrap gap-2">
                  <Pill icon={<Box className="h-3.5 w-3.5" />}>{item.presentation}</Pill>
                  <Pill icon={<Package className="h-3.5 w-3.5" />}>{item.sizeLabel}</Pill>
                  <Pill icon={<Scale className="h-3.5 w-3.5" />}>{totalWeight.toFixed(2)} kg</Pill>
                </div>
              </div>

              {/* price block */}
              <div className="text-right">
                <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">
                  {mxn(item.unitPrice)}{" "}
                  <span className="tracking-normal text-black/35">c/u</span>
                </div>
                <div className="mt-1 text-[18px] font-semibold text-black/85">{mxn(total)}</div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-3 py-1 text-[12px] font-medium text-black/70">
                  Cantidad: <span className="font-semibold">{item.qty}</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Line />
            </div>

            {/* ✅ aquí va tu texto + botones EN SU SECCIÓN (no absolute) */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[12px] text-black/55">
                Revisa presentación, tamaño y peso estimado para una operación más ordenada.
              </div>

              {/* ✅ botones alineados a la derecha */}
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:justify-end">
                {/* Botón blanco */}
                <Link
                  href="/catalogo"
                  className={[
                    "h-11",
                    "inline-flex items-center justify-center",
                    "rounded-full border border-black/15 bg-white/70",
                    "px-5 text-[13px] font-semibold text-black/80",
                    "whitespace-nowrap backdrop-blur-sm",
                    "transition hover:bg-white/90 hover:border-black/20",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                  ].join(" ")}
                >
                  Seguir comprando
                </Link>

                {/* Botón negro */}
                
                <Link
                  href={`/producto/${item.id}`}
                  className={[
                    "h-11",
                    "inline-flex items-center justify-center gap-2",
                    "rounded-full border border-black/15 bg-white/70 px-6",
                    "text-[13px] font-semibold text-black/80",
                    "whitespace-nowrap backdrop-blur-sm",
                    "shadow-[0_10px_26px_rgba(0,0,0,0.08)]",
                    "transition hover:bg-white/90 hover:border-black/20 hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
                  ].join(" ")}
                >
                  Ver producto <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CartPage() {
  const items: CartItem[] = [
    {
      id: "gel-semipermanente-lemussa-gama-a",
      brand: "LE MUSSA",
      name: "Gel Semipermanente LeMussa Gama A",
      image: "/images/products/gel-semipermanente-a.jpeg",
      qty: 2,
      unitPrice: 90,
      presentation: "Botella individual",
      sizeLabel: "15 ml",
      weightKg: 0.08,
    },
    {
      id: "efecto-espejo-6pz-azul",
      brand: "LE MUSSA",
      name: "Efecto Espejo 6pz Azul",
      image: "/images/products/efecto-espejo-azul.jpeg",
      qty: 1,
      unitPrice: 35,
      presentation: "Set individual",
      sizeLabel: "6 pzs",
      weightKg: 0.06,
    },
  ];

  const subtotal = items.reduce((acc, it) => acc + it.unitPrice * it.qty, 0);
  const weight = items.reduce((acc, it) => acc + it.weightKg * it.qty, 0);
  const shipping = 149;
  const total = subtotal + shipping;

  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(1200px_500px_at_25%_10%,rgba(0,0,0,0.06),transparent_60%),radial-gradient(900px_420px_at_80%_30%,rgba(0,0,0,0.04),transparent_55%)]" />

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-4 py-2 text-[11px] font-medium tracking-[0.22em] text-black/60">
              <Truck className="h-4 w-4" /> CARRITO
            </div>

            <h1 className="mt-4 font-display text-[2.0rem] font-semibold leading-[1.05] text-black/85 sm:text-[2.35rem]">
              Listo para preparar envío
            </h1>

            <p className="mt-3 max-w-2xl text-[14px] leading-7 text-black/55">
              Además del producto y el subtotal, esta vista ayuda a revisar presentación, tamaño y peso
              estimado de cada artículo para una operación más ordenada.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Pill icon={<BadgeCheck className="h-4 w-4" />}>Compra clara</Pill>
            <Pill icon={<Scale className="h-4 w-4" />}>Peso estimado {weight.toFixed(2)} kg</Pill>
          </div>
        </div>

        <div className="mt-6">
          <Line />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_420px]">
          <div className="space-y-4">
            {items.map((it) => (
              <ItemCard key={it.id} item={it} />
            ))}
          </div>

          <div className="lg:sticky lg:top-6">
            <SoftPanel className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">RESUMEN</div>
                  <div className="mt-2 text-[18px] font-semibold text-black/85">Orden de compra</div>
                  <div className="mt-1 text-[13px] text-black/55">Totales claros antes del checkout.</div>
                </div>

                <div className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/55 text-black/70">
                  <Truck className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4">
                <Line />
              </div>

              <div className="mt-4 space-y-3 text-[13px]">
                <div className="flex items-center justify-between text-black/70">
                  <span>Subtotal</span>
                  <span className="font-medium text-black/75">{mxn(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-black/70">
                  <span>Paquetería</span>
                  <span className="font-medium text-black/75">{mxn(shipping)}</span>
                </div>
                <div className="flex items-center justify-between text-black/70">
                  <span>Peso estimado</span>
                  <span className="font-medium text-black/75">{weight.toFixed(2)} kg</span>
                </div>
              </div>

              <div className="mt-4">
                <Line />
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div className="text-[12px] font-medium tracking-[0.22em] text-black/45">TOTAL</div>
                <div className="text-[26px] font-semibold text-black/85">{mxn(total)}</div>
              </div>

              <div className="mt-4 rounded-[18px] border border-black/10 bg-white/30 p-4 text-[12px] text-black/55">
                <div className="flex items-center gap-2 text-black/70">
                  <Package className="h-4 w-4" /> Paquetería mock
                </div>
                <div className="mt-2">
                  Estándar <span className="font-medium text-black/70">2–5 días</span> · Express{" "}
                  <span className="font-medium text-black/70">1–2 días</span>
                </div>
              </div>

              <Link
              href="/checkout"
              className={[
                "mt-4 inline-flex h-12 w-full items-center justify-center gap-2",
                "rounded-full border border-black/15 bg-white/70 px-6",
                "text-[13px] font-semibold text-black/80",
                "backdrop-blur-sm",
                "shadow-[0_10px_26px_rgba(0,0,0,0.08)]",
                "transition hover:bg-white/90 hover:border-black/20 hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
              ].join(" ")}
            >
              Continuar a checkout <ArrowRight className="h-4 w-4" />
            </Link>
            </SoftPanel>
          </div>
        </div>

        <div className="h-14" />
      </section>
    </main>
  );
}