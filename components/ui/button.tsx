"use client"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { useState } from "react"

import { CheckIcon, CopyClipboardIcon } from "./icons"

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-transparent",
  {
    variants: {
      variant: {
        default: "bg-transparent text-foreground hover:text-accent-foreground hover:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        link: "no-underline hover:underline text-foreground bg-transparent border-none",
        icon_animated: "bg-transparent text-foreground hover:text-accent-foreground",
      },
      size: {
        default: "h-10 py-2 px-4 rounded",
        sm: "h-9 px-3 rounded",
        lg: "h-11 px-8 rounded",
        icon: "size-10 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {props.children}
    </button>
  )
}
Button.displayName = "Button"

export function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  function handleMouseDown() {
    if (!navigator.clipboard) {
      console.log("Feature not currently supported in your browser.")
    }
    navigator.clipboard.writeText(code)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
      <Button
        role="button"
        type="button"
        variant="ghost"
        size="icon"
        arial-label="Copy Code Button"
        className="relative flex size-4 p-4 hover:bg-background"
        onMouseDown={handleMouseDown}
      >
        <CopyClipboardIcon
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            strokeDasharray: 50,
            strokeDashoffset: copied ? -50 : 0,
            transition: "all .5s ease-in-out",
          }}
        />
        <CheckIcon
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--color-accent-sky)",
            visibility: `${copied ? "visible" : "hidden"}`,
            strokeDasharray: 50,
            strokeDashoffset: copied ? 0 : -50,
            transition: "all .5s ease-in-out",
          }}
        />
      </Button>
  )
}
