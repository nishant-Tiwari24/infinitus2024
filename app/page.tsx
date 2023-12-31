import Hero from '@/components/Hero'
import {Loading} from '@/components/Loading'
import Navbar from '@/components/Navbar'
import StarsCanvas from '@/components/StarCanvas'
import { Suspense } from 'react';
import Image from 'next/image'
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className='flex flex-col h-[800px] gap-20'></div>
      <Suspense fallback={<Loading/>}>
      <Navbar/>
      <Hero/>
      <Gallery/>
      <StarsCanvas/>
      </Suspense>
    </main>
  )
}
