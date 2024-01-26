import React from 'react';

const About = () => {
  return (
    <div className="container items-center mx-auto my-10">
      <h1 className="text-5xl lg:text-5xl font-bold mb-8 text-center">About Us</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
        <div className="mx-auto">
          <img
            src="/img (1).jpg"
            alt="About Us"
            style={{ width: '450px', height: '500px' }}
            className="w-full h-auto mb-8 object-cover rounded-3xl"
          />
        </div>
        <div className="lg:w-1/2 pr-20">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6 text-left lg:text-left ">
            Embark on the Extravaganza: SRM University&apos;s Annual Cultural Fest Unveiled!
          </h2>
          <p className="text-2xl lg:text-3xl text-justify">
            Welcome to the grand celebration of SRM University&apos;s annual cultural fest! Get
            ready for an extraordinary experience filled with vibrant performances, creative
            expressions, and unforgettable moments. We&apos;re thrilled to have you join us for
            this spectacular event.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem enim harum
            dolore ex, vel dolor odio maiores quisquam nobis consequuntur doloribus, accusantium
            hic? Doloremque dolor impedit, ipsum eum velit repellendus? Vitae laboriosam deserunt
            voluptatibus. Nulla, eaque adipisci harum omnis quia maiores ipsam quae reiciendis
            distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;