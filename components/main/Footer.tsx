import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      <hr />
      <footer className="text-gray-200 py-8 mt-10 z-50">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0 lg:mr-4">
            <h4 className="text-3xl lg:text-4xl mb-4 font-space font-bold">SRM University, Andhra Pradesh</h4>
            <p className='text-xl lg:text-3xl font-light'>
              Neerukonda, Mangalagiri Mandal <br />
              Guntur District, Mangalagiri, Andhra Pradesh 522240
            </p>
          </div>

          <div className="mb-8 lg:mb-0 lg:mr-8">
            <h4 className="text-3xl lg:text-4xl font-bold font-space mb-4">Contact Us</h4>
            <p className='text-xl lg:text-2xl font-light'>
              Name 1: <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
            </p>
            <p className='text-xl lg:text-2xl font-light flex-col'>
              Name 2: <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
            </p>
          </div>

          <div>
            <h3 className="text-3xl lg:text-4xl font-bold font-space mb-4">Follow Us</h3>
            <div className="social-links flex justify-center items-center ">
              
              <Link href="https://www.facebook.com/SRMUAP/" rel="noopener noreferrer" aria-label="Facebook" className="z-50 font-space text-2xl hover:scale-110">
                <FaFacebook className="text-4xl lg:text-5xl mr-3"  />
              </Link>
              <Link href="https://twitter.com/SRMUAP" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="z-50 font-space text-2xl hover:scale-110">
                <FaTwitter className="text-4xl lg:text-5xl mr-3" />
              </Link>
              <Link href="https://www.instagram.com/srmuap.infinitus/" rel="noopener noreferrer" aria-label="Instagram" className="z-50 font-space text-2xl hover:scale-110">
                <FaInstagram className="text-4xl lg:text-5xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 flex justify-center align-middle cursor-pointer hover:scale-110">
          <p className="text-2xl font-space">Crafted by </p>
          <Link href="https://github.com/nishant-Tiwari24" target="_blank" rel="noopener noreferrer" className="text-green-400 z-50 font-space text-2xl">: Nishant Tiwari and Omkar Ghongade</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
