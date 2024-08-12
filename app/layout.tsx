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
      <div className="absolute top-0 left-0 z-0 h-screen w-screen bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      <head />
      <body
        className={`flex flex-col ${fontSans.variable} font-sans w-full sm:max-w-mdx px-4 sm:px-0 mx-auto text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen relative flex justify-start items-center z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}