"use client"
import React, { useEffect, useState } from 'react'
import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion';

const MaskedCursor = () => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const [scope, animate ] = useAnimate();
    const [isHidden, setIsHidden ] = useState(false);

    const smoothX = useSpring(cursorX, {stiffness: 300, damping: 25 });
    const smoothY = useSpring(cursorY, {stiffness: 300, damping: 25 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 20);
            cursorY.set(e.clientY - 20);
        };

        const handleHover = () => {
            animate(scope.current, { scale: 2, opacity: 0.7}, { duration: 0.2 });
        };

        const handleLeave = () => {
            animate(scope.current, { scale: 1, opacity: 0.9}, { duration: 0.2 });
        };

        const observer = new MutationObserver(() => {
            const menu = document.querySelector(".menu-overlay");
            setIsHidden(menu?.classList.contains("menu-visible") || false);
        });

        observer.observe(document.body, { childList: true, subtree: true});

        window.addEventListener("mousemove", moveCursor);
        document.querySelectorAll("p, span, a, h1, h2, h3, h4, h5, h6, img").forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            observer.disconnect();
            window.removeEventListener("mousemove", moveCursor);
            document.querySelectorAll("p, span, a, h1, h2, h3, h4, h5, h6, img").forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, [cursorX, cursorY, animate, scope]);

  return (
    <motion.div
        ref={scope}
        className={`fixed top-0 left-0 pointer-events-none mix-blend-difference z-[100] transition-opacity duration-300
            ${isHidden ? "opacity-0" : "opacity-100"}`}
        style={{ x: smoothX, y: smoothY }}
    >
        <div className='w-10 h-10 bg-white rounded-full opacity-90'></div>
    </motion.div>
  )
}

export default MaskedCursor