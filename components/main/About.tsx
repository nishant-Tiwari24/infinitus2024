import React from 'react';

const About = () => {
  return (
    <div>
    <h1 className="section-subtitle container mb-10">About Us</h1>
    <div className="flex flex-col lg:flex-row items-center lg:gap-5 justify-center lg:justify-around p-8">
      <img
        src="/img (1).jpg"
        alt="About Us"
        style={{width:'612px', height:'812px'}}
        className="w-full lg:w-1/2 h-auto lg:h-full mb-8 object-cover lg:mb-0 lg:mr-8 rounded-3xl"
      />
      <div className="lg:w-1/2 flex flex-col gap-10 ">
        <h2 className="text-6xl lg:text-7xl font-light text-gray-400 mb-4 lg:mb-6 font-mono">
          Embark on the Extravaganza:
          <br />
          SRM University&apos;s Annual Cultural Fest Unveiled!
        </h2>
        <p className="text-white-700 text-5xl font-extralight lg:text-7xl">
          Welcome to the grand celebration of SRM University&apos;s annual cultural fest! Get
          ready for an extraordinary experience filled with vibrant performances, creative
          expressions, and unforgettable moments. We&apos;re thrilled to have you join us for
          this spectacular event.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;







             