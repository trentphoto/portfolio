import { Portfolio } from "@/types/Portfolio";
import Link from "next/link";

export default function PortfolioItem({ item }: { item: Portfolio }) {
  return (
    <>
        <Link href={`/portfolio/${item.slug}`} className="grid md:grid-cols-2 p-8 border-8 border-gray-700">
            <div className="flex flex-col justify-center">
                <h2 className="h2">{item.title}</h2>
                <p className="font-fira text-lg">{item.description}</p>
            </div>
            <div className="flex justify-center">
                <img src="https://res.cloudinary.com/dakfmjumy/image/upload/v1677768728/secretariatmedia/profile-small_1_ji1vjh.jpg" alt={item.title} />
            </div>
        </Link>
    </>
  )
}
