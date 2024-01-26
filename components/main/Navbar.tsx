'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth > 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section>
      <div className='w-full absolute items-center flex flex-col md:flex-row justify-between p-4 -top-1 z-20'>
        <div className='nav w-full flex flex-col md:flex-row items-center justify-between text-gray-300 gap-[100px] text-[20px] ml-5'>
          <div className='flex justify-between gap-x-16'>
            {isSmallScreen && (
              <div className='flex items-center mb-2'>
                <Link href="/">
                  <img src='/img.png' alt='Logo' className='h-8 object-contain w-40' />
                </Link>
              </div>
            )}

            {!isSmallScreen && (
              <div className='cursor-pointer' onClick={toggleMenu}>
                <img src='/img.png' alt='Logo' className='h-8 object-contain w-40' />
              </div>
            )}
          </div>

          <div className={`md:flex flex-col md:flex-row items-center gap-8 mb-2 mt-2 md:ml-3 md:mr-3 navbar-li ${isMenuOpen ? 'block' : 'hidden'}`}>
            {/* <Link href="/about" className='cursor-pointer uppercase hover:underline text-[15px]'>About</Link> */}
            <Link href="/events" className='cursor-pointer uppercase hover:underline text-[15px]'>Events</Link>
            <Link href="/team" className='cursor-pointer uppercase hover:underline text-[15px]'>Team</Link>
            <Link href="/faqs" className='cursor-pointer uppercase hover:underline text-[15px]'>FaQs</Link>
            <Link href="/register" className='cursor-pointer uppercase hover:underline text-[15px]'>Register</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
