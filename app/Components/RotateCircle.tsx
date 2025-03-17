"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const RotateCircle = () => {
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const innerText = "SCROLL TO DISCOVER . SCROLL TO DISCOVER . ";

    useEffect(() => {
        if (textRef.current) {
            const letters = innerText.split("");
            const totalLetters = letters.length;
            const degreeIncrement = 360 / totalLetters;

            textRef.current.innerHTML = letters
            .map(
                (letter, index) => 
                    `<span class="circle-text-span" style="transform: rotate(${index * degreeIncrement}deg) translateX(-50%);">${letter}</span>`
            )
            .join("");
        }
    }, []);

    useEffect(() => {
        gsap.to(".circle", {
            scrollTrigger: {
                trigger: ".circle",
                scrub: 1,
                markers: false,
                start: "top center",
            },
            opacity: 0,
            duration: 0.5,
        })
    }, []);

  return (
    <div className='circle absolute flex bottom-10 right-10 justify-center items-center w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full z-30 md:left-5 md:bottom-5'>
        <div className='circle-text w-[100%] h-[100%] absolute'>
            <p ref={textRef} className='text-sm text-black font-[400] md:text-lg'></p>
        </div>
        <span className='h-[8px] w-[8px] bg-black rounded-full'></span>
    </div>
  )
}

export default RotateCircle