'use client';

import React, { useEffect } from 'react';
import { preLoaderAnim } from '@/utils';

const Preloader: React.FC = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return null;
};

const Loading: React.FC = () => {
  return (
    <div className='preloader h-100vh w-100vw bg-black fixed bottom-0 left-0 z-[55] flex justify-center align-center overflow-hidden'>
      <div className='texts-conatiner flex align-center justify-between h-[60px] w-[280px] text-sm sourcecode text-white '>
        <span>Ideate</span>
        <span>Create</span>
        <span>Win</span>
      </div>
    </div>
  );
};

export { Preloader, Loading };
