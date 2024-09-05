"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@/components/ui/icons"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme()

  const themes = {
    "dark": {
      inverse: "light",
      icon: <MoonIcon />,
    },
    "light": {
      inverse: "dark",
      icon: <SunIcon />,
    }
  }

  return (
    <Button
      role="toggle"
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(themes[theme!].inverse)}
    > 
      {themes[theme || systemTheme!].icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
