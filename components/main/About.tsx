import React from 'react';
import Image from 'next/image'; // Import the Image component

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="section about" id="about-me" aria-label="about me">
      <div className="container">
        <div className="about-content">
          <h2 className="h6 section-title text-white" data-reveal="right">
            Embark on the Extravaganza:
            <br />SRM University&apos;s Annual Cultural Fest Unveiled!
          </h2>
          <div className="wrapper relative" data-reveal="right">
            <p className="section-text absolute right-30">
              Welcome to the grand celebration of{' '}
              <em>SRM University&apos;s annual cultural fest</em>! Get ready for an extraordinary
              experience filled with vibrant performances, creative expressions, and unforgettable
              moments. We&apos;re thrilled to have you join us for this spectacular event.
            </p>
          </div>
        </div>
        <figure className="about-banner" data-reveal="left">
          <div className="img-holder has-before left-[10%]" style={{ width: '612px', height: '784px' }}>
            <Image
              src="/images/img (1).jpg"
              width={512}
              height={684}
              loading="lazy"
              alt="Richard Ryan"
              className="img-cover left-10"
            />
          </div>
          <Image src="/img.png" width={178} height={178} loading="lazy" alt="" className="shape shape-1" />
          <Image
            src="/images/about-shape-2.svg"
            width={590}
            height={530}
            loading="lazy"
            alt=""
            className="shape shape-2"
          />
        </figure>
        <Image src="/images/about-shape-3.svg" width={239} height={232} loading="lazy" alt="" className="shape shape-3" />
      </div>
    </section>
  );
};

export default About;
