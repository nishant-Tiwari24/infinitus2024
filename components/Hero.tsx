// Update the Hero component

'use client';

import React from 'react';
import Timer from './sub/Timer';

function Hero() {
  return (
    <section>
      <div className='relative h-full w-full flex flex-col'>
        <div className='left-[20%] right-[20%] flex-wrap absolute max-w-screen h-[500px] object-contain z-20 top-[-750px]'>
          <img src="img.png" alt="" />
        </div>
        <Timer/>
        <div className="calender absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
          <p className='text-white-200 text-[12px]'>22nd, February 2024</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

