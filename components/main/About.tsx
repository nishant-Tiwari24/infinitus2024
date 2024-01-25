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
        <h2 className="text-6xl lg:text-7xl font-semibold text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text mb-4 lg:mb-6 font-mono cursive">
          Embark on the Extravaganza:
          <br />
          SRM University&apos;s Annual Cultural Fest Unveiled!
        </h2>
        <p className="cursive text-3xl lg:text-5xl">
          Welcome to the grand celebration of SRM University&apos;s annual cultural fest! Get
          ready for an extraordinary experience filled with vibrant performances, creative
          expressions, and unforgettable moments. We&apos;re thrilled to have you join us for
          this spectacular event.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem enim harum dolore ex, vel dolor odio maiores quisquam nobis consequuntur doloribus, accusantium hic? Doloremque dolor impedit, ipsum eum velit repellendus? Vitae laboriosam deserunt voluptatibus. Nulla, eaque adipisci harum omnis quia maiores ipsam quae reiciendis distinctio.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;







             