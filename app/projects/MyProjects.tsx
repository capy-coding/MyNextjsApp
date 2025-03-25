"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(".scroll-col", {
        scrollTrigger: {
          trigger: ".scroll-col",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
        yPercent: -20,
      });
    });
    return () => mm.revert();
  }, []);

  const projects = [
    {
      src: "/images/project1.webp",
      alt: "Project cover photo 1",
      title: "3D Portfolio",
      tags: ["React", "Three.js"],
      link: "#",
    },
    {
      src: "/images/project2.webp",
      alt: "Project cover photo 2",
      title: "ECOMMERCE",
      tags: ["React", "Tailwind CSS", "Liquid"],
      link: "#",
    },
    {
      src: "/images/project3.webp",
      alt: "Project cover photo 3",
      title: "iOS App",
      tags: ["Swift", "Firebase"],
      link: "#",
    },
  ];

  const projects2 = [
    {
      src: "/images/project4.webp",
      alt: "Project cover photo 4",
      title: "PLAYTASK",
      tags: ["React", "Vite", "Python"],
      link: "#",
    },
    {
      src: "/images/project5.webp",
      alt: "Project cover photo 5",
      title: "EMAIL MARKETING",
      tags: ["Flask", "NLTK"],
      link: "#",
    },
    {
      src: "/images/project6.webp",
      alt: "Project cover photo 6",
      title: "NEXTJS PORTFOLIO",
      tags: ["NextJs", "Tailwind", "GSAP"],
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 p-8 text-[#2f2f2f] items-center justify-center">
      
      <div className="scroll-col flex flex-col md:mt-30 md:items-end">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden aspect-square w-full md:w-4/5"
          >
            <p className="card-title absolute inset-0 flex items-end justify-start font-[700] p-3 text-base w-full h-full z-10">
              {project.title}
            </p>
            <div className="card-content absolute inset-0 flex items-end justify-start p-3 font-[400] text-xs w-full h-full z-10">
              <ul className="flex space-x-3 text-white">
                {project.tags &&
                  project.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="bg-[#2f2f2f] rounded-full p-1"
                    >
                      {tag}
                    </li>
                  ))}
              </ul>
            </div>

            <a
              href={project.link}
              className="btn-arrow absolute top-3 right-3 z-20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>

            <Image
              src={project.src}
              layout="fill"
              objectFit="cover"
              alt={project.alt}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:items-start">
        {projects2.map((project, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden aspect-square w-full md:w-4/5"
          >
            <p className="card-title absolute inset-0 flex items-end justify-start font-[700] p-3 text-base w-full h-full z-10">
              {project.title}
            </p>
            <div className="card-content absolute inset-0 flex items-end justify-start p-3 font-[400] text-xs w-full h-full z-10">
              <ul className="flex space-x-3 text-white">
                {project.tags &&
                  project.tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="bg-[#2f2f2f] rounded-full p-1"
                    >
                      {tag}
                    </li>
                  ))}
              </ul>
            </div>

            <a
              href={project.link}
              className="btn-arrow absolute top-3 right-3 z-20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>

            <Image
              src={project.src}
              layout="fill"
              objectFit="cover"
              alt={project.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
