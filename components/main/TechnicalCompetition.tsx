
import React from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';
import Footer from './Footer';


interface Types {
  types:string
}


const Technical: React.FC<Types> = ({types}) => {

  const handleRegisterClick = () => {};
  return (
    <div className='max-h-screen'>
    <FlareCursor />
    <h1 className='pt-28 text-center text-3xl sm:text-7xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space m-10'>
      {types}
    </h1>
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        <div>
      < Card
              imageSrc="/images/photofusion.jpeg"
              title="Code Chase Competition"
              initialDescription="Join us for the ultimate collage showdown at Photo Fusion, where you can morph, merge, and manipulate images with artistic flair and wild creativity, turning snapshots into surreal masterpieces that defy reality!" linkTo={''}        
      />
      <EventDetails
        venue="+91 7061828823"
        date="21st March 2024"
        time="1500 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/electronic1.jpeg"
              title="Your Event Title"
              initialDescription="Get ready to spark your curiosity and amp up your knowledge in this electrifying competition! From BEE to Microelectronics, dazzle in the quiz round and negotiate your way to victory in the thrilling final showdown to win" linkTo={''}      />
      <EventDetails
        venue="+91 7061828823"
        date="21st March 2024"
        time="2000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/skyquest1.jpeg"
              title="Your Event Title"
              initialDescription="Get ready for the ultimate adrenaline rush in the most thrilling drone challenge yet! With twists and loops it's a high-flying adventure like no other. Strap in, rev up, and prepare to soar to new heights in this electrifying competition!" linkTo={''}      />
      <EventDetails
        venue="+91 9893986159"
        date="21st March 2024"
        time="15,000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/circuitdebugg1.jpeg"
              title="Your Event Title"
              initialDescription="Uncover the mysteries of circuits and components in a thrilling adventure through the world of technology, delving into topics primarily from Basic Electrical and Electronics (BEE) and Network Theory. " linkTo={''}      />
      <EventDetails
        venue="+91 6009923073"
        date="21st March 2024"
        time="5000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/adverse1.jpeg"
              title="Your Event Title"
              initialDescription="Dive into our ad competition for a chance to sparkle and shine with your creative brilliance! Unleash your imagination and win big with ads that dazzle and delight! " linkTo={''}      />
      <EventDetails
        venue="+91 6009923073"
        date="21st March 2024"
        time="7500 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div> 
      <div>
      < Card
              imageSrc="/images/byte.jpeg"
              title="Your Event Title"
              initialDescription="Get ready to pass the programming baton in Byte Baton, where coders team up to sprint through coding challenges racing against the clock and each other in a high-energy relay that tests both speed as well as skills!!
              " linkTo={''}      />
      <EventDetails
        venue="+91 7061828823"
        date="21st March 2024"
        time="2500 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/codecrusade.jpeg"
              title="Your Event Title"
              initialDescription="Get ready for the ultimate coding showdown! From memory mastery to bug-busting brilliance, this competition is a whirlwind of adrenaline and excitement where you will race against the clock." linkTo={''}      />
      <EventDetails
        venue="+91 6009923073"
        date="21st March 2024"
        time="7500 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/pixeleon.jpeg"
              title="Your Event Title"
              initialDescription="Step into the colorful realm of Pixeleon, where you become digital detectives cracking codes to unveil the vibrant hues hidden within a  pixel puzzle! It's a thrilling race against time and logic." linkTo={''}      />
      <EventDetails
        venue="+91 7061828823"
        date="21st March 2024"
        time="3000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/art.jpeg"
              title="Your Event Title"
              initialDescription="Illuminate your creativity in pixels and Get ready to light up the digital stage, as Art Luminous invites you to unleash your inner digital artist and shine in a captivating competition where imagination meets technology." linkTo={''}      />
      <EventDetails
        venue="+91 7061828823"
        date="21st March 2024"
        time="1500 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/codeinverse.jpeg"
              title="Your Event Title"
              initialDescription="Flip the script and crack the code in Code Inverse Conquest, where coders can twist and turn their way through reverse engineering challenges, decoding their way to victory in this topsy-turvy coding showdown." linkTo={''}      />
      <EventDetails
        venue="+91 7061828823"
        date="21st March 2024"
        time="1500 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/crypthunt.jpeg"
              title="Your Event Title"
              initialDescription="Unravel the secrets of encryption to unlock hidden treasures in a thrilling cryptographic quest! Crack codes, dodge ciphers, and follow the trail to unearth riches beyond imagination!" linkTo={''}      />
      <EventDetails
        venue="+91 6009923073"
        date="21st March 2024"
        time="3000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      </div>
      </div>
      <h1 className='pt-28 text-center text-7xl sm:text-5xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-mono m-10'>
      Workshops
    </h1>
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      <div>
      < Card
              imageSrc="/images/arduino1.jpeg"
              title="Your Event Title"
              initialDescription="Dive into the realm of creativity and innovation with Arduino, where imagination meets technology, empowering you to craft interactive gadgets, automate tasks, and bring your ideas to life." linkTo={''}      />
      </div>
      <div>
      < Card
              imageSrc="/images/iotworkshop1.jpeg"
              title="Your Event Title"
              initialDescription="Embark on a journey into the interconnected world of IoT, where you'll learn to blend physical devices with digital intelligence, unleashing endless possibilities to transform everyday objects into smart, data-driven marvels." linkTo={''}      />
      </div>
      <div>
      < Card
              imageSrc="/images/web3block.jpeg"
              title="Your Event Title"
              initialDescription=" Delve into the revolutionary world of blockchain, where cryptography and distributed networks converge to redefine trust and decentralize systems, empowering you to explore the future of secure transactions, digital assets, and decentralized applications." linkTo={''}/>
      </div>
      </div>
      </div>
      <Footer/>
      </div>
  );
};

export default Technical;
