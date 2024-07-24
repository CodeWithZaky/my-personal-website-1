"use client";
import { thumbnail_projects } from "@/components/projects/index";
import { DINNextW1G } from "@/src/assets/fonts/font";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

const LatestProject = () => {
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
      <div className="relative gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 transition-all">
        {thumbnail_projects.slice(0, 3).map((item, index) => {
          return <div key={index.toString()}>{item}</div>;
        })}
      </div>
      <Link
        href={"/projects"}
        className={clsx(
          DINNextW1G.className,
          "group flex items-center uppercase bg-valorant text-valorantWhite gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest duration-300 hover:gap-2 hover:translate-x-3"
        )}
      >
        More Project
        <IoMdArrowDropright className="group-hover:ml-3 text-4xl transition-all" />
      </Link>
    </div>
  );
};

export default LatestProject;
