import { Footer, Header, ThemeProvider } from "@/components"
import localFont from "next/font/local"

import "./globals.css"

const fontSans = localFont({
  src: "../lib/fonts/GeistVF.woff",
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
        className={`flex flex-col ${fontSans.variable} font-sans w-full sm:max-w-mdx px-4 sm:px-0 mx-auto bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
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