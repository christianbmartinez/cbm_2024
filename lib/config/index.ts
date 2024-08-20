import { GitHubLogoIcon, LinkedInLogoIcon, XLogoIcon } from "@/components/icons"

export const baseUrl =
  process.env.NODE_ENV !== "development"
    ? process.env.BASE_URL
    : "http://localhost:3000"

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Lab",
    href: "/lab",
  },
  {
    title: "CV",
    href: "/cv",
  },
]

export const socialLinks = [
  {
    title: "X",
    icon: XLogoIcon,
    href: "https://twitter.com/_coderchris",
  },
  {
    title: "GitHub",
    icon: GitHubLogoIcon,
    href: "https://github.com/christianbmartinez",
  },
  {
    title: "LinkedIn",
    icon: LinkedInLogoIcon,
    href: "https://www.linkedin.com/in/christianbmartinez",
  },
]

export const footerLinks = [
  {
    title: "Contact",
    href: "#",
  },
  {
    title: "RSS",
    href: "/rss.xml",
  },
  {
    title: "Sitemap",
    href: "/sitemap.xml",
  },
]

