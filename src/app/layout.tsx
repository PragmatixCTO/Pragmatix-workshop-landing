import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pragmatix Workshop',
  description: 'Launch your career with Pragmatix Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}