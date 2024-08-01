"use client"

import { useState } from "react"
import { cn } from "@/lib"
import { cva, type VariantProps } from "class-variance-authority"

import { CheckIcon, CopyClipboardIcon } from "./icons"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out",
        link: "no-underline hover:underline text-primary",
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
// Animation is broken, positioning is off. Fix this component stat.
export function CopyCodeButton({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false)

  function handleMouseDown() {
    if (!navigator.clipboard) {
      // Use popover later
      console.log("Feature not currently supported in your browser.")
    }
    navigator.clipboard.writeText(children as string)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <>
      <Button
        className="relative size-4 appearance-none p-2 border-none outline-none"
        variant="ghost"
        onMouseDown={handleMouseDown}
        size="icon"
      >
        <CopyClipboardIcon
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            strokeDasharray: 50,
            strokeDashoffset: copied ? -50 : 0,
          }}
        />
        <CheckIcon
          style={{
            position: "absolute",
            color: "green",
            top: 0,
            right: 0,
            visibility: `${copied ? "visible" : "hidden"}`,
            strokeDasharray: 50,
            strokeDashoffset: copied ? 0 : -50,
          }}
        />
      </Button>
    </>
  )
}
