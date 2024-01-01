import Hero from '@/components/main/Hero';
import Navbar from '@/components/main/Navbar';
import StarsCanvas from '@/components/main/StarCanvas';
import Gallery from '@/components/main/Gallery';
import CategoryList from '@/components/main/Category';
import About from '@/components/main/About';
import PastPerformers from '@/components/main/PastPerformers'

export default function Home() {
  const backgroundImageUrl = '/images/img-background.png';

  return (
    <main className="h-full w-full" >
      <div className='flex flex-col h-[950px] gap-20 bg-cover bg-fixed' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        {/* Add content or components inside this div if needed */}
      </div>
        <Navbar />
        <Hero />
        <StarsCanvas/>
        <Gallery />
        <CategoryList/>  
        <About/>
        <PastPerformers/>
    </main>
  );
}
