import * as React from 'react';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Tape from '@/components/Tape';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PortfolioItem from '@/components/PortfolioItem';
import ButtonLink from '@/components/links/ButtonLink';

export default function HomePage({ posts, featuredPost }: { posts: any; featuredPost: any }) {
  
  return (
    <>
      <Nav />
      <Hero />
      <Tape word='Portfolio' />
      <section className='pt-80 pb-40'>
        <div className="container max-w-4xl flex flex-col items-start">
          <p className="font-fira text-lg uppercase tracking-wider">Portfolio</p>
          <h2 className="h0 mb-6">Recent Projects<span className='text-blue-600'>.</span></h2>
          <PortfolioItem item={featuredPost[0]} className="mb-8" />
          <ButtonLink href="/" className='text-center self-center'>View More Projects</ButtonLink>
        </div>
      </section>
      <Tape word='Contact' variant='light' />
      <section className='pt-60 pb-40'>
        <div className="container max-w-4xl">
          <h2 className="h0 mb-6">Get in touch<span className='text-blue-600'>.</span></h2>
          <p className='mb-8'>You can reach out to me via the following methods:</p>
          <ButtonLink href="#">My email</ButtonLink>
          <ButtonLink href="#">My GitHub</ButtonLink>
          <ButtonLink href="#">My Resume</ButtonLink>
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
