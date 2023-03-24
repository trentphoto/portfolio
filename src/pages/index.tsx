import * as React from 'react';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Tape from '@/components/Tape';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Tape word='Portfolio' />

      
    </>
  );
}
