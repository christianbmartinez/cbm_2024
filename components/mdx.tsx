import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { createElement, type ReactNode } from "react"

import { highlight } from "@/lib/plugins"

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

type ImgProps = Partial<ImageProps> & {
  src: string
  alt: string
  className: string
  loading: "lazy" | "eager"
  priority: true | false
}

export function Img({
  loading = "lazy",
  priority = false,
  src,
  alt="A really cool image for my website that I took recently.",
  className,
  ...props
}: ImgProps) {
  return (
    <Image
    src={src}
    alt={alt}
    loading={loading}
    priority={priority}
    className={"w-full h-64 rounded-lg my-6 hover:saturate-200 hover:blur-sm"}
    {...props}
    />
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
  const ext = className.replace(/language-/, ".")
  let icon

  switch (ext) {
    case ".ts":
      icon = <TSLogoIcon fill="var(--color-accent-foreground)" />
      break
    case ".tsx" || ".jsx":
      icon = <ReactLogoIcon fill="var(--color-hl-cls)" />
      break
    case ".js":
      icon = <JSLogoIcon fill="var(--color-accent-foreground)"/>
      break
    default:
      icon = <ReactLogoIcon fill="var(--color-hl-cls)"/>
  }

  return (
    <pre className="w-full rounded-md border border-solid border-border my-6 flex flex-col whitespace-pre">
      <div className="flex flex-row h-8 px-6 justify-between items-center bg-background border-b border-border border-solid">
        <div className="flex flex-col w-1/4 justify-start items-start">
          {icon}
        </div>
        <div className="flex flex-col w-2/4 justify-center items-center">
          <p className="text-foreground m-0 p-0 text-sm leading-normal">{`${ext.endsWith("x") ? "Component" : "example"}${ext}`}</p>
        </div>
        <div className="flex flex-col w-1/4 justify-end items-end">
          <CopyCodeButton code={children}/>
        </div>
      </div>
      <code className="w-full h-auto border-none bg-background leading-normal font-mono font-normal text-sm pt-4 max-h-96 overflow-scroll" dangerouslySetInnerHTML={{ __html: highlight(children) }} />
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
  return <code className="relative rounded-sm bg-muted py-2 px-3 text-sm font-normal">{text}</code>
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
