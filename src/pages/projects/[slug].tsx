import ButtonLink from "@/components/links/ButtonLink";
import Nav from "@/components/Nav";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { Portfolio } from "@/types/Portfolio";
import { groq } from "next-sanity";
import Image from "next/image";
import { FaGithub, FaDesktop } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { animation } from '../../lib/animation'

import Pattern from '~/svg/ooo.svg';
import Footer from "@/components/Footer";

export default function SinglePortfolioPage({ post }: any) {
    const { _id, title, description, image, slug, github, website, body } = post;
    
    const myPortableTextComponents = {
        types: {
            image: ({value}: any) => <img src={value.imageUrl} alt="" />,
        },
    }

    return (
        <>
            <Nav />
            <section className="relative overflow-hidden bg-gradient-to-b	from-[#EEF3F7] to-[#ffffff] p-8 py-12 md:pt-20 pb-0">
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full z-10 opacity-40">
                    <Pattern className='w-full h-full scale-[250%]' />
                </div>
                <div className="container max-w-4xl relative z-20">
                    <div className="rounded-xl overflow-hidden shadow-md mb-20">
                        <Image src={urlFor(image).width(1800).url()} alt={title} width={900} height={500} />
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container max-w-4xl p-8">
                    <motion.h1
                        initial={animation.hide}
                        animate={animation.show}
                    >
                        {title}
                    </motion.h1>
                    
                    <motion.p 
                        className="italic mb-6"
                        initial={animation.hide}
                        animate={animation.show}
                        transition={{ delay: 0.1 }}
                    >
                        {description}
                    </motion.p>
                    <div className="flex gap-2 mb-12 flex-col sm:flex-row items-start">
                        { github ? <ButtonLink href={github} variant="grayscale" leftIcon={FaGithub}>Repository</ButtonLink> : '' }
                        { website ? <ButtonLink href={website} variant="grayscale" leftIcon={FaDesktop}>Live Site</ButtonLink> : '' }
                        {/* demo video link here */}
                    </div>
                    <div className="content">
                        <PortableText value={body} components={myPortableTextComponents} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export async function getStaticProps({ params }: any) {
    const { slug } = params;
    // const query = groq`*[_type == "post"]`;
    const query = groq`*[_type == "post" && slug.current == $slug][0]`;
    const post = await client.fetch(query, { slug });
    return {
      // Passed to the page component as props
        props: { post }
    }
  }
  
    export async function getStaticPaths() {
        const query = groq`*[_type == "post"]`;
        const posts = await client.fetch(query);
        const paths = posts.map((post: Portfolio) => ({
            params: { slug: post.slug.current },
        }));
        return { paths, fallback: false };
    }
