
import React from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';
import Footer from './Footer';


interface Types {
  types:string
}


const YourPage: React.FC<Types> = ({types}) => {

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
        imageSrc="/images/music.jpg"
        title="Dance Competition"
        initialDescription="Feel the rhythm and witness musical brilliance at comp_name . From soulful melodies to
        energetic beats, talented musicians captivate audiences with their extraordinary performances.
        Join us for an unforgettable celebration of music and talent!"
        linkTo={''}
      />
      <EventDetails
        venue="+91 8886266647"
        date="23rd March 2024"
        time="40,000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/walk.jpg"
        title="Your Event Title"
        initialDescription="Step onto the runway and embrace the glamor at our Fashion walk. Models strut their stuff,
        showcasing the latest trends and styles with confidence and flair. Join us for a dazzling display
        of creativity and elegance that sets the stage on fire!"
        linkTo={''}
      />
      <EventDetails
        venue="+91 9606185754"
        date="22nd March 2024"
        time="15,000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/dance.jpg"
        title="Your Event Title"
        initialDescription="Experience electrifying rhythms and mesmerizing moves at comp_name with multiple
        sub-categories. Talented dancers across Universities showcase their skills, igniting the stage
        with passion and creativity. Don't miss this thrilling spectacle of talent and entertainment!"
        linkTo={''}
      />
      <EventDetails
        venue="+91 9606185754"
        date="23rd March 2024"
        time="80,000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/esport.jpg"
        title="Your Event Title"
        initialDescription="Dive into the world of virtual excitement at Esports Competition . Gamers compete head-to-head in
        thrilling battles, showcasing their skills and strategy in popular video games. Join us for a
        high-stakes showdown of digital prowess and adrenaline-fueled action!"
        linkTo={''}
      />
      <EventDetails
        venue="+91 9606185754"
        date="23rd March 2024"
        time="45,000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/case.jpg"
        title="Your Event Title"
        initialDescription="Engage your intellect in our Case Study competition. Teams analyze real-world scenarios,
        presenting innovative solutions and strategies to industry challenges. Witness the power of
        critical thinking and creativity as participants showcase their problem-solving prowess. Join us
        for an enlightening exploration of practical knowledge and ingenuity!"
        linkTo={''}
      />
      <EventDetails
        venue="+91 9606185754"
        date="22nd March 2024"
        time="10,000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
        imageSrc="/images/quiz.jpeg"
        title="Your Event Title"
        initialDescription="Sharpen your wits and join the excitement at our Quiz competition. Teams compete in a battle of
        knowledge across various topics, from history to pop culture. Test your intellect and quick
        thinking in this thrilling showdown of trivia mastery!"
        linkTo={''}
      />
      <EventDetails
        venue="+91 9606185754"
        date="22nd March 2024"
        time="10,000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      </div>
      </div>
      <Navbar />
      <Footer/>
      </div>
  );
};

export default YourPage;
