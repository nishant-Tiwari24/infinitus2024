'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

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
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "Events", url: "/events" },
    {name: "Team",url: "/team"},
    { name: "FAQs", url: "/faqs" },
    { name: "Register", url: "/register" },
  ];

  return (
    <section className='w-3xl'>
      <div className='w-full absolute flex flex-col md:flex-row justify-between p-4 -top-1 z-20'>
      <div>
          <div className="flex items-center justify-between py-5 px-3 md:py-5 md:block">
              
              <div className='flex items-center mb-2'>
                <Link href="/">
                  <img src='/img.png' alt='Logo' className='h-8 object-contain w-40' />
                </Link>
              </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-white" />
                ) : (
                  <AiOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map(({ name, url}, index) => (
                <li key={index} className="text-white">
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
