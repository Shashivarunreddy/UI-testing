"use client";

import React from "react";
import { motion } from "framer-motion";

const BouncingBalls = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black">
      <div className="flex space-x-6">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.div
            key={i}
            className="w-6 h-6 rounded-full bg-black dark:bg-white"
            initial={{ y: 0, scaleY: 1, scaleX: 1 }}
            animate={{
              y: -40,
              scaleY: 0.6,
              scaleX: 1.2,
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BouncingBalls;
