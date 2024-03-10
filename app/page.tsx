'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/main/Hero';
import Navbar from '@/components/main/Navbar';
const StarsCanvas = dynamic(() => import('@/components/main/StarCanvas'), { ssr: false });
import Gallery from '@/components/main/Gallery';
import About from '@/components/main/About';
import PastPerformers from '@/components/main/PastPerformers';
import Proshows from '@/components/main/Proshows';
import Footer from '@/components/main/Footer';
import FlareCursor from '@/components/main/Cursor';
import Loading from '@/components/main/Loading'
import ZoomParallax from '@/components/main/ZoomParallax'
import { SponsorSection } from '@/components/main/Sponser';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);


  return (
    <main
      className="h-full w-full bg-[#030014] " >
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading/>
        </div>
      ) : (
        <>
      <FlareCursor/>
      <StarsCanvas />
      <Hero />
      <About />
      <Proshows />
      <Gallery />
      <SponsorSection/>
      <PastPerformers />
      <ZoomParallax/>
      <Footer />
      <Navbar />
        </>
      )}
    </main>
  );
};

export default Home;