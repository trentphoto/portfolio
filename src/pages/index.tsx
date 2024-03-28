import * as React from 'react';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Tape from '@/components/Tape';
import PortfolioItem from '@/components/PortfolioItem';
import ButtonLink from '@/components/links/ButtonLink';
import Footer from '@/components/Footer';
import { FaFileAlt, FaSuitcase } from 'react-icons/fa';
import { nav } from '@/lib/data';
import EmailButton from '@/components/EmailButton';
import { getSortedPortfolioItemsData } from '@/lib/portfolio';
import { Portfolio } from '@/types/Portfolio';

export default function HomePage({ items }: { items: Portfolio[] }) {
  
  return (
    <>
      <Nav />
      <Hero />
      <Tape word='Portfolio' />
      <section className='p-4 py-8 md:py-20'>
        <div className="container max-w-4xl flex flex-col items-start">
          <p className="font-fira text-lg uppercase tracking-wider">Portfolio</p>
          <h2 className="h0 mb-6">Recent Projects<span className='text-blue-600'>.</span></h2>
          <PortfolioItem item={items[0]} className="mb-8" />
          <ButtonLink href={nav.projects} className='text-center self-center' variant='grayscale' leftIcon={FaSuitcase}>View More Projects</ButtonLink>
        </div>
      </section>
      <Tape word='Contact' variant='light' />
      <section className='p-4 py-8' id='contact'>
        <div className="container max-w-4xl">
          <h2 className="h0 mb-6">Get in touch<span className='text-blue-600'>.</span></h2>
          <div className="flex flex-col gap-4 items-start">
            <h3>You can reach out to me via email:</h3>
            <EmailButton />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// use getStaticProps to make a groq query to sanity database for a post
export async function getStaticProps() {
  const items = getSortedPortfolioItemsData();
  return {
      props: {
          items
      },
  };
}
