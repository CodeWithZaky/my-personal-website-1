"use client";
import { DINNextW1G } from "@/src/assets/fonts/font";
import { thumbnail_projects } from "@/src/components/atoms/data/Tubmnail-Projects";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestProject = () => {
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    hover: {
      y: -35,
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
      className="mx-auto w-[70%] flex flex-col justify-center items-start border-l border-valorantBlack/50 gap-3 pt-12 pb-20"
    >
      <motion.div
        variants={variants}
        animate={isHovered ? "hover" : "initial"}
        className="z-10 -ml-1 transition-all -mb-14 text-7xl sm:text-9xl md:text-9xl text-valorant"
      >
        LATEST PROJECT
      </motion.div>
      <div className="relative grid grid-cols-1 gap-5 transition-all md:grid-cols-1 lg:grid-cols-3">
        <Link
          href={"/projects"}
          className={clsx(
            DINNextW1G.className,
            "absolute underline -bottom-10 md:-top-8 left-0 md:left-[85%] text-xl font-bold text-valorant md:text-valorantBlue hover:text-valorantBlue/90 hover:-bottom-9 md:hover:-top-9 transition-all whitespace-nowrap"
          )}
        >
          {"More Project >"}
        </Link>
        {thumbnail_projects.slice(0, 3).map((item, index) => {
          return <div key={index.toString()}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default LatestProject;
