'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BlueLine = () => (
  <div className="flex justify-center items-center w-full h-screen relative overflow-hidden bg-white dark:bg-black">
    <svg
      width="100%"
      height="8"
      viewBox="0 0 1920 8"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <defs>
        {/* Light Mode Gradient */}
        <linearGradient
          id="beamGradientLight"
          x1="0"
          y1="0"
          x2="300"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#a0c4ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#4361ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#f72585" stopOpacity="0" />
        </linearGradient>

        {/* Dark Mode Gradient */}
        <linearGradient
          id="beamGradientDark"
          x1="0"
          y1="0"
          x2="300"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#9f9ae0" stopOpacity="0" />
          <stop offset="50%" stopColor="#453cc9ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#df3b3bff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Light Mode Line */}
      <motion.line
        className="block dark:hidden"
        x1="0"
        y1="4"
        x2="200"
        y2="4"
        stroke="url(#beamGradientLight)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ x: -300 }}
        animate={{ x: 1920 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Dark Mode Line */}
      <motion.line
        className="hidden dark:block"
        x1="0"
        y1="4"
        x2="200"
        y2="4"
        stroke="url(#beamGradientDark)"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ x: -300 }}
        animate={{ x: 1920 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </svg>
  </div>
);
