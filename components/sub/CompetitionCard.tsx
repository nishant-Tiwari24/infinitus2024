'use client';
import React, { useState } from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  initialDescription: string;
  alternateDescription: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, initialDescription, alternateDescription }) => {
  const [showAlternate, setShowAlternate] = useState(false);

  const toggleDescription = () => {
    setShowAlternate((prevShowAlternate) => !prevShowAlternate);
  };

  const getDescription = () => {
    return showAlternate ? alternateDescription : initialDescription;
  };

  return (
    <div className='px-[20px] lg:p-0'>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-[600px] w-[450px]">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={imageSrc} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-5xl mb-10 font-bold text-white">{title}</h1>
          <p className="mb-10 text-3xl text-white opacity-0 transition-opacity duration-800 group-hover:opacity-100">{getDescription()}</p>
          <button
            onClick={toggleDescription}
            className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-4xl capitalize text-white shadow shadow-black/60"
          > See Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
