import Link from 'next/link'
import React from 'react'
import Logo from '~/svg/logo.svg'

import { FaHome, FaInfoCircle, FaSuitcase, FaGithub, FaFileAlt } from 'react-icons/fa'

export default function Nav() {
  return (
    <>
        <div className="w-full relative shadow-md block py-4">
            <div className="container flex items-center justify-between w-full">
                <div className="items-center gap-1 hidden lg:flex">
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

                {/* logo */}
                <Link href="/">
                    <Logo width={220} height={50} />
                </Link>

                <div className="flex items-center gap-1">
                    <div className="w-28"></div>
                    <Link href="https://github.com/trentphoto" className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl hover:bg-gray-100'>
                        <FaGithub className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                        Github
                    </Link>
                    <Link href="https://github.com/trentphoto" className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl hover:bg-gray-100'>
                        <FaFileAlt className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                        Resume
                    </Link>
                </div>



            </div>
        </div>
    </>



  )
}




