'use client';
import { slideInFromRight } from "@/public/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Events",
      link: "/events",
    },
    {
      id: 2,
      name: "Team",
      link: "/team",
    },
    {
      id: 3,
      name: "FAQs",
      link: "/faqs",
    },
    {
      id: 4,
      name: "Register",
      link: "/register",
    }
  ];

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
      document.body.classList.remove("nav-open"); // Remove class on resize
    }
  };

  const toggleNav = () => {
    setNav(!nav);
    document.body.classList.toggle("nav-open");
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center w-full h-22 p-5 text-white  z-0 fixed top-0 left-0 ${nav ? 'nav-open' : ''}`} style={{}}>
      <motion.div variants={slideInFromRight(40)} className="py-5 px-3">
        <div className='flex items-center mb-2'>
            <Link href="/">
              <img src='/img.png' alt='Logo' className='h-13 object-contain w-52' />
            </Link>
          </div>
      </motion.div>

      <ul className="hidden md:flex">
        {links.map(({ id,name, link }) => (
          <li
            key={id}
            className=" text-4xl nav-links px-4 cursor-pointer capitalize font-medium white hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div onClick={toggleNav} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-white">
          {links.map(({ id,name, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={toggleNav} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
