import React from 'react'
import AboutText from './AboutText'
import Timeline from './Timeline'
import ContactMe from '../Components/ContactMe'

const page = () => {
  return (
    <div className='bg-[#f2f2f2]'>
        <AboutText/>
        <Timeline/>
        <ContactMe/>
    </div>
  )
}

export default page