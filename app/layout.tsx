import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import LocalFont from 'next/font/local'

const Geist_Sans = LocalFont({
  src: '../lib/fonts/GeistVF.woff2',
  display: 'swap',
  weight: '300 800',
  variable: '--font-family-sans',
})

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body
        className={`flex flex-col ${Geist_Sans.variable} font-sans w-full max-w-mdx px-4 sm:px-0 mx-auto bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
          disableTransitionOnChange>
          <Header />
          <main className="min-h-screen relative flex justify-start items-center">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
