import Image from 'next/image'
import React from 'react'
import ButtonLink from './links/ButtonLink'

import Pattern from '~/svg/ooo.svg'
import Link from 'next/link'
import { FaHome, FaInfoCircle, FaSuitcase } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
        <section className='relative bg-gradient-to-b	to-[#EEF3F7] from-white py-8 md:pt-32 overflow-hidden'>
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full z-10 opacity-70">
                <Pattern className='w-full h-full scale-[250%]' />
            </div>
            <div className="container max-w-4xl gap-4 relative px-20 z-20">
                <div className="h-1 bg-gray-800 mx-auto w-full mb-4"></div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                    <Link href="/" className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50'>
                        <FaHome className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                        Home
                    </Link>
                    <Link href="/about" className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50'>
                        <FaInfoCircle className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                        About
                    </Link>
                    <Link href="/projects" className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50'>
                        <FaSuitcase className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                        Projects
                    </Link>
                </div>
                <p className='text-center'>© Copyright 2023 James Trent.</p>
            </div>
        </section>
    </>
  )
}
