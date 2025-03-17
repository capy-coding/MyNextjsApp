"use client"
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';
import Logo from './Logo';
import RotateCircle from './RotateCircle';

gsap.registerPlugin(ScrollTrigger);

const Zoom = () => {
    const animationRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current.kill();
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".wrapper",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
                markers: false,

            },
        });

        tl.to(".hero", {
            scale: 6,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut",
        }).to(
            ".section.hero",
            {
                scale: 1.1,
                transformOrigin: "center center",
                ease: "power1.inOut",
            },
            "<"
        );

        animationRef.current = tl;

        ScrollTrigger.refresh();

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };

    }, [])
  return (
    <div className='wrapper min-h-screen relative overflow-hidden'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full h-full'>
        <video autoPlay loop muted className='object-cover w-full h-full'>
            <source src="/videos/bgVideo.mp4" type="video/mp4"/>
            Your browser does not support the video tag
        </video>
        </div>

        < Logo/>
        <RotateCircle/>

        <section className='hero absolute inset-0 flex items-center justify-center z-20'>
            <Image 
                src="/images/homepage.png"
                alt="Homepage portfolio image"
                className='object-cover'
                layout='fill'
                priority
            />
        </section>
    </div>
  )
}

export default Zoom