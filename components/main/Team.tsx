import React from "react";
import Image from 'next/image';
import Navbar from '@/components/main/Navbar';

const TeamMemberSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className='text-center text-5xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-mono m-10'>
            Meet Our Team
          </h1>
          <p className="mt-4 text-2xl text-gray-600">
            With a passion for problem-solving and a strong commitment to
            quality, our team members collaborate effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
          <div>
            <Image
              className="object-cover h-[400px] w-[400px]"
              src="/images/gallery-6.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="object-cover h-[400px] w-[400px]"
              src="/images/gallery-6.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="object-cover h-[400px] w-[400px]"
              src="/images/gallery-6.jpg"
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
};

export default TeamMemberSection;
