import React from 'react'

function About() {
  return (
    <section className="section about" id="about" aria-label='about'>
        <div className="container">

            <div className="about-content">
            <h2 className="h2 section-title" data-reveal='right'>"A National level cultural fest!"</h2>


            <div className="wrapper has-before" data-reveal='right'>
                <p className="section-text">
                Get ready for an extraordinary experience filled with vibrant performances, creative expressions, and unforgettable moments. We're thrilled to have you join us for this spectacular event!"
                </p>


                </div>
            </div>

            <figure className="card-banner" data-reveal='left'>
                <div className="img-holder has-before">
                <video src="https://youtu.be/J5vTnuOwHQs?si=ejHCAS2uXyfH3qxt" className='img-cover'></video>
                </div>
            </figure>

        </div>
    </section>
  )
}

export default About
