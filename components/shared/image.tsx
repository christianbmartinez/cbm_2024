import { cn } from '@/lib/utils'
import Img, { type ImageProps } from 'next/image'

export function Image({
  priority,
  src,
  width = 1280,
  height = 720,
  alt,
  className,
  ...props
}: Partial<ImageProps> & { src: string; alt: string }) {
  return (
    <Img
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
}
