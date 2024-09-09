import { CBMLogo } from "@/components/ui/icons"
import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div role="img" aria-label="CBM Logo" tw="bg-background text-foreground size-full flex flex-row justify-center items-center rounded-[4px] padding-[1px]">
        <CBMLogo width={100} height={50} />
      </div>
    ),
    {
      ...size
    }
  )
}
