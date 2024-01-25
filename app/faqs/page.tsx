import Questions  from '@/components/main/FAQs'
import Navbar from '@/components/main/Navbar'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col h-[950px] gap-20'>
      <Navbar/>
      <Questions/>
      <StarsCanvas/>
    </div>
  )
}

export default page