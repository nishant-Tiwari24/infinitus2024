import Competition from '@/components/main/CulturalCompetition'
import Navbar from '@/components/main/Navbar'
import NonTechnical from '@/components/main/NonTechnicalCompetition';
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  const backgroundImageUrl = '/images/img-backgroun.png';
  return (
    <div className="flex flex-col h-[950px] gap-20 bg-contain bg-fixed" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <StarsCanvas/>
      <NonTechnical types='Non Technical Fest'/>
    </div>
  )
}

export default page