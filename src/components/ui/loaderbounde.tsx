"use client";

import { motion } from "framer-motion";

export default function ionLoader() {
  return (
    <div className="fixed inset-0 flex w-full h-full z-[9999] overflow-hidden">
      {/* Left Panel */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-1/3 h-full bg-blue-600"
      />

      {/* Middle Panel */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="w-1/3 h-full bg-white"
      />

      {/* Right Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-1/3 h-full bg-red-600"
      />
    </div>
  );
}
