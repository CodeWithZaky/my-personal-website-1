"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LatestProjectAnimate = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    hover: {
      y: -40,
      transition: { duration: 0.03 },
    },
    initial: {
      y: 0,
      transition: { duration: 0.01 },
    },
  };
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  useEffect(() => {
    setIsHovered(false);
  }, []);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col justify-center items-start gap-3 border-valorantBlack/50 mx-auto pt-12 pb-10 border-l w-[70%]"
    >
      <motion.div
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        className="z-10 -mb-14 -ml-1 font-bold text-7xl text-valorant sm:text-9xl md:text-9xl tracking-tight transition-all"
      >
        LATEST PROJECT
      </motion.div>
      {children}
    </div>
  );
};

export default LatestProjectAnimate;
