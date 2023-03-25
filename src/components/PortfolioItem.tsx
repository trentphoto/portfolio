import { Portfolio } from "@/types/Portfolio";
import Link from "next/link";

export default function PortfolioItem({ item }: { item: Portfolio }) {
  return (
    <>
        <Link href={`/portfolio/${item.slug}`} className="relative grid md:grid-cols-2 p-8 border-8 border-gray-700">
            <div className="flex justify-center">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-8">
                <h3 className="h3">{item.title}</h3>
                {/* blue divider line */}
                <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
                <p className="font-bold">{item.description}</p>
            </div>
        </Link>
    </>
  )
}
