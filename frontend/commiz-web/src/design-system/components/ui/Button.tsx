import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primaryGradient' | 'primarySoft' | 'social' | 'ghost' | 'skip'

const variantClass: Record<ButtonVariant, string> = {
  primaryGradient:
    'primary-gradient text-white py-4 px-6 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all',
  primarySoft:
    'w-full bg-primary-fixed text-on-primary-fixed py-4 px-6 rounded-xl font-semibold hover:bg-primary-fixed-dim active:scale-[0.98] transition-all',
  social:
    'w-full flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/30 py-3.5 px-6 rounded-xl hover:bg-surface-container-low transition-all active:scale-[0.98]',
  ghost: 'text-xs font-medium font-label text-primary hover:underline',
  skip:
    'text-on-surface-variant font-medium hover:bg-surface-container-low px-4 py-2 rounded-xl transition-colors active:scale-95 duration-200',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export function Button({
  className,
  variant = 'primaryGradient',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(variantClass[variant], className)}
      {...props}
    />
  )
}
