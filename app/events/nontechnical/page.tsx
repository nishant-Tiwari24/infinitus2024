import Competition from '@/components/main/Competition'
import Navbar from '@/components/main/Navbar'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  const backgroundImageUrl = '/images/img-backgroun.png';
  return (
    <div className="flex flex-col h-[950px] gap-20 bg-contain bg-fixed" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <Navbar/>
      <StarsCanvas/>
      <Competition types='Non Technical Fest'/>
    </div>
  )
}

export default page