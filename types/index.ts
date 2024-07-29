import type { IconProps as RadixIconProps } from '@radix-ui/react-icons/dist/types'
import { NextApiRequest } from 'next/types'

export type NavLinks = {
  title: string
  href?: string | URL
  disabled?: boolean
  external?: boolean
}

export type NavProps = {
  items?: NavLinks[]
}

export type SocialLinks = {
  title: string
  icon: (props: IconProps) => JSX.Element
  href: string
}

export type IconProps = RadixIconProps | React.SVGProps<SVGSVGElement>

export type Params =
  | NextApiRequest['query']
  | {
      slug: string
    }

export type MdxMetadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export type ErrorReport = {
  error?: Error & {
    cause?: string 
    name?: string | undefined
    message?: string | undefined
    digest?: string| undefined
    stack?: string | undefined
    timestamp: string
  } | null
  reset: () => void
}