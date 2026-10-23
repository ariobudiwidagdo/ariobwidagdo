'use client'
import React from 'react'
import { Moon, Sun } from 'lucide-react'

// The theme lives on <html class="dark">, set before paint by the script in layout.tsx,
// so toggling only flips that class — no React re-render of the whole tree.
export default function ThemeToggle({ label }: { label: string }) {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border bg-card text-muted-foreground transition-colors hover:text-foreground"
    >
      <Sun className="h-4 w-4 dark:hidden" />
      <Moon className="hidden h-4 w-4 dark:block" />
    </button>
  )
}
