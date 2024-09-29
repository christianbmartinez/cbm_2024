import Link from 'next/link'
import { Button } from './ui/button'
import { GitHubLogoIcon, LinkedInLogoIcon, XLogoIcon } from './ui/icons'

const socialLinks = [
  {
    title: 'X',
    icon: XLogoIcon,
    href: `https://twitter.com/${process.env.X_USERNAME}`,
  },
  {
    title: 'GitHub',
    icon: GitHubLogoIcon,
    href: `https://github.com/${process.env.GITHUB_USERNAME}`,
  },
  {
    title: 'LinkedIn',
    icon: LinkedInLogoIcon,
    href: `https://www.linkedin.com/in/${process.env.LINKEDIN_USERNAME}`,
  },
]

const footerLinks = [
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'RSS',
    href: '/rss.xml',
  },
  {
    title: 'Sitemap',
    href: '/sitemap.xml',
  },
]

export function Footer() {
  return (
    <footer>
      <nav className="relative z-10 flex flex-row justify-between items-center pb-8 h-8 -my-8 w-full">
        <ul>
          {footerLinks.map((link, i) => {
            return (
              <li key={`footer_nav_link-${i}`} className="inline-flex">
                <Link
                  href={link.href}
                  target="_blank"
                  aria-label={`Link to ${link.title} page`}
                  rel="noreferrer">
                  <Button
                    className={i === 0 ? '-ml-4' : ''}
                    role="link"
                    variant="link">
                    {link.title}
                  </Button>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="inline-flex justify-end items-center">
          {socialLinks.map((link, i) => {
            return (
              <Link
                key={`footer_social_link-${i}`}
                href={link.href}
                target="_blank"
                rel="noreferrer">
                <Button role="link" type="button" variant="ghost" size="icon">
                  <link.icon
                    className={`${link.title === 'X' ? 'size-3' : 'size-4'} border-none`}
                  />
                </Button>
              </Link>
            )
          })}
        </div>
      </nav>
    </footer>
  )
}
