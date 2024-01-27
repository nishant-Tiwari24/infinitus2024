'use client';

import React from 'react';
import Timer from '../sub/Timer';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 260 }} className='flex-col'>
      <div style={{ marginBottom: '20px' }}>
        <Image src="/images/inifinitus24-min.png" alt="" width={750} height={750} sizes="100vw" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
      </div>
      <div className='pt-10'>
        <Timer />
      </div>
    </section>
  );
};

export default Hero;
