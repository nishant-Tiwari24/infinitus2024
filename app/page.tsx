import Hero from '@/components/Hero';
import { Loading } from '@/components/Loading';
import Navbar from '@/components/Navbar';
import StarsCanvas from '@/components/StarCanvas';
import { Suspense } from 'react';
import Image from 'next/image';
import Gallery from '@/components/Gallery';

export default function Home() {
  const backgroundImageUrl = '/images/img-background.png'; // Update the path accordingly

  return (
    <main className="h-full w-full bg-contain" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className='flex flex-col h-[800px] gap-20'>
        {/* Add content or components inside this div if needed */}
      </div>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <StarsCanvas/>
        <Gallery />
      </Suspense>
    </main>
  );
}
