import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container items-center mx-auto max-h-screen my-10">
      <h1 className=' text-center text-6xl font-semibold font-space Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20'>About Our University</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
        <div className="mx-auto z-50">
          <Image
            src="/images/arman.png"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className="w-full h-auto mb-8 object-cover rounded-3xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
            SRM University of Andhra Pradesh
          </h2>
          <p className="text-2xl lg:text-3xl font-space text-justify">
          Infinitus&apos; 24, SRM University, Andhra Pradesh&apos;s highly anticipated techno cultural fest, is set to unfold, promising a thrilling four-day extravaganza. Organized entirely by the Student Council and Directorate of Student Affairs, this edition aims to surpass the success of its predecessor, offering a dynamic platform for emerging talents to shine.
            <br />
            Enthusiastic preparations are underway to ensure a diverse and engaging showcase of performances, ranging from music and dance to theater and sports. The organizing committee is reaching out to participants within and beyond the university, with expectations of a significant turnout from across the state. Infinitus 2024 is poised to become a hub of cultural exchange, aiming to welcome footfalls from other universities as well.
            <br />
            The anticipation surrounding Infinitus 2024 is palpable, as the campus gears up for a cultural spectacle that promises not only unforgettable performances but also the creation of lasting memories and connections.
            <br />
            The name &quot;Infinitus&quot; for the techno cultural fest holds profound significance, reflecting the limitless and boundless spirit of creativity and expression. Derived from the Latin word &quot;infinitus,&quot; meaning infinite, the name embodies the idea that the potential for artistic exploration and cultural celebration knows no bounds. Choosing &quot;Infinitus&quot; as the name for the cultural fest conveys the belief that there is an infinite well of talent and diversity within the student community. It symbolizes a commitment to providing an expansive platform where creativity can flourish without constraints.
          </p>
        </div>
      </div>
      <hr />
      <h1 className=' text-center text-6xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space py-20'>About Infinitus</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
      <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
            SRM University&apos;s Annual Cultural Fest Unveiled!
          </h2>
          <p className="text-2xl lg:text-3xl font-space text-justify">
          Infinitus&apos; 24, SRM University, Andhra Pradesh&apos;s highly anticipated techno cultural fest, is set to unfold, promising a thrilling four-day extravaganza. Organized entirely by the Student Council and Directorate of Student Affairs, this edition aims to surpass the success of its predecessor, offering a dynamic platform for emerging talents to shine.
            <br />
            Enthusiastic preparations are underway to ensure a diverse and engaging showcase of performances, ranging from music and dance to theater and sports. The organizing committee is reaching out to participants within and beyond the university, with expectations of a significant turnout from across the state. Infinitus 2024 is poised to become a hub of cultural exchange, aiming to welcome footfalls from other universities as well.
            <br />
            The anticipation surrounding Infinitus 2024 is palpable, as the campus gears up for a cultural spectacle that promises not only unforgettable performances but also the creation of lasting memories and connections.
            <br />
            The name &quot;Infinitus&quot; for the techno cultural fest holds profound significance, reflecting the limitless and boundless spirit of creativity and expression. Derived from the Latin word &quot;infinitus,&quot; meaning infinite, the name embodies the idea that the potential for artistic exploration and cultural celebration knows no bounds. Choosing &quot;Infinitus&quot; as the name for the cultural fest conveys the belief that there is an infinite well of talent and diversity within the student community. It symbolizes a commitment to providing an expansive platform where creativity can flourish without constraints.
          </p>
        </div>
        <div className="mx-auto z-50">
          <Image
            src="/images/img (1).jpg"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className="w-full h-auto mb-8 object-cover rounded-3xl"
          />
        </div>
      </div>
      <hr />
      <h1 className=' text-center text-6xl font-semibold font-space Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20'>Note from our Director</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
        <div className="mx-auto z-50">
          <Image
            src="/images/arman.png"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className="w-full h-auto mb-8 object-cover rounded-3xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
            Directorate of Student Affairs
          </h2>
          <p className="text-2xl lg:text-3xl font-space text-justify">
          From the director&apos;s desk of student affairs, I extend a warm welcome to all participants of Infinitus 2024. This unique amalgamation of technical and cultural events reflects the diverse talents and interests within our student community. As we embark on this journey of innovation and celebration, I encourage each participant to embrace the spirit of collaboration, learning, and creativity.
          <br />
          Infinitus is not just a festival; it&apos;s a platform to foster connections, exchange ideas, and showcase the brilliance that resides within each participant. Our commitment to providing a holistic learning experience is reflected in the carefully curated guest lectures and workshops that aim to inspire and broaden your perspectives.
          <br />
          I applaud the organizers for their dedication in shaping this event, and I am confident that Infinitus 2024 will not only be a testament to the academic prowess of our students but also a celebration of the vibrant cultural tapestry that enriches our campus.
          <br />
          Wishing you all an enriching and memorable experience at Infinitus 2024!
          </p>
        </div>
        </div>
    </div>
  );
};

export default AboutPage;
