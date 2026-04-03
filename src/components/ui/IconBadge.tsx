import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type IconBadgeProps = {
children: ReactNode
className?: string
}

export function IconBadge({ children, className }: IconBadgeProps) {
return (
<div
className={cn(
'absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-[16px] border border-[var(--color-line)] bg-white/80 shadow-[0_10px_20px_rgba(43,33,28,0.05)]',
className
)}
>
{children}
</div>
)
}