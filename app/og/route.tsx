import { baseUrl } from "@/lib/config"
import { ImageResponse } from "next/og"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title")
  const post = await fetch(`${baseUrl}/blog/${title}`, {
    headers: {
      "Content-Type": "image/png",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      Response.json(err)
    })

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center text-primary-fg bg-primary">
        <div tw="flex flex-col md:flex-row w-full my-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {post.title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1280,
      height: 720,
    }
  )
}
