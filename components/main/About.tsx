import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="section about" id="about-me" aria-label="about me">
      <div className="container">

        <div className="about-content">

          <h2 className="h6 section-title text-white" data-reveal="right">
          Embark on the Extravaganza: 
          <br />SRM University's Annual Cultural Fest Unveiled!
          </h2>

          <div className="wrapper relative" data-reveal="right">

            <p className="section-text absolute right-30">
            Welcome to the grand celebration of <em>SRM University's annual cultural fest</em>! Get ready for an extraordinary experience filled with vibrant performances, creative expressions, and unforgettable moments. We're thrilled to have you join us for this spectacular event
            </p>
          </div>

        </div>

        <figure className="about-banner" data-reveal="left">

          <div className="img-holder has-before left-[10%]" style={{ width: '612px', height: '784px' }}>
            <img src="/images/img (1).jpg" width="512" height="684" loading="lazy" alt="Richard Ryan"
              className="img-cover left-10" />
          </div>

          <img src="img.png" width="178" height="178" loading="lazy" alt=""
            className="shape shape-1" />

          <img src="/images/about-shape-2.svg" width="590px" height="530px" loading="lazy" alt=""
            className="shape shape-2" />

        </figure>

        <img src="/images/about-shape-3.svg" width="239" height="232" loading="lazy" alt=""
          className="shape shape-3" />

      </div>
    </section>
  );
};

export default About;
