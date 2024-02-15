import React from 'react'
import EventsCard from '../sub/EventsCard'
import Navbar from '@/components/main/Navbar';
import FlareCursor from "@/components/main/Cursor";

function Events() {
  const eventData = [
    { title: "Cultural Fest Events", imageSrc: "/images/cultural.jpeg" , name:"Cultural Events", href:"/events/cultural"},
    { title: "Technical Fest Events", imageSrc: "/images/tech.jpeg", name:"Technical Event" , href:"/events/technical"},
    { title: "Non Technical Events", imageSrc: "/images/non.jpeg", name:"Technical Event" , href:"/events/nontechnical"}
  ];
  return (
    <div className='max-h-screen pt-20'>
      <FlareCursor />
        <h1 className=' text-center text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-mono py-20'>Events</h1>
        <div className='flex max-w-full justify-around align-middle flex-wrap ml-10 mr-10 '>
        {eventData.map((event, index) => (
        <EventsCard key={index} title={event.title} imageSrc={event.imageSrc} name={event.name} href={event.href}/>
      ))}
        </div>
        <Navbar />
      </div>
  )
}

export default Events
