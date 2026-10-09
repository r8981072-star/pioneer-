'use client'

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import type { Scientist } from '@/lib/scientists'

export function ScientistDialog({
  scientist,
  onClose,
}: {
  scientist: Scientist | null
  onClose: () => void
}) {
  return (
    <Dialog open={scientist !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90dvh] gap-0 overflow-y-auto border-2 border-foreground bg-card p-0 sm:max-w-2xl">
        {scientist && (
          <div className="grid sm:grid-cols-[220px_1fr]">
            <div className="aspect-[4/5] border-b-2 border-foreground bg-muted sm:aspect-auto sm:border-b-0 sm:border-r-2">
              <img
                src={scientist.image || '/placeholder.svg'}
                alt={`Portrait of ${scientist.name}`}
                className="size-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-foreground text-primary-foreground">{scientist.field}</Badge>
                  <Badge variant="outline" className="border-foreground/30">
                    {scientist.origin}
                  </Badge>
                </div>
                <DialogTitle className="font-serif text-3xl font-bold leading-tight">
                  {scientist.name}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">{scientist.lifespan}</p>
              </div>

              <DialogDescription className="text-pretty leading-relaxed text-foreground">
                {scientist.about}
              </DialogDescription>

              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Major Works
                </h3>
                <ol className="flex flex-col gap-3">
                  {scientist.works.map((work) => (
                    <li
                      key={work.title}
                      className="border-l-4 border-background pl-3"
                    >
                      <p className="font-serif font-semibold leading-snug">
                        {work.title}{' '}
                        <span className="font-sans text-xs font-normal text-muted-foreground">
                          ({work.year})
                        </span>
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {work.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
