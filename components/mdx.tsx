import { cn } from "@/lib"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import Link from "next/link"
import { createElement, type ReactNode } from "react"
import { Img } from "./image"

import { highlight } from "@/lib/plugins/highlight"

import type { SerializeOptions } from "next-mdx-remote/dist/types"
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
  let icon

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
    <pre className="flex flex-col w-full sm:max-w-mdx">
      <div className="flex flex-row h-16 justify-between items-center">
        <div className="flex flex-col w-1/4 justify-start items-start">
          {icon}
        </div>
        <div className="flex flex-col w-2/4 justify-center items-center title">
          {`${ext.endsWith("x") ? "Component" : "example"}${ext}`}
        </div>
        <div className="flex flex-col w-1/4 justify-end items-end">
          <CopyCodeButton>{children as ReactNode}</CopyCodeButton>
        </div>
        <hr />
      </div>
      <code className="h-auto w-4/4 max-h-96 overflow-scroll" dangerouslySetInnerHTML={{ __html: highlight(codeHTML) }} />
    </pre>
  )
}

function Blockquote({ children }: { children: React.ReactElement }) {
  return (
    <blockquote>{`"${children}"`}</blockquote>
  )
}

function List({ children, listStyle }: { children: ReactNode; listStyle?: "list-disc" | "list-decimal" | "list-none" }) {
  return (
    <ul className={`my-6 ml-6 ${listStyle ?? "list-disc"} [&>li]:mt-2`}>{children}</ul>
  )
}

function InlineCode({ text }: { text: string }) {
  return <code className="inline-code">{text}</code>
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
  a: A,
}

type MdxProps = Partial<MDXRemoteProps> & {
  components?: React.ComponentPropsWithRef<React.ElementType>
  source: any | string
  options?: SerializeOptions
}

export function Mdx(
  props: MdxProps
): JSX.Element {
  return (
    <MDXRemote
      {...props}
      components={{ ...MdxComponents, ...(props.components || {}) }}
    />
  )
}
