import clsxm from "@/lib/clsxm";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { Portfolio } from "@/types/Portfolio";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioItem({ item, className }: { item: Portfolio, className?: string }) {
  const { _id, title, description, image, slug } = item;

  const FeaturedImage = () => {
    if (image) {
      return (
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image src={urlFor(image).width(800).url()} alt={title} width={360} height={150} />
        </div>
      )
    } else {
      return false;
    }
  }

  return (
    <>
        <Link key={_id} href={`/portfolio/${slug.current}`} className={clsxm("relative grid md:grid-cols-2 p-8 border-8 border-gray-700", className)}>
            <div className="flex justify-center">
              {FeaturedImage() || null}
            </div>
            <div className="flex flex-col justify-center text-center px-12 py-8">
                <h3 className="h3">{title}</h3>
                {/* blue divider line */}
                <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
                <p className="font-bold">{description}</p>
            </div>
        </Link>
    </>
  )
}
