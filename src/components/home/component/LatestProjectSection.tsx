"use client";
import { DINNextW1G } from "@/src/assets/fonts/font";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { thumbnail_projects } from "../../data/ThumbnailProjects";

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
            className="mx-auto w-[70%] flex flex-col justify-center items-start border-l border-valorantBlack/50 gap-3 pt-12 pb-10"
        >
            <motion.div
                variants={variants}
                animate={isHovered ? "hover" : "initial"}
                className="z-10 -ml-1 transition-all -mb-14 text-7xl sm:text-9xl md:text-9xl text-valorant font-bold tracking-tight"
            >
                LATEST PROJECT
            </motion.div>
            <div className="relative grid grid-cols-1 gap-5 transition-all md:grid-cols-1 lg:grid-cols-3">
                {thumbnail_projects.slice(0, 3).map((item, index) => {
                    return <div key={index.toString()}>{item}</div>;
                })}
            </div>
            <Link
                href={"/projects"}
                className={clsx(
                    DINNextW1G.className,
                    "group flex items-center hover:ml-3 pl-3 py-1 bg-valorant text-valorantWhite uppercase border-valorantBlack text-3xl mt-5 font-bold transition-all whitespace-nowrap"
                )}
            >
                More Project
                <IoMdArrowDropright className="group-hover:ml-3 transition-all text-4xl" />
            </Link>
        </div>
    );
};

export default LatestProject;
