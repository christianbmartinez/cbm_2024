import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { siteConfig } from "@/lib/config"
import { Inter as FontSans } from "next/font/google"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "MDX",
    "SEO",
  ],
  authors: [
    {
      name: "Christian B. Martinez",
      url: "https://christianbmartinez.com",
    },
  ],
  creator: "Christian B. Martinez",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: "@cbmonx",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`flex flex-col font-sans w-full max-w-mdx px-4 sm:px-0 mx-auto bg-background text-foreground`}>
          <ThemeProvider enableSystem attribute="class" defaultTheme='system' disableTransitionOnChange>
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
