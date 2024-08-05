import { createElement, type ReactNode } from "react"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { cn } from "@/lib"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"

import { highlight } from "@/lib/plugins/highlight"

import { CopyCodeButton, JSLogoIcon, ReactLogoIcon, TSLogoIcon } from "./ui"

function H(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = children
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")

    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `h${level}-link-${slug}`,
          className: `${cn("anchor")}`,
        }),
      ],
      children
    )
  }

  Heading.displayName = `h${level}`

  return Heading
}

function P({
  children,
  small = "text-sm font-medium leading-none",
  muted = "text-sm text-muted-foreground",
  large = "text-lg font-semibold",
  lead = "text-xl text-muted-foreground",
}: {
  children: ReactNode
  small?: string
  muted?: string
  large?: string
  lead?: string
}) {
  return (
    <p
      className={cn(
        small
          ? small
          : muted
            ? muted
            : large
              ? large
              : lead
                ? lead
                : "leading-7 [&:not(:first-child)]:mt-6"
      )}
    >
      {children}
    </p>
  )
}

function A(
  props: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "a"> & {
    alt?: string
    href?: URL
    children: ReactNode
  }
) {
  if (props.href?.startsWith("/")) {
    return (
      <Link
        alt={props.alt ?? "Visit the next page"}
        href={props.href}
        {...props}
      >
        {props.children}
      </Link>
    )
  }

  if (props.href?.startsWith("#")) {
    return <a alt={props.alt ?? "Visit blog section by hash id"} {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Img({ src, alt, className, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt ?? "An image for the blog"}
      className="rounded-lg"
      {...props}
    />
  )
}

function Pre({
  children: {
    props: { className, children },
  },
}: {
  children: {
    props: {
      className: string
      children: string
    }
  }
}) {
  const ext = className.replace(/language-/, ".")
  const codeHTML = children
  let icon = <TSLogoIcon fill="#777777" />

  switch (ext) {
    case ".ts":
      icon = <TSLogoIcon fill="#777777" />
      break
    case ".tsx":
    case ".jsx":
      icon = <ReactLogoIcon fill="#61DAFB" />
      break
    case ".js":
      icon = <JSLogoIcon fill="#777777" />
      break
    default:
      icon = <TSLogoIcon fill="#777777" />
  }

  return (
    <pre>
      <div className="flex flex-row h-8 justify-between items-center w-full">
        <div className="flex flex-col w-1/3 -ml-[11px] mr-[11px] justify-start items-start">
          {icon}
        </div>
        <div className="flex flex-col w-2/3 justify-center items-center">
          {`${ext.endsWith("x") ? "Component" : "example"}${ext}`}
        </div>
        <div className="flex flex-col w-3/3 justify-end items-end">
          <CopyCodeButton>{children as ReactNode}</CopyCodeButton>
        </div>
        <hr />
      </div>
      <code dangerouslySetInnerHTML={{ __html: highlight(codeHTML) }} />
    </pre>
  )
}

function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{`"${children}"`}</blockquote>
  )
}

function List({ children, as }: { children: ReactNode; as: "ul" | "ol" }) {
  return as === "ul" ? (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ) : (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  )
}

function InlineCode({ children }: { children: string }) {
  return <code id="inline">{children}</code>
}

const MdxComponents = {
  h1: H(1),
  h2: H(2),
  h3: H(3),
  h4: H(4),
  img: Img,
  pre: Pre,
  code: InlineCode,
  blockquote: Blockquote,
  ul: List,
  p: P,
  a: A,
}

export function Mdx(
  props: MDXRemoteProps & {
    components?: React.ComponentPropsWithRef<React.ElementType>
  }
): JSX.Element {
  return (
    <MDXRemote
      {...props}
      components={{ ...MdxComponents, ...(props.components || {}) }}
    />
  )
}
