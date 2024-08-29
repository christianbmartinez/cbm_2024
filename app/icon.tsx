// import { CBMLogo } from "@/components"
import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #534AFF, #090047)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "4px",
          padding: "1px",
        }}
      >
       CM
      </div>
    ),
    {
      ...size
    }
  )
}
