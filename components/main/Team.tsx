// components/main/TeamMemberSection.tsx

import React from "react";
import Image from 'next/image';
import Navbar from '@/components/main/Navbar';

const teamMembers = [
  { id: 1, name: "Member 1", imageSrc: "/images/gallery-6.jpg" },
  { id: 2, name: "Member 2", imageSrc: "/images/gallery-6.jpg" },
  { id: 3, name: "Member 3", imageSrc: "/images/gallery-6.jpg" },
  { id: 4, name: "Member 4", imageSrc: "/images/gallery-6.jpg" },
  { id: 5, name: "Member 5", imageSrc: "/images/gallery-6.jpg" },
  { id: 6, name: "Member 6", imageSrc: "/images/gallery-6.jpg" },
  { id: 7, name: "Member 7", imageSrc: "/images/gallery-6.jpg" },
  { id: 8, name: "Member 8", imageSrc: "/images/gallery-6.jpg" },
  { id: 9, name: "Member 9", imageSrc: "/images/gallery-6.jpg" },
  { id: 10, name: "Member 10", imageSrc: "/images/gallery-6.jpg" },
  { id: 11, name: "Member 11", imageSrc: "/images/gallery-6.jpg" },
];

const committeeData = [
  {
    id: 1,
    heading: "Committee 1",
    convener: { name: "Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Co-Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 2,
    heading: "Committee 1",
    convener: { name: "Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Co-Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 3,
    heading: "Committee 1",
    convener: { name: "Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Co-Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 4,
    heading: "Committee 1",
    convener: { name: "Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Co-Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 5,
    heading: "Committee 1",
    convener: { name: "Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Co-Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },  {
    id: 6,
    heading: "Committee 1",
    convener: { name: "Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Co-Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 7,
    heading: "Committee 1",
    convener: { name: "Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Co-Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
];

const teamData = [
  { id: 1, name: "Team Member 1", imageSrc: "/images/team-member-1.jpg", position: "Position 1" },
  { id: 2, name: "Team Member 2", imageSrc: "/images/team-member-2.jpg", position: "Position 2" },
  { id: 3, name: "Team Member 3", imageSrc: "/images/team-member-3.jpg", position: "Position 3" },
];

const TeamMemberSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-8 md:px-12 lg:px-20 max-w-screen">
        <div className="max-w-full mx-auto text-center">
          <h1 className='text-center text-4xl sm:text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-mono m-6 sm:m-10'>
            Meet Our Team
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
                <p className="mt-2 text-center text-white font-mono">{member.name}</p>
              </div>
            </div>
          ))}

          {committeeData.map(committee => (
            <div key={committee.id} className="mt-12">
              <h2 className="text-3xl font-semibold text-white mb-4">{committee.heading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div>
                    <Image src={committee.convener.imageSrc} alt="" width={400} height={400} className="object-cover rounded-md" />
                  </div>
                  <p className="mt-2 text-center text-white font-mono">{committee.convener.name}</p>
                  <p className="text-center text-gray-300 font-mono">{committee.convener.designation}</p>
                </div>
                <div>
                  <div >
                    <Image src={committee.coConvener.imageSrc} alt="" width={400} height={400} className="object-cover rounded-md" />
                  </div>
                  <p className="mt-2 text-center text-white font-mono">{committee.coConvener.name}</p>
                  <p className="text-center text-gray-300 font-mono">{committee.coConvener.designation}</p>
                </div>
              </div>
          </div>
          ))}
        </div>
      <Navbar />
      </div>
    </section>
  );
};

export default TeamMemberSection;
