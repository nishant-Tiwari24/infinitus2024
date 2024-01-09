'use client';

import React from 'react';
import Timer from '../sub/Timer';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-contain first-section">
      <div className="max-w-screen object-contain z-20">
        <Image width={1005} priority height={198} src="/images/inifinitus24-min.png" alt="" />
      </div>
      <Timer />
    </section>
  );
};

export default Hero;
