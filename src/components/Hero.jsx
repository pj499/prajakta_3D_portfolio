// import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles.js';
import { ComputersCanvas } from './canvas/index.js';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">
            Prajakta
          </span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100}`}>
             <br className="sm:block hidden" />
            <TypeAnimation
            sequence={[
              'I build web applications\nand enjoy bringing ideas to life.',
              1000,
              ''
            ]}
            style={{ whiteSpace: 'pre-line'}}
            repeat={Infinity}
            speed={{type: 'keyStrokeDelayInMs', value: 80}}
            omitDeletionAnimation={true}
          />
          </p>
        </div>
      </div>
      {!isMobile && <ComputersCanvas />}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2 relative">
            <motion.dev
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
              className="w-0.5 h-5 bg-secondary mb-1"
            />
            <motion.dev
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
              className="w-2 h-2 rounded-full bg-secondary mb-1 absolute top-6"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;