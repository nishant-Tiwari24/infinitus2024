import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import StarsCanvas from '@/components/StarCanvas'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      
      <div className='flex flex-col h-[1000px] gap-20'></div>
      <Navbar/>
      <Hero/>
      <StarsCanvas/>
    </main>
  )
}
