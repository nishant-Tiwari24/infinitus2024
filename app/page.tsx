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

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const backgroundImageUrl = '/images/img-background.png';

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <main className="h-full w-full bg-[#030014] text-white">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="ml-4 text-xl font-semibold text-blue-500">
            <Image
              width={80}
              height={40}
              quality={100} // Set quality to 100 for the best possible image quality
              src="/img.png"
              className='w-60 h-20 object-contain'
              alt=""
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col h-[950px] gap-20 bg-cover bg-fixed" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            {/* Add content or components inside this div if needed */}
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
