export default function Loading({ description }: { description: string }) {
  return <p>{description ? `Loading ${description}...` : 'Loading...'}</p>
}
