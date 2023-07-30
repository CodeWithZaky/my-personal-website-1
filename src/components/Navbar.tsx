"use client";
import Image from "next/image";
import Link from "next/link";
import logoz2 from "@/assets/logoz2.svg";
import Hamburger from "./Hamburger";

interface Props {
  toggleButton: () => void;
}

const MainNavbar = ({ toggleButton }: Props) => {
  return (
    <>
      <section className="w-full h-[90px]  bg-black border-b border-white/5 flex justify-between md:justify-center items-center gap-10 z-20">
        <Image alt="image" src={logoz2} className="h-7 w-auto ml-10 md:ml-0" />
        <div className="hidden md:flex justify-center items-center gap-10 text-xl font-bold font-mono  text-valorantWhite">
          <Link href={"/"}>HOME</Link>
          <Link href={"/about"}>ABOUT</Link>
          <Link href={"/skill"}>SKILL</Link>
          <Link href={"/project"}>PROJECT</Link>
          <Link href={"/contact"}>CONTACT</Link>
        </div>
        <Hamburger toggleButton={toggleButton} />
      </section>
    </>
  );
};

export default MainNavbar;
