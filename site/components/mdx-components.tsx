import { cn } from '@/lib/utils'
import hl from 'hilite'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import NextImage, { type ImageProps } from 'next/image'
import NextLink, { type LinkProps } from 'next/link'
import {
  createElement,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react'
import { CopyCodeButton } from './ui/button'
import { FallBackIcon, JSLogoIcon, ReactLogoIcon, TSLogoIcon } from './ui/icons'

export function H(num: number, children?: string) {
  const slug = children
    ?.toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
  const Heading = () =>
    createElement(
      `h${num}`,
      {
        id: slug,
        className: 'text-foreground font-sans text-2xl font-bold my-6',
      },
      [
        createElement('a', {
          key: `anchor${num}-slug-link-${Math.floor(Math.random() * (1000 / 1000))}`,
          href: `${process.env.NEXT_PUBLIC_BASE_URL}/#${slug}`,
          ['data-anchor']: true,
        }),
        children,
      ]
    )
  Heading.displayName = `h${num}`
  return Heading
}

type ComponentList = {
  [key: string]: (props: ComponentPropsWithoutRef<ElementType>) => JSX.Element
}

export const componentList: ComponentList = {
  h1: H(1),
  h2: H(2),
  h3: H(3),
  h4: H(4),
  h5: H(5),
  h6: H(6),
  p: (props) => <p className="text-foreground leading-snug" {...props} />,
  ol: (props) => (
    <ol className="text-foreground list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props) => (
    <ul className="text-foreground list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  em: (props) => <em className="font-medium" {...props} />,
  strong: (props) => <strong className="font-medium" {...props} />,
  img: ({
    priority,
    src,
    width = 1280,
    height = 720,
    alt,
    className,
    ...props
  }: Partial<ImageProps> & { src: string; alt: string }) => {
    return (
      <NextImage
        priority={priority}
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={cn(
          className,
          'w-full rounded-md max-w-mdx h-auto max-h-64 my-6'
        )}
        {...props}
      />
    )
  },
  code: ({
    children,
    className,
  }: {
    children: string
    className: string
  }) => {
    const lang = className.replace(/language-/, '')
    let icon: JSX.Element | string

    if (lang === 'tsx' || lang === 'jsx') {
      icon = <ReactLogoIcon />
    } else if (lang === 'ts') {
      icon = <TSLogoIcon />
    } else if (lang === 'js') {
      icon = <JSLogoIcon />
    } else {
      icon = (
        <FallBackIcon
          fallback={true}
          lang={lang}
          aria-label={`${lang.toUpperCase} Language Icon`}
          className="relative flex size-4 p-2 hover:bg-background"
        />
      )
    }

    return (
      <pre className="w-full border border-solid border-border my-6 flex flex-col whitespace-normal">
        <div className="flex flex-row h-12 px-4 justify-between items-center bg-muted border-b border-border border-solid">
          <div className="flex flex-col w-1/4 justify-start items-start">
            {icon}
          </div>
          <div className="flex flex-col w-2/4 justify-center items-center">
            <span className="text-foreground m-0 p-0 text-sm font-sans">{`${lang.endsWith('x') ? 'Component' : 'example'}.${lang}`}</span>
          </div>
          <div className="flex flex-col w-1/4 justify-end items-end">
            <CopyCodeButton code={children} />
          </div>
        </div>
        {icon.props.fallback ? ( // Fallback for unsupported languages
          <code
            data-lang={lang}
            className="my-6 flex flex-row justify-start items-center rounded bg-muted px-2 py-1.5 max-w-mdx font-mono text-sm font-medium text-foreground border border-border border-solid whitespace-nowrap overflow-x-scroll"
            dangerouslySetInnerHTML={{ __html: children }}
          />
        ) : (
          <code
            data-lang={lang}
            className="w-full px-4 h-auto max-h-96 border-none bg-transparent text-sm pt-4 pb-1 overflow-scroll"
            dangerouslySetInnerHTML={{ __html: hl(children) }}
          />
        )}
      </pre>
    )
  },
  a: ({
    href,
    children,
  }: Partial<LinkProps> & {
    href: string
    children?: string
  }) => {
    const anchor = /#/g

    return anchor.test(href) ? (
      <NextLink
        href={href}
        className="cursor-pointer decoration-0 text-foreground hover:text-accent-foreground data-[anchor=true]:after[content:'#'] transition-all"
        data-anchor
      />
    ) : (
      <NextLink
        href={href}
        className="underline transition-all decoration-accent-foreground underline-offset-2 decoration-[0.1em]"
        target="_blank"
        rel="noopener noreferrer">
        {children}
      </NextLink>
    )
  },
  table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-6 pl-6 rounded italic py-3 bg-muted text-accent-foreground border border-l-accent-foreground"
      {...props}
    />
  ),
}

export function MdxComponents(
  props: MDXRemoteProps & Partial<React.ReactElement> & {
    components?: ComponentPropsWithoutRef<ElementType>
  }
): JSX.Element {
  return <MDXRemote {...props} components={{ ...componentList }} />
}
