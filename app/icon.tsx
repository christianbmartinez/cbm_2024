import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

// import { ImageResponse } from 'next/og'
 
// new ImageResponse(
//   element: ReactElement,
//   options: {
//     width?: number = 1200
//     height?: number = 630
//     emoji?: 'twemoji' | 'blobmoji' | 'noto' | 'openmoji' = 'twemoji',
//     fonts?: {
//       name: string,
//       data: ArrayBuffer,
//       weight: number,
//       style: 'normal' | 'italic'
//     }[]
//     debug?: boolean = false
 
//     // Options that will be passed to the HTTP response
//     status?: number = 200
//     statusText?: string
//     headers?: Record<string, string>
//   },
// )

export default function Icon() {
  return new ImageResponse(
    (
  <div tw="flex flex-col justify-center items-center bg-background">
      <svg
      viewBox="0 0 100 50"
      width="100"
      height="50"
    >
      <path d="M 46.667 30 L 43.333 40 L 53.333 40 L 56.668 30 L 46.667 30 Z M 32.663 30 L 16.674 30 L 13.337 40 L 33.334 40 L 44.994 5 L 56 0 C 54.57 4.286 49.934 20.207 50.008 20 L 70.004 20 L 78.332 25 L 90.001 20 L 100 20 L 90 50 L 63.828 50 L 67.222 40 L 83.326 40 L 86.664 30 L 74.999 35.001 L 66.672 30 L 59.829 50 L 0 50 L 10.014 20 C 10.014 20 27.4 20 36 20 L 32.663 30 Z"
      fill="text-foreground"
      >
      </path>
    </svg>
      </div>
    ),
    {
      ...size
    }
  )
}
