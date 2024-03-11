import React from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';
import Footer from './Footer';


interface Types {
  types:string
}

const Cultural: React.FC<Types> = ({types}) => {

  const handleRegisterClick = () => {
  };
  return (
    <div className='max-h-screen'>
    <FlareCursor />
    <h1 className='pt-28 text-center text-3xl sm:text-7xl font-space Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-semibold m-10'>
      {types}
    </h1>
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      <div>
      < Card
        imageSrc="/images/cosmicbeats.jpeg"
        title="Your Event Title"
        initialDescription="Experience electrifying rhythms and mesmerizing moves at Cosmic Beats with multiple
        sub-categories. Talented dancers across Universities showcase their skills, igniting the stage
        with passion and creativity. Don't miss this thrilling spectacle of talent and entertainment!"
        linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'}
      />
      <EventDetails
        venue="+91 9963123747"
        date="23rd March 2024"
        time="75,000 /-"
        href='https://www.canva.com/design/DAF_JLTqyA4/cCL1tVbrDcHHxsbnRPu6UQ/view?utm_content=DAF_JLTqyA4&utm_campaign=designshare&utm_medium=link&utm_source=editor'
      />
      </div>
      <div>
      < Card
        imageSrc="/images/espo.jpeg"
        title="Your Event Title"
        initialDescription="Dive into the world of virtual excitement at Esports Competition . Gamers compete head-to-head in
        thrilling battles, showcasing their skills and strategy in popular video games. Join us for a
        high-stakes showdown of digital prowess and adrenaline-fueled action!"
        linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'}
      />
      <EventDetails
        venue="+91 7032749777"
        date="23rd March 2024"
        time="45,000 /-"
        href='https://www.canva.com/design/DAF_I6PrLFU/JGA8PjEVtF2Bsp1UN4BW2A/view?utm_content=DAF_I6PrLFU&utm_campaign=designshare&utm_medium=link&utm_source=editor'
      />
      </div>
        <div>
      < Card
        imageSrc="/images/zenith.jpeg"
        title="Zenith"
        initialDescription="Feel the rhythm and witness musical brilliance at Zenith. From soulful melodies to
        energetic beats, talented musicians captivate audiences with their extraordinary performances.
        Join us for an unforgettable celebration of music and talent!"
        linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'}
      />
      <EventDetails
        venue="+91 8886266647"
        date="23rd March 2024"
        time="40,000 /-"
        href='https://www.canva.com/design/DAF_JaSmu8U/Mc4R1mqcu3uEK6ysn8FjRA/view?utm_content=DAF_JaSmu8U&utm_campaign=designshare&utm_medium=link&utm_source=editor'
      />
      </div>

      <div>
      < Card
        imageSrc="/images/fashionwalk.jpeg"
        title="Your Event Title"
        initialDescription="Step onto the runway and embrace the glamor at our Fashion walk. Models strut their stuff,
        showcasing the latest trends and styles with confidence and flair. Join us for a dazzling display
        of creativity and elegance that sets the stage on fire!"
        linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'}
      />
      <EventDetails
        venue="+91 6303853941"
        date="22nd March 2024"
        time="15,000 /-"
        href='https://unstop.com/p/fashion-walk-infinitus-2024-srm-university-srmap-andhra-pradesh-928219'
      />
      </div>
      <div>
      < Card
        imageSrc="/images/quizz.jpeg"
        title="Your Event Title"
        initialDescription="Engage your intellect in our Case Study competition. Teams analyze real-world scenarios,
        presenting innovative solutions and strategies to industry challenges. Witness the power of
        critical thinking and creativity as participants showcase their problem-solving prowess. Join us
        for an enlightening exploration of practical knowledge and ingenuity!"
        linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'}
      />
      <EventDetails
        venue="+91 8247426373"
        date="22nd March 2024"
        time="10,000 /-"
        href='https://unstop.com/p/case-study-infinitus-2024-srm-university-srmap-andhra-pradesh-928211'
      />
      </div>
      <div>
      < Card
        imageSrc="/images/quiz.jpeg"
        title="Your Event Title"
        initialDescription="Sharpen your wits and join the excitement at our Quiz competition. Teams compete in a battle of
        knowledge across various topics, from history to pop culture. Test your intellect and quick
        thinking in this thrilling showdown of trivia mastery!"
        linkTo={'https://www.canva.com/design/DAF_BUmtfPE/oortHCPz2bSUfzKOuzhpdw/view?utm_content=DAF_BUmtfPE&utm_campaign=designshare&utm_medium=link&utm_source=editor'}
      />
      <EventDetails
        venue="+91 9182012021"
        date="22nd March 2024"
        time="10,000 /-"
        href='https://unstop.com/p/quiz-infinitus-2024-srm-university-srmap-andhra-pradesh-928204'
      />
      </div>
      </div>
      </div>
      <Navbar />
      <Footer/>
      </div>
  );
};

export default Cultural;
