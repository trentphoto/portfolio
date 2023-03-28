import Image from 'next/image'
import React from 'react'
import ButtonLink from './links/ButtonLink'
import { motion } from 'framer-motion';
import { animation } from '../lib/animation'

import Pattern from '~/svg/ooo.svg'
import { data, nav } from '@/lib/data';
import { FaFileAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <>
        <section className='relative bg-gradient-to-b	from-[#EEF3F7] to-white py-8 md:py-32 overflow-hidden'>
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full z-10 opacity-70">
                <Pattern className='w-full h-full scale-[250%]' />
            </div>
            <div className="container max-w-4xl grid md:grid-cols-2 gap-4 p-6 relative z-20">
                <div>
                    <motion.p
                        className='font-fira italic'
                        initial={animation.hide}
                        animate={animation.show}
                        // transition={{ delay: 0.1 }}
                    >
                        Hello World 👋
                    </motion.p>

                    <motion.h1 
                        className='h1 my-4'
                        initial={animation.hide}
                        animate={animation.show}
                        transition={{ delay: 0.1 }}
                    >
                        I'm James<span className='text-primary-500'>~</span>
                    </motion.h1>
                    <motion.p 
                        className='font-bold mb-6'
                        initial={animation.hide}
                        animate={animation.show}
                        transition={{ delay: 0.2 }}
                    >
                        a frontend developer who's passionate about clean, <br /> elegant code and modern UI.</motion.p>
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <motion.div
                            initial={animation.hide}
                            animate={animation.show}
                            transition={{ delay: 0.3 }}
                        >
                            <ButtonLink className='mr-2' href={nav.about}>About Me</ButtonLink>
                        </motion.div>

                        <motion.div
                            initial={animation.hide}
                            animate={animation.show}
                            transition={{ delay: 0.4 }}
                        >
                            <ButtonLink href={data.resume} variant="grayscale" leftIcon={FaFileAlt}>Resume</ButtonLink>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <motion.div 
                        className="rounded-full w-72 h-72 border-[16px] border-primary-500 overflow-hidden shadow-xl"
                        initial={animation.scaleHide}
                        animate={animation.scaleShow}
                    >
                        <Image 
                            src="https://res.cloudinary.com/dakfmjumy/image/upload/v1677768728/secretariatmedia/profile-small_1_ji1vjh.jpg" 
                            alt="James Trent"
                            width={300}
                            height={300}
                        />

                    </motion.div>
                </div>

            </div>
        </section>
    </>
  )
}
