"use client"

import { Button, MoonIcon, SunIcon } from "@/components"
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
