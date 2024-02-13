import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MyServices: React.FC = () => {
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
    <section className="section servic items-centere bg-fixed bg-center bg-cover"  id="service" aria-labelledby="service-lable">
      <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text font-space text-transparent  m-10'>National level Competitions</h1>
        <div className="slider">
          <Link href={'/events'}>
          <motion.div  initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="slider-track">
            <div className="slide">
            <Image src="/images/walk.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/2.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/3.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/walk.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/caze.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/1.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/2.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/walk.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/4.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/caze.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/1.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/2.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/3.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/4.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/caze.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/walk.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/2.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/caze.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/4.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/1.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/walk.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/2.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/3.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/4.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/caze.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/walk.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/1.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
          </motion.div>
          </Link>
      </div>
      <div className="slider">
          <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="slider-track1">
            <div className="slide">
            <Image src="/images/adverse.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/ardriuno.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/blankcode.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/blockcahin.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/bugathon.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/circuit.jpeg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/codechase.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/electronic.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/iot.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/skyquest.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/adverse.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/ardriuno.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/blankcode.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/blockcahin.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/bugathon.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/circuit.jpeg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/codechase.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/electronic.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/iot.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img object-cover" />
            </div>
            <div className="slide">
            <Image src="/images/skyquest.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default MyServices;
