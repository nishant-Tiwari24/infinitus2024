'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <div className=' nav w-full absolute items-center flex flex-col md:flex-row justify-between text-green-200 p-4 -top-1 z-20'>
        <div className='w-full flex flex-col md:flex-row items-center justify-between text-purple-200 gap-[100px] text-[20px] ml-5'>
          <div className='flex items-center mb-2 md:mb-0'>
            <a href="#about-me" className='text-white font-serif'>
              <img src='/img.png' alt='Logo' className='h-8 object-contain w-40' />
            </a>
          </div>

          <div className='md:hidden cursor-pointer text-white font-serif' onClick={toggleMenu}>
            Menu
          </div>

          <div className={` md:flex flex-col md:flex-row items-center gap-8 mb-2 mt-2 md:ml-3 md:mr-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#about-me" className='cursor-pointer font-serif uppercase  text-[15px]'>About</a>
            <a href="#skills" className='cursor-pointer font-serif uppercase  text-[15px]'>Events</a>
            <a href="#theme" className='cursor-pointer font-serif uppercase  text-[15px]'>Team</a>
            <a href="#questions" className='cursor-pointer font-serif uppercase  text-[15px]'>Performers</a>
            <a href="#contact" className='cursor-pointer font-serif uppercase  text-[15px]'>Register</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
