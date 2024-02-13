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
      className="container items-center z-50 mx-auto my-10"
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
          <Image
            src="/images/About Infinitus.JPG"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className="w-full h-auto mb-8 object-cover  rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          variants={fadeInVariants}
        >
          <h2 className="text-4xl lg:text-5xl font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
          SRM University's Annual Cultural Fest Unveiled!
          </h2>
          <motion.p
            className="text-2xl lg:text-3xl font-space text-justify"
            variants={fadeInVariants} 
          >
            Infinitus' 24, SRM University, Andhra Pradesh's highly anticipated techno cultural fest, is set to unfold, promising a thrilling four-day extravaganza. Organized entirely by the Student Council and Directorate of Student Affairs, this edition aims to surpass the success of its predecessor, offering a dynamic platform for emerging talents to shine.
            <br />
            Enthusiastic preparations are underway to ensure a diverse and engaging showcase of performances, ranging from music and dance to theater and sports. The organizing committee is reaching out to participants within and beyond the university, with expectations of a significant turnout from across the state. Infinitus 2024 is poised to become a hub of cultural exchange, aiming to welcome footfalls from other universities as well.
            <br />
            The anticipation surrounding Infinitus 2024 is palpable, as the campus gears up for a cultural spectacle that promises not only unforgettable performances but also the creation of lasting memories and connections.
            <br />
            The name "Infinitus" for the techno cultural fest holds profound significance, reflecting the limitless and boundless spirit of creativity and expression. Derived from the Latin word "infinitus," meaning infinite, the name embodies the idea that the potential for artistic exploration and cultural celebration knows no bounds. Choosing "Infinitus" as the name for the cultural fest conveys the belief that there is an infinite well of talent and diversity within the student community. It symbolizes a commitment to providing an expansive platform where creativity can flourish without constraints.

          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
