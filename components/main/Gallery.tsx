import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="section relative gallery" id='gallery'>
      <div className="container">
        <ul className="gallery-list">
          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/img (11).jpg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Akshar Band
                  </a>
                </h3>

                <span className="card-tag">Telugu & Hindi Rock Band</span>
              </div>
              <a href="#" className="btn-icon">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
          
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/maffick-shows.jpg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="Lettuce Entertain"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Akshar Band
                  </a>
                </h3>
                <span className="card-tag">Telugu & Hindi Rock Band</span>
              </div>
              <a href="#" className="btn-icon">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
          </li>

          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/armanMalik01.jpg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Armaan Malik
                  </a>
                </h3>
                <span className="card-tag">Actor, Singer & Songwriter</span>
              </div>
              <a href="#" className="btn-icon">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/armanMalik02.jpg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Armaan Malik
                  </a>
                </h3>
                <span className="card-tag">Actor, Singer & Songwriter</span>
              </div>

              <a href="#" className="btn-icon top-28">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
          </li>

          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/lostStories1.jpg" 
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Lost Stories
                  </a>
                </h3>
                <span className="card-tag">Music Producers & DJ</span>
              </div>
              <a href="#" className="btn-icon">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/lostStories02.jpg" 
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    Lost Stories
                  </a>
                </h3>
                <span className="card-tag">Music Producers & DJ</span>
              </div>

              <a href="#" className="btn-icon top-28">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
          </li>

          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/img (3).jpg" 
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    DJ Kim Thomas
                  </a>
                </h3>
                <span className="card-tag">Dynamic DJ Maestro</span>
              </div>
              <a href="#" className="btn-icon">
                <img src="/images/arrow-forward.svgDynamic DJ Maestro" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/img (6).jpg" 
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <a href="#" className="card-title">
                    DJ Kim Thomas
                  </a>
                </h3>
                <span className="card-tag">Dynamic DJ Maestro</span>
              </div>

              <a href="#" className="btn-icon top-28">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
          </li>
        </ul>

        
        <img src="/images/gallery-shape.svg" width="220" height="78" loading="lazy" alt="" className="shape" />
      </div>
      
    </section>
  );
};

export default Gallery;
