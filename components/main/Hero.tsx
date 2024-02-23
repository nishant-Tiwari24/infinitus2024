'use client';
import React from 'react';
import Timer from '../sub/Timer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromRight, slideInFromLeft, fromTop } from '@/public/utils/motion';
import { url } from 'inspector';

const Hero: React.FC = () => {
  const background1 = '';
  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-contain bg-center bg-fixed' style={{ backgroundImage: `url(${background1})` }}>
      <div className='mb-20'>
        <motion.div variants={fromTop(0.8)} initial="initial" animate="animate">
          <Image
            src="/images/infinitus2024.png"
            alt="infinitus logo"
            width={1000}
            height={300}
            sizes="100vw"
            style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0' }}
            className='z-4 relative px-10'
          />
        </motion.div>
      </div>
      {/* <video 
        muted 
        loop 
        autoPlay 
        className='w-full h-full object-cover absolute top-[-470px] rotate-180'>
            <source src="/videos/blackhole.webm" type='video/webm'/>
        </video> */}
      <div className='flex flex-col items-center justify-center gap-28'>
        <motion.div className='sm:mt-10' variants={fromTop(1.2)} initial="initial" animate="animate">
          <Timer />
        </motion.div>
        <motion.button
          className="sm:mt-6 mt-[-25px] cursor-pointer w-[15em] h-[3em] text-white font-bold relative text-[11px] sm:text-[18px] sm:w-[18em] sm:h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[10px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-purple-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[10px] before:hover:blur-lg before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
          variants={fromTop(1.8)} initial="initial" animate="animate"
          style={{ zIndex: 0 }}
        >
          Register Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
