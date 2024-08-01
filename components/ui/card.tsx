export function CardAnimatedGradientBorder() {
  return (
    <>
      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-zinc-800 p-[1px] backdrop-blur-3xl mb-8">
        <span className="absolute inset-[-1000%] animate-gradient bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <div className="inline-flex h-full w-full items-center justify-center rounded-xl bg-zinc-950 px-3 py-1 text-sm font-medium text-zinc-50 backdrop-blur-3xl" />
      </div>
    </>
  )
}
