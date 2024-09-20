'use client'

import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "./ui/icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || null;
    const systemTheme = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(storedTheme ?? systemTheme);
    document.querySelector("html")!.setAttribute('data-theme', theme!);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html")!.setAttribute('data-theme', newTheme);
  }, [theme]);

  return (
    <Button
      role="toggle"
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}