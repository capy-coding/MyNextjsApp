"use client"
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.set(".menu-overlay", { yPercent: -100 });
    gsap.set(".menu-link-item-holder", { y: 100 });

    tl.current = gsap
      .timeline({paused: true})
      .to(".menu-overlay", {
        yPercent: 0,
        duration: 1.25,
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        duration: 1,
        y: 0,
        ease: "power4.inOut",
        stagger: 0.1,
        delay: -0.75,
      });
  }, []);

  useEffect(() => {
    if(tl.current) {
      if(isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="menu-container z-50 fixed" ref={container}>
      <div className="fixed w-full p-[2em] flex justify-between items-center z-10 bg-transparent text-xl font-extrabold">
        <div className="menu-open cursor-pointer absolute top-5 right-5 text-black" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div className="fixed flex top-0 left-0 w-full h-full bg-black z-20 menu-overlay">
        <div className="menu-overlay-bar m-5">
          <div className="relative group overflow-hidden rounded-full pl-2 pr-2 pt-0.2 pb-0.5 text-white text-lg md:text-2xl">
            <div className="absolute inset-0 bg-[#008fcd] transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>

            <Link href="/" className="relative z-10">
              IK
            </Link>
          </div>

          <div className="cursor-pointer text-white absolute top-5 right-5" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 transition-transform duration-200 hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-[2em]">
          <div className="menu-links mt-10 md:ml-10">
            {menuLinks.map((link, index) => (
              <div key={index} className="overflow-hidden">
                <div className="relative text-white hover:text-[#008fcd] text-4xl md:text-7xl menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex mb-10 gap-10 md:gap-40 md:mb-20 text-white">
            <div className="flex flex-col justify-end text-sm md:text-base md:ml-10 cursor-pointer">
              <div className="hover:text-[#008fcd] hover:underline">
                <a href='#'>
                  INSTAGRAM<span>&#8599;</span>
                </a>
              </div>
              <div className="hover:text-[#008fcd] hover:underline">
                <a href='#'>
                  LINKEDIN<span>&#8599;</span>
                </a>
              </div>
              <div className="hover:text-[#008fcd] hover:underline">
                <a href='#'>
                  YOUTUBE<span>&#8599;</span>
                </a>
              </div>
            </div>

            <div className="menu-info-col text-sm md:text-xl">
              <p>info@mail.com</p>
              <p>1234 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
