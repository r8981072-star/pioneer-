'use client'

import { useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { ArrowUp, Sparkles, Square, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const SUGGESTIONS = [
  'Explain special relativity simply',
  'How do I structure a research essay?',
  'What did C. V. Raman discover?',
]

export function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [input, setInput] = useState('')
  const { messages, sendMessage, status, stop, error } = useChat()
  const scrollRef = useRef<HTMLDivElement>(null)
  const busy = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const submit = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || busy) return
    sendMessage({ text: trimmed })
    setInput('')
  }

  return (
    <aside
      aria-label="Ask Pioneer AI assistant"
      className={cn(
        'z-40 flex-col bg-card',
        'fixed inset-0 lg:sticky lg:inset-auto lg:top-6 lg:flex lg:h-[calc(100dvh-3rem)] lg:w-[380px] lg:shrink-0 lg:rounded-lg lg:border-2 lg:border-foreground lg:shadow-[4px_4px_0_0_var(--foreground)]',
        open ? 'flex' : 'hidden',
      )}
    >
      <div className="flex items-center justify-between border-b-2 border-foreground bg-foreground px-4 py-3 text-primary-foreground lg:rounded-t-md">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4" aria-hidden="true" />
          <div>
            <h2 className="font-serif text-lg font-semibold leading-none">Ask Pioneer</h2>
            <p className="mt-1 text-xs opacity-80">Your AI study companion</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-1.5 hover:bg-primary-foreground/10 lg:hidden"
        >
          <X className="size-5" aria-hidden="true" />
          <span className="sr-only">Close chat</span>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4" aria-live="polite">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col justify-end gap-4">
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Ask anything about science, history, research methods, or essay writing. Pioneer
              explains step by step.
            </p>
            <div className="flex flex-col gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="rounded-md border-2 border-foreground/20 bg-background/40 px-3 py-2 text-left text-sm transition-colors hover:border-foreground hover:bg-background"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {messages.map((message) => (
              <li
                key={message.id}
                className={cn('flex', message.role === 'user' ? 'justify-end' : 'justify-start')}
              >
                <div
                  className={cn(
                    'max-w-[88%] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm leading-relaxed',
                    message.role === 'user'
                      ? 'bg-foreground text-primary-foreground'
                      : 'border-2 border-foreground/15 bg-background/30',
                  )}
                >
                  <span className="sr-only">{message.role === 'user' ? 'You: ' : 'Pioneer: '}</span>
                  {message.parts.map((part, i) =>
                    part.type === 'text' ? <span key={`${message.id}-${i}`}>{part.text}</span> : null,
                  )}
                </div>
              </li>
            ))}
            {status === 'submitted' && (
              <li className="text-sm text-muted-foreground">Pioneer is thinking…</li>
            )}
          </ul>
        )}
        {error && (
          <p className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          submit(input)
        }}
        className="flex items-end gap-2 border-t-2 border-foreground p-3"
      >
        <label htmlFor="chat-input" className="sr-only">
          Your question
        </label>
        <textarea
          id="chat-input"
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              if (e.nativeEvent.isComposing || e.keyCode === 229) return
              e.preventDefault()
              submit(input)
            }
          }}
          placeholder="Ask a question…"
          className="max-h-32 min-h-10 flex-1 resize-none rounded-md border-2 border-foreground/25 bg-background/30 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:outline-none"
        />
        {busy ? (
          <button
            type="button"
            onClick={() => stop()}
            className="flex size-10 shrink-0 items-center justify-center rounded-md bg-foreground text-primary-foreground"
          >
            <Square className="size-4" aria-hidden="true" />
            <span className="sr-only">Stop generating</span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            className="flex size-10 shrink-0 items-center justify-center rounded-md bg-foreground text-primary-foreground disabled:opacity-40"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            <span className="sr-only">Send</span>
          </button>
        )}
      </form>
    </aside>
  )
}
