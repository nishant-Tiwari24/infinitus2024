'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';

interface CardProps {
  imageSrc: string;
  title: string;
  initialDescription: string;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, initialDescription, linkTo }) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setImageLoading(false);
    }, 2000);
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div className='px-[10px] lg:p-0'>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-[600px] w-[400px] flex justify-center items-center relative">
          {imageLoading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <BeatLoader color="#ffffff" loading={imageLoading} size={15} />
            </div>
          )}
          <img
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 ${imageLoading ? 'hidden' : ''}`}
            src={imageSrc}
            alt=""
            onLoad={() => setImageLoading(false)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/90"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-10 text-3xl text-white opacity-0 transition-opacity duration-800 group-hover:opacity-100">{initialDescription}</p>
          <Link href={linkTo} target='_blank'>
            <button
              className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-4xl capitalize text-white shadow shadow-black/60"
            >
              See Rules
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
