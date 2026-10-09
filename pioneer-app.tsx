'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { SiteHeader, type View } from '@/components/site-header'
import { ExploreArchives } from '@/components/explore-archives'
import { DiscoverScientists } from '@/components/discover-scientists'
import { ChatPanel } from '@/components/chat-panel'

export function PioneerApp() {
  const [view, setView] = useState<View>('explore')
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="min-h-dvh">
      <SiteHeader view={view} onViewChange={setView} />

      <div className="mx-auto flex max-w-7xl gap-8 px-4 pb-16 pt-8 md:px-6">
        <main className="min-w-0 flex-1">
          {view === 'explore' ? <ExploreArchives /> : <DiscoverScientists />}
        </main>

        <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
      </div>

      <button
        type="button"
        onClick={() => setChatOpen(true)}
        className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Ask Pioneer
      </button>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            <span className="font-serif font-semibold text-foreground">Pioneer</span> — knowledge for
            every learner, everywhere.
          </p>
          <p>Free and open for students, researchers, and independent writers.</p>
        </div>
      </footer>
    </div>
  )
}
