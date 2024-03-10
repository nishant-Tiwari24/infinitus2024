
import React from 'react';
import Card from '../sub/CompetitionCard';
import EventDetails from '../sub/EventDetails';
import FlareCursor from './Cursor';
import Navbar from '@/components/main/Navbar';
import Footer from './Footer';


interface Types {
  types:string
}


const NonTechnical: React.FC<Types> = ({types}) => {

  const handleRegisterClick = () => {
  };
  return (
    <div className='max-h-screen'>
    <FlareCursor />
    <h1 className='pt-28 text-center text-7xl sm:text-5xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space m-10'>
      {types}
    </h1>
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      <div>
      < Card
              imageSrc="/images/ideath.jpeg"
              title="Your Event Title"
              initialDescription="Got a groundbreaking business idea? Ready to pitch to industry experts? Join us and showcase your entrepreneurial spirit. Win funding, mentorship, and turn your vision into reality. Don't miss this chance to make waves in the business world!" linkTo={''}      />
      <EventDetails
        venue="+91 7702068993"
        date="21nd March 2024"
        time="4500 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/teds.jpeg"
              title="Your Event Title"
              initialDescription="Calling all passionate speakers! Embrace the spotlight and share your ideas in our TED-style talk competition. Inspire, educate, and captivate the audience with your unique perspective. Dare to make a difference with your words! Are you ready to ignite conversations and leave a lasting impact? Join the TED-style talk competition now! " linkTo={''}      />
      <EventDetails
        venue="+91 7567777371"
        date="21st March 2024"
        time="3000 /-"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/escroom.jpeg"
              title="Dance Competition"
              initialDescription="Unlock the thrill of mystery and challenge your wits! Join our Escape Room Competition for an immersive and brain-teasing adventure. Gather your team, solve puzzles, and race against the clock to escape the room. Think you have what it takes to outsmart the challenges? Embark on the ultimate escape – sign up now for an unforgettable competition!" linkTo={''}      />
      <EventDetails
        venue="+91 7671099011"
        date="21st March 2024"
        time="Trophy"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/laser ops (1).png"
              title="Your Event Title"
              initialDescription="Gear up for an adrenaline-packed challenge! Join our Laser Ops competition and experience the thrill of high-tech, futuristic battles. Navigate through laser-filled arenas, strategize with your team, and outsmart opponents in an epic showdown. Are you ready to immerse yourself in the world of laser warfare? Enlist now for the Laser Ops competition!" linkTo={''}      />
      <EventDetails
        venue="+91 9347577670"
        date="22nd March 2024"
        time="Trophy"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/graf.jpeg"
              title="Your Event Title"
              initialDescription="Calling all urban artists! Dive into the vibrant world of expression – join our Graffiti Competition and transform blank walls into dynamic masterpieces. Unleash your creativity, showcase your unique style, and let the colors tell your story. Ready to leave your mark? Grab your spray cans and participate in the ultimate Graffiti Competition! " linkTo={''}      />
      <EventDetails
        venue="+91 6300357731"
        date="22nd March 2024"
        time="Trophy"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/mouses.jpeg"
              title="Your Event Title"
              initialDescription="Mouses vs. Mouse Busters! This epic water gun battle will see pint-sized mischief-makers clash against the relentless forces of order, all in a hilarious and refreshing spray-fest." linkTo={''}      />
      <EventDetails
        venue="+91 9537530501"
        date="22nd March 2024"
        time="Trophy"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/comic.jpeg"
              title="Dance Competition"
              initialDescription="Unleash your inner storyteller! Join our Comic Making competition and turn your creativity into a visual masterpiece. Illustrate captivating stories, bring characters to life, and showcase your unique artistic flair. Whether you're a seasoned artist or just starting, this is your chance to shine in the world of comics! Ready to create a comic that wows the crowd? Participate now and let your imagination run wild! " linkTo={''}      />
      <EventDetails
        venue="+91 9265025088"
        date="22nd March 2024"
        time="Trophy"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/cooking.jpeg"
              title="Your Event Title"
              initialDescription="Unleash your culinary creativity without the heat! Join our Cooking Without Fire competition and showcase your skills in creating delicious dishes without any flames. From refreshing salads to innovative no-cook desserts, let your imagination run wild." linkTo={''}      />
      <EventDetails
        venue="+91 9023230922"
        date="22nd March 2024"
        time="Trophy"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      <div>
      < Card
              imageSrc="/images/twister.jpeg"
              title="Your Event Title"
              initialDescription="Ready to twist and turn in a playful challenge? Join our Twister competition for a fun-filled, colorful experience! Test your flexibility, balance, and agility as you navigate the vibrant mat. Gather your friends, flex those limbs, and let the laughter roll! Who's up for a twisty, turny good time? Join the Twister competition now!" linkTo={''}      />
      <EventDetails
        venue="+91 6300357731"
        date="22nd March 2024"
        time="Trophy"
        onRegisterClick={handleRegisterClick}
      />
      </div>
      </div>
      </div>

      <h1 className='pt-28 text-center text-7xl sm:text-5xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space m-10'>
      Workshops
    </h1>
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-center'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1'>
      <div>
      < Card
              imageSrc="/images/atleir.jpeg"
              title="Your Event Title"
              initialDescription="Unlock your creativity at our Atelier Art Workshop! Join us for an immersive artistic experience where participants explore various techniques, express individual styles, and bring their visions to life. No prior art experience required – our expert instructors will guide you through the process, fostering a supportive and inspiring atmosphere. Discover the joy of self-expression and take home a unique masterpiece. Reserve your spot now for a transformative art journey!" linkTo={''}      />
      </div>
      </div>
    </div>
      <Navbar />
      <Footer />
      </div>
  );
};

export default NonTechnical;
