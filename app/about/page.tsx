import React from 'react'
import StarsCanvas from '@/components/main/StarCanvas'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
import AboutPage from '@/components/main/AboutPage'

function page() {
  return (
    <div className="flex flex-col h-[950px] gap-20 bg-cover bg-fixed">
        <Navbar/>
      <StarsCanvas />
      <AboutPage/>
    </div>
  )
}

export default page
