'use client';
import { slideInFromRight } from "@/public/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 0,
      name: "About", 
      link: "/about" 
    },
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
      id:4,
      name: "HackSRM",
      link: "https://hacksrm.tech"
    },
    {
      id: 5,
      name: "Register",
      link: "/register",
    }
  ];

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
      document.body.classList.remove("nav-open");
    }
  };

  const toggleNav = () => {
    setNav(!nav);
    document.body.classList.toggle("nav-open");
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex justify-between items-center w-full h-28 p-5 text-white  z-[9999] fixed top-0 left-0 ${nav ? 'nav-open' : ''}`} style={{backgroundColor:'#030014'}}>
      <motion.div variants={slideInFromRight(40)} className="py-5 px-3">
        <div className='flex items-center mb-2'>
            <Link href="/">
              <img src='/img.png' alt='Logo' className='h-13 object-contain w-52' />
            </Link>
          </div>
      </motion.div>

      <ul className="hidden md:flex md:justify-center md:align-middle">
        {links.map(({ id,name, link }) => (
          <li
          key={id}
          className={`text-3xl nav-links px-4 py-2 cursor-pointer hover:scale-105 capitalize hover:text-white 
          duration-200 font-light
          ${link === "/register" ? "text-gray-200 bg-purple-600 rounded-md border-2 px-5 py-2 border-purple-600 font-space font-bold" : "bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] font-space font-bold"}`}
        >
          <Link href={link}>{name} </Link>
        </li>
        ))}
      </ul>


      <div onClick={toggleNav} className="cursor-pointer font-space pr-4 z-10 text-white text-2xl md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center top-0 left-0  absolute w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
          {links.map(({ id,name, link }) => (
            <li key={id} className={`px-4 cursor-pointer capitalize py-6  text-4xl ${link === '/register' ? 'text-purple-300 font-space font-bold' : 'bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] font-space font-bold'}`}>
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
