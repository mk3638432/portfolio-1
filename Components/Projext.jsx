import Link from 'next/link'
import React from 'react'
import Projects from './Projects'

const Projext = () => {
  return (
    <div id='project' className='w-full py-10 '>
        <div className='max-w-[1240px] mx-auto px-2 py-16 '>
          <p className='text-xl tracking-widest uppercase text-[#5651e5] '>Projects</p>
          <h2 className='py-4 font-bold text-xl'>What i've Built</h2>
          
      <Projects/>
        
        </div>
    </div>
  )
}

export default Projext