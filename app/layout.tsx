import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DevModeProvider } from './_context/dev-mode-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Community Arena',
  description: 'Community Arena Events and Information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DevModeProvider>
          {children}
        </DevModeProvider>
      </body>
    </html>
  )
}
