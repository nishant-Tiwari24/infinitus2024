
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
        title="Code Chase Competition"
        initialDescription="Get ready for the ultimate coding showdown! From memory mastery to bug-busting brilliance, this competition is a whirlwind of adrenaline and excitement where you will race against the clock."
        alternateDescription='ROUND 1
        This round consists of blank coding where the participants will be given a code snippet to memorize within 45 seconds to 120 seconds based on the number of lines of the code. After a given time limit participants have to try and recreate the same code snippet within 240 seconds. 
        ROUND 2 
        In this round the participants will be given a code snippet with intentional bugs in it and they have to rectify the code. participants will be given points based on accuracy and time used to solve. 
        ROUND 3
        It is a classic coding competition where participants will be given tricky questions to solve in a limited time. 
        '
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
        initialDescription="Get ready to spark your curiosity and amp up your knowledge in this electrifying competition! From BEE to Microelectronics, dazzle in the quiz round and negotiate your way to victory in the thrilling final showdown to win"
        alternateDescription='Round 1:
        This round is a Quiz session designed with moderate difficulty questions. Participants will undergo a common quiz, and the top 5 scorers will advance to the second round.
        
        Round 2:
        In the main competition, contestants will face the questioner and determine the amount of money they stand to win.
        '
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
        initialDescription="Get ready for the ultimate coding showdown! From memory mastery to bug-busting brilliance, this competition is a whirlwind of adrenaline and excitement where you will race against the clock. "
        alternateDescription='ROUND 1
        This round consists of blank coding where the participants will be given a code snippet to memorize within 45 seconds to 120 seconds based on the number of lines of the code. After a given time limit participants have to try and recreate the same code snippet within 240 seconds. 
        ROUND 2
        In this round the participants will be given a code snippet with intentional bugs in it and they have to rectify the code. participants will be given points based on accuracy and time used to solve. 
        ROUND 3
        It is a classic coding competition where participants will be given tricky questions to solve in a limited time. 
        '
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
        initialDescription="Get ready for the ultimate adrenaline rush in the most thrilling drone challenge yet! With twists and loops it's a high-flying adventure like no other. Strap in, rev up, and prepare to soar to new heights in this electrifying competition!"
        alternateDescription='Round 1 : Each team, composed of 3-4 members, will be engaged in a challenge. Clues will be provided to every team to discover the pickup and drop-off locations. The pilot, assisted by the other team member, will maneuver the drone to the pickup point, where the second team member will securely attach the delivery box. Subsequently, the pilot will navigate the drone to the delivery location. The team with the shortest completion time will advance to round 2
        Round 2 : The relay race; the piloting skills of all team members will be put to the test. One team member will navigate the drone through a designated course, overcoming moderate obstacles, before passing the transmitter to the next teammate. This relay continues until each member has flown the drone. The team with the fastest cumulative time will progress to the final round.'
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
        initialDescription="Uncover the mysteries of circuits and components in a thrilling adventure through the world of technology, delving into topics primarily from Basic Electrical and Electronics (BEE) and Network Theory. "
        alternateDescription='Round 1 - Quiz:
        Test your theoretical prowess in a quiz round. The selected top contestants will proceed to the next stage.
        
        Round 2 - Practical:
        Engage in a hands-on experience where participants identify defects in a simulated circuit. The top 2 performers will emerge as the winner and runner-up.
        '
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
        imageSrc="/images/adverse1.jpeg"
        title="Your Event Title"
        initialDescription="Dive into our ad competition for a chance to sparkle and shine with your creative brilliance! Unleash your imagination and win big with ads that dazzle and delight! "
        alternateDescription='
        Theme Based - A theme will be given to work on along with a special element to be included in the Advertisement. 
        It will be a video competition where participants have to  make a video for the Ad campaign
        6 hours will be given in total starting from the time of theme allocation for submission of the Ad file (Creation + editing)
        Ad must be between 30 seconds to 45 seconds long
        Ads with more creativity and novelty will be awarded more points
        '
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
        imageSrc="/images/Shark Tank (1).png"
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
        imageSrc="/images/Shark Tank (1).png"
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
        imageSrc="/images/Shark Tank (1).png"
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
        imageSrc="/images/codechase.jpeg"
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
      <Footer/>
      </div>
  );
};

export default Technical;
