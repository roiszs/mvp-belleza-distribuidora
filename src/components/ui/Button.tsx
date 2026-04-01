import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'light'
  className?: string
}

const variantStyles = {
  primary: {
    backgroundColor: 'var(--color-accent-dark)',
    color: '#ffffff',
    borderColor: 'var(--color-accent-dark)',
  },
  secondary: {
    backgroundColor: '#ffffff',
    color: 'var(--color-text)',
    borderColor: 'var(--color-line)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    borderColor: 'var(--color-line)',
  },
  light: {
    backgroundColor: '#ffffff',
    color: 'var(--color-accent-dark)',
    borderColor: '#ffffff',
  },
} as const

export function Button({
  children,
  href,
  variant = 'primary',
  className,
}: ButtonProps) {
  const classes = cn(
    'inline-flex min-h-[44px] items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold no-underline transition duration-200 shadow-[0_6px_18px_rgba(43,33,28,0.05)] hover:opacity-90',
    className
  )

  const style = variantStyles[variant]

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} style={style}>
      {children}
    </button>
  )
}