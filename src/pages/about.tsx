import ButtonLink from "@/components/links/ButtonLink";
import Nav from "@/components/Nav";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Nav />
      <div className="w-full relative grid md:grid-cols-2">
        <div className="bg-gray-700 text-white p-12 md:p-20 flex flex-col">
          <div className="w-12 h-1 bg-blue-600 my-4"></div>
            <p className="font-fira text-lg uppercase tracking-wider mb-4">Hello there.</p>
            <h1 className="h0 font-primary uppercase italic font-extrabold leading-[60px] mb-4">
                <span>My</span><br />
                <span>Name's</span><br />
                <span className="tracking-widest">James</span>
                <span className="text-blue-700">.</span>
                </h1>
            <div className="w-12 h-1 bg-blue-600 my-4"></div>
            <p className='font-bold mb-8'>As a frontend developer, I have a passion for creating visually appealing and user-friendly websites and applications. My goal is clean, efficient code and an elegant user experience.</p>


        </div>
        <div className="p-12 md:p-20">
            <Image src="/images/j.jpg" alt="Picture of the author" className="border-8 border-gray-700 shadow-lg mb-12" width={500} height={500} />
            <p className="mb-8 font-bold">My journey as a web developer began several years ago when I first became fascinated with some of the websites I came across and how they were built. I quickly discovered a passion for web development and began learning the basics like HTML/CSS/vanilla JS. Since then, it’s been a journey of becoming more and more proficient in designing a great digital experience for every user.</p>
            <ButtonLink href="/">View My Resume</ButtonLink>
        </div>
      </div>

    </>
  )
}
