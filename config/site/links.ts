import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

import { XLogoIcon } from "@/components/ui/icons"

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
