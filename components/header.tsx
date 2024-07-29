import Link from "next/link"
import { Button, ThemeToggle } from "@/components"
import { navLinks } from "@/config"

export function Header() {
  return (
    <header>
      <nav className="sticky top-0 left-0 px-6 flex flex-row items-center justify-between z-40 h-16 backdrop-blur-sm mt-4 mb-8 w-full max-w-mdx mx-auto">
        <ul>
          {navLinks.map((link, i) => (
            <li key={`nav_item-${i}`} className="inline-flex">
              <Link
                className="[&>button:first-child]:pl-0"
                aria-label={`Link to ${link.title} page`}
                href={link.href}
              >
                <Button role="link" variant="link">
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
