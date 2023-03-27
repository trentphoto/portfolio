import Nav from "@/components/Nav";
import PortfolioItem from "@/components/PortfolioItem";
import { client } from "@/lib/sanity.client";
import { Portfolio } from "@/types/Portfolio";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import { animation } from '../../lib/animation'

import Pattern from '~/svg/ooo.svg';
import Footer from "@/components/Footer";

export default function PortfolioPage({ posts }: { posts: Portfolio[] }) {
  return (
    <>
        <Nav />
        <section className="p-12 md:pt-40 relative overflow-hidden">
            <div className="absolute bg-gradient-to-b	from-[#EEF3F7] to-[#ffffff] top-0 left-0 right-0 w-full h-80 z-10">
                <Pattern className='w-full h-full scale-[500%] relative z-10 opacity-5' />
            </div>
            <div className="container max-w-4xl flex flex-col items-start relative z-20">
                <motion.h1
                  className="h0 mb-6"
                  initial={animation.hide}
                  animate={animation.show}
                >
                  Recent Projects<span className='text-blue-600'>.</span></motion.h1>
                <motion.p 
                  className='mb-8'
                  initial={animation.hide}
                  animate={animation.show}
                  transition={{ delay: 0.1 }}
                >
                  A few select projects I've worked on recently.
                </motion.p>
                {
                    posts.map((post: Portfolio) => (
                        <PortfolioItem key={post._id} item={post} className="mb-8" />

                    ))
                            
                }

            </div>

        </section>
        <Footer />
    </>
  )
}

export async function getStaticProps() {
    const query = groq`*[_type == "post"]`;
    const posts = await client.fetch(query);
    return {
      props: {
        posts
      },
    };
  }
  