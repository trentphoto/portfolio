import clsxm from "@/lib/clsxm";
import { Portfolio } from "@/types/Portfolio";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioItem({ item, className }: { item: Portfolio, className?: string }) {
  const { name, excerpt, image, slug } = item;

  const FeaturedImage = () => {
    if (image) {
      return (
        <div className="rounded-xl overflow-hidden shadow-md transition-transform ease-in-out group-hover:scale-[107%]">
          <Image src={image} alt={name} width={360} height={150} />
        </div>
      )
    } else {
      return false;
    }
  }

  return (
    <Link href={`/projects/${slug}`} className={clsxm("relative grid w-full overflow-hidden md:grid-cols-2 p-4 md:p-8 border-8 bg-white border-gray-700 transition-transform ease-in-out scale-100 hover:scale-[102%] group", className)}>
        <div className="md:flex justify-center max-w-full w-full">
          {FeaturedImage() || null}
        </div>
        <div className="flex flex-col justify-center text-center px-12 py-8">
            <h3 className="h3">{name}</h3>
            {/* blue divider line */}
            <div className="w-20 h-1 bg-blue-600 mx-auto my-4 transition-transform ease-in-out group-hover:scale-x-150" />
            <p className="font-bold">{excerpt}</p>
        </div>
    </Link>
  )
}
