'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries'

type NavProps = { lang: Locale; labels: Dictionary['nav'] }

function useLinks(lang: Locale, labels: Dictionary['nav']) {
  const pathname = usePathname()
  return [
    { href: `/${lang}`, label: labels.home },
    { href: `/${lang}/projects`, label: labels.projects },
    { href: `/${lang}/contact`, label: labels.contact },
  ].map((link) => ({ ...link, active: pathname === link.href }))
}

/** Inline links, shown from the `sm` breakpoint up */
export function DesktopNav({ lang, labels }: NavProps) {
  const links = useLinks(lang, labels)

  return (
    <ul className="hidden items-center gap-1 text-sm sm:flex">
      {links.map(({ href, label, active }) => (
        <li key={href}>
          <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              active ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** Hamburger button + dropdown panel, shown below the `sm` breakpoint */
export function MobileNav({ lang, labels }: NavProps) {
  const links = useLinks(lang, labels)
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close after navigating, and on Escape
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? labels.closeMenu : labels.openMenu}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-card text-muted-foreground transition-colors hover:text-foreground"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 top-[61px] -z-10 bg-background/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <ul
            id="mobile-nav"
            className="absolute inset-x-0 top-full border-b bg-background px-4 pb-4 pt-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {links.map(({ href, label, active }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
