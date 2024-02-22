import Nav from "@/components/Nav";
import { motion } from "framer-motion";
import { animation } from '../../lib/animation'

import Pattern from '~/svg/ooo.svg';
import Footer from "@/components/Footer";
import { FaSuitcase } from "react-icons/fa";
import BlogItem from "@/components/BlogItem";
import { Post } from "@/types/Post";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage({ posts }: { posts: Post[] }) {
    const postsSortedByDate = posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    return (
        <>
            <Nav />
            <section className="p-12 md:pt-40 relative overflow-hidden">
                <div className="absolute bg-gradient-to-b	from-[#EEF3F7] to-[#ffffff] top-0 left-0 right-0 w-full h-80 z-10">
                    <Pattern className='w-full h-full scale-[500%] relative z-10 opacity-5' />
                </div>
                <div className="container max-w-4xl flex flex-col items-start relative z-20">
                    <motion.p 
                        className='mb-6'
                        initial={animation.hide}
                        animate={animation.show}
                    >
                        <FaSuitcase className='text-4xl inline-block mb-0' />
                    </motion.p>
                    <motion.h1
                        className="h0 mb-6 mt-0"
                        initial={animation.hide}
                        animate={animation.show}
                        transition={{ delay: 0.1 }}
                    >
                        Recent Articles<span className='text-blue-600'>.</span>
                    </motion.h1>
                    <motion.p 
                        className='mb-8'
                        initial={animation.hide}
                        animate={animation.show}
                        transition={{ delay: 0.2 }}
                    >
                        My thoughts on React and other frontend engineering topics.
                    </motion.p>
                    { postsSortedByDate.map((post: Post) => <BlogItem key={post.slug} item={post} className="mb-8" /> ) }

                </div>

            </section>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const posts = getSortedPostsData();
    return {
        props: {
            posts,
        },
    };
}
