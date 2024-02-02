'use client';

import React from 'react';
import Timer from '../sub/Timer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromRight, slideInFromLeft } from '@/public/utils/motion';
const Hero: React.FC = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 250}} className='flex-col'>
      <div style={{ marginBottom: '20px', zIndex: 0 }}> {/* Ensure zIndex is set */}
        <motion.div variants={slideInFromRight(0.8)} initial="initial" animate="animate">
          <Image src="/images/inifinitus24-min.png" alt="" width={1000} height={1000} sizes="100vw" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0' }} className='z-4 relative'/>
        </motion.div>
      </div>
      <div className='flex flex-col justify-center gap-28'>
        <motion.div className='pt-14' style={{ margin: '10px 0' }} variants={slideInFromLeft(1.2)} initial="initial" animate="animate">
          <Timer />
        </motion.div>
        <motion.button
          className="cursor-pointer w-[12em] h-[3em] text-white font-bold relative text-[18px] sm:w-[20em] sm:h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-lg before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
          variants={slideInFromRight(1.8)} initial="initial" animate="animate"
          style={{ zIndex: 0 }}
        >
          Register Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
