import NextImage, { type ImageProps } from "next/image"

export function Image({
  src,
  alt,
  className,
  ...props
}: Partial<ImageProps> & {
  src: string
  alt: string
  className: string
}) {
  return (
    <NextImage
      fetchPriority="high"
      loading="eager"
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  )
}