'use client'
import Image from "next/image";

export default function TestPage() {
  return (
    <div tw="relative top-0 left-0 w-full h-full flex flex-row justify-center items-center">
        <Image 
          priority
          loading={"eager"}
          alt={"A gradient border background with a blur filter."}   
          src={`/assets/img/gradient-banner.jpg`}
          width={1280} 
          height={720} 
          className="w-full h-auto" />
        <h2 tw="absolute top-0 left-0 flex flex-row items-center w-full h-full justify-center text-4xl font-bold tracking-tight z-50">
          Testing Post Title In Route Preview
        </h2>
    </div>
  )
}