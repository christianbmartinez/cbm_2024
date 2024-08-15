import { Button, ThemeToggle } from "@/components"
import { navLinks } from "@/lib/config"
import Link from "next/link"

export function Header() {
  return (
    <header>
      <nav className="sticky top-0 left-0 flex flex-row items-center justify-between z-40 pt-8 h-8 -my-8 w-full">
        <ul>
          {navLinks.map((link, i) => (
            <li key={`header-nav-link-${i}`} className="inline-flex">
              <Link aria-label={`Link to ${link.title} page`} href={link.href}>
                <Button
                  className={i === 0 ? "-ml-4" : ""}
                  role="link"
                  variant="link"
                >
                  {link.title}
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
