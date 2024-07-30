import { Button, ThemeToggle } from "@/components"
import { navLinks } from "@/config"
import Link from "next/link"

export function Header() {
  return (
    <header>
      <nav className="sticky top-0 left-0 flex flex-row items-center justify-between z-40 h-16 backdrop-blur-sm mt-4 mb-8 w-full max-w-mdx">
        <ul>
          {navLinks.map((link, i) => (
            <li key={`nav_item-${i}`} className="inline-flex">
              <Link
                aria-label={`Link to ${link.title} page`}
                href={link.href}
              >
                <Button 
                  className={i === 0 ? "pl-0" : ""}
                  role="link" 
                  variant="link">
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
