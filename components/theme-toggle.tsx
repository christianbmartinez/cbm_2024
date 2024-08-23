"use client"

import { Button, MoonIcon, SunIcon } from "@/components"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
// Refer to ssr notes
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "system" ? "system" : "light" ? "dark" : "light")}
    > 
      <SunIcon className="h-6 w-[1.3rem] dark:hidden" />
      <MoonIcon className="hidden size-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
