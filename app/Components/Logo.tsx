import React, { useEffect } from 'react'
import { Lugrasimo } from 'next/font/google'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lugrasimo = Lugrasimo({
    weight: '400',
    subsets: ["latin"],
});

const Logo = () => {
    useEffect(() => {
        gsap.to(".logo", {
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "+=500",
                scrub: true,
                markers: false,
            },
            opacity: 0,
            y: -50,
            ease: "power2.out"
        });
    }, []);

  return (
    <div className={`${lugrasimo.className} logo fixed top-0 left-0 p-5 z-30 text-black text-5xl md:text-9xl`}>
        <p>IK</p>
    </div>
  )
}

export default Logo