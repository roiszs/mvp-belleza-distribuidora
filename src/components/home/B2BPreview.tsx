import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { SectionShell } from "@/components/ui/SectionShell"
import {
Layers,
BadgePercent,
FileText,
Repeat,
ShieldCheck,
Truck,
Clock3,
ArrowUpRight,
} from "lucide-react"

type B2BFeature = {
title: string
desc: string
icon: React.ReactNode
chips: string[]
}

const features: B2BFeature[] = [
{
title: "Precios por volumen",
desc: "Estructura lista para mostrar menudeo, mayoreo y escalas especiales por cantidad.",
icon: <BadgePercent className="h-5 w-5" />,
chips: ["Caja 6+", "Caja 12+", "Volumen 24+"],
},
{
title: "Cotizaciones rápidas",
desc: "Base para solicitudes de volumen y seguimiento comercial sin fricción.",
icon: <FileText className="h-5 w-5" />,
chips: ["Solicitud", "Seguimiento", "Historial"],
},
{
title: "Compras recurrentes",
desc: "Pensado para salones y distribuidores que compran frecuente y necesitan agilidad.",
icon: <Repeat className="h-5 w-5" />,
chips: ["Reorden", "Favoritos", "Listas"],
},
]

function Chip({ children }: { children: React.ReactNode }) {
return (
<span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-black/60">
{children}
</span>
)
}

function SoftIcon({ children }: { children: React.ReactNode }) {
return (
<div className="grid h-10 w-10 place-items-center rounded-[14px] border border-black/10 bg-white/45 shadow-[0_1px_0_rgba(255,255,255,0.65)]">
{children}
</div>
)
}

export function B2BPreview() {
return (
<SectionShell
eyebrow="B2B"
title="La tienda no solo vende producto; también puede atender negocio."
subtitle="Este bloque conceptual ayuda a visualizar la evolución hacia una operación más robusta sin construir todavía toda la lógica real."
>
<Container className="relative">
{/* Glow / textura suave */}
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-[rgba(0,0,0,0.06)] blur-3xl" />
<div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-[rgba(0,0,0,0.05)] blur-3xl" />
</div>

    {/* Top row: headline card + account card */}
    <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
      {/* Card grande izquierda */}
      <div className="group relative overflow-hidden rounded-[26px] border border-black/10 bg-white/35 p-6 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)] transition duration-300 hover:bg-white/50 hover:border-black/15">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background-image:radial-gradient(120%_120%_at_20%_10%,rgba(0,0,0,0.08)_0%,transparent_55%)]" />

        <div className="relative flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-black/25" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-black/55">
                B2B READY
              </span>
            </div>

            <h3 className="mt-3 max-w-[28ch] text-[28px] font-semibold leading-[1.05] text-black/90 sm:text-[34px]">
              Menudeo, mayoreo y volumen
            </h3>

            <p className="mt-3 max-w-[56ch] text-[14px] leading-7 text-black/55">
              Compra por pieza, por caja o por volumen con una lectura comercial mucho más clara.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>Caja 6+</Chip>
              <Chip>Caja 12+</Chip>
              <Chip>Volumen 24+</Chip>
            </div>
          </div>

          <SoftIcon>
            <Layers className="h-5 w-5 text-black/70" />
          </SoftIcon>
        </div>

        <div className="relative mt-6 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent)]" />

        {/* mini “tabla” premium */}
        <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { k: "Escala", v: "Caja 6+" },
            { k: "Descuento", v: "–5% aprox." },
            { k: "Flujo", v: "Recompra rápida" },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-[18px] border border-black/10 bg-white/30 px-4 py-3"
            >
              <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">
                {row.k.toUpperCase()}
              </div>
              <div className="mt-1 text-[14px] font-semibold text-black/80">
                {row.v}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 flex flex-col gap-2 sm:flex-row">
        <Link
          href="/b2b"
          className={[
            "inline-flex h-11 items-center justify-center rounded-full",
            "border border-black/10 bg-white/60",
            "px-5 text-[13px] font-semibold text-black/80",
            "shadow-[0_1px_0_rgba(255,255,255,0.75)]",
            "transition hover:bg-white/80 hover:border-black/15 hover:shadow-[0_10px_22px_rgba(0,0,0,0.08)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15",
            "whitespace-nowrap",
          ].join(" ")}
        >
          Ver visión B2B <ArrowUpRight className="ml-2 h-4 w-4 text-black/55" />
        </Link>

        <Link
          href="/catalogo"
          className={[
            "inline-flex h-11 items-center justify-center rounded-full",
            "border border-black/10 bg-white/55",
            "px-5 text-[13px] font-medium text-black/75",
            "transition hover:bg-white/70 hover:border-black/15",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/15",
            "whitespace-nowrap",
          ].join(" ")}
        >
          Ver catálogo
        </Link>
      </div>
      </div>

      {/* Card derecha (cuenta / confianza) */}
      <div className="group relative overflow-hidden rounded-[26px] border border-black/10 bg-white/35 p-6 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)] transition duration-300 hover:bg-white/50 hover:border-black/15">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background-image:radial-gradient(120%_120%_at_30%_10%,rgba(0,0,0,0.07)_0%,transparent_55%)]" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] font-medium tracking-[0.22em] text-black/55">
              CUENTA B2B
            </div>
            <div className="mt-2 text-[16px] font-semibold text-black/85">
              Beneficios para negocio
            </div>
            <p className="mt-2 text-[13px] leading-6 text-black/55">
              Experiencia preparada para clientes recurrentes, salones y volumen.
            </p>
          </div>

          <SoftIcon>
            <ShieldCheck className="h-5 w-5 text-black/70" />
          </SoftIcon>
        </div>

        <div className="relative mt-4 grid gap-2">
          {[
            { icon: <Truck className="h-4 w-4" />, text: "Envíos y seguimiento más claro" },
            { icon: <Clock3 className="h-4 w-4" />, text: "Recompra rápida sin fricción" },
            { icon: <FileText className="h-4 w-4" />, text: "Cotizaciones y atención comercial" },
          ].map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-3 rounded-[16px] border border-black/10 bg-white/30 px-4 py-3"
            >
              <span className="text-black/60">{b.icon}</span>
              <span className="text-[13px] text-black/65">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Feature cards row */}
    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.title}
          className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-white/30 p-5 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)] transition duration-300 hover:bg-white/50 hover:border-black/15"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background-image:radial-gradient(120%_120%_at_20%_10%,rgba(0,0,0,0.07)_0%,transparent_55%)]" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-black/85">{f.title}</div>
              <p className="mt-2 text-[13px] leading-6 text-black/55">{f.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {f.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>

            <SoftIcon>{f.icon}</SoftIcon>
          </div>
        </div>
      ))}
    </div>
  </Container>
</SectionShell>

)
}