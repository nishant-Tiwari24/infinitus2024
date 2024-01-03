import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MyServicesProps {}

const MyServices: React.FC<MyServicesProps> = () => {
  const backgroundImageUrl = '/images/img-background.png';

  return (
    <section className="section service bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImageUrl})` }} id="service" aria-labelledby="service-lable">
      <p className="section-subtitle container" id="service-lable">Past Performers</p>

      <div className="slider">
          <div className="slider-track">
            <div className="slide">
            <Image src="/images/service-1.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-2.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-3.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-4.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-1.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-2.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-3.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-4.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-1.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-2.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-3.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-4.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-1.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-2.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-3.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
            <div className="slide">
            <Image src="/images/service-4.jpg" width={340} height={380} loading="lazy" alt="Wedding Photography" className="img" />
            </div>
          </div>
      </div>
    </section>
  );
};

export default MyServices;
