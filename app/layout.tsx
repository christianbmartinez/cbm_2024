import { Footer, Header, ThemeProvider } from "@/components"
import localFont from "next/font/local"

import "./globals.css"

export const fetchCache = "force-cache"
export const dynamic = "force-static"
export const revalidate = false

const fontSans = localFont({
  src: "../lib/fonts/Mona-Sans.woff2",
  preload: true,
  display: "swap",
  variable: "--font-sans",
  weight: "300 800",
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
        className={`${fontSans.className} font-sans min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          <main className="w-full max-w-mdx">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
