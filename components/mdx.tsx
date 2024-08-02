import { createElement, type ReactNode } from "react"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"

import { highlight } from "@/lib/plugins/highlight"

import { CopyCodeButton, JSLogoIcon, ReactLogoIcon, TSLogoIcon } from "./ui"

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
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
        alt={props.alt ?? "Go back to the home page"}
        href={props.href}
        {...props}
      >
        {props.children}
      </Link>
    )
  }

  if (props.href?.startsWith("#")) {
    return <a alt={props.alt ?? "Visit the section by hash id"} {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Img({ src, alt, className, ...props }: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt ?? "An image for the blog"}
      className="rounded-md"
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
  const codeHTML = children as string
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
  // Animation is broken, positioning is off. Fix this component stat. It's looking great with the
  // new icons. Need to fix blog layout add badge, etc.
  return (
    <pre>
      <div className="flex flex-row h-8 justify-between items-center w-full">
        <div className="w-1/3 -ml-[11px] mr-[11px] justify-start">{icon}</div>
        <div className="w-2/3 justify-center">
          {`${ext.endsWith("x") ? "Component" : "example"}${ext}`}
        </div>
        <div className="w-3/3 justify-end items-end">
          <CopyCodeButton>{children as ReactNode}</CopyCodeButton>
        </div>
        <hr />
      </div>
      <code dangerouslySetInnerHTML={{ __html: highlight(children) }} />
    </pre>
  )
}
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
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    )
  }

  Heading.displayName = `h${level}`

  return Heading
}

const MdxComponents = {
  h1: H(1),
  h2: H(2),
  h3: H(3),
  h4: H(4),
  h5: H(5),
  h6: H(6),
  img: Img,
  a: A,
  pre: Pre,
  table: Table,
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
