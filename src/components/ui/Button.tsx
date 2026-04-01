import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'light'
  className?: string
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
}: ButtonProps) {
  const styles = {
    primary:
      'bg-[var(--color-accent-dark)] text-white border border-[var(--color-accent-dark)] hover:bg-[#3a2d26] hover:text-white',
    secondary:
      'bg-white text-[var(--color-text)] border border-[var(--color-line)] hover:bg-[var(--color-soft)] hover:text-[var(--color-text)]',
    ghost:
      'bg-transparent text-[var(--color-text)] border border-[var(--color-line)] hover:bg-white hover:text-[var(--color-text)]',
    light:
      'bg-white text-[var(--color-accent-dark)] border border-white hover:bg-[#f6efe8] hover:text-[var(--color-accent-dark)]',
  }

  const base = cn(
    'inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.01em] transition duration-200 shadow-[0_6px_18px_rgba(43,33,28,0.05)]',
    styles[variant],
    className,
  )

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return <button className={base}>{children}</button>
}