"use client"
import React, { useEffect } from 'react'
import gsap from "gsap";


const AboutText = () => {
    useEffect(() => {
        gsap.fromTo(".content", {
            opacity: 0,
            y: 50
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5
        });
    }, []);
  return (
    <div>
        <div className='flex items-center overflow-hidden h-[180px] text-black'>
            <h2 className='marquee-text'>ABOUT ME *</h2>
            <h2 className='marquee-text'>ABOUT ME *</h2>
            <h2 className='marquee-text'>ABOUT ME *</h2>
            <h2 className='marquee-text'>ABOUT ME *</h2>
            <h2 className='marquee-text'>ABOUT ME *</h2>
            <h2 className='marquee-text'>ABOUT ME *</h2>
            <h2 className='marquee-text'>ABOUT ME *</h2>
            <h2 className='marquee-text'>ABOUT ME *</h2>
        </div>

        <div className='text-xl p-20 text-[#7c7c7c]'>
            <p className='mb-10 text-3xl text-black font-semibold'>A LITTLE BIT ABOUT ME</p>
            <div className='content'>
                <p className='font-semibold'>
                    I am deeply passionate about blending creativity with human-centered design, always looking for fresh ways for brands
                    to forge authentic connections. Inspiration is everywhere, and I make it my mission to find it in unexpected places, always on the lookout for new ideas.
                </p>
                <p className='mt-10'>
                    Driven by curiosity and a constant desire for growth, I have embraced creativity as a way of life. Since childhood, art has been my driving force, pushing
                    me to experiment with new forms and ideas. For me, it is about finding beauty in both the process and the results, creating solutions that not only look good
                    but also serve a meaningful purpose. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutText