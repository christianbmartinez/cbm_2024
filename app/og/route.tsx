import { ImageResponse } from "next/og"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title")

  return new ImageResponse(
    (
<div tw="relative flex flex-col justify-center items-center h-screen w-screen max-w-[1200px] max-h-[600px] bg-slate-950">
      <svg
      viewBox="0 0 100 50"
      width="100"
      height="50"
    >
      <path d="M 46.667 30 L 43.333 40 L 53.333 40 L 56.668 30 L 46.667 30 Z M 32.663 30 L 16.674 30 L 13.337 40 L 33.334 40 L 44.994 5 L 56 0 C 54.57 4.286 49.934 20.207 50.008 20 L 70.004 20 L 78.332 25 L 90.001 20 L 100 20 L 90 50 L 63.828 50 L 67.222 40 L 83.326 40 L 86.664 30 L 74.999 35.001 L 66.672 30 L 59.829 50 L 0 50 L 10.014 20 C 10.014 20 27.4 20 36 20 L 32.663 30 Z"
      fill="white"
      >
      </path>
    </svg>
    <div tw="flex flex-col px-30 py-16 h-auto justify-start items-start">
            <div tw="flex flex-row justify-center items-center bg-transparent text-cyan-500 border border-cyan-500 rounded-lg text-sm py-1 px-1.5">
   <svg
      stroke="cyan"
      fill="none"
      strokeWidth="3"
      viewBox="0 0 40.96 40.96"
      height="16"
      width="16"
    >
      <path
        fill="none"
        strokeMiterlimit="5"
        strokeWidth="3"
        d="M20.48 5.12C12 5.12 5.12 12 5.12 20.48S12 35.84 20.48 35.84s15.36-6.88 15.36-15.36S28.96 5.12 20.48 5.12z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M20.48 10.24v11.52h7.68"
      />
    </svg>

          <time dateTime="1/1/2024">
              <span tw="text-sm font-medium my-0.5 mx-1">
               1 day ago
              </span>
            </time>
        </div>
      
        <h1 tw="text-zinc-50">Vim vs VSCode: Which IDE should you use?</h1>
      <p tw="-mt-2 text-zinc-200 text-lg leading-normal">This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test </p>
      </div>
      </div>

    ),
    {
      width: 1280,
      height: 720,
    }
  )
}

/*  
// Compare this snippet from app/og/route.tsx:
https://vercel.com/guides/displaying-article-headlines-in-social-previews

<div tw="h-screen w-screen flex flex-col justify-center items-center bg-black">
<svg
viewBox="0 0 100 50"
width="100"
height="50"
tw="w-64 h-32"
>
<path d="M 46.667 30 L 43.333 40 L 53.333 40 L 56.668 30 L 46.667 30 Z M 32.663 30 L 16.674 30 L 13.337 40 L 33.334 40 L 44.994 5 L 56 0 C 54.57 4.286 49.934 20.207 50.008 20 L 70.004 20 L 78.332 25 L 90.001 20 L 100 20 L 90 50 L 63.828 50 L 67.222 40 L 83.326 40 L 86.664 30 L 74.999 35.001 L 66.672 30 L 59.829 50 L 0 50 L 10.014 20 C 10.014 20 27.4 20 36 20 L 32.663 30 Z"
fill="white"
>
</path>
</svg>
</div>
*/