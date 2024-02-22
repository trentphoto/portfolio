import clsxm from "@/lib/clsxm";
import { Post } from "@/types/Post";
import Link from "next/link";

export default function BlogItem({ item, className }: { item: Post, className?: string }) {
    const { title, excerpt, slug, gradient } = item;

    return (
        <Link href={`/blog/${slug}`} className={clsxm("relative flex items-stretch justify-start w-full overflow-hidden p-4 md:p-8 border-8 bg-white border-gray-700 transition-transform ease-in-out scale-100 hover:scale-[102%] group", className)}>
            <div className="shrink-0 w-60 h-60 block rounded-xl overflow-hidden shadow-md transition-transform ease-in-out group-hover:scale-[107%]">
                <div className={"w-full h-full bg-gradient-to-r " + gradient} />
            </div>
            <div className="w-full flex flex-col justify-center text-center px-12 py-8">
                <h3 className="h3">{title}</h3>
                {/* blue divider line */}
                <div className="w-20 h-1 bg-blue-600 mx-auto my-4 transition-transform ease-in-out group-hover:scale-x-150" />
                <p className="font-bold">{excerpt}</p>
            </div>
        </Link>
    )
}
