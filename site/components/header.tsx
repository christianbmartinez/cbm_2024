import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

export const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Lab',
    href: '/lab',
  },
  {
    title: 'CV',
    href: '/cv',
  },
]

export function Header() {
  return (
    <header>
      <nav className="sticky top-0 left-0 flex flex-row items-center justify-between z-10 pt-8 h-8 -my-8 w-full">
        <ul>
          {navLinks.map((link, i) => (
            <li key={`header-nav-link-${i}`} className="inline-flex">
              <Link href={link.href}>
                <Button
                  className={i === 0 ? '-ml-4' : ''}
                  role="link"
                  variant="link"
                  aria-label={`Link to ${link.title} page`}>
                  {link.title}
                  <span className="sr-only">Link to {link.title} page</span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="inline-flex justify-end items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
