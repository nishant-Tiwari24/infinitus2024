
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
    <h1 className='pt-28 text-center text-7xl sm:text-5xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-mono m-10'>
      {types}
    </h1>
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        <div>
      < Card
              imageSrc="/images/photofusion.jpeg"
              title="Code Chase Competition"
              initialDescription="Get ready for the ultimate coding showdown! From memory mastery to bug-busting brilliance, this competition is a whirlwind of adrenaline and excitement where you will race against the clock. " linkTo={''}        
      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/electronic1.jpeg"
              title="Your Event Title"
              initialDescription="Get ready to spark your curiosity and amp up your knowledge in this electrifying competition! From BEE to Microelectronics, dazzle in the quiz round and negotiate your way to victory in the thrilling final showdown to win" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/blankcode1.jpeg"
              title="Your Event Title"
              initialDescription="Get ready for the ultimate coding showdown! From memory mastery to bug-busting brilliance, this competition is a whirlwind of adrenaline and excitement where you will race against the clock. " linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/bugathon1.jpeg"
              title="Your Event Title"
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/skyquest1.jpeg"
              title="Your Event Title"
              initialDescription="Get ready for the ultimate adrenaline rush in the most thrilling drone challenge yet! With twists and loops it's a high-flying adventure like no other. Strap in, rev up, and prepare to soar to new heights in this electrifying competition!" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/circuitdebugg1.jpeg"
              title="Your Event Title"
              initialDescription="Uncover the mysteries of circuits and components in a thrilling adventure through the world of technology, delving into topics primarily from Basic Electrical and Electronics (BEE) and Network Theory. " linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/adverse1.jpeg"
              title="Your Event Title"
              initialDescription="Dive into our ad competition for a chance to sparkle and shine with your creative brilliance! Unleash your imagination and win big with ads that dazzle and delight! " linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div> 
      <div>
      < Card
              imageSrc="/images/byte.jpeg"
              title="Your Event Title"
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/codecrusade.jpeg"
              title="Your Event Title"
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/pixeleon.jpeg"
              title="Your Event Title"
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/art.jpeg"
              title="Your Event Title"
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/codechase.jpeg"
              title="Your Event Title"
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
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
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/iotworkshop1.jpeg"
              title="Your Event Title"
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/web3block.jpeg"
              title="Your Event Title"
              initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?" linkTo={''}      />
      <EventDetails
        venue="+91 8008413459"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      </div>
      </div>
      <Footer/>
      </div>
  );
};

export default Technical;
