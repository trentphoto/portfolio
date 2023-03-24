import Image from 'next/image'
import React from 'react'
import ButtonLink from './links/ButtonLink'

export default function Hero() {
  return (
    <>
        <section className='bg-gradient-to-b	from-[#EEF3F7] to-[#FCFCFD] py-32'>
            <div className="container grid md:grid-cols-2">
                <div>
                    <p className='font-fira italic'>Hello World 👋</p>
                    <h1 className='h0 my-4'>I'm James<span className='text-primary-500'>~</span></h1>
                    <p className='font-bold mb-6'>a frontend developer who's passionate about clean, <br /> elegant code and modern UI.</p>
                    <ButtonLink className='mr-2' href="/">About Me</ButtonLink>
                    <ButtonLink variant='grayscale' href="/">Resume</ButtonLink>
                </div>
                <div>
                    <div className="rounded-full w-72 h-72 border-4 border-primary-500 overflow-hidden">
                        <Image 
                            src="https://res.cloudinary.com/dakfmjumy/image/upload/v1677768728/secretariatmedia/profile-small_1_ji1vjh.jpg" 
                            alt="James Trent"
                            width={300}
                            height={300}
                        />

                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
