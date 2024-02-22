import Nav from "@/components/Nav";
import PortfolioItem from "@/components/PortfolioItem";
import { Portfolio } from "@/types/Portfolio";
import { motion } from "framer-motion";
import { animation } from '../../lib/animation'

import Pattern from '~/svg/ooo.svg';
import Footer from "@/components/Footer";
import { FaSuitcase } from "react-icons/fa";
import { getSortedPortfolioItemsData } from "@/lib/portfolio";

export default function PortfolioPage({ items }: { items: Portfolio[] }) {
  const itemsSortedByDate = items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  return (
    <>
        <Nav />
        <section className="p-12 md:pt-40 relative overflow-hidden">
            <div className="absolute bg-gradient-to-b	from-[#EEF3F7] to-[#ffffff] top-0 left-0 right-0 w-full h-80 z-10">
                <Pattern className='w-full h-full scale-[500%] relative z-10 opacity-5' />
            </div>
            <div className="container max-w-4xl flex flex-col items-start relative z-20">
                <motion.p 
                  className='mb-6'
                  initial={animation.hide}
                  animate={animation.show}
                  >
                  <FaSuitcase className='text-4xl inline-block mb-0' />
                </motion.p>
                <motion.h1
                  className="h0 mb-6 mt-0"
                  initial={animation.hide}
                  animate={animation.show}
                  transition={{ delay: 0.1 }}
                >
                  Recent Projects<span className='text-blue-600'>.</span>
                </motion.h1>
                <motion.p 
                  className='mb-8'
                  initial={animation.hide}
                  animate={animation.show}
                  transition={{ delay: 0.2 }}
                >
                  A few select projects I&#39;ve worked on recently.
                </motion.p>
                {
                    itemsSortedByDate.map((item: Portfolio) => (
                        <PortfolioItem key={item.slug} item={item} className="mb-8" />
                    ))
                            
                }
            </div>
        </section>
        <Footer />
    </>
  )
}

export async function getStaticProps() {
  const items = getSortedPortfolioItemsData();
  return {
      props: {
          items,
      },
  };
}
