export default function Arrow({
  width,
  height,
}: {
  width?: number
  height?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-move-up-right-icon lucide-move-up-right"
    >
      <path d="M13 5H19V11" />
      <path d="M19 5L5 19" />
    </svg>
  )
}
