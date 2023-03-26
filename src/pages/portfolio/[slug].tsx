import ButtonLink from "@/components/links/ButtonLink";
import Nav from "@/components/Nav";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { Portfolio } from "@/types/Portfolio";
import { groq } from "next-sanity";
import Image from "next/image";
import { FaGithub, FaDesktop } from "react-icons/fa";
import { PortableText } from "@portabletext/react";



export default function SinglePortfolioPage({ post }: any) {
  const { _id, title, description, image, slug, github, website, body } = post;

    return (
        <>
            <Nav />
            <section className="bg-gradient-to-b	from-[#EEF3F7] to-[#ffffff] py-20 pb-0">
                <div className="container max-w-4xl">
                    <div className="rounded-xl overflow-hidden shadow-md mb-20">
                        <Image src={urlFor(image).width(1800).url()} alt={title} width={900} height={500} />
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container max-w-4xl">
                    <h1>{title}</h1>
                    <p className="italic mb-6">{description}</p>
                    <div className="flex gap-2 mb-12">
                        { github ? <ButtonLink href={github} variant="grayscale" leftIcon={FaGithub}>Repository</ButtonLink> : '' }
                        { github ? <ButtonLink href={website} variant="grayscale" leftIcon={FaDesktop}>Live Site</ButtonLink> : '' }
                        {/* demo video link here */}
                    </div>
                    <PortableText value={body} />
                </div>
            </section>
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
