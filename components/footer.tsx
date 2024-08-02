import Link from "next/link"
import { footerLinks, socialLinks } from "@/config"

import { Button } from "./ui"

export function Footer() {
  return (
    <footer>
      <div className="relative flex flex-row justify-between items-center pb-8 h-8 -my-8 w-full">
        <ul>
          {footerLinks.map((link, i) => {
            return (
              <li key={`footer_nav_link-${i}`} className="inline-flex">
                <Link
                  href={link.href}
                  target="_blank"
                  aria-label={`Link to ${link.title} page`}
                  rel="noreferrer"
                >
                  <Button
                    className={i === 0 ? "pl-0" : ""}
                    role="link"
                    variant="link"
                  >
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
                rel="noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <link.icon
                    className={link.title === "X" ? "size-3" : "size-4"}
                  />
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
