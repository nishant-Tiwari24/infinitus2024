import React from 'react';
import Navbar from '@/components/main/Navbar';
import FlareCursor from '@/components/main/Cursor';
import { ThreeDCardDemo } from '../sub/Card';

function Registration() {


  return (
    <div className='pt-20'>
      <FlareCursor />
      <h1 className='text-center text-5xl sm:text-7xl font-space font-bold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-mono py-20'>Registration</h1>
      <div className='container w-80 mx-auto flex justify-center items-center flex-wrap'>
       <ThreeDCardDemo/>
      </div>
      <Navbar />
    </div>
  );
}

export default Registration;
