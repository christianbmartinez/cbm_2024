import { hl } from "@/lib/plugins/hl"
import { cn } from "@/lib/utils"
import { type MDXRemoteProps, MDXRemote } from "next-mdx-remote"
import NextImage, { type ImageProps } from "next/image"
import NextLink, { type LinkProps } from "next/link"
import { createElement } from "react"
import { CopyCodeButton } from "./ui/button"
import { JSLogoIcon, LangIcon, ReactLogoIcon, TSLogoIcon } from "./ui/icons"

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

export function Code({
  
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
  let icon: JSX.Element | string;

  if (lang === "tsx" || lang === "jsx") {
    icon = <ReactLogoIcon />;
  } else if (lang === "ts") {
    icon = <TSLogoIcon />;
  }  else if (lang === "js") {
    icon = <JSLogoIcon />;
  } else {
    icon = <LangIcon aria-label={`${lang.toUpperCase} Language Icon`} className="relative flex size-4 p-2 hover:bg-background" data-lang={lang}/>      
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
      <code data-lang={lang} className="w-full px-4 h-auto max-h-96 border-none bg-transparent text-sm pt-4 pb-1 overflow-scroll" dangerouslySetInnerHTML={{ __html: hl(children) }} />
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
  code: Code, // Handle inline as well
  a: Link,
}

export function Mdx(
  props: MDXRemoteProps & {
    components?: React.ComponentPropsWithRef<React.ElementType>
  }
): JSX.Element {
  return (
    <MDXRemote
    components={{ ...MdxComponents, ...(props.components || {}) }}
      {...props}
    />
  )
}



