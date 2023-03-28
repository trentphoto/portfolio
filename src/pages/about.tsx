import ButtonLink from "@/components/links/ButtonLink";
import Nav from "@/components/Nav";
import Image from "next/image";
import { motion } from 'framer-motion';
import { animation } from '../lib/animation'
import { FaFileAlt, FaSuitcase } from "react-icons/fa";
import { data, nav } from "@/lib/data";

export default function about() {
  return (
    <>
      <Nav />
      <div className="w-full relative grid md:grid-cols-2">
        <div className="bg-gray-700 text-white p-12 md:p-20 flex flex-col">
          <div className="w-12 h-1 bg-blue-600 my-4"></div>
            <motion.p
                className='font-fira text-lg uppercase tracking-wider mb-4 italic'
                initial={animation.hide}
                animate={animation.show}
            >Hello there~</motion.p>
            <h1 className="h0 font-primary uppercase italic font-extrabold leading-[60px] mb-4">
                <motion.span initial={animation.hide} animate={animation.show} transition={{ delay: 0.1 }}>My</motion.span><br />
                <motion.span initial={animation.hide} animate={animation.show} transition={{ delay: 0.2 }}>Name's</motion.span><br />
                <motion.span initial={animation.hide} animate={animation.show} transition={{ delay: 0.3 }} className="tracking-widest">James</motion.span>
                <motion.span initial={animation.hide} animate={animation.show} transition={{ delay: 0.3 }} className="text-blue-700">.</motion.span>
                </h1>
            <div className="w-12 h-1 bg-blue-600 my-4"></div>
            <motion.p initial={animation.hide} animate={animation.show} transition={{ delay: 0.4 }} className='font-bold mb-8'>As a frontend developer, I have a passion for creating visually appealing and user-friendly websites and applications. My goal is clean, efficient code and an elegant user experience.</motion.p>


        </div>
        <div className="p-12 md:p-20">
            <Image src="/images/j.jpg" alt="Picture of the author" className="border-8 border-gray-700 shadow-lg mb-12" width={500} height={500} />
            <p className="mb-8 font-bold">My journey as a web developer began several years ago when I first became fascinated with some of the websites I came across and how they were built. I quickly discovered a passion for web development and began learning the basics like HTML/CSS/vanilla JS. Since then, it’s been a journey of becoming more and more proficient in designing a great digital experience for every user.</p>
            <div className="mb-2">
              <ButtonLink href={nav.projects} className='text-center self-center' variant='grayscale' leftIcon={FaSuitcase}>My Projects</ButtonLink>
            </div>
            <div>
              <ButtonLink href={nav.resume} variant="grayscale" leftIcon={FaFileAlt}>My Resume</ButtonLink>
            </div>
        </div>
      </div>

    </>
  )
}
