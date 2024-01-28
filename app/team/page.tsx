import Navbar from '@/components/main/Navbar'
import StarsCanvas from '@/components/main/StarCanvas'
import Team from '@/components/main/Team'
import React from 'react'

function page() {
  return (
    <div>
    <Navbar/>
      <StarsCanvas/>
      <Team/>
    </div>
  )
}

export default page
