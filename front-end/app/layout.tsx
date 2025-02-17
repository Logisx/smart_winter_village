import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smart winter village',
  description: 'Smart winter village',
}

const cabin = Cabin({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cabin.className} dark`}>
      <body className={cabin.className}>{children}</body>
    </html>
  )
}
