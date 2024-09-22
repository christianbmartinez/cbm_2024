import { hl } from '@/lib/plugins/hl'
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import NextLink, { type LinkProps } from 'next/link'
import { createElement, useId } from 'react'
import { Image } from './shared/image'
import { CopyCodeButton } from './ui/button'
import { FallBackIcon, JSLogoIcon, ReactLogoIcon, TSLogoIcon } from './ui/icons'

export function H(num: 1 | 2 | 3 | 4 | 5 | 6, children?: string) {
  const id = useId()
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
        type: HTMLHeadingElement,
        className: 'text-foreground font-sans text-2xl font-bold my-6',
      },
      [
        createElement('a', {
          key: `h${num}-slug-link-${id}`,
          href: `#${slug}`,
          type: 'anchor',
          ['data-anchor']: true,
        }),
        children,
      ]
    )
  Heading.displayName = `h${num}`
  return Heading
}

export function Link({
  href,
  children,
}: Partial<LinkProps> & {
  href: string
  children?: string
}) {
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
}

enum Lang {
  tsx = 'tsx',
  jsx = 'jsx',
  ts = 'ts',
  js = 'js',
  html = 'html',
}

type LangProps<T = keyof typeof Lang> = T extends Lang ? T : string

export function Code({
  children,
  className,
}: {
  children: string
  className: string
}) {
  const lang: LangProps = className.replace(/language-/, '')
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
      {icon.props.fallback ? (
        <code
          data-lang={lang}
          data-code-inline
          className="w-full px-4 h-auto text-foreground max-h-24 border-none bg-background text-sm pt-4 pb-1 overflow-x-scroll"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      ) : (
        <code
          data-lang={lang}
          data-code-block
          className="w-full px-4 h-auto max-h-96 border-none bg-transparent text-sm pt-4 pb-1 overflow-scroll"
          dangerouslySetInnerHTML={{ __html: hl(children) }}
        />
      )}
    </pre>
  )
}

export const mdxComponents = {
  h1: H(1),
  h2: H(2),
  h3: H(3),
  h4: H(4),
  h5: H(5),
  h6: H(6),
  img: Image,
  code: Code,
  a: Link,
}

export function MdxComponents(
  props: MDXRemoteProps & {
    components?: React.ComponentPropsWithRef<React.ElementType>
  }
): JSX.Element {
  return <MDXRemote {...props} components={{ ...mdxComponents }} />
}
