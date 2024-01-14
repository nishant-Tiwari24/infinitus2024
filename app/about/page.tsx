import React from 'react'
import StarsCanvas from '@/components/main/StarCanvas'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'

function page() {
  return (
    <div>
        <Navbar/>
      <StarsCanvas />
    </div>
  )
}

export default page
