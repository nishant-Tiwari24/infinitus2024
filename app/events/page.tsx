import FlareCursor from '@/components/main/Cursor'
import Events from '@/components/main/Event'
import StarsCanvas from '@/components/main/StarCanvas'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col h-[950px] gap-20 bg-cover bg-fixed">
      <StarsCanvas/>
      <FlareCursor/>
      <Events/>
    </div>
  )
}

export default page
