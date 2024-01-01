'use client';
import React from 'react';
import { preLoaderAnim } from '@/utils';
import { useEffect } from 'react';

const Preloader: React.FC = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return null;
};

const Loading: React.FC = () => {
  return (
    <div className='preloader h-screen w-screen bg-black fixed bottom-0 left-0 z-50 flex justify-center items-center overflow-hidden'>
      <div className='texts-container flex items-center justify-between h-16 w-80 text-sm sourcecode text-white '>
        <span>Ideate</span>
        <span>Create</span>
        <span>Win</span>
      </div>
    </div>
  );
};

export { Preloader, Loading };
