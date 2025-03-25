"use client"
import React from 'react'
import { Roboto_Condensed } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faYoutube,
    faLinkedin,
    faGooglePlus
 } from '@fortawesome/free-brands-svg-icons';
 import { toast } from 'react-toastify';

 const roboto = Roboto_Condensed({
    subsets: ["latin"],
    weight: ["300", "400"]
 });

const ContactMe = () => {
    const email = "capy.coding.official@gmail.com"

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            toast.success("Email address capy.coding.official@gmail.com copied successfully!", {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable:true,
                progress: undefined,
            });
        } catch (err) {
            console.error(err);
            toast.error("Failed to copy email", {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable:true,
                progress: undefined,
            });
        };
    }
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center min-h-[100vh] md:min-h-screen px-5 gap-x-20'>
        <div className='flex flex-col items-center lg:items-end justify-start p-5 lg:p-10 text-[#2f2f2f] w-full'>
            <div className='text-3xl lg:text-6xl font-[400] max-w-lg text-center lg:text-left'>
                <p>INTERESTED IN WORKING TOGETHER</p>
            </div>

            <div className='text-lg lg:text-xl font-[400] max-w-lg mt-5'>
                <button onClick={handleCopyEmail} className='w-full sm:w-40 text-[#2f2f2f] relative h-[50px] overflow-hidden border border-[#2f2f2f] bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full
                before:w-0 before:bg-[#2f2f2f] before:transition-all before:duration-500 hover:text-white hover:shadow-[#2f2f2f] hover:before:left-0 hover:before:w-full cursor-pointer'>
                    <span className='relative z-10'>CONTACT ME</span>
                </button>
            </div>
        </div>

        <div className={`${roboto.className} flex flex-col lg:flex-row items-center lg:justify-start justify-center w-full mt-5 lg:mt-0`}>
            <ul className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
                <li className='relative list-none'>
                    <a href='#' className='group relative block w-full sm:w-[150px] h-[60px] text-left bg-white p-3 transform rotate-[-30deg] skew-x-[25deg] transition-all duration-500 shadow-[-15px_15px_8px_rgba(0,0,0,0.5)] 
                    hover:translate-x-[15px] hover:-translate-y-[10px] hover:shadow-[-40px_40px_40px_rgba(0,0,0,0.5)] hover:bg-[#3b5998]'>
                        <span className='absolute top-[8px] left-[-15px] h-full w-[15px] bg-gray-400 transform rotate-0 skew-y-[-45deg]'></span>
                        <span className='absolute bottom-[-15px] left-[-8px] h-[15px] w-full bg-gray-400 transform rotate-0 skew-x-[-45deg]'></span>

                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className='w-5 h-5 mt-2 text-[#262626] group-hover:text-white transition duration-500'
                        />
                        <span className='absolute top-[20px] left-[50px] text-[#262626] text-sm tracking-[3px] transition duration-500 group-hover:text-white'> - LinkedIn </span>
                    </a>
                </li>
                <li className='relative list-none'>
                    <a href='#' className='group relative block w-full sm:w-[150px] h-[60px] text-left bg-white p-3 transform rotate-[-30deg] skew-x-[25deg] transition-all duration-500 shadow-[-15px_15px_8px_rgba(0,0,0,0.5)] 
                    hover:translate-x-[15px] hover:-translate-y-[10px] hover:shadow-[-40px_40px_40px_rgba(0,0,0,0.5)] hover:bg-[#FF0000]'>
                        <span className='absolute top-[8px] left-[-15px] h-full w-[15px] bg-gray-400 transform rotate-0 skew-y-[-45deg]'></span>
                        <span className='absolute bottom-[-15px] left-[-8px] h-[15px] w-full bg-gray-400 transform rotate-0 skew-x-[-45deg]'></span>

                        <FontAwesomeIcon
                            icon={faYoutube}
                            className='w-5 h-5 mt-2 text-[#262626] group-hover:text-white transition duration-500'
                        />
                        <span className='absolute top-[20px] left-[50px] text-[#262626] text-sm tracking-[3px] transition duration-500 group-hover:text-white'> - YouTube </span>
                    </a>
                </li>
                <li className='relative list-none'>
                    <a href='#' className='group relative block w-full sm:w-[150px] h-[60px] text-left bg-white p-3 transform rotate-[-30deg] skew-x-[25deg] transition-all duration-500 shadow-[-15px_15px_8px_rgba(0,0,0,0.5)] 
                    hover:translate-x-[15px] hover:-translate-y-[10px] hover:shadow-[-40px_40px_40px_rgba(0,0,0,0.5)] hover:bg-green-800'>
                        <span className='absolute top-[8px] left-[-15px] h-full w-[15px] bg-gray-400 transform rotate-0 skew-y-[-45deg]'></span>
                        <span className='absolute bottom-[-15px] left-[-8px] h-[15px] w-full bg-gray-400 transform rotate-0 skew-x-[-45deg]'></span>

                        <FontAwesomeIcon
                            icon={faGooglePlus}
                            className='w-5 h-5 mt-2 text-[#262626] group-hover:text-white transition duration-500'
                        />
                        <span className='absolute top-[20px] left-[50px] text-[#262626] text-sm tracking-[3px] transition duration-500 group-hover:text-white'> - Email </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ContactMe