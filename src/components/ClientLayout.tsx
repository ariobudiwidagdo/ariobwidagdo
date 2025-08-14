'use client'
import React from 'react'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <header className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gray-900/80 shadow-lg border-b border-gray-700/50'
          : 'bg-white/80 shadow-lg border-b border-gray-200/50'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className={`text-xl font-bold leading-relaxed py-1 bg-gradient-to-r bg-clip-text text-transparent transition-colors duration-300 ${
              theme === 'dark'
                ? 'from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300'
                : 'from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
            }`}
          >
            Ario Budi Widagdo
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <Link 
                href="/" 
                className={`transition-all duration-300 relative group ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-cyan-400'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r ${
                  theme === 'dark'
                    ? 'from-cyan-400 to-purple-400'
                    : 'from-blue-600 to-purple-600'
                }`}></span>
              </Link>
              <Link 
                href="/projects" 
                className={`transition-all duration-300 relative group ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-cyan-400'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Projects
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r ${
                  theme === 'dark'
                    ? 'from-cyan-400 to-purple-400'
                    : 'from-blue-600 to-purple-600'
                }`}></span>
              </Link>
              <Link 
                href="/contact" 
                className={`transition-all duration-300 relative group ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-cyan-400'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gradient-to-r ${
                  theme === 'dark'
                    ? 'from-cyan-400 to-purple-400'
                    : 'from-blue-600 to-purple-600'
                }`}></span>
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      
      <main className="max-w-6xl mx-auto px-6 py-12 flex-grow">
        {children}
      </main>
      
      <footer className={`mt-auto backdrop-blur-md transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gray-900/80 border-t border-gray-700/50'
          : 'bg-white/80 border-t border-gray-200/50'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className={`text-center text-lg font-medium bg-gradient-to-r bg-clip-text text-transparent ${
            theme === 'dark'
              ? 'from-cyan-400 to-purple-400'
              : 'from-blue-600 to-purple-600'
          }`}>
            © 2024 Ario Budi Widagdo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}