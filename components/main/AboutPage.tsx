import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/public/utils/motion';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="container items-center mx-auto max-h-screen my-10">
      <h1 className=' text-center text-6xl font-semibold font-space Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20'>About Our University</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
        <div className="mx-auto z-50">
          <Image
            src="/images/college.jpeg"
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
            SRM University, Andhra Pradesh, commonly known as SRM University, Amaravati, is a private institution situated near Neerukonda village in Guntur district, Andhra Pradesh, India. Established in 2017 under the Andhra Pradesh Private Universities (Establishment and Regulation) Act, 2016, it offers a diverse range of undergraduate, postgraduate, and Ph.D. programs in engineering, liberal arts, and basic sciences. The university comprises two schools: the School of Engineering &amp; Applied Sciences, launched in 2017, and the School of Liberal Arts &amp; Basic Sciences, initiated in 2018. Additionally, the Paari School of Business, formerly known as the School of Entrepreneurship and Management Studies, was established in 2020, offering various business programs.
            <br />
            Led by President P. Sathyanarayanan, SRM University, Amaravati, has witnessed changes in its leadership, with Vajja Sambasiva Rao taking over as vice-chancellor in 2020, succeeded by Manoj K. Arora in 2022. The campus, designed by Perkins and Will, along with PTK Architects, features hostel facilities accommodating over 3000 students and faculty in five apartments. Notably, SRM University-AP achieved recognition by ranking as the 3rd best private university in the Nature Index Ranking.
          </p>

        </div>
      </div>
      <hr />
      <h1 className=' text-center text-6xl font-semibold Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text font-space py-20'>About Infinitus</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16">
      <div className="lg:w-1/2">
      <h2 className="text-4xl lg:text-5xl flex justify-around font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
           <p> SRM University&apos;s </p><p className='Welcome-text font-space'>Annual Cultural Fest</p> <p>Unveiled!</p>
          </h2>
          <p
          className="text-2xl lg:text-3xl font-space text-justify" 
          >
          The story of Infinitus is one of unity, creativity, and unforgettable moments, poised to be told by the echoes of its success. The student council of SRM University AP never seizes the opportunity to bring the best to the students. Their preparations and plans for this year&apos;s INFINITUS started long back and after making a lot of changes and hard work, they finally approached the Directorate of Student Affairs, and guess what IT GOT APPROVED!! Bringing to you guys, INFINITUS 2024 the four-day techno-cultural fest, where memories and made and stars are born!! Behind the scenes, a flurry of enthusiasm sets the stage for a diverse showcase of performances. From the soulful rhythms of music and dance to the dramatics of theater and the competitive edge of sports, Infinitus 2024 is a crucible for emerging talents. With open arms, the organizing committee reaches out far and wide, inviting participants from within and beyond the university, fueling dreams of a turnout that spans across the state. The name &quot;Infinitus&quot; for the techno-cultural fest holds profound significance, derived from the Latin word &quot;Infinitus&quot; meaning infinite, Symbolizing artistic exploration and cultural celebration which has no bounds. Choosing &quot;Infinitus&quot; as the fest&apos;s name conveys the belief that there is infinite talent within the student community providing an expansive platform where creativity flourishes without constraint. As the days inch closer, a wave of anticipation sweeps through SRM University AP, a gathering point for students from various universities, ready to exchange cultures, forge connections, and create memories that will last a lifetime.
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
      <h1 className=' text-center text-6xl font-semibold font-space Welcome-text text-transparent bg-gradient-to-r from-fuchsia-200 to-cyan-200 bg-clip-text py-20'>Director of Student Affairs</h1>
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
            A note from the Directorate of Student Affairs
          </h2>
          <p className="text-2xl lg:text-3xl font-space font-thin text-justify">
          From the director&apos;s desk of student affairs, I extend a warm welcome to all participants of Infinitus 2024. This unique amalgamation of technical and cultural events reflects the diverse talents and interests within our student community. As we embark on this journey of innovation and celebration, I encourage each participant to embrace the spirit of collaboration, learning, and creativity.
          <br />
          Infinitus is not just a festival; it&apos;s a platform to foster connections, exchange ideas, and showcase the brilliance that resides within each participant. Our commitment to providing a holistic learning experience is reflected in the carefully curated guest lectures and workshops that aim to inspire and broaden your perspectives.
          <br />
          I applaud the organizers for their dedication in shaping this event, and I am confident that Infinitus 2024 will not only be a testament to the academic prowess of our students but also a celebration of the vibrant cultural tapestry that enriches our campus.
          Wishing you all an enriching and memorable experience at Infinitus 2024 !!
          </p>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default AboutPage;
