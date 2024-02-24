import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  return (
    <section className="section relative gallery" id='gallery'>
      <div className="container z-[25]">
      <h1 className='text-center text-5xl sm:text-7xl font-semibold Welcome-text font-space text-transparent  m-10'>Past Performers</h1>
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
                  <Link href="https://www.instagram.com/aksharband?igsh=MXRtNTlvcGJzZGx5ZA==" className="card-title font-space font-semibold text-purple-200">
                    Akshar Band
                  </Link>
                </h3>
                
                <span className="card-tag italic">Telugu & Hindi Rock Band</span>
              </div>
              <Link href="https://www.instagram.com/aksharband?igsh=MXRtNTlvcGJzZGx5ZA==" className="btn-icon">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
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
                  <Link href="https://www.instagram.com/aksharband?igsh=MXRtNTlvcGJzZGx5ZA==" className="card-title font-space font-semibold text-purple-200">
                    Akshar Band
                  </Link>
                </h3>
                <span className="card-tag italic">Telugu & Hindi Rock Band</span>
              </div>
              <Link href="https://www.instagram.com/aksharband?igsh=MXRtNTlvcGJzZGx5ZA==" className="btn-icon">
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
                  <Link href="#" className="card-title font-space font-semibold text-purple-200">
                    Armaan Malik
                  </Link>
                </h3>
                <span className="card-tag italic">Actor, Singer & Songwriter</span>
              </div>
              <Link href="https://www.instagram.com/armaanmalik?igsh=MWdjMG9waW14bXN0dg==" className="btn-icon">
                <img src="/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
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
                  <Link href="https://www.instagram.com/armaanmalik?igsh=MWdjMG9waW14bXN0dg==" className="card-title font-space font-semibold text-purple-200">
                    Armaan Malik
                  </Link>
                </h3>
                <span className="card-tag italic">Actor, Singer & Songwriter</span>
              </div>

              <Link href="https://www.instagram.com/armaanmalik?igsh=MWdjMG9waW14bXN0dg==" className="btn-icon top-28">
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
                  <Link href="https://www.instagram.com/loststories?igsh=d3ZxNjk3YmtrdGth" className="card-title font-space font-semibold text-purple-200">
                    Lost Stories
                  </Link>
                </h3>
                <span className="card-tag italic">Music Producers & DJ</span>
              </div>
              <Link href="https://www.instagram.com/loststories?igsh=d3ZxNjk3YmtrdGth" className="btn-icon">
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
                  <Link href="https://www.instagram.com/loststories?igsh=d3ZxNjk3YmtrdGth" className="card-title font-space font-semibold text-purple-200">
                    Lost Stories
                  </Link>
                </h3>
                <span className="card-tag italic">Music Producers & DJ</span>
              </div>

              <Link href="https://www.instagram.com/loststories?igsh=d3ZxNjk3YmtrdGth" className="btn-icon top-28">
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
                  <Link href="https://www.instagram.com/djkimthomas?igsh=MXN4NGUwam1qdnU2NQ==" className="card-title font-space font-semibold text-purple-200">
                    DJ Kim Thomas
                  </Link>
                </h3>
                <span className="card-tag">Dynamic DJ Maestro</span>
              </div>
              <Link href="https://www.instagram.com/djkimthomas?igsh=MXN4NGUwam1qdnU2NQ==" className="btn-icon">
                <img src="/images/arrow-forward.svg" height="20" loading="lazy" alt="arrow-forward icon" />
              </Link>
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
                  <Link href="https://www.instagram.com/djkimthomas?igsh=MXN4NGUwam1qdnU2NQ==" className="card-title font-space font-semibold text-purple-200">
                    DJ Kim Thomas
                  </Link>
                </h3>
                <span className="card-tag italic">Dynamic DJ Maestro</span>
              </div>

              <Link href="https://www.instagram.com/djkimthomas?igsh=MXN4NGUwam1qdnU2NQ==" className="btn-icon top-28">
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
