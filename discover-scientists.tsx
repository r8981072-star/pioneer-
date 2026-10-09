'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { scientists, type Scientist } from '@/lib/scientists'
import { Input } from '@/components/ui/input'
import { FilterChips } from '@/components/filter-chips'
import { SectionHeading } from '@/components/section-heading'
import { ScientistDialog } from '@/components/scientist-dialog'

export function DiscoverScientists() {
  const [query, setQuery] = useState('')
  const [field, setField] = useState('All')
  const [selected, setSelected] = useState<Scientist | null>(null)

  const fields = useMemo(() => ['All', ...new Set(scientists.map((s) => s.field))], [])

  const filtered = scientists.filter((s) => {
    const q = query.trim().toLowerCase()
    const matchesQuery =
      !q || s.name.toLowerCase().includes(q) || s.headline.toLowerCase().includes(q)
    return matchesQuery && (field === 'All' || s.field === field)
  })

  return (
    <section aria-labelledby="discover-heading" className="flex flex-col gap-6">
      <SectionHeading
        id="discover-heading"
        eyebrow="Discover"
        title="Prominent Scientists"
        description="Meet the minds who shaped modern science. Select a portrait to learn about their life and major works."
      />

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <label className="relative w-full md:max-w-xs">
          <span className="sr-only">Search scientists</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or idea"
            className="h-10 border-foreground/30 bg-card pl-9"
          />
        </label>
        <FilterChips options={fields} value={field} onChange={setField} label="Field" />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border-2 border-dashed border-foreground/30 p-10 text-center text-muted-foreground">
          No scientists match your search.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
          {filtered.map((s) => (
            <li key={s.slug}>
              <button
                type="button"
                onClick={() => setSelected(s)}
                className="group flex w-full flex-col overflow-hidden rounded-lg border-2 border-foreground bg-card text-left shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <div className="aspect-[4/5] overflow-hidden border-b-2 border-foreground bg-muted">
                  <img
                    src={s.image || '/placeholder.svg'}
                    alt={`Portrait of ${s.name}`}
                    loading="lazy"
                    className="size-full object-cover object-top grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col gap-0.5 p-3">
                  <h3 className="font-serif text-base font-semibold leading-snug">{s.name}</h3>
                  <p className="text-xs text-muted-foreground">{s.lifespan}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed">{s.headline}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      <ScientistDialog scientist={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
