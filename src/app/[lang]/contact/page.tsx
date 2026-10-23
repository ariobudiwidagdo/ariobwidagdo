import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mail, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import { profile } from '@/data/portfolio'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

type PageProps = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  return isLocale(lang) ? { title: getDictionary(lang).contact.eyebrow } : {}
}

export default async function Contact({ params }: PageProps) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang).contact

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <Reveal>
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">{t.eyebrow}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">{t.subtitle}</p>
        <div className="mt-8 space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 text-sm transition-colors hover:border-brand/50"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary">
              <Mail className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">{t.emailDirect}</span>
              <span className="block truncate font-medium">{profile.email}</span>
            </span>
          </a>
          <div className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3 text-sm">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="font-medium">{profile.location}</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <ContactForm t={t} />
      </Reveal>
    </div>
  )
}
