import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import LocalFont from 'next/font/local'

const Geist = LocalFont({
  src: '../lib/fonts/GeistVF.woff2',
  display: 'swap',
  weight: '300 800',
  variable: '--font-sans',
})

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`flex flex-col ${Geist.variable} font-sans w-full max-w-mdx px-4 sm:px-0 mx-auto bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen relative flex justify-start items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
