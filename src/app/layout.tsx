import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FinSage',
  description: 'Your smart personal finance tracker',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <ThemeProvider
        attribute="class"
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
