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
      <section className="z-20 flex items-center justify-between w-full gap-10 bg-black border-b py-7 border-white/10 md:justify-center">
        <Link href={"/"}>
          <Image
            alt="image"
            src={logoz2}
            className="w-auto ml-10 h-7 md:ml-0"
          />
        </Link>
        <div className="items-center justify-center hidden gap-10 font-mono text-xl font-bold md:flex text-valorantWhite">
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
