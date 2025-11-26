'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const ScrollTextReveal: React.FC = () => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current || !wrapperRef.current) return;

        // Split the text into chars/words/lines
        const split = new SplitType(textRef.current, {
            types: 'lines,words,chars'
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top top',
                end: '+=200%',
                pin: true,
                scrub: 0.1,
                markers: true, // remove in production
            },
        });

        // Animate each char color
        tl.to(split.chars, {
            color: '#dadada',
            stagger: 0.05, // faster than 1 second per char
        });

        return () => {
            split.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div style={{ width: '100vw', overflowX: 'hidden', margin: 0, padding: 0 }}>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: '#212121' }} />

            <div
                ref={wrapperRef}
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#033e39',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem 4rem',
                }}
            >
                <p
                    ref={textRef}
                    style={{
                        color: '#7f7f7f',
                        fontSize: 'clamp(2rem, 4vw, 4rem)',
                        margin: 0,
                    }}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam aspernatur voluptatibus aut, beatae necessitatibus nemo reprehenderit illo, vitae veniam deserunt asperiores ratione consectetur commodi corporis enim possimus? Ab animi vel officia error vero.
                </p>
            </div>

            <div style={{ width: '100vw', height: '100vh', backgroundColor: '#212121' }} />
        </div>
    );
};

export default ScrollTextReveal;
