import { ArrowUpRight, Lock } from 'lucide-react'
import type { Project } from '@/data/portfolio'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

type ProjectCardProps = {
  project: Project
  lang: Locale
  labels: Dictionary['projects']
}

export default function ProjectCard({ project, lang, labels }: ProjectCardProps) {
  const { title, description, link, tech, category, colors, isNew } = project
  const host = link ? new URL(link).host : null

  const body = (
    <>
      <div
        className="relative h-24 overflow-hidden sm:h-28"
        style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_-20%,rgba(255,255,255,0.45),transparent_55%)]" />
        <span className="absolute bottom-3 left-4 text-4xl font-bold tracking-tight text-white/90">
          {title.charAt(0)}
        </span>
        <div className="absolute right-3 top-3 flex gap-1.5">
          {isNew && (
            <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-black">
              {labels.new}
            </span>
          )}
          <span className="rounded-full bg-black/25 px-2 py-0.5 text-[11px] font-medium text-white">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          {link ? (
            <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          ) : (
            <Lock className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description[lang]}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-4 truncate border-t pt-3 font-mono text-xs text-muted-foreground">
          {host ?? labels.privateProject}
        </p>
      </div>
    </>
  )

  const className =
    'group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40'

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  )
}
