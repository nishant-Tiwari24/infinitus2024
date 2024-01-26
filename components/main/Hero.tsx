'use client';

import React from 'react';
import Timer from '../sub/Timer';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',paddingTop: 200}} className='flex-col'>
      <div>
      <Image src="/images/inifinitus24-min.png" alt="" width={600} height={600} sizes="100vw" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', }} />
      </div>
    </section>
    
  );
};

export default Hero;
