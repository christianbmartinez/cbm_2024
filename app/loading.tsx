import { CBMLogo } from "@/components";

export default function Loading() {
  return (
    <div className="z-50 size-screen overflow-hidden bg-background">
    <div className="loader-ring">
      <div className="my-3.5 flex flex-col items-center justify-center">
      <CBMLogo fill="text-foreground" />
      </div>
    </div>
  </div>
  ) 
}