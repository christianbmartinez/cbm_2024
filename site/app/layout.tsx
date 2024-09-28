import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

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
        className={`flex flex-col font-sans w-full max-w-mdx px-4 sm:px-0 mx-auto bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen relative flex justify-start items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
