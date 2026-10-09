export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 id={id} className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
