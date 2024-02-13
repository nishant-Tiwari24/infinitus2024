import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  return (
    <section className="section relative gallery" id='gallery'>
      <div className="container z-[25]">
        <ul className="gallery-list">
          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/akshar2.jpg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="#" className="card-title">
                    Akshar Band
                  </Link>
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
                  src="/images/akshar.jpg"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt=""
                  className="img-cover items-center"
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
              <Link href="" className="btn-icon">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
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
                  <Link href="#" className="card-title">
                    Armaan Malik
                  </Link>
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
                  src="/images/arman.png"
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="#" className="card-title">
                    Armaan Malik
                  </Link>
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
                  src="/images/lost.jpg" 
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
              <Link href="#" className="btn-icon">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
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
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="#" className="card-title">
                    Lost Stories
                  </Link>
                </h3>
                <span className="card-tag">Music Producers & DJ</span>
              </div>

              <Link href="#" className="btn-icon top-28">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
          </li>

          <li className="gallery-item" data-reveal>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/dj-kim.jpg" 
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="#" className="card-title">
                    DJ Kim Thomas
                  </Link>
                </h3>
                <span className="card-tag">Dynamic DJ Maestro</span>
              </div>
              <a href="#" className="btn-icon">
                <img src="/images/arrow-forward.svg" height="20" loading="lazy" alt="arrow-forward icon" />
              </a>
            </div>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder1 has-before"
                style={{ width: '450', height: '625' }}
              >
                <Image
                  src="/images/dj-kim2.jpg" 
                  width={450}
                  height={625}
                  loading="lazy"
                  alt="The Drunken"
                  className="img-cover items-center"
                />
              </figure>
              <div className="card-content">
                <h3 className="h6">
                  <Link href="#" className="card-title">
                    DJ Kim Thomas
                  </Link>
                </h3>
                <span className="card-tag">Dynamic DJ Maestro</span>
              </div>

              <Link href="#" className="btn-icon top-28">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
      
    </section>
  );
};

export default Gallery;
