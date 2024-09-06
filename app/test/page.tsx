import { CBMLogo } from "@/components/ui/icons"
import Image from "next/image"

export default function TestPage(props?: any) {
  return props ? (
    <div tw="relative size-screen flex flex-row justify-center items-center">
      <div className="size-32 bg-background">
      <CBMLogo fill="text-foreground" />
      </div>
        <Image 
          priority
          loading={"eager"}
          alt={"A gradient border background with a blur filter."}   
          src={`/assets/img/gradient-banner.jpg`}
          width={1280} 
          height={720} 
          className="w-full h-auto rounded-xl" />
        <h2 tw="text-4xl font-bold tracking-normal">
          Testing Post Title In Route Preview
        </h2>
        <p className="-mt-1">This is another test.</p>
    </div>
    
  ) : (
    <div tw="flex flex-col w-full h-full items-center justify-center text-primary-fg bg-primary">
    <div tw="flex flex-col md:flex-row w-full my-12 px-4 md:items-center justify-between p-8">
      <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
        {props?.post?.title}
      </h2>
    </div>
  </div>
  )
}