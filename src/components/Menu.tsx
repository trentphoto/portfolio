import { animation } from '@/lib/animation';
import clsxm from '@/lib/clsxm';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaEnvelope, FaHome, FaInfoCircle, FaSuitcase, FaTimes } from 'react-icons/fa';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <!-- The overlay --> */}
      <div className={clsxm('h-full fixed z-50 left-0 top-0 bg-primary-700 overflow-x-hidden transition-all', isOpen ? 'w-full' : 'w-0')}>

        {/* <!-- Button to close the overlay navigation --> */}
        <motion.div 
          className='absolute flex text-white font-fira uppercase z-50 right-10 top-10 items-center text-2xl px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-500 cursor-pointer'
          onClick={toggleMenu}
        >
            <FaTimes className='text-white mr-2' />
            Close
        </motion.div>

        {/* <!-- Overlay content --> */}
        <div className='relative flex flex-col gap-2 items-center top-1/4 w-full text-center mt-8'>
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.1 }}
          >
            <Link href="/" className='group flex gap-2 items-center font-fira text-white text-4xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-500'>
                <FaHome className='text-4xl mr-4 transition-all ease-out duration-300' />
                Home
            </Link>
          </motion.div>
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.2 }}
          >
            <Link href="/about" className='group flex gap-2 items-center font-fira text-white text-4xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-500'>
                <FaInfoCircle className='text-4xl mr-4 transition-all ease-out duration-300' />
                About
            </Link>
          </motion.div>
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.3 }}
          >
            <Link href="/projects" className='group flex gap-2 items-center font-fira text-white text-4xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-500'>
                <FaSuitcase className='text-4xl mr-4 transition-all ease-out duration-300' />
                Projects
            </Link>
          </motion.div>
          <motion.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0.4 }}
          >
            <Link href="/projects" className='group flex gap-2 items-center font-fira text-white text-4xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-500'>
                <FaEnvelope className='text-4xl mr-4 transition-all ease-out duration-300' />
                Contact
            </Link>
          </motion.div>
        </div>
      </div>

      {/* <!-- Use any element to open/show the overlay navigation menu --> */}
      <motion.div 
        className='group flex gap-2 items-center font-fira text-2xl uppercase px-3 py-2 rounded-xl transition-colors duration-75 hover:bg-primary-50 cursor-pointer'
        onClick={toggleMenu}
      >
          <FaBars className='text-2xl transition-all ease-out duration-300 group-hover:text-primary-600' />
          Menu
      </motion.div>
    </>
  );
};

export default Menu;
