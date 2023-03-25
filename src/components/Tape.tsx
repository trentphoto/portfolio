import clsxm from "@/lib/clsxm"

export default function Tape({ word, variant = "dark" }: { word: string, variant?: "light" | "dark" }) {
  const Content = () => (
    <>
      <span className="font-fira uppercase italic text-5xl tracking-wide">{word}</span>
      {/* large blue dot */}
      <div className={clsxm("w-8 h-8 rounded-full block", variant === "dark" ? "bg-blue-500" : "bg-gray-700")}></div>
    </>
  )
  return (
    <>
    {/* create an element that is skewed a few degrees */}
      <div className={clsxm("py-8 flex items-center gap-12 absolute -left-12 transform -skew-y-3", variant === "dark" ? "bg-gray-700 text-white" : "bg-gray-200")}>
          
        {Array(8).fill(<Content />)}

      </div>
    </>
  )
}
