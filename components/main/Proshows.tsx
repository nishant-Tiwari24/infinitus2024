import React from 'react'
import Image from 'next/image';
import { url } from 'inspector';


const Proshows: React.FC = () => {
    const urlbackground = '/images/img-background.jpg';

  return (
    <main>
      <section className="section prowshows bg-cover bg-fixed -z-5" id="proshows" style={{backgroundImage:`url(${urlbackground})`}} aria-labelledby="proshows-label">
        <div className="container">
          <div className="proshows-list">
            <div className="wrapper">
              <h2 className="h5 section-title container" id="proshows-label" data-reveal>
                PROSHOWS
              </h2>

              <div className="proshows-card" data-reveal>
                <figure className="card-banner img-holder3 has-before" style={{ width:"700", height:"605"}}>
                  <Image src="/images/portfolio-1.jpg" width={700} height={605} loading="lazy" alt="Shoe Promo" className="img-cover" />
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
              </div>

              <div className="proshows-card" data-reveal>
                <figure className="card-banner has-before img-holder4" style={{  width:"700", height:"1091"}}>
                  <Image src="/images/portfolio-2.jpg" width={700} height={1091} loading="lazy" alt="Wedding Shot" className="img-cover" />
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
              </div>

              </div>

              <div className="wrapper">

              <div className="proshows-card" data-reveal>
                <figure className="card-banner img-holder5 has-before" style={{ width:"700", height:"1000"}}>
                  <Image src="/images/portfolio-3.jpg" width={700} height={1000} loading="lazy" alt="Fashion Show" className="img-cover" />
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
              </div>

              <div className="proshows-card" data-reveal>
                <figure className="card-banner img-holder6 has-before" style={{  width:"700", height:"850" }}>
                  <Image src="/images/portfolio-4.jpg" width={700} height={850} loading="lazy" alt="Jumbo Barger" className="img-cover" />
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
              </div>

            </div>
          </div>
{/* 
          <Image src="/images/portfolio-shape.svg" width={286} height={232} loading="lazy" alt="" className="shape" /> */}

        </div>
      </section>
    </main>
  );
};

export default Proshows;