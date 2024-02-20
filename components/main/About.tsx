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
          <h2 className="text-4xl flex-wrap lg:text-5xl flex justify-around font-space font-semibold mb-2 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
           <p> SRM University&apos;s </p><p className='Welcome-text font-space'>Annual Cultural Fest</p> <p>Unveiled!</p>
          </h2>
          <motion.p
          className="text-2xl lg:text-3xl font-space text-justify"
          variants={fadeInVariants} 
          >
          The story of Infinitus is one of unity, creativity, and unforgettable moments, poised to be told by the echoes of its success. The student council of SRM University AP never seizes the opportunity to bring the best to the students. Their preparations and plans for this year&apos;s INFINITUS started long back and after making a lot of changes and hard work, they finally approached the Directorate of Student Affairs, and guess what IT GOT APPROVED!! Bringing to you guys, INFINITUS 2024 the four-day techno-cultural fest, where memories and made and stars are born!! Behind the scenes, a flurry of enthusiasm sets the stage for a diverse showcase of performances. From the soulful rhythms of music and dance to the dramatics of theater and the competitive edge of sports, Infinitus 2024 is a crucible for emerging talents. With open arms, the organizing committee reaches out far and wide, inviting participants from within and beyond the university, fueling dreams of a turnout that spans across the state. The name &quot;Infinitus&quot; for the techno-cultural fest holds profound significance, derived from the Latin word &quot;Infinitus&quot; meaning infinite, Symbolizing artistic exploration and cultural celebration which has no bounds. Choosing &quot;Infinitus&quot; as the fest&apos;s name conveys the belief that there is infinite talent within the student community providing an expansive platform where creativity flourishes without constraint. As the days inch closer, a wave of anticipation sweeps through SRM University AP, a gathering point for students from various universities, ready to exchange cultures, forge connections, and create memories that will last a lifetime.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
