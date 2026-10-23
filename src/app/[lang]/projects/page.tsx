import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/portfolio'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

type PageProps = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  return isLocale(lang) ? { title: getDictionary(lang).projects.title } : {}
}

export default async function Projects({ params }: PageProps) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang).projects

  return (
    <div>
      <Reveal className="mb-10 sm:mb-12">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">{t.eyebrow}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">{t.subtitle}</p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 80} className="h-full">
            <ProjectCard project={project} lang={lang} labels={t} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
