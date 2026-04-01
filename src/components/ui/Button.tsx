import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function Button({ children, href, variant = 'primary', className }: ButtonProps) {
  const styles = {
    primary:
      'bg-[var(--color-accent-dark)] text-white hover:opacity-95',
    secondary:
      'bg-[var(--color-soft)] text-[var(--color-text)] hover:bg-[var(--color-sand)]',
    ghost:
      'bg-transparent text-[var(--color-text)] border border-[var(--color-line)] hover:bg-white',
  }

  const base = cn(
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200',
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