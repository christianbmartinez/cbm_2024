'use client'

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "./ui/icons";


export function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    function toggleTheme(): void {
      const localTheme = localStorage.getItem("theme");
      const resolvedTheme = localTheme !== null ? localTheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

      setTheme(resolvedTheme);

      localStorage.setItem("theme", `${resolvedTheme}`);

      document.documentElement.classList.toggle(theme === "dark" ? "light" : "dark") 

    }
    toggleTheme();
  }, [theme]);

  return (
    <Button
      role="toggle"
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    > 
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
