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
          className="mx-auto"
          variants={fadeInVariants}
        >
          <Image
            src="/images/About Infinitus.JPG"
            alt="About Us"
            width={450}
            height={500}
            style={{ width: '550px', height: '600px' }}
            className="w-full h-auto mb-8 object-cover z-50 rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          variants={fadeInVariants}
        >
          <h2 className="text-4xl lg:text-5xl font-space font-semibold mb-4 lg:mb-6 text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]">
            Embark on the Extravaganza: SRM University&apos;s Annual Cultural Fest Unveiled!
          </h2>
          <motion.p
            className="text-3xl lg:text-4xl font-space text-justify"
            variants={fadeInVariants} 
          >
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
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
