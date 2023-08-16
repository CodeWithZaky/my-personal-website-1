"use client";
import Image from "next/image";
import Link from "next/link";
import newLogoZ from "@/assets/newLogoZ.svg";
import Hamburger from "./Hamburger";
import ToggleDarkMode from "./ToggleDarkMode";

interface Props {
  toggleButton: () => void;
}

const MainNavbar = ({ toggleButton }: Props) => {
  return (
    <>
      <section className="z-20 flex items-center justify-between w-full gap-10 border-b bg-valorantBlack py-7 border-valorantWhite/10 md:justify-center">
        <Link href={"/"}>
          <Image
            alt="image"
            src={newLogoZ}
            className="w-auto h-6 ml-10 md:ml-0"
          />
        </Link>
        <div className="items-center justify-center hidden gap-10 font-mono text-xl font-bold md:flex text-valorantWhite">
          <Link href={"/"}>HOME</Link>
          <Link href={"/about"}>ABOUT</Link>
          <Link href={"/projects"}>PROJECTS</Link>
        </div>
        <ToggleDarkMode sty={"hidden md:flex"} />
        <Hamburger toggleButton={toggleButton} />
      </section>
    </>
  );
};

export default MainNavbar;
