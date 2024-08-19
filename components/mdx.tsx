import { highlight } from "@/lib"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import Link from "next/link"
import { createElement, type ReactNode } from "react"
import { Image } from "./image"

import { CopyCodeButton, JSLogoIcon, ReactLogoIcon, TSLogoIcon } from "@/components/ui"

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
          ["data-anchor"]: true,
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
        alt={props.alt ?? "Visit this page"}
        href={props.href}
        className="underline transition-all decoration-accent-foreground underline-offset-2 decoration-[0.1em]"
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {props.children}
      </Link>
    )
  }
    return <a className="cursor-pointer decoration-0 text-foreground hover:text-muted-foreground" alt={props.alt ?? "Visit blog section by id"} href={props.href} {...props} />
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
  const lang = className.replace(/language-/, "")
  let icon

  switch (lang) {
    case "ts":
      icon = <TSLogoIcon fill="var(--color-h1-cmt)" />
      break
    case "tsx" || "jsx":
      icon = <ReactLogoIcon fill="var(--color-hl-cls)" />
      break
    case "js":
      icon = <JSLogoIcon fill="var(--color-hl-cmt)"/>
      break
    default:
      icon = <ReactLogoIcon fill="var(--color-hl-cls)"/>
  }
  return (
    <pre className="w-full border border-solid border-border my-6 flex flex-col whitespace-pre" tabIndex={0}>
      <div className="flex flex-row h-12 px-4 justify-between items-center bg-slate-950 border-b border-border border-solid">
        <div className="flex flex-col w-1/4 justify-start items-start">
          {icon}
        </div>
        <div className="flex flex-col w-2/4 justify-center items-center">
          <p className="text-foreground m-0 p-0 text-sm leading-normal">{`${lang.endsWith("x") ? "Component" : "example"}.${lang}`}</p>
        </div>
        <div className="flex flex-col w-1/4 justify-end items-end">
          <CopyCodeButton code={children}/>
        </div>
      </div>
      <code data-lang={`${lang}`} className="w-full px-4 h-auto border-none bg-background leading-normal font-mono font-normal text-sm pt-4 pb-0.5 max-h-96 overflow-scroll" dangerouslySetInnerHTML={{ __html: highlight(children) }} />
    </pre>
  )
}

function Blockquote({ children }: { children: React.ReactElement }) {
  return (
    <blockquote>{`"${children}"`}</blockquote>
  )
}

function List({ children, listStyle = "list-disc" }: { children: ReactNode; listStyle?: string }) {
  return (
    <ul className={`${listStyle}`}>{children}</ul>
  )
}

function InlineCode({ text }: { text: string }) {
  return <code className="relative rounded-md bg-muted py-2 px-3 text-sm font-normal inline-code">{text}</code>
}

const MdxComponents = {
  h1: H(1),
  h2: H(2),
  h3: H(3),
  h4: H(4),
  img: Image,
  pre: Pre,
  code: InlineCode,
  blockquote: Blockquote,
  ul: List,
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
