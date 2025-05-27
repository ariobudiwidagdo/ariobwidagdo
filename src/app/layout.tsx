import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ario Budi Widagdo Portfolio',
  description: 'Frontend Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-sans">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center p-5 max-w-5xl">
            <Link href="/" className="font-extrabold text-2xl text-blue-900 hover:text-blue-700 transition">
              Ario Budi Widagdo
            </Link>
            <ul className="flex space-x-8 text-blue-800 font-semibold">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-6 py-12 max-w-5xl">
          {children}
        </main>

        <footer className="bg-white text-center text-sm p-6 text-gray-500 border-t border-gray-200">
          © 2025 Ario Budi Widagdo. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
