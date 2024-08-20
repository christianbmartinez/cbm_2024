import NextImage, { type ImageProps } from "next/image"

export function Image({
  priority,
  loading,
  src,
  alt,
  className,
  ...props
}: Partial<ImageProps> & {
  priority: boolean,
  loading: "eager" | "lazy",
  src: string
  alt: string
  className: string
}) {
  return (
    <NextImage
      priority={priority}
      loading="eager"
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  )
}