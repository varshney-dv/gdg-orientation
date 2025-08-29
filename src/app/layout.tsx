import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GDG NITJ - Tech Challenge Quiz',
  description: 'Test your technical knowledge with GDG NITJ orientation quiz for first-year students',
  keywords: 'GDG, Google Developer Group, NITJ, Quiz, Tech Challenge, Programming, Computer Science',
  authors: [{ name: 'GDG NITJ', url: 'https://gdg.community.dev/nit-jalandhar/' }],
  creator: 'GDG NITJ',
  publisher: 'GDG NITJ',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#4285f4',
  manifest: '/manifest.json',
  openGraph: {
    title: 'GDG NITJ - Tech Challenge Quiz',
    description: 'Join the Google Developer Group at NITJ and test your technical skills!',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/gdg-logo.png',
        width: 1200,
        height: 630,
        alt: 'GDG NITJ Tech Challenge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDG NITJ - Tech Challenge Quiz',
    description: 'Test your technical knowledge with GDG NITJ!',
    images: ['/gdg-logo.png'],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main role="main">
          {children}
        </main>
      </body>
    </html>
  )
}