export function CardAnimatedGradientBorder() {
  return (
    <>
      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-zinc-800 p-[1px] backdrop-blur-3xl mb-8">
        <span className="absolute inset-[-1000%] animate-gradient bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-background px-3 py-1 text-sm font-medium text-foreground backdrop-blur-3xl" />
      </div>
      {/* <div className="rainbow">
    <p>This demo uses a real border with <code>border-image</code>, a background, and finally Houdini to animate.</p>
  </div> */}
    </>
  )
}
