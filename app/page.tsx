'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/main/Hero';
import Navbar from '@/components/main/Navbar';
const StarsCanvas = dynamic(() => import('@/components/main/StarCanvas'), { ssr: false });
import Gallery from '@/components/main/Gallery';
import CategoryList from '@/components/main/Category';
import About from '@/components/main/About';
import PastPerformers from '@/components/main/PastPerformers';
import Proshows from '@/components/main/Proshows';
import Image from 'next/image';

const cursorStyles = `
  body {
    cursor:none;
  }

  .cursor {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 75px;
    height: 75px;
    background-color: var(--white);
    mix-blend-mode: exclusion;
    border-radius: var(--radius-circle);
    transform: translate(-50%, -50%) scale(0.35);
    transition: transform 0.35s;
    pointer-events: none;
    z-index: 6;
  }

  .cursor.hovered { transform: translate(-50%, -50%) scale(1.2); }

  .cursor.disabled { transform: translate(-50%, -50%) scale(0); }
`;

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const backgroundImageUrl = '/images/img-background.png';

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <main
      className="h-full w-full bg-[#030014] text-white"
      onMouseMove={handleMouseMove} >
      <style>{cursorStyles}</style>
      <div
        className={`cursor ${isHovered ? 'hovered' : ''}`}
        style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }}
      />

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="ml-4 text-xl font-semibold text-blue-500">
          <Image
              width={80}
              height={40}
              quality={100}
              src="/img.png"
              className='w-60 h-20 object-contain'
              alt=""
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col h-[950px] gap-20 bg-cover bg-fixed" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          </div>
          <Navbar />
          <Hero />
          <StarsCanvas />
          <Gallery />
          <CategoryList />
          <About />
          <PastPerformers />
          <Proshows />
        </>
      )}
    </main>
  );
};

export default Home;
