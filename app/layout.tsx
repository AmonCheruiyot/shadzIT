import './globals.css'; // Global styles
import Layout from './components/Layout'; // Your layout component
import Head from 'next/head'; // Import Head from Next.js
import { Metadata } from 'next'; // Import Metadata from Next.js

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap" />
        <title>{metadata.title.default}</title>
        {/* You can also add any additional meta tags here */}
      </Head>
      <body className="font-inter"> {/* Use your font class here */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}