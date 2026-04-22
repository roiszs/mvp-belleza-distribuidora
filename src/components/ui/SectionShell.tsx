import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  rightSlot?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  eyebrow,
  title,
  subtitle,
  rightSlot,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section className={["relative", className].join(" ")}>
      {/* fondo suave */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(1200px_520px_at_25%_10%,rgba(0,0,0,0.06),transparent_60%),radial-gradient(900px_420px_at_80%_30%,rgba(0,0,0,0.04),transparent_55%)]" />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        {/* marco premium */}
        <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/35 p-6 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.65)] sm:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(120%_120%_at_18%_10%,rgba(0,0,0,0.05)_0%,transparent_55%)]" />

          <div className="relative">
            {/* header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="min-w-0">
                {eyebrow ? (
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-4 py-2 text-[11px] font-medium tracking-[0.22em] text-black/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/35" />
                    {eyebrow.toUpperCase()}
                  </div>
                ) : null}

                <h1 className="mt-4 text-[2rem] font-semibold leading-[1.05] text-black/85 sm:text-[2.35rem]">
                  {title}
                </h1>

                {subtitle ? (
                  <p className="mt-3 max-w-2xl text-[14px] leading-7 text-black/55">
                    {subtitle}
                  </p>
                ) : null}
              </div>

              {rightSlot ? (
                <div className="shrink-0">{rightSlot}</div>
              ) : null}
            </div>

            {/* divider */}
            <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.12),transparent)]" />

            {/* content */}
            <div className="mt-6">{children}</div>
          </div>
        </div>

        <div className="h-8" />
      </div>
    </section>
  );
}