import React from 'react';
import Timer from './sub/Timer';

const Hero: React.FC = () => {

  return (
    <section className="relative w-full flex flex-col bg-contain first-section" >
      <div className="left-[20%] right-[20%] flex-wrap absolute max-w-screen h-[500px] object-contain z-20 top-[-600px]" >
        <img src="img.png" alt="" />
      </div>
      <Timer />
      {/* <div className="text-center left-[40%] mt-4 absolute top-[-180px] text-yellow-100">
        <p className="text-sm font-bold h3">22nd February 2024</p>
      </div> */}
    </section>
  );
};

export default Hero;
