'use client'

import { Compass, Library } from 'lucide-react'
import { cn } from '@/lib/utils'

export type View = 'explore' | 'discover'

const tabs: { id: View; label: string; icon: typeof Library; hint: string }[] = [
  { id: 'explore', label: 'Explore', icon: Library, hint: 'Archives' },
  { id: 'discover', label: 'Discover', icon: Compass, hint: 'Scientists' },
]

export function SiteHeader({
  view,
  onViewChange,
}: {
  view: View
  onViewChange: (view: View) => void
}) {
  return (
    <header className="border-b-2 border-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-0 pt-6 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Open Academic Archive
            </p>
            <h1 className="font-serif text-5xl font-bold leading-none tracking-tight md:text-7xl">
              Pioneer
            </h1>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Leading educational content for every student, researcher, and independent writer —
            wherever you are.
          </p>
        </div>

        <nav aria-label="Primary" role="tablist" className="-mb-0.5 flex gap-1">
          {tabs.map((tab) => {
            const active = view === tab.id
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onViewChange(tab.id)}
                className={cn(
                  'flex items-center gap-2 rounded-t-md border-2 border-b-0 px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
                  active
                    ? 'border-foreground bg-card text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                {tab.label}
                <span className="hidden text-xs font-normal text-muted-foreground sm:inline">
                  / {tab.hint}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
