import Image, { type ImageProps } from "next/image"

export type ImgProps = Partial<ImageProps> & {
  src: string
  alt: string
  className?: string
  loading: "lazy" | "eager"
  priority: boolean
}
// Todo: load > blur in. 
export function Img({
  loading = "lazy",
  priority = false,
  src,
  alt="A really cool image for my website that I took myself. Much Wow!",
  className,
  ...props
}: ImgProps) {
  return (
    <Image
    src={src ?? "http://localhost:3000/horshoe_bend.jpg"}
    alt={alt}
    loading={loading}
    className="rounded-md max-w-mdx h-auto" 
    priority={priority}
    sizes="(max-width: var(--width-mdx)) 100%, 590px"
    quality={70}
    placeholder="blur"
    onLoad={({ target }) => console.log(`Loaded image! Target: ${target}`)}
    {...props}
    />
  )
}
