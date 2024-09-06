export function LoadingProgress({max, value, ...props}: {max: number, value: number, props: Partial<React.ReactElement<HTMLProgressElement>>}) {
  const percent = (value / max) * 100;

  return (
    <progress        
      role="progressbar"
      aria-hidden="true"
      className="" max={100} value={value}
      {...props}>
        {percent}
    </progress>
  );
  
}
