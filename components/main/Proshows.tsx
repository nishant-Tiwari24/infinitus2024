import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Proshows: React.FC = () => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setImageLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  const urlbackground = '/images/img-backgroun.jpg';
  
  return (
    <main>
      <section
        className="section prowshows bg-cover bg-fixed z-0"
        id="proshows"
        style={{ backgroundImage: `url(${urlbackground})` }}
        aria-labelledby="proshows-label"
      >
        <div className="container">
          <div className="proshows-list">
            <div className="wrapper">
              <h2 className="h4 section-title" id="proshows-label" data-reveal>
                Prowshows
              </h2>

              {/* Proshow 1 */}
              <div className="proshows-card" data-reveal>
                <figure className="card-banner img-holder has-before" style={{ width: "700px", height: "605px" }}>
                  {imageLoading && <div className="image-loader">Loading...</div>}
                  <Image
                    src="/images/portfolio-1.jpg"
                    width={700}
                    height={605}
                    loading="lazy"
                    alt="Shoe Promo"
                    className={`img-cover ${imageLoading ? 'hidden' : ''}`}
                    onLoad={() => setImageLoading(false)}
                  />
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

              {/* Proshow 2 */}
              <div className="proshows-card" data-reveal>
                <figure className="card-banner img-holder has-before" style={{ width: "700px", height: "1091px" }}>
                  {imageLoading && <div className="image-loader">Loading...</div>}
                  <Image
                    src="/images/portfolio-2.jpg"
                    width={700}
                    height={1091}
                    loading="lazy"
                    alt="Wedding Shot"
                    className={`img-cover ${imageLoading ? 'hidden' : ''}`}
                    onLoad={() => setImageLoading(false)}
                  />
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

              {/* Proshow 3 */}
              <div className="proshows-card" data-reveal>
                <figure className="card-banner img-holder has-before" style={{ width: "700px", height: "1000px" }}>
                  {imageLoading && <div className="image-loader">Loading...</div>}
                  <Image
                    src="/images/portfolio-3.jpg"
                    width={700}
                    height={1000}
                    loading="lazy"
                    alt="Fashion Show"
                    className={`img-cover ${imageLoading ? 'hidden' : ''}`}
                    onLoad={() => setImageLoading(false)}
                  />
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

              {/* Proshow 4 */}
              <div className="proshows-card" data-reveal>
                <figure className="card-banner img-holder has-before" style={{ width: "700px", height: "850px" }}>
                  {imageLoading && <div className="image-loader">Loading...</div>}
                  <Image
                    src="/images/portfolio-4.jpg"
                    width={700}
                    height={850}
                    loading="lazy"
                    alt="Jumbo Barger"
                    className={`img-cover ${imageLoading ? 'hidden' : ''}`}
                    onLoad={() => setImageLoading(false)}
                  />
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
        </div>
      </section>
    </main>
  );
};

export default Proshows;
