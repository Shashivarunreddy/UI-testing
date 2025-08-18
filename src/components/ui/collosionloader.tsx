"use client";
import { motion } from "motion/react";
import React from "react";

export const CollisionLoader = () => {
  const ballSize = 16; 
  const gap = 4;    
  const step = ballSize + gap;

  const duration = 3.6;
  const times = [0, 0.09, 0.13, 0.24, 0.50, 0.59, 0.63, 0.74, 1];
  const easing: ("linear" | "easeIn" | "easeOut" | "easeInOut")[] = [
    "linear", "easeOut", "linear", "easeIn", "linear", "linear", "easeOut", "linear"
  ];

  const leftFrames  = [0, step, step, step, step, step, step, 0, 0];
  const middleFrames = [0, 0, step, step, step, step, 0, 0, 0];
  const rightFrames = [0, 0, 0, step, step, 0, 0, 0, 0];

  return (
    <div
      className="relative"
      style={{
        width: ballSize * 3 + gap * 2,
        height: ballSize,
      }}
    >
    
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: leftFrames }}
        transition={{
          duration,
          times,
          repeat: Infinity,
          repeatType: "loop",
          ease: easing,
        }}
        className="absolute"
        style={{
          left: 0,
        }}
      >
        <div
          className="h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300"
          style={{ backgroundClip: "padding-box" }}
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: middleFrames }}
        transition={{
          duration,
          times,
          repeat: Infinity,
          repeatType: "loop",
          ease: easing,
        }}
        className="absolute"
        style={{
          left: step,
        }}
      >
        <div
          className="h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300"
          style={{ backgroundClip: "padding-box" }}
        />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: rightFrames }}
        transition={{
          duration,
          times,
          repeat: Infinity,
          repeatType: "loop",
          ease: easing,
        }}
        className="absolute"
        style={{
          left: step * 2,
        }}
      >
        <div
          className="h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300"
          style={{ backgroundClip: "padding-box" }}
        />
      </motion.div>
    </div>
  );
};
