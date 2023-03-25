import Nav from "@/components/Nav";
import PortfolioItem from "@/components/PortfolioItem";
import { client } from "@/lib/sanity.client";
import { Portfolio } from "@/types/Portfolio";
import { groq } from "next-sanity";

export default function PortfolioPage({ posts }: { posts: Portfolio[] }) {
  return (
    <>
        <Nav />
        <section className="pt-60">
            <div className="container max-w-4xl flex flex-col items-start">
                <h1 className="h0 mb-6">Recent Projects<span className='text-blue-600'>.</span></h1>
                <p className='mb-8'>A few select projects I've worked on recently.</p>
                {
                    posts.map((post: Portfolio) => (
                        <PortfolioItem key={post._id} item={post} className="mb-8" />

                    ))
                            
                }

            </div>

        </section>


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
  