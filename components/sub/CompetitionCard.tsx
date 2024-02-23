// Import necessary modules from Next.js and React
import Link from 'next/link';
import React from 'react';

// Define the interface for CardProps
interface CardProps {
  imageSrc: string;
  title: string;
  initialDescription: string;
  linkTo: string;
}

// Define the functional component Card
const Card: React.FC<CardProps> = ({ imageSrc, title, initialDescription, linkTo }) => {
  return (
    <div className='px-[10px] lg:p-0'>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-[600px] w-[400px] flex justify-center items-center">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={imageSrc} alt="" />
        </div><div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/90"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-10 text-3xl text-white opacity-0 transition-opacity duration-800 group-hover:opacity-100">{initialDescription}</p>
          <Link href={linkTo}>
              <button
                className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-4xl capitalize text-white shadow shadow-black/60"
              > See Rules
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Export the Card component
export default Card;
