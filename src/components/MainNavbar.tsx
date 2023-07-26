"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoz2 from "@/assets/logoz2.svg";
import { IoCloseSharp } from "react-icons/io5";

const MainNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <div className="w-full h-[90px]  bg-black border-b border-white/5 flex justify-between md:justify-center items-center gap-10">
      <Image alt="image" src={logoz2} className="h-7 w-auto ml-10 md:ml-0" />
      <div className="hidden md:flex justify-center items-center gap-10 text-xl font-bold font-mono  text-valorantWhite">
        <Link href={"/"}>HOME</Link>
        <Link href={"/about"}>ABOUT</Link>
        <Link href={"/skill"}>SKILL</Link>
        <Link href={"/project"}>PROJECT</Link>
        <Link href={"/contact"}>CONTACT</Link>
      </div>
      <div
        onClick={toggleButton}
        className="flex md:hidden flex-col justify-center items-center gap-1 mr-10 md:mr-0"
      >
        <div className="w-[30px] h-[5px] rounded-md bg-valorantWhite" />
        <div className="w-[30px] h-[5px] rounded-md bg-valorantWhite" />
        <div className="w-[30px] h-[5px] rounded-md bg-valorantWhite" />
      </div>
      <section
        className={`${
          toggle ? "flex" : "hidden"
        } w-full h-full absolute top-0 right-0 z-20`}
      >
        <div
          onClick={toggleButton}
          className="w-[40%] backdrop-blur-md bg-black/30"
        />
        <div
          className={` w-[60%] h-full flex-col justify-start items-center bg-black gap-10 border-l-2  border-l-white/5`}
        >
          <div className="w-full h-[90px] border-b border-b-white/5 flex justify-between items-center ">
            <Image alt="image" src={logoz2} className="h-7 w-auto ml-10" />
            <IoCloseSharp
              onClick={toggleButton}
              className="mr-10 text-3xl text-valorantWhite"
            />
          </div>
          <div className="h-full flex flex-col justify-center items-center gap-20 font-bold font-mono text-xl text-valorantWhite ">
            <Link href={"/"}>HOME</Link>
            <Link href={"/about"}>ABOUT</Link>
            <Link href={"/skill"}>SKILL</Link>
            <Link href={"/project"}>PROJECT</Link>
            <Link href={"/contact"}>CONTACT</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainNavbar;
