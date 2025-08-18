"use client";

import React from "react";
import { motion } from "framer-motion";

export const Loader1 = () => {
  const delays = [0, 0.2, 0.3]; // stagger delays

  return (
    <div className="relative w-[200px] h-[70px] z-10">
      {delays.map((delay, i) => (
        <React.Fragment key={i}>
          {/* Ball */}
          <motion.div
            className="absolute w-5 h-5 bg-black dark:bg-white"
            animate={{
              y: [50, 0, 50], // bottom → top → bottom
              scaleY: [0.25, 1, 0.25], // squashed at bottom
              scaleX: [1.7, 1, 1.7], // stretched at bottom
              borderRadius: [
                "50px 50px 25px 25px", // bottom squash
                "50%", // top round
                "50px 50px 25px 25px", // back to squash
              ],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
              times: [0, 0.4, 1], // match CSS percentages (0%, 40%, 100%)
            }}
            style={{
              left: i === 0 ? "15%" : i === 1 ? "45%" : "auto",
              right: i === 2 ? "15%" : "auto",
            }}
          />

          {/* Shadow */}
          <motion.div
            className="absolute top-[60px] w-5 h-1 rounded-full blur-[1px] 
                       bg-black/60 dark:bg-white/60"
            animate={{
              scaleX: [1.5, 1, 0.2], // wide → normal → thin
              opacity: [1, 0.7, 0.4],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
              times: [0, 0.4, 1], // same timing as ball
            }}
            style={{
              left: i === 0 ? "15%" : i === 1 ? "45%" : "auto",
              right: i === 2 ? "15%" : "auto",
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
