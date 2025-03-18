"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    useEffect(() => {
        gsap.fromTo(
            ".text-content",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                duration: 1.5,
                scrollTrigger: {
                    trigger: ".text-content",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        )
    }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen p-10 text-[#2f2f2f]'>
        <div className='text-title text-7xl font-[400]'>
            <p>YOU DREAM IT, I CREATE IT</p>
        </div>

        <div className='text-content text-base mt-10 max-w-3xl opacity-0 text-center'>
            <p>As a passionate developer with expertise in creating custom, mobile-responsive websites, I thrive on transforming client visions into functional, high-performing digital experiences. My focus is on creating seamless, user-friendly websites
                that are optimised for speed, SEO, and overall efficiency. With a background in Software Engineering, I've worked across various technologies to design and implement solutions that drive growth and engagement.
            </p>
        </div>
    </div>
  )
}

export default AboutMe