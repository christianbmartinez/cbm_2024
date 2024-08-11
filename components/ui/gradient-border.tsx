export function GradientBorder({children}: {children: React.ReactNode}) {
  return (
    <div className="gradient-border">
      <div></div>
      <div>{children}</div>
    </div>
  )
}
