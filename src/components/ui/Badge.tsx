import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  tone?: 'default' | 'accent' | 'dark'
}

export function Badge({ children, tone = 'default' }: BadgeProps) {
  const tones = {
    default: 'bg-[var(--color-soft)] text-[var(--color-text)]',
    accent: 'bg-[#f3e1d7] text-[#8a5f4d]',
    dark: 'bg-[var(--color-accent-dark)] text-white',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.12em] uppercase',
        tones[tone],
      )}
    >
      {children}
    </span>
  )
}