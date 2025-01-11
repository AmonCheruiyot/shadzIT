import './globals.css'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'shadzIT - Your One-Stop Tech Shop',
    template: '%s | shadzIT'
  },
  description: 'Find the best tech products at shadzIT. We offer a wide range of laptops, smartphones, and accessories.',
  keywords: ['tech', 'electronics', 'e-commerce', 'gadgets', 'laptops', 'smartphones'],
  authors: [{ name: 'shadzIT Team' }],
  openGraph: {
    title: 'shadzIT - Your One-Stop Tech Shop',
    description: 'Find the best tech products at shadzIT. We offer a wide range of laptops, smartphones, and accessories.',
    url: 'https://www.shadzit.com',
    siteName: 'shadzIT',
    images: [
      {
        url: 'https://www.shadzit.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'shadzIT - Your One-Stop Tech Shop',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

