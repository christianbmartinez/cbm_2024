'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { MoonIcon, SunIcon } from '../ui/icons'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      role="toggle"
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}