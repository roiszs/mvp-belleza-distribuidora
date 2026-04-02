import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

const features = [
{
title: 'Precios por volumen',
text: 'Estructura lista para mostrar menudeo, mayoreo y escalas especiales por cantidad.',
},
{
title: 'Cotizaciones',
text: 'Posibilidad futura de solicitudes rápidas para negocios, salones o distribuidores.',
},
{
title: 'Compras recurrentes',
text: 'Flujo pensado para clientes que compran de forma frecuente y necesitan agilidad.',
},
{
title: 'Atención comercial',
text: 'Una experiencia orientada a cuentas de negocio, surtido y pedidos más robustos.',
},
]

export default function B2BPage() {
return (
<section className="relative overflow-hidden section-padding pb-10 pt-10 md:pb-14 md:pt-12">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -left-16 top-6 h-56 w-56 rounded-full bg-[#ead8c8]/28 blur-3xl" />
<div className="absolute right-0 top-0 h-68 w-68 rounded-full bg-[#f2e7dc]/30 blur-3xl" />
<div className="absolute left-1/2 top-1/3 h-44 w-44 rounded-full bg-[#efe4d8]/18 blur-3xl" />
</div>


  <Container className="relative">
    <div className="max-w-5xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/80 px-3 py-1.5 shadow-[0_6px_16px_rgba(43,33,28,0.03)] backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          B2B vision · negocio · volumen
        </span>
      </div>

      <h1 className="font-display text-[2rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--color-text)] sm:text-[2.6rem] md:text-[3.5rem]">
        La tienda no solo vende producto;
        <span className="block">también puede atender negocio.</span>
      </h1>

      <p className="mt-4 max-w-4xl text-[0.98rem] leading-8 text-[var(--color-muted)] md:text-[1.02rem]">
        Este bloque conceptual ayuda a visualizar la evolución hacia una operación más robusta:
        compras por volumen, solicitudes de cotización, recompra y atención comercial para salones
        y distribuidores.
      </p>

      <div className="mt-4 h-px w-20 bg-[linear-gradient(90deg,var(--color-accent-dark),transparent)]" />
    </div>

    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="rounded-[26px] border border-[var(--color-line)] bg-white/90 p-6 shadow-[0_12px_26px_rgba(43,33,28,0.03)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(43,33,28,0.05)]"
        >
          <h3 className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--color-text)]">
            {feature.title}
          </h3>
          <p className="mt-3 text-[1rem] leading-8 text-[var(--color-muted)]">{feature.text}</p>
        </article>
      ))}
    </div>

    <div className="mt-8 rounded-[30px] border border-[var(--color-line)] bg-[rgba(255,255,255,0.82)] p-7 shadow-[0_14px_30px_rgba(43,33,28,0.03)] backdrop-blur-sm md:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
        Próxima evolución
      </p>

      <h2 className="mt-3 font-display text-[1.7rem] font-semibold leading-[1.04] tracking-[-0.045em] md:text-[2.4rem]">
        Preparado para crecer a login comercial,
        <span className="block">reglas de precio e integración futura.</span>
      </h2>

      <p className="mt-4 max-w-3xl text-[1rem] leading-8 text-[var(--color-muted)]">
        La intención del MVP es mostrar desde hoy una dirección comercial seria, sin necesidad de
        construir todavía toda la lógica real de operación.
      </p>

      <div className="mt-5">
        <Button href="/catalogo">Ver catálogo comercial</Button>
      </div>
    </div>
  </Container>
</section>

)
}