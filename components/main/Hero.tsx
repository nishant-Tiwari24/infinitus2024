'use client';

import React from 'react';
import Timer from '../sub/Timer';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col bg-contain first-section">
      <div className="left-[20%] right-[20%] flex-wrap absolute max-w-screen h-[500px] object-contain z-20 top-[-700px]">
        <Image width={1005} priority height={198} src="/images/inifinitus24-min.png" alt="" />
      </div>
      <Timer />
    </section>
  );
};

export default Hero;

