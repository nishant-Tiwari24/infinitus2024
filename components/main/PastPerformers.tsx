import Image from 'next/image';
import Link from 'next/link';

const MyServices: React.FC = () => {
  const backgroundImageUrl = '/images/img-background.png';
  return (
    <section className="section service bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImageUrl})` }} id="service" aria-labelledby="service-lable">
      <p className="section-subtitle container" id="service-lable">Past Performers</p>

      <ul className="service-list">
        <li data-reveal>
          <div className="service-card container">
            <img src="/images/service-1.jpg" style={{width:"340px", height:"380px"}} loading="lazy" alt="Wedding Photography" className="img" />

            <div>
              <h3 className="h5 text-white card-title">Armaan Malik</h3>
              <p className="card-subtitle">Aut temporibus qui vero.</p>
            </div>

            <Link href="#" passHref>
              <div className="btn-icon" aria-label="See more">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                  <path d="M0 10H41" stroke="white" strokeWidth="2" />
                  <path d="M33 1L41.9 10.2727L33 19" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Link>
          </div>
        </li>

        <li data-reveal>
          <div className="service-card container">
            <img src="/images/service-2.jpg" style={{width:"340px", height:"380px"}} loading="lazy" alt="Event Organiser" className="img" />

            <div>
              <h3 className="h5 text-white card-title">Lost Stories</h3>
              <p className="card-subtitle">Nobis, magni modi ipsa culpa.</p>
            </div>

            <Link href="#" passHref>
              <div className="btn-icon" aria-label="See more">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                  <path d="M0 10H41" stroke="white" strokeWidth="2" />
                  <path d="M33 1L41.9 10.2727L33 19" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Link>
          </div>
        </li>

        <li data-reveal>
          <div className="service-card container">
            <img src="/images/service-3.jpg" style={{width:"340px", height:"380px"}} loading="lazy" alt="Product Marketing" className="img" />

            <div>
              <h3 className="h5 text-white card-title">Aakshar</h3>
              <p className="card-subtitle">Tenetur porro repellendus!</p>
            </div>

            <Link href="#" passHref>
              <div className="btn-icon" aria-label="See more">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                  <path d="M0 10H41" stroke="white" strokeWidth="2" />
                  <path d="M33 1L41.9 10.2727L33 19" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Link>
          </div>
        </li>

        <li data-reveal>
          <div className="service-card container">
            <img src="/images/service-4.jpg" style={{width:"340px", height:"380px"}} loading="lazy" alt="Videography" className="img" />

            <div>
              <h3 className="h5 text-white card-title">Project 91</h3>
              <p className="card-subtitle h7">Amet consectetur adipisicing elit</p>
            </div>

            <Link href="#" passHref>
              <div className="btn-icon" aria-label="See more">
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                  <path d="M0 10H41" stroke="white" strokeWidth="2" />
                  <path d="M33 1L41.9 10.2727L33 19" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MyServices;
