export default function Tape({ word }: { word: string }) {
  const Content = () => (
    <>
      <span className="font-fira uppercase italic text-4xl tracking-wide">{word}</span>
      {/* large blue dot */}
      <div className="w-8 h-8 bg-blue-500 rounded-full block"></div>
    </>
  )
  return (
    <>
    {/* create an element that is skewed a few degrees */}
      <div className="py-8 bg-gray-700 text-white flex items-center gap-12 absolute -left-12 transform -skew-y-3">
          
        {Array(6).fill(<Content />)}

      </div>
    </>
  )
}
