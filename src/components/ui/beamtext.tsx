'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Beam = ({ width, lightId, darkId }: { width: number; lightId: string; darkId: string }) => (
  <svg width={width} height="8" viewBox={`0 0 ${width} 8`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Light Mode Gradient */}
      <linearGradient id={lightId} x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a0c4ff" stopOpacity="0" />
        <stop offset="50%" stopColor="#4361ee" stopOpacity="1" />
        <stop offset="100%" stopColor="#f72585" stopOpacity="0" />
      </linearGradient>

      {/* Dark Mode Gradient */}
      <linearGradient id={darkId} x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#9f9ae0" stopOpacity="0" />
        <stop offset="50%" stopColor="#453cc9" stopOpacity="1" />
        <stop offset="100%" stopColor="#df3b3b" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Light Mode Line */}
    <motion.line
      className="block dark:hidden"
      x1="0"
      y1="4"
      x2="200"
      y2="4"
      stroke={`url(#${lightId})`}
      strokeWidth={3}
      strokeLinecap="round"
      initial={{ x: -300 }}
      animate={{ x: width }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    />

    {/* Dark Mode Line */}
    <motion.line
      className="hidden dark:block"
      x1="0"
      y1="4"
      x2="200"
      y2="4"
      stroke={`url(#${darkId})`}
      strokeWidth={3}
      strokeLinecap="round"
      initial={{ x: -300 }}
      animate={{ x: width }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    />
  </svg>
);

export const HeadingsWithBeam = () => {
  const mainRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLHeadingElement>(null);
  const [mainWidth, setMainWidth] = useState(0);
  const [subWidth, setSubWidth] = useState(0);

  useEffect(() => {
    if (mainRef.current) setMainWidth(mainRef.current.offsetWidth);
    if (subRef.current) setSubWidth(subRef.current.offsetWidth);

    const handleResize = () => {
      if (mainRef.current) setMainWidth(mainRef.current.offsetWidth);
      if (subRef.current) setSubWidth(subRef.current.offsetWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black px-4">
      {/* Main Heading */}
      <div className="flex flex-col items-center">
        <h1
          ref={mainRef}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-center"
        >
          Welcome to the Future
        </h1>
        {mainWidth > 0 && (
          <Beam width={mainWidth} lightId="mainBeamLight" darkId="mainBeamDark" />
        )}
      </div>

      {/* Subtitle */}
      <div className="flex flex-col items-center mt-6">
        <h2
          ref={subRef}
          className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 text-center"
        >
          Where innovation meets design
        </h2>
        {subWidth > 0 && (
          <Beam width={subWidth} lightId="subBeamLight" darkId="subBeamDark" />
        )}
      </div>
    </div>
  );
};
