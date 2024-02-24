import React from 'react'
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Proshows: React.FC = () => {
    const urlbackground = '/images/img-bacground.jpg';
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
      visible: { opacity: 1, transition: { duration: 1.6 } },
    };

  return (
    <main>
      <section className="section prowshows bg-cover bg-fixed -z-5" id="proshows" style={{backgroundImage:`url(${urlbackground})`}} aria-labelledby="proshows-label">
        <motion.div className="container" initial="hidden" animate={controls} variants={fadeInVariants} ref={ref}>
          <div className="proshows-list">
            <div className="wrapper">
            <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text font-space -mt-4 text-transparent '>Proshows</h1>

              <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="proshows-card" data-reveal>
                <figure className="card-banner img-holder3 has-before" style={{ width:"700", height:"605"}}>
                  <Image src="/images/akshar.jpg" width={700} height={605} loading="lazy" alt="Shoe Promo" className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Proshow 1
                    </a>
                  </h3>

                  <p className="card-tag">Date</p>
                </div>

                <a href="#" className="btn-icon" aria-label="See more">
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={20} viewBox="0 0 43 20" fill="none">
                    <path d="M0 10H41" stroke="black" strokeWidth={2} />
                    <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth={2} />
                  </svg>
                </a>
              </motion.div>

              <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="proshows-card" data-reveal>
                <figure className="card-banner has-before img-holder4" style={{  width:"700", height:"1091"}}>
                  <Image src="/images/dj-kim.jpg" width={700} height={1091} loading="lazy" alt="Wedding Shot" className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Proshow 2
                    </a>
                  </h3>

                  <p className="card-tag">Date</p>
                </div>

                <a href="#" className="btn-icon" aria-label="See more">
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={20} viewBox="0 0 43 20" fill="none">
                    <path d="M0 10H41" stroke="black" strokeWidth={2} />
                    <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth={2} />
                  </svg>
                </a>
              </motion.div>

              </div>

              <div className="wrapper">

              <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="proshows-card" data-reveal>
                <figure className="card-banner img-holder5 has-before" style={{ width:"700", height:"1000"}}>
                  <Image src="/images/lost.jpg" width={700} height={1000} loading="lazy" alt="Fashion Show" className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Proshow 3
                    </a>
                  </h3>

                  <p className="card-tag">Date</p>
                </div>

                <a href="#" className="btn-icon" aria-label="See more">
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={20} viewBox="0 0 43 20" fill="none">
                    <path d="M0 10H41" stroke="black" strokeWidth={2} />
                    <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth={2} />
                  </svg>
                </a>
              </motion.div>

              <motion.div initial="hidden" animate={controls} variants={fadeInVariants} ref={ref} className="proshows-card" data-reveal>
                <figure className="card-banner img-holder6 has-before" style={{  width:"700", height:"850" }}>
                  <Image src="/images/armanMalik01.jpg" width={700} height={850} loading="lazy" alt="Jumbo Barger" className="img-cover" />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Proshow 4
                    </a>
                  </h3>

                  <p className="card-tag">Date</p>
                </div>

                <a href="#" className="btn-icon" aria-label="See more">
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={20} viewBox="0 0 43 20" fill="none">
                    <path d="M0 10H41" stroke="black" strokeWidth={2} />
                    <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth={2} />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Proshows;
