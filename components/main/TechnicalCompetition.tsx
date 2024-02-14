
import React from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';


interface Types {
  types:string
}


const Technical: React.FC<Types> = ({types}) => {

  const handleRegisterClick = () => {
  };
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
        imageSrc="/images/codechase.jpeg"
        title="Dance Competition"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/electronic1.jpeg"
        title="Your Event Title"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/blankcode1.jpeg"
        title="Your Event Title"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/bugathon1.jpeg"
        title="Your Event Title"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/skyquest1.jpeg"
        title="Your Event Title"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/circuitdebugg1.jpeg"
        title="Your Event Title"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      {/* <div>
      < Card
        imageSrc="/images/adverse1.jpeg"
        title="Your Event Title"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div> */}
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
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/iotworkshop1.jpeg"
        title="Your Event Title"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/web3block.jpeg"
        title="Your Event Title"
        initialDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?"
        alternateDescription='Ad, aliquam! Soluta, in fuga minima placeat maxime nisi animi nemo ducimus molestiae eos, dignissimos impedit nihil assumenda eius quis magnam provident hic nostrum facilis perspiciatis. Illum quia tenetur eos eum ab fugiat nostrum sed asperiores. Perspiciatis vero laborum eaque, porro pariatur praesentium reiciendis quam, libero minus cumque labore ratione, iste itaque aut dolorum quibusdam. Velit, nisi eum dolorem, praesentium asperiores sunt amet libero saepe quo similique nostrum ratione reiciendis, mollitia placeat?'
      />
      <EventDetails
        venue="Your Venue"
        date="Event Date"
        time="Event Time"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      </div>
      </div>
      
      <Navbar />
      </div>
  );
};

export default Technical;
