import React from "react";
import Image from 'next/image';
import Navbar from '@/components/main/Navbar';

const teamMembers = [
  { id: 1, name: "V. Preetam",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 2, name: "Niruktha V",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 3, name: "Sanjana Maini",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 4, name: "BVS Laxman",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 5, name: "D. Chandra Sai",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 6, name: "Achyut Katiyar",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 7, name: "Gnanesh",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 8, name: "Ayush Singh Rathore",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 9, name: "Nivedha Sriram",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 10, name: "Prachi Dash",designation:"", imageSrc: "/images/gallery-6.jpg" },
  { id: 11, name: "Rohan Midella",designation:"", imageSrc: "/images/gallery-6.jpg" },
];

const TeamMemberSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-8 md:px-12 lg:px-20 max-w-screen">
        <div className="max-w-full mx-auto text-center">
          <h1 className='text-center text-4xl sm:text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-mono m-6 sm:m-10'>
            Our Amazing Team
          </h1>
        </div>
        <div className="grid max-w-full items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 object-cover mt-8 sm:mt-12 md:mt-16 lg:gap-x-8">
          {teamMembers.map(member => (
            <div key={member.id} className="w-full mb-8">
              <div className="relative overflow-hidden rounded-md">
                <Image
                  className="object-cover object-center w-full px-10 h-full"
                  src={member.imageSrc}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex justify-between align-middle px-10">
                <p className="mt-2 text-center text-white font-mono">{member.name}</p>
                <p className="mt-2 text-center text-white font-mono">{member.designation}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      <Navbar />
    </section>
  );
};

export default TeamMemberSection;
