import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FinSage',
  description: 'Your smart personal finance tracker',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>{children}</body>
    </html>
  )
}
