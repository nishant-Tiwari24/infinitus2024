import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full absolute items-center flex flex-row justify-center  text-green-200 p-4 top-5 '>
      <div className='max-w-screen-md flex flex-row items-center justify-between border-[2px] rounded-lg border-[#8058f861] text-purple-200 gap-[100px] text-[20px]'>
        <div className='flex flex-row items-center gap-20 mb-2 mt-2 ml-3 mr-3'>
          <a href="#about-me" className='cursor-pointer font-serif'>About</a>
          <a href="#skills" className='cursor-pointer font-serif'>Events</a>
          <a href="#theme" className='cursor-pointer font-serif'>Team</a>
          <a href="#questions" className='cursor-pointer font-serif'>Performers</a>
          <a href="#contact" className='cursor-pointer font-serif'>Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
