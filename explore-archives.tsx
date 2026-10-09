'use client'

import { useMemo, useState } from 'react'
import { FileText, Search } from 'lucide-react'
import { archives, type ArchiveItem } from '@/lib/archives'
import { Input } from '@/components/ui/input'
import { FilterChips } from '@/components/filter-chips'
import { SectionHeading } from '@/components/section-heading'

export function ExploreArchives() {
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('All')

  const subjects = useMemo(() => ['All', ...new Set(archives.map((a) => a.subject))], [])

  const filtered = archives.filter((item) => {
    const q = query.trim().toLowerCase()
    const matchesQuery =
      !q || item.title.toLowerCase().includes(q) || item.author.toLowerCase().includes(q)
    return matchesQuery && (subject === 'All' || item.subject === subject)
  })

  return (
    <section aria-labelledby="explore-heading" className="flex flex-col gap-6">
      <SectionHeading
        id="explore-heading"
        eyebrow="Explore"
        title="The Archives"
        description="Landmark papers, books, and study guides. Open any document to read the full PDF."
      />

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <label className="relative w-full md:max-w-xs">
          <span className="sr-only">Search archives</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title or author"
            className="h-10 border-foreground/30 bg-card pl-9"
          />
        </label>
        <FilterChips options={subjects} value={subject} onChange={setSubject} label="Subject" />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border-2 border-dashed border-foreground/30 p-10 text-center text-muted-foreground">
          No documents match your search.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <li key={item.id}>
              <ArchiveCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function ArchiveCard({ item }: { item: ArchiveItem }) {
  const content = (
    <>
      <div className="relative aspect-square overflow-hidden border-b-2 border-foreground bg-card">
        {item.coverImage ? (
          <img
            src={item.coverImage || '/placeholder.svg'}
            alt={`First page of ${item.title}`}
            className="size-full object-cover object-top"
          />
        ) : (
          <PageSkeleton />
        )}
        <span className="absolute left-2 top-2 rounded-sm bg-foreground px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          {item.subject}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-balance font-serif text-base font-semibold leading-snug">
          {item.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {item.author} · {item.year}
        </p>
        <p className="mt-auto flex items-center gap-1.5 pt-2 text-xs font-medium">
          <FileText className="size-3.5" aria-hidden="true" />
          {item.pdfUrl ? (
            <span className="underline underline-offset-4">Open PDF</span>
          ) : (
            <span className="text-muted-foreground">PDF coming soon</span>
          )}
        </p>
      </div>
    </>
  )

  const base =
    'flex h-full flex-col overflow-hidden rounded-lg border-2 border-foreground bg-card shadow-[4px_4px_0_0_var(--foreground)]'

  if (item.pdfUrl) {
    return (
      <a
        href={item.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2`}
      >
        {content}
      </a>
    )
  }

  return (
    <article className={base} aria-label={`${item.title} — PDF not yet available`}>
      {content}
    </article>
  )
}

function PageSkeleton() {
  return (
    <div className="flex size-full flex-col gap-2 p-5 pt-11" aria-hidden="true">
      <div className="mx-auto h-3 w-3/4 animate-pulse rounded-sm bg-muted" />
      <div className="mx-auto mb-3 h-2 w-1/2 animate-pulse rounded-sm bg-muted/70" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-1.5 animate-pulse rounded-sm bg-muted/60"
          style={{ width: `${[100, 92, 96, 88, 100, 70][i]}%` }}
        />
      ))}
    </div>
  )
}
