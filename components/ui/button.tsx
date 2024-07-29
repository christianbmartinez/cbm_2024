"use client"

import React, { useState } from "react"
import { cn } from "@/lib"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { CheckIcon, CopyIcon } from "./icons"

const buttonVariants = cva(
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
        ghost: "text-center hover:bg-accent hover:text-accent-foreground",
        ghost_animated_toggle_icon:
          "relative appearance-none text-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
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
        variant="ghost_animated_toggle_icon"
        onMouseDown={handleMouseDown}
        size="icon"
      >
        <CopyIcon
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            strokeDashoffset: `${copied ? 50 : 0}`,
          }}
        />
        <CheckIcon
          style={{
            position: "absolute",
            color: "var(--hl-ent)",
            top: 0,
            right: 0,
            visibility: `${copied ? "visible" : "hidden"}`,
            strokeDashoffset: `${copied ? 0 : -50}`,
          }}
        />
      </Button>
    </>
  )
}

export { Button, buttonVariants }
