import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full fixed items-center flex flex-row justify-center  text-green-200 p-4 top-5 left-10 '>
      <div className='max-w-screen-md w-full flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-4 gap-20'>
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
