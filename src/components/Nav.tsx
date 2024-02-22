import Link from 'next/link'
import React from 'react'
import Logo from '~/svg/logo.svg'
import Menu from './Menu';

import { FaHome, FaInfoCircle, FaSuitcase, FaBlog } from 'react-icons/fa'
import { nav } from '@/lib/data';

export default function Nav3() {
    return (
        <>
            <div className="w-full relative shadow-md block py-4">
                <div className="container flex items-center justify-between w-full px-4">

                    {/* desktop left menu */}
                    <div className="items-center gap-1 hidden lg:flex">
                        <Link href={nav.home} className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50'>
                            <FaHome className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                            Home
                        </Link>
                        <Link href={nav.about} className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50'>
                            <FaInfoCircle className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                            About
                        </Link>
                        <Link href={nav.projects} className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50'>
                            <FaSuitcase className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                            Projects
                        </Link>
                    </div>

                    {/* logo */}
                    <Link href={nav.home}>
                        <Logo width={220} height={50} />
                    </Link>

                    {/* mobile menu button */}
                    <div className="inline-block lg:hidden">
                        <Menu />
                    </div>
                    {/* <button className='block lg:hidden p-4 bg-gray-200' onClick={toggleMenu}>Toggle Menu</button> */}

                    {/* desktop right menu */}
                    <div className="items-center gap-1 hidden lg:flex">
                        <div className="w-28" />
                        <Link href={nav.blog} className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50'>
                            <FaBlog className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                            Blog
                        </Link>
                        <Link href={nav.projects} className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50'>
                            <FaSuitcase className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
                            Projects
                        </Link>
                    </div>

                </div>
            </div>
        </>



    )
}




