import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Sponsor = () => {

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
    <section>
        <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text font-space text-transparent  m-10'>Our Sponsors</h1>
        <div className="slider">
          <motion.div  initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="slider-track">
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/red-bull.png" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
          </motion.div>
      </div>
    </section>
  )
}

export default Sponsor