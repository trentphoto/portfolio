import Nav from "@/components/Nav";
import { client } from "@/lib/sanity.client";
import { Portfolio } from "@/types/Portfolio";
import { groq } from "next-sanity";

export default function SinglePortfolioPage({ post }: any) {
    return (
        <>
            <Nav />
            <h1>{post.title}</h1>
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
