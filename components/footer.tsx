import { footerLinks, socialLinks } from "@/config"
import Link from "next/link"

import { Button } from "./ui"

export function Footer() {
  return (
    <footer>
      <div className="relative w-full md:w-mdx bottom-0 w-full mb-4 mt-8">
        <div className="flex flex-row items-center justify-between">
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
                      role="link" variant="link">
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
                  className="inline-flex"
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
      </div>
    </footer>
  )
}
