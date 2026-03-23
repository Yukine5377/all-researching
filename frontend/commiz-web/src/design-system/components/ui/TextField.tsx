import type { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

export type TextFieldProps = {
  id: string
  label: string
  suffix?: ReactNode
  inputClassName?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>

const inputBase =
  'w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary-fixed rounded-xl px-4 py-3.5 text-on-surface placeholder:text-outline outline-none transition-all'

export function TextField({
  id,
  label,
  suffix,
  className,
  inputClassName,
  ...inputProps
}: TextFieldProps) {
  return (
    <div className={cn('group', className)}>
      <label
        htmlFor={id}
        className="block text-xs font-medium font-label text-on-surface-variant mb-1.5 ml-1"
      >
        {label}
      </label>
      <div className="relative">
        <input id={id} className={cn(inputBase, suffix && 'pr-12', inputClassName)} {...inputProps} />
        {suffix ? (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">{suffix}</div>
        ) : null}
      </div>
    </div>
  )
}
