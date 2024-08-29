"use client"

import { Button, MoonIcon, SunIcon } from "@/components"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
// Refer to ssr notes
let icon: JSX.Element;

switch (theme) {
  case "dark":
    icon = <MoonIcon className="size-5" />
    break
  case "light":
    icon = <SunIcon className="h-6 w-[1.3rem]" />
    break
  default:
    icon = <MoonIcon className="size-5" />
}
  return (
    <Button
      role="toggle"
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    > 
      {icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
