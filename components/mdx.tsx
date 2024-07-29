import { createElement, type ReactNode } from "react"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { highlight } from "@/lib"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"

import { CopyCodeButton } from "./ui/button"
import { TSLogoIcon } from "./ui/icons"

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

type PreProps = {
  children: {
    props: {
      className: string
      children: string
    }
  }
}

function Pre({
  children: {
    props: { className, children },
  },
}: PreProps) {
  return (
    <pre>
      <div className="relative whitespace-pre flex flex-row h-12 w-full justify-between m-auto pt-2">
        <div className="w-1/4 justify-start items-start text-left">
          <TSLogoIcon /> {/* Needs a color fix */}
        </div>
        <div className="w-1/4 justify-center items-center text-center">
          {className.replace(/language-/, "example.")}
        </div>
        <div className="w-1/4 justify-end items-end text-right">
          <CopyCodeButton>{children as ReactNode}</CopyCodeButton>
          {/* Needs a positioning fix */}
        </div>
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
  img: Img,
  a: A,
  pre: Pre,
  table: Table,
}

export function Mdx(
  props: MDXRemoteProps & {
    components?: React.ComponentPropsWithRef<React.ElementType>
  }
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...MdxComponents, ...(props.components || {}) }}
    />
  )
}
