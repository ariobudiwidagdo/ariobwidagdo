import './globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import ClientLayout from '../components/ClientLayout'

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
      <body>
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
