import React from "react";
import Image from 'next/image';
import Navbar from '@/components/main/Navbar';

const teamMembers = [
  { id: 1, name: "V. Preetam", imageSrc: "/images/gallery-6.jpg" },
  { id: 2, name: "Niruktha V", imageSrc: "/images/gallery-6.jpg" },
  { id: 3, name: "Sanjana Maini", imageSrc: "/images/gallery-6.jpg" },
  { id: 4, name: "BVS Laxman", imageSrc: "/images/gallery-6.jpg" },
  { id: 5, name: "D. Chandra Sai", imageSrc: "/images/gallery-6.jpg" },
  { id: 6, name: "Achyut Katiyar", imageSrc: "/images/gallery-6.jpg" },
  { id: 7, name: "Gnanesh", imageSrc: "/images/gallery-6.jpg" },
  { id: 8, name: "Ayush Singh Rathore", imageSrc: "/images/gallery-6.jpg" },
  { id: 9, name: "Nivedha Sriram", imageSrc: "/images/gallery-6.jpg" },
  { id: 10, name: "Prachi Dash", imageSrc: "/images/gallery-6.jpg" },
  { id: 11, name: "Rohan Midella", imageSrc: "/images/gallery-6.jpg" },
];

const committeeData = [
  {
    id: 1,
    heading: "Business Relations",
    convener: { name: "Hareesh Beecha", designation: "Head", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Arjun", designation: "Co-Head", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 2,
    heading: "Technical Committee",
    convener: { name: "Rahul Sarvesh", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Prasanna", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    // web head

  },
  {
    id: 3,
    heading: "Public Relations",
    convener: { name: "Tharun", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Nithin", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 4,
    heading: "Cultural Events",
    convener: { name: "Mohan", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Stella", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 5,
    heading: "Technical Fest",
    convener: { name: "Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Co-Convener 1", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },  {
    id: 6,
    heading: "Out Reach Committee",
    convener: { name: "Gagan", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Kasak", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 7,
    heading: "Discipline Committee",
    convener: { name: "Gnanesh", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Rushendra", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
    // 4 ka
  },
  {
    id: 8,
    heading: "Registration Committee",
    convener: { name: "Aditya", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Ravi Shankar", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 9,
    heading: "Hospitality Committee",
    convener: { name: "Likhit", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Ramaya V", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
  },
  {
    id: 10,
    heading: "Writers and Documentation",
    convener: { name: "Srujana Y", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" },
    coConvener: { name: "Mahitha", designation: "Designation 1", imageSrc: "/images/gallery-6.jpg" }
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
                <p className="mt-2 text-center text-white font-mono">{member.name}</p>
              </div>
            </div>
          ))}
          </div>
            
          <div className="px-4 mx-auto flex flex-col justify-center align-middle sm:px-8 md:px-12 lg:px-20 max-w-screen"> 
          {committeeData.map(committee => (
            <div key={committee.id} className="mt-12">
              <h2 className="text-6xl font-semibold text-center text-white mb-4">{committee.heading}</h2>
              <div className="items-center grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div>
                    <Image src={committee.convener.imageSrc} alt="" width={400} height={400} className="object-cover w-[400px] h-[450px]rounded-md" />
                  </div>
                  <p className="mt-2 text-center text-white font-mono">{committee.convener.name}</p>
                  <p className="text-center text-gray-300 font-mono">{committee.convener.designation}</p>
                </div>
                <div>
                  <div >
                    <Image src={committee.coConvener.imageSrc} alt="" width={400} height={400} className="object-cover w-[400px] h-[450px]  rounded-md" />
                  </div>
                  <p className="mt-2 text-center text-white font-mono">{committee.coConvener.name}</p>
                  <p className="text-center text-gray-300 font-mono">{committee.coConvener.designation}</p>
                </div>
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
