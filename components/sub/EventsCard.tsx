import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface EventsCardProps {
  title: string;
  imageSrc: string;
  name: string;
  href: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ title, imageSrc, name, href }) => {
  return (
    <div>
      <h1 className='text-center text-5xl font-semibold py-10'>{title}</h1>
      <Link href={href}>
        <div className="card card1">
          <Image className='h-full w-full object-cover'
            src={imageSrc}
            width={400}
            height={500}
            alt={`Image for ${name}`}
          />
        </div>
      </Link>
        <Link href={href}>
        <div className='w-full h-40 flex justify-center items-center'>
      <button className="py-2 bg-purple-500 text-white h-18 w-1/2 rounded relative -top-1 -left-1 px-5 font-medium uppercase  transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-white-700 before:rounded before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0" >
        Continue
      </button>
      </div>
      </Link>
    </div>
  );
}

export default EventsCard;
