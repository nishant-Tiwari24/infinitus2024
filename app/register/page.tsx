import Navbar from '@/components/main/Navbar'
import Registration from '@/components/main/Registration'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <StarsCanvas/>
      <Registration/>
    </div>
  )
}

export default page