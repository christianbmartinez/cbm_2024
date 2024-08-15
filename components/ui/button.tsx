"use client"

import { cn } from "@/lib"
import { cva, type VariantProps } from "class-variance-authority"
import { useState } from "react"

import { CheckIcon, CopyClipboardIcon } from "./icons"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground hover:text-accent-foreground hover:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "bg-transparent hover:bg-accent hover:text-accent-foreground",
        link: "no-underline hover:underline text-foreground",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "size-10",
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

  function handleKeyDown() {
    if (!navigator.clipboard) {
      console.log("Feature not currently supported in your browser.")
    }
    navigator.clipboard.writeText(code)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
      <Button
        role="button"
        arial-label="Copy Code Button"
        aria-pressed={copied ? "true" : "false"}
        aria-controls="code"
        tabIndex={0}
        className="relative size-4 appearance-none"
        variant="ghost"
        onKeyDown={handleKeyDown}
        size="icon"
      >
        <CopyClipboardIcon
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            strokeDasharray: 50,
            strokeDashoffset: copied ? -50 : 0,
            transition: "all 1s ease-in-out",
          }}
        />
        <CheckIcon
          style={{
            position: "absolute",
            color: "#22c55e",
            top: 0,
            right: 0,
            visibility: `${copied ? "visible" : "hidden"}`,
            strokeDasharray: 50,
            strokeDashoffset: copied ? 0 : -50,
            transition: "all 1s ease-in-out",
          }}
        />
      </Button>
  )
}
