import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoZ from "@/assets/logoZ.svg";

const MainNavbar = () => {
  return (
    <div className="w-full flex justify-center items-center gap-10 text-xl font-bold font-mono py-7 bg-black text-valorantWhite border-b border-white/5">
      <Image alt="image" src={logoZ} className="h-7 w-auto" />
      <Link href={"/"}>HOME</Link>
      <Link href={"/about"}>ABOUT</Link>
      <Link href={"/skill"}>SKILL</Link>
      <Link href={"/project"}>PROJECT</Link>
      <Link href={"/contact"}>CONTACT</Link>
    </div>
  );
};

export default MainNavbar;
