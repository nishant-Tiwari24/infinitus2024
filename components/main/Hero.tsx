'use client';

import React from 'react';
import Timer from '../sub/Timer';
import Date from '../sub/Date';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 250 }} className='flex-col'>
      <div style={{ marginBottom: '20px' }}>
        <Image src="/images/inifinitus24-min.png" alt="" width={750} height={750} sizes="100vw" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
      </div>
{/*       <div  style={{ margin: '10px 0' }}>
        <Date />
      </div> */}
      <div className='pt-14' style={{ margin: '10px 0' }}>
        <Timer />
      </div>
    </section>
  );
};

export default Hero;
