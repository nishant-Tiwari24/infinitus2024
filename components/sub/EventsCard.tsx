import Link from 'next/link';
import React from 'react';

interface EventsCardProps {
  title: string;
  imageSrc: string;
  name: string;
  href: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ title, imageSrc, name, href }) => {
  return (
    <div>
        <h1 className='text-center text-5xl font-semibold font-mono uppercase mt-10'>{name}</h1>
        <Link href={href}>
      <div className="flex py-10 items-center">
        <div className="group relative rounded-3xl btn-icon">
          <div className="w-[400px] cursor-pointer shadow-2xl shadow-[#22214f] transition-all duration-200 group-hover:scale-105 border-[#330a7a] border-xl">
            <img src={imageSrc} alt="avatar" className="h-[600px] w-full object-cover rounded-3xl" />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:to-[#290a58] group-hover:opacity-70 rounded-3xl"></div>
            <span className="absolute bottom-4 w-100 Welcome-text px-6 text-3xl text-white duration-200 group-hover:scale-110 group-hover:font-bold group-hover:text-[#9a43ec]">{title}</span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default EventsCard;
