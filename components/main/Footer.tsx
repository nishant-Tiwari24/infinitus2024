import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8 bg-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="mb-8 lg:mb-0 lg:mr-4">
          <h4 className="text-3xl lg:text-4xl mb-4  font-bold">SRM University, Andhra Pradesh</h4>
          <p className='text-xl lg:text-2xl font-light'>
            Neerukonda, Mangalagiri Mandal <br />
            Guntur District, Mangalagiri, Andhra Pradesh 522240
          </p>
        </div>

        <div className="mb-8 lg:mb-0 lg:mr-8">
          <h4 className="text-3xl lg:text-4xl font-bold mb-4">Contact Us</h4>
          <p className='text-xl lg:text-2xl font-light'>
            Name 1: <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
          </p>
          <p className='text-xl lg:text-2xl font-light flex-col'>
            Name 2: <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
          </p>
        </div>

        <div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Follow Us</h3>
          <div className="social-links flex justify-center items-center">
            <a href="https://www.facebook.com/SRMUAP/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-4xl lg:text-5xl mr-3" />
            </a>
            <a href="https://twitter.com/SRMUAP" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-4xl lg:text-5xl mr-3" />
            </a>
            <a href="https://www.instagram.com/srmuap.infinitus/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl lg:text-5xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
