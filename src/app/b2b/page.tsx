import Link from "next/link";
import {
ArrowRight,
BadgeCheck,
BarChart3,
Building2,
Clock,
CreditCard,
FileText,
Layers,
Package,
Repeat2,
ShieldCheck,
Sparkles,
Truck,
} from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";

function Pill({ children }: { children: React.ReactNode }) {
return (
<span className="inline-flex items-center rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-black/60">
{children}
</span>
);
}

function CTAButton({
  href,
  variant = "primary",
  children,
  }: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  }) {
  const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[13px] font-medium transition duration-300";
  
  const primary =
  [
  "border border-black/10",
  "bg-white/55 backdrop-blur-sm text-black/80",
  "shadow-[0_1px_0_rgba(255,255,255,0.65)]",
  "hover:bg-white/75 hover:border-black/15",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
  ].join(" ");
  
  const secondary =
  [
  "border border-black/10",
  "bg-[rgba(186,160,120,0.16)] text-black/80", // arena suave
  "hover:bg-[rgba(186,160,120,0.24)] hover:border-black/15",
  "shadow-[0_1px_0_rgba(255,255,255,0.55)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
  ].join(" ");
  
  const cls = variant === "primary" ? primary : secondary;
  
  return (
  <Link href={href} className={[base, cls].join(" ")}>
  {children}
  </Link>
  );
  }

function FeatureCard({
icon: Icon,
eyebrow,
title,
description,
bullets,
}: {
icon: any;
eyebrow: string;
title: string;
description: string;
bullets: string[];
}) {
return (
<article className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-white/35 p-5 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)] transition duration-300 hover:bg-white/55 hover:border-black/15">
{/* glow */}
<div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 [background-image:radial-gradient(120%_120%_at_20%_10%,rgba(0,0,0,0.07)_0%,transparent_55%)]" />

  <div className="relative flex items-start justify-between gap-4">
    <div className="min-w-0">
      <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">{eyebrow}</div>
      <h3 className="mt-2 text-[18px] font-semibold text-black/85">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-black/55">{description}</p>
    </div>

    <div className="shrink-0 rounded-[16px] border border-black/10 bg-white/55 p-3">
      <Icon className="h-5 w-5 text-black/70" />
    </div>
  </div>

  <div className="relative mt-4 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent)]" />

  <ul className="relative mt-4 space-y-2 text-[13px] text-black/60">
    {bullets.map((b) => (
      <li key={b} className="flex items-start gap-2">
        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
        <span className="min-w-0">{b}</span>
      </li>
    ))}
  </ul>
</article>

);
}

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: any }) {
return (
<div className="rounded-[18px] border border-black/10 bg-white/30 px-4 py-3">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-[11px] font-medium tracking-[0.22em] text-black/45">{label}</div>
<div className="mt-1 text-[14px] font-semibold text-black/80">{value}</div>
</div>
<Icon className="h-4 w-4 text-black/55" />
</div>
</div>
);
}

function DemoAccount() {
return (
<div className="rounded-[24px] border border-black/10 bg-white/35 p-5 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)]">
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<div className="text-[11px] font-medium tracking-[0.22em] text-black/45">CUENTA DEMO</div>
<div className="mt-2 flex flex-wrap items-center gap-2">
<div className="text-[18px] font-semibold text-black/85">Studio Nude</div>
<Pill>
<BadgeCheck className="mr-2 h-4 w-4" />
Verificada
</Pill>
<Pill>
<Building2 className="mr-2 h-4 w-4" />
B2B Ready
</Pill>
</div>
<p className="mt-2 text-[13px] leading-6 text-black/55">
Esta landing es una <span className="font-semibold text-black/75">muestra visual</span> de cómo se sentiría una
experiencia B2B real: escalas, reorden, crédito, pedidos recurrentes y logística.
</p>
</div>

    <div className="flex flex-wrap gap-2">
      <CTAButton href="/b2b/catalogo" variant="secondary">
        Ver catálogo B2B <ArrowRight className="h-4 w-4" />
      </CTAButton>
      <CTAButton href="/b2b/carrito">
        Ir directo al carrito <ArrowRight className="h-4 w-4" />
      </CTAButton>
    </div>
  </div>

  <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
    <StatCard label="Condición" value="Neto 7" icon={FileText} />
    <StatCard label="Escala activa" value="Mayoreo" icon={Layers} />
    <StatCard label="Frecuencia" value="Reorden" icon={Repeat2} />
    <StatCard label="Entrega" value="24–48h" icon={Truck} />
  </div>
</div>

);
}

export default function B2BLandingPage() {
return (
<SectionShell
eyebrow="B2B"
title="B2B listo para operación real"
subtitle="Una experiencia pensada para salones y distribuidoras: catálogo por escala, pedidos recurrentes, crédito y señales claras para comprar mejor."
rightSlot={
<div className="hidden items-center gap-2 md:flex">
<Pill>
<ShieldCheck className="mr-2 h-4 w-4" />
Operación clara
</Pill>
<Pill>
<BarChart3 className="mr-2 h-4 w-4" />
Decisiones rápidas
</Pill>
</div>
}
>
{/* HERO */}
<div className="relative overflow-hidden rounded-[26px] border border-black/10 bg-white/35 p-6 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)]">
{/* Decorative subtle gradients */}
<div className="pointer-events-none absolute inset-0 opacity-100 [background-image:radial-gradient(120%_120%_at_20%_10%,rgba(0,0,0,0.06)_0%,transparent_55%),radial-gradient(120%_120%_at_85%_85%,rgba(0,0,0,0.04)_0%,transparent_60%)]" />
<div className="relative">
<div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-black/60">
<Sparkles className="h-4 w-4" />
DEMO VISUAL B2B
</div>

          <h2 className="mt-4 text-[28px] font-semibold leading-tight text-black/90 sm:text-[34px]">
            Menudeo, mayoreo y volumen <span className="text-black/60">en una sola experiencia.</span>
          </h2>

          <p className="mt-3 text-[14px] leading-7 text-black/60">
            El objetivo no es “solo vender”. Es que el cliente entienda rápido:{" "}
            <span className="font-semibold text-black/75">escala, margen, reorden y envío</span>. Con una interfaz premium
            y muy clara.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill>Escalas por cantidad</Pill>
            <Pill>Pedido recurrente</Pill>
            <Pill>Crédito / Neto</Pill>
            <Pill>Logística</Pill>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <CTAButton href="/b2b/catalogo" variant="secondary">
              Ver catálogo B2B <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="/b2b/carrito">
              Ir directo al carrito <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>

        {/* Mini “preview cards” */}
        <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-[520px]">
          <div className="rounded-[20px] border border-black/10 bg-white/30 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">ESCALA</div>
              <Layers className="h-4 w-4 text-black/55" />
            </div>
            <div className="mt-2 text-[16px] font-semibold text-black/85">Mayoreo → Mayoreo+ → Volumen</div>
            <div className="mt-2 text-[13px] text-black/55">El precio se adapta al pedido.</div>
          </div>

          <div className="rounded-[20px] border border-black/10 bg-white/30 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">PAGO</div>
              <CreditCard className="h-4 w-4 text-black/55" />
            </div>
            <div className="mt-2 text-[16px] font-semibold text-black/85">Neto 7 / Transferencia</div>
            <div className="mt-2 text-[13px] text-black/55">Condiciones visibles y ordenadas.</div>
          </div>

          <div className="rounded-[20px] border border-black/10 bg-white/30 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">REORDEN</div>
              <Repeat2 className="h-4 w-4 text-black/55" />
            </div>
            <div className="mt-2 text-[16px] font-semibold text-black/85">Pedidos recurrentes</div>
            <div className="mt-2 text-[13px] text-black/55">Compra frecuente con menos fricción.</div>
          </div>

          <div className="rounded-[20px] border border-black/10 bg-white/30 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">TIEMPO</div>
              <Clock className="h-4 w-4 text-black/55" />
            </div>
            <div className="mt-2 text-[16px] font-semibold text-black/85">24–48h</div>
            <div className="mt-2 text-[13px] text-black/55">Señales claras para preparar envío.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Demo Account Block */}
  <div className="mt-6">
    <DemoAccount />
  </div>

  {/* Features */}
  <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
    <FeatureCard
      icon={Package}
      eyebrow="CATÁLOGO B2B"
      title="Compra por escala, no por intuición"
      description="El cliente ve el precio correcto según su volumen, con lectura comercial clara."
      bullets={["Escalas visibles por cantidad", "Ahorros vs menudeo", "Filtros y búsqueda rápida"]}
    />

    <FeatureCard
      icon={FileText}
      eyebrow="OPERACIÓN"
      title="Pedido listo para envío"
      description="Datos pensados para preparar paquetería sin perder tiempo: peso, presentación y notas."
      bullets={["Resumen de pedido", "Peso/medidas estimadas", "Notas por cliente/entrega"]}
    />

    <FeatureCard
      icon={BarChart3}
      eyebrow="CRECIMIENTO"
      title="Reorden y historial"
      description="Una vista que facilita compras recurrentes, reposición y hábitos de compra."
      bullets={["Productos frecuentes", "Reorden en 1 click", "Señales de rotación"]}
    />
  </div>

  {/* Bottom CTA */}
  <div className="mt-8 overflow-hidden rounded-[26px] border border-black/10 bg-white/35 p-6 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)]">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-[11px] font-medium tracking-[0.22em] text-black/45">SIGUIENTE PASO</div>
        <div className="mt-2 text-[20px] font-semibold text-black/85">
          ¿Quieres que el cliente lo “sienta real”?
        </div>
        <p className="mt-1 text-[13px] leading-6 text-black/55">
          Entra al catálogo B2B y agrega productos: el carrito B2B se comporta como si ya existiera una operación real.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <CTAButton href="/b2b/catalogo" variant="secondary">
          Ir al catálogo B2B <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton href="/b2b/carrito">
          Abrir carrito B2B <ArrowRight className="h-4 w-4" />
        </CTAButton>
      </div>
    </div>
  </div>
</SectionShell>

);
}