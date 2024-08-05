import localFont from "next/font/local"
import { Footer, Header, ThemeProvider } from "@/components"

import "./globals.css"

export const fetchCache = "force-cache"
export const dynamic = "force-static"
export const revalidate = false

const fontSans = localFont({
  src: "../lib/fonts/GeistVF.woff",
  preload: true,
  display: "swap",
  variable: "--font-sans",
  weight: "300 800",
})

const fontMono = localFont({
  src: "../lib/fonts/GeistMonoVF.woff",
  preload: false,
  variable: "--font-mono",
  weight: "400",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`flex flex-col ${fontSans.variable} ${fontMono.variable} font-sans tracking-normal leading-normal w-full md:max-w-mdx px-4 md:px-0 mx-auto bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
          disableTransitionOnChange
        >
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
