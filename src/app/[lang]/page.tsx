import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Gauge, GraduationCap, Layers, Mail, MapPin, Rocket } from 'lucide-react'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import { education, experiences, profile, projects, skillGroups, stats, strengths } from '@/data/portfolio'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

const strengthIcons = { layers: Layers, gauge: Gauge, rocket: Rocket }

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">{eyebrow}</p>
      <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  )
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Hero */}
      <section className="pt-2 sm:pt-10">
        <Reveal className="mb-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.home.badge}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" /> {profile.location}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-7xl">{profile.name}</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 text-xl font-semibold sm:mt-4 sm:text-3xl">
            <span className="text-gradient">{profile.role}</span>
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-snug sm:text-xl">{profile.headline[lang]}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">{profile.summary[lang]}</p>
        </Reveal>
        <Reveal delay={320} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
          <Link
            href={`/${lang}/projects`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:py-2.5"
          >
            {t.home.viewProjects} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-full border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary sm:py-2.5"
          >
            <Mail className="h-4 w-4" /> {t.home.getInTouch}
          </Link>
        </Reveal>
        <Reveal delay={400}>
          <dl className="mt-10 grid grid-cols-3 divide-x rounded-2xl border bg-card sm:mt-14">
            {stats.map(({ value, label }) => (
              <div key={value} className="px-3 py-4 text-center sm:px-6 sm:py-5">
                <dt className="sr-only">{label[lang]}</dt>
                <dd className="text-xl font-bold tracking-tight sm:text-3xl">{value}</dd>
                <dd className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-sm">{label[lang]}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Strengths */}
      <section>
        <Reveal>
          <SectionHeading eyebrow={t.home.strengthsEyebrow} title={t.home.strengthsTitle} />
        </Reveal>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {strengths.map(({ icon, title, text }, i) => {
            const Icon = strengthIcons[icon]
            return (
              <Reveal key={icon} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border bg-card p-6 transition-colors hover:border-brand/40">
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 text-lg font-semibold">{title[lang]}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text[lang]}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <Reveal className="flex flex-wrap items-end justify-between gap-x-4">
          <SectionHeading eyebrow={t.home.featuredEyebrow} title={t.home.featuredTitle} />
          <Link
            href={`/${lang}/projects`}
            className="mb-8 hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            {t.home.allProjects} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.title} delay={i * 80} className="h-full">
              <ProjectCard project={project} lang={lang} labels={t.projects} />
            </Reveal>
          ))}
        </div>
        <Link
          href={`/${lang}/projects`}
          className="mt-6 flex items-center justify-center gap-1 rounded-full border bg-card py-3 text-sm font-medium sm:hidden"
        >
          {t.home.allProjects} <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Experience timeline */}
      <section>
        <Reveal>
          <SectionHeading eyebrow={t.home.careerEyebrow} title={t.home.experienceTitle} />
        </Reveal>
        <ol className="relative space-y-5 border-l pl-5 sm:space-y-6 sm:pl-8">
          {experiences.map(({ role, company, period, description, stack }) => (
            <Reveal as="li" key={role + company} className="relative">
              <span className="absolute -left-[26.5px] top-7 h-3 w-3 rounded-full bg-gradient-to-br from-brand to-brand-2 ring-4 ring-background sm:-left-[38.5px]" />
              <article className="rounded-2xl border bg-card p-5 transition-colors hover:border-brand/40 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-semibold sm:text-xl">{role}</h3>
                  <span className="order-first shrink-0 font-mono text-xs text-muted-foreground sm:order-none">
                    {period[lang]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-brand">{company}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
                  {description.map((desc) => (
                    <li key={desc.en} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground sm:mt-2.5" />
                      <span className="leading-relaxed">{desc[lang]}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {stack.map((tech) => (
                    <span key={tech} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Skills + education */}
      <section className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <SectionHeading eyebrow={t.home.skillsEyebrow} title={t.home.skillsTitle} />
          </Reveal>
          <Reveal delay={80}>
            <dl className="divide-y rounded-2xl border bg-card">
              {skillGroups.map(({ label, items }) => (
                <div key={label.en} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:gap-6 sm:p-5">
                  <dt className="shrink-0 pt-1 text-sm font-medium sm:w-40">{label[lang]}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span key={skill} className="rounded-md border bg-background px-2.5 py-1 text-xs font-medium sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <SectionHeading eyebrow={t.home.educationEyebrow} title={t.home.educationTitle} />
          </Reveal>
          <ul className="space-y-4">
            {education.map(({ school, major, period }, i) => (
              <Reveal as="li" key={school} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border bg-card p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold">{school}</p>
                    <p className="text-sm text-muted-foreground">{major[lang]}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{period}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section">
        <div className="relative overflow-hidden rounded-3xl border bg-card px-5 py-10 text-center sm:px-12 sm:py-12">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(40rem_16rem_at_50%_0%,var(--glow),transparent_70%)]" />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">{t.home.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{t.home.ctaText}</p>
            <Link
              href={`/${lang}/contact`}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              {t.home.ctaButton} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
