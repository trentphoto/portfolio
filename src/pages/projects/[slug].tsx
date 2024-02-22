import ButtonLink from "@/components/links/ButtonLink";
import Nav from "@/components/Nav";
import Image from "next/image";
import { FaGithub, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";
import { animation } from '../../lib/animation'

import Pattern from '~/svg/ooo.svg';
import Footer from "@/components/Footer";
import { getPortfolioItemBySlug, getSortedPortfolioItemsData } from "@/lib/portfolio";
import { marked } from "marked";
import { Portfolio } from "@/types/Portfolio";

export default function SinglePortfolioPage(props: Portfolio) {
    const { name, excerpt, image, repository, site, content } = props;

    return (
        <>
            <Nav />
            <section className="relative overflow-hidden bg-gradient-to-b	from-[#EEF3F7] to-[#ffffff] p-8 py-12 md:pt-20 pb-0">
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full z-10 opacity-40">
                    <Pattern className='w-full h-full scale-[250%]' />
                </div>
                <div className="container max-w-4xl relative z-20">
                    <div className="rounded-xl overflow-hidden shadow-md mb-20">
                        <Image src={image} alt={name} width={900} height={500} />
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container max-w-4xl p-8">
                    <motion.h1
                        initial={animation.hide}
                        animate={animation.show}
                    >
                        {name}
                    </motion.h1>
                    
                    <motion.p 
                        className="italic mb-6"
                        initial={animation.hide}
                        animate={animation.show}
                        transition={{ delay: 0.1 }}
                    >
                        {excerpt}
                    </motion.p>
                    <div className="flex gap-2 mb-12 flex-col sm:flex-row items-start">
                        { repository ? <ButtonLink href={repository} variant="grayscale" leftIcon={FaGithub}>Repository</ButtonLink> : '' }
                        { site ? <ButtonLink href={site} variant="grayscale" leftIcon={FaDesktop}>Live Site</ButtonLink> : '' }
                        {/* demo video link here */}
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: content }}
                        className='content list-disc'
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    const items = getSortedPortfolioItemsData();
    const paths = items.map((item) => ({
        params: {
            slug: item.slug,
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }: never) {
    const item = getPortfolioItemBySlug(slug);
    return {
        props: {
            ...item,
            content: marked(item.content),
        },
    };
}
