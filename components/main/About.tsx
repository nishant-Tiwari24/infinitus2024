import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.4 } },
  };

  return (
    <motion.div
      className="container items-center mx-auto my-10"
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      ref={ref}
    >
      <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text font-space text-transparent  m-10'>About Infinitus</h1>
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 gap-16"
        variants={fadeInVariants}
      >
        <motion.div
          className="mx-auto z-50 "
          variants={fadeInVariants}
        >
          <img
            src="/images/About Infinitus.JPG"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '450px', height: '550px' }}
            className="w-full h-auto mb-8 object-cover  rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          variants={fadeInVariants}
        >
          <h2 className="text-4xl flex-wrap lg:text-5xl flex justify-around font-space font-semibold mb-2 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
           <p> SRM University&apos;s </p><p className='Welcome-text font-space'>Annual Cultural Fest</p> <p>Unveiled!</p>
          </h2>
          <motion.p
          className="text-2xl lg:text-3xl font-space text-justify"
          variants={fadeInVariants} 
          >
          The 2023 edition of Infinitus marked a historical milestone in the legacy of cultural festivities, uniting an impressive assembly of 10,000 students from diverse backgrounds. The event witnessed an unprecedented level of enthusiasm, with over 5,000 participants actively engaging in various competitions and showcases, embodying the spirit of innovation and creativity. The digital footprint of Infinitus &apos;23 expanded beyond expectations, achieving a remarkable outreach of 15,000 through social media platforms, where engagement soared as attendees shared their exhilarating experiences. The official website became a hotspot for information and updates, attracting over 5,000 visitors, a testament to the fest&apos;s growing popularity and the anticipation it builds each year. This chapter in the Infinitus saga not only celebrated the cultures but also set a new benchmark for future editions.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
