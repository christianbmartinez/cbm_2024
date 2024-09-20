import { hl } from "@/lib/plugins/hl"
import { cn } from "@/lib/utils"
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote"
import NextImage, { type ImageProps } from "next/image"
import NextLink, { type LinkProps } from "next/link"
import { createElement } from "react"
import { CopyCodeButton } from "./ui/button"
import { FallBackIcon, JSLogoIcon, ReactLogoIcon, TSLogoIcon } from "./ui/icons"

export function Image({
  src,
  alt,
  className,
  ...props
}: Partial<ImageProps> & {
  src: string
  alt: string
  className?: string
}) {
  return (
    <NextImage
      priority
      loading="eager"
      src={src}
      alt={alt}
      width={1280}
      height={720}
      className={cn(className,"w-full rounded-md max-w-mdx h-auto max-h-64 my-6")}
      {...props}
    />
  )
}

export function H(n: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = children
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")

    return createElement(
      `h${n}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `h${n}-link-${slug}`,
          ["data-anchor"]: true,
        }),
      ],
      children
    )
  }
  Heading.displayName = `h${n}`

  return Heading
}

export function Link(props: Partial<LinkProps> & { 
  href: string 
  alt: string
  children?: string
}) {
  const anchor = /#/g;

  return anchor.test(props.href) ? (
    <NextLink
    className="cursor-pointer decoration-0 text-foreground hover:text-accent-foreground data-[anchor=true]:after[content:'#'] transition-all" 
    data-anchor 
    {...props} />
  ) : (

      <NextLink
        className="underline transition-all decoration-accent-foreground underline-offset-2 decoration-[0.1em]"
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {props.children}
      </NextLink>
    )
  }

  enum Lang {
    tsx = "tsx",
    jsx = "jsx",
    ts = "ts",
    js = "js",
    html = "html",
  }

  type LangProps<T = keyof typeof Lang> = T extends Lang ? T : string;

export function CodeBlock({
  children,
  className,
}: {
  children: string
  className: string
}) {
  const lang: LangProps = className.replace(/language-/, "")
  let icon: JSX.Element | string;

  if (lang === "tsx" || lang === "jsx") {
    icon = <ReactLogoIcon />;
  } else if (lang === "ts") {
    icon = <TSLogoIcon />;
  }  else if (lang === "js") {
    icon = <JSLogoIcon />;
  } else {
    icon = <FallBackIcon fallback={true} lang={lang} aria-label={`${lang.toUpperCase} Language Icon`} className="relative flex size-4 p-2 hover:bg-background"/>      
  }

  return (
    <pre className="w-full border border-solid border-border my-6 flex flex-col whitespace-normal">
      <div className="flex flex-row h-12 px-4 justify-between items-center bg-muted border-b border-border border-solid">
        <div className="flex flex-col w-1/4 justify-start items-start">
          {icon}
        </div>
        <div className="flex flex-col w-2/4 justify-center items-center">
          <span className="text-foreground m-0 p-0 text-sm font-sans">{`${lang.endsWith("x") ? "Component" : "example"}.${lang}`}</span>
        </div>
        <div className="flex flex-col w-1/4 justify-end items-end">
          <CopyCodeButton code={children}/>
        </div>
      </div>
      {icon.props.fallback ? (<code data-lang={lang} data-code-inline className="w-full px-4 h-auto text-foreground max-h-24 border-none bg-background text-sm pt-4 pb-1 overflow-x-scroll" dangerouslySetInnerHTML={{ __html: children }} />) :
      (<code data-lang={lang} data-code-block className="w-full px-4 h-auto max-h-96 border-none bg-transparent text-sm pt-4 pb-1 overflow-scroll" dangerouslySetInnerHTML={{ __html: hl(children) }} />)}
    </pre>
  )
}

export const MdxComponents = {
  h1: H(1),
  h2: H(2),
  h3: H(3),
  h4: H(4),
  h5: H(5),
  h6: H(6),
  img: Image,
  code: CodeBlock, 
  a: Link,
}

export function Mdx(
  props: MDXRemoteProps<Record<string, unknown>, Record<string, unknown>>
): JSX.Element {
  return (
    <MDXRemote
    components={{...MdxComponents as any, ...props.components}}
      {...props}
    />
  )
}



