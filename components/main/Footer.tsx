import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="mb-8 lg:mb-0 lg:mr-4">
          <h4 className="text-xl mb-4 font-extralight">SRM University, Andhra Pradesh</h4>
          <p className='text-lg font-light'>
            Neerukonda, Mangalagiri Mandal <br />
            Guntur District, Mangalagiri, Andhra Pradesh 522240
          </p>
        </div>

        <div className="mb-8 lg:mb-0 lg:mr-8">
          <h4 className="text-xl font-extralight mb-4">Contact Us</h4>
          <p className='text-lg font-light'>
            Name 1: <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
          </p>
          <p className='text-lg font-light'>
            Name 2: <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-extralight mb-4">Follow Us</h3>
          <div className="social-links flex justify-center items-center">
            <a href="https://www.facebook.com/SRMUAP/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl mr-3" />
            </a>
            <a href="https://twitter.com/SRMUAP" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl mr-3" />
            </a>
            <a href="https://www.instagram.com/srmuap.infinitus/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
