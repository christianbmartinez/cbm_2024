import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'

const fontSans = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
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
        className={`flex flex-col ${fontSans.className} font-sans w-full max-w-mdx px-4 sm:px-0 mx-auto bg-background text-foreground`}>
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
