import * as React from 'react';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Tape from '@/components/Tape';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PortfolioItem from '@/components/PortfolioItem';

export default function HomePage({ posts, featuredPost }: { posts: any; featuredPost: any }) {
  
  return (
    <>
      <Nav />
      <Hero />
      <Tape word='Portfolio' />
      <section className='py-80'>
        <div className="container max-w-4xl">

          <p className="font-fira text-lg uppercase tracking-wider">Portfolio</p>
          <h2 className="h2">Recent Projects</h2>
          <PortfolioItem item={featuredPost[0]} />

        </div>
      </section>

      
    </>
  );
}

// use getStaticProps to make a groq query to sanity database for a post
export async function getStaticProps() {
  const query = groq`*[_type == "post"]`;
  const query2 = groq`*[_type == "post" && featured == true]`;
  const posts = await client.fetch(query);
  const featuredPost = await client.fetch(query2);
  return {
    props: {
      posts,
      featuredPost
    },
  };
}
