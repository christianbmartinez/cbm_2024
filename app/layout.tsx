import { Footer, Header, ThemeProvider } from "@/components"
import { Inter } from "next/font/google"

import "../styles/index.css"

const fontSans = Inter({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
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
        className={`flex flex-col ${fontSans.variable} font-sans w-full max-w-mdx px-4 sm:px-0 mx-auto bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
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