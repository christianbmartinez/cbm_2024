import { CBMLogo, Image } from "@/components"

export default function TestPage() {
  return (
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
  )
}