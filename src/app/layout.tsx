import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from './providers'

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
      <body className='bg-gradient-to-br from-green-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors'>
        <Providers>
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
        </Providers>
      </body>
    </html>
  )
}
