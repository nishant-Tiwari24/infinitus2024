import React from 'react';

interface EventDetailsProps {
  venue: string;
  date: string;
  time: string;
  onRegisterClick: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ venue, date, time}) => {
  return (
    <div className="rounded-md">
      <p className='bg-[#4f4c4c] py-2 text-center'>Venue: {venue}</p>
      <p className='bg-[#242323] py-2 text-center'>Date: {date}</p>
      <p className='bg-[#4f4c4c] py-2 text-center'>Prize money: {time}</p>
      <div className='w-full h-40 flex justify-center items-center border-b-8 border-[#3ef77f]'>
      <button className="py-2 bg-purple-500 text-white h-18 w-1/2 rounded relative -top-1 -left-1 px-5 font-medium uppercase  transition-all before:absolute before:top-2 before:left-2 before:-z-[1] before:h-full before:w-full before:border-2 before:border-white-700 before:rounded before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0" >
        Register
      </button>
      </div>
    </div>
  );
};

export default EventDetails;
