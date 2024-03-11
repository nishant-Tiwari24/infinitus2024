import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="container items-center mx-auto max-h-screen my-10">
      <h1 className=' text-center text-6xl font-semibold font-space Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20'>About Our University</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
        <div className="mx-auto z-50">
          <img
            src="/images/college.jpeg"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className=" mb-8 w-[300px] h-[300px] object-cover rounded-l"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
            SRM University of Andhra Pradesh
          </h2>
          <p className="text-2xl lg:text-3xl font-space text-justify">
          SRM University, Andhra Pradesh, located near Neerukonda village, was established in 2017 and offers a variety of undergraduate, postgraduate, and Ph.D. programs in engineering, liberal arts, and sciences across three schools, the School of Engineering &amp; Applied Sciences, launched in 2017, and the School of Liberal Arts &amp; Basic Sciences, initiated in 2018, and Paari School of Business launched in 2020. The campus, designed by notable architects, hosts over 3000 students and faculty in its hostels. Under the leadership of President P. Sathyanarayanan and Vice-Chancellor Manoj K. Arora, the university has quickly risen to prominence, securing the position as the 3rd best private university in the Nature Index Ranking.
        <br />
        </p>
        </div>
      </div>
      <hr />
      <h1 className=' text-center text-6xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space py-20'>About Infinitus</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
      <div className="lg:w-1/2">
      <h2 className="text-4xl flex-wrap lg:text-5xl flex justify-around font-space font-semibold mb-2 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
           <p> SRM University&apos;s </p><p className='Welcome-text font-space'>Annual Cultural Fest</p> <p>Unveiled!</p>
          </h2>
          <p
          className="text-2xl lg:text-3xl font-space text-justify" 
          >
          The 2023 edition of Infinitus marked a historical milestone in the legacy of cultural festivities, uniting an impressive assembly of 10,000 students from diverse backgrounds. The event witnessed an unprecedented level of enthusiasm, with over 5,000 participants actively engaging in various competitions and showcases, embodying the spirit of innovation and creativity. The digital footprint of Infinitus &apos;23 expanded beyond expectations, achieving a remarkable outreach of 15,000 through social media platforms, where engagement soared as attendees shared their exhilarating experiences. The official website became a hotspot for information and updates, attracting over 5,000 visitors, a testament to the fest&apos;s growing popularity and the anticipation it builds each year. This chapter in the Infinitus saga not only celebrated the cultures but also set a new benchmark for future editions.
          </p>
        </div>
        <div className="mx-auto z-50">
          <img
            src="/images/img (1).jpg"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className=" w-[400px] h-[400px] mb-8 object-cover rounded-l"
          />
        </div>
      </div>
      <hr />
      <h1 className=' text-center text-6xl font-semibold font-space Welcome-text bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] py-20'>Director of Student Affairs</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
        <div className="mx-auto z-50">
          <img
            src="/images/IMG_9404 (1).jpg"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className="w-[400px] h-[400px] mb-8 object-cover rounded-l"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
            A note from the Directorate of Student Affairs
          </h2>
          <p className="text-2xl lg:text-3xl font-space font-thin text-justify">
          From the director&apos;s desk of student affairs, I extend a warm welcome to all participants of Infinitus 2024.
          This unique amalgamation of technical and cultural events reflects the diverse talents and interests within our student community.
          As we embark on this journey of innovation and celebration, I encourage each participant to embrace the spirit of collaboration, learning, and creativity.
          The carefully curated guest lectures and workshops have been thoughtfully designed to provide a holistic learning experience, aimed at inspiring and broadening the perspectives of our esteemed participants.
          I extend my sincere appreciation to the organizers of &quot;Infinitus&quot; for their exceptional dedication and meticulous planning in orchestrating this year&apos;s event.
          Also ensuring that students&apos; learning journey is not just educational but downright unforgettable.
          </p>
        </div>
        </div>
        <hr />
        <h1 className=' text-center text-6xl font-semibold font-space Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20'>Associate Director of Student Affairs</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
      <div className="lg:w-1/2">
      <h2 className="text-4xl lg:text-5xl font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">A note from the Associate Directorate of Student Affairs</h2>
      <p className="text-2xl lg:text-3xl font-space text-justify">
      Greetings from the Associate Director of Student Affairs! I am thrilled to welcome all participants to Infinitus 2024, a fusion of technical and cultural brilliance showcasing the diverse talents within our student community. As we embark on this innovative journey, I encourage each participant to embrace collaboration, learning, and creativity. Our carefully crafted guest lectures and workshops aim to provide a holistic and inspiring learning experience. Kudos to the dedicated organizers for their meticulous planning, ensuring this year&apos;s event is not just educational but truly unforgettable.
    </p>
        </div>
        <div className="mx-auto z-50">
          <img
            src="/images/revathi.jpeg"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className="mb-8 w-[400px] h-[400px] object-cover rounded-l"
          />
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default AboutPage;
