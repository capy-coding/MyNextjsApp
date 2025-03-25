import React from 'react'
import MyProjects from './MyProjects'
import ContactMe from '../Components/ContactMe'

const page = () => {
  return (
    <div className='bg-[#f2f2f2]'>
        <div className='flex items-center overflow-hidden h-[180px] text-black'>
            <h2 className='marquee-text'>MY PROJECTS *</h2>
            <h2 className='marquee-text'>MY PROJECTS *</h2>
            <h2 className='marquee-text'>MY PROJECTS *</h2>
            <h2 className='marquee-text'>MY PROJECTS *</h2>
            <h2 className='marquee-text'>MY PROJECTS *</h2>
            <h2 className='marquee-text'>MY PROJECTS *</h2>
            <h2 className='marquee-text'>MY PROJECTS *</h2>
            <h2 className='marquee-text'>MY PROJECTS *</h2>
        </div>

        <MyProjects/>
        <ContactMe/>
    </div>
  )
}

export default page