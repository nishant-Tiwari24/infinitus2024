import Questions  from '@/components/main/FAQs'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col max-h-screen gap-20'>
      <Questions/>
      <StarsCanvas/>
    </div>
  )
}

export default page