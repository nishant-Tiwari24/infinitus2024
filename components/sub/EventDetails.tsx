import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendar, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';


interface EventDetailsProps {
  venue: string;
  date: string;
  time: string;
  href: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ venue, date, time, href }) => {
  return (
    <div className="rounded-md px-[20px] lg:p-0">
      <div>
        <p className=' bg-[#4f4c4c] py-2 text-center flex items-center justify-center'>
          <FontAwesomeIcon icon={faCalendar} className="mr-4 w-6 h-6 object-cover text-red-500" />
          Date: {date}
        </p>
        <p className='bg-[#242323] py-2 text-center flex items-center justify-center'>
          <FaPhone className="mr-4 w-6 h-6 object-cover text-blue-500" />
          Phone: {venue}
        </p>
        <p className='bg-[#4f4c4c] py-2 text-center flex items-center justify-center'>
          <FontAwesomeIcon icon={faMoneyBill} className="mr-4 w-6 h-6 object-cover text-green-500" />
          Total Prize money: {time}
        </p>
      </div>
      <Link href={href} target='_blank'>
      <div className='w-full h-40 flex justify-center items-center'>
      <button className="py-2 bg-purple-500 text-white h-18 w-1/2 rounded relative -top-1 -left-1 px-5 font-medium uppercase  transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-white-700 before:rounded before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0" >
        Register
      </button>
      </div>
      </Link>
    </div>
  );
};

export default EventDetails;
