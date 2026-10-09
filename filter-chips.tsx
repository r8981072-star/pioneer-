'use client'

import { cn } from '@/lib/utils'

export function FilterChips({
  options,
  value,
  onChange,
  label,
}: {
  options: string[]
  value: string
  onChange: (value: string) => void
  label: string
}) {
  return (
    <div role="group" aria-label={`Filter by ${label}`} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option === value
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option)}
            className={cn(
              'rounded-full border-2 border-foreground px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
              active ? 'bg-foreground text-primary-foreground' : 'bg-transparent hover:bg-card',
            )}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
