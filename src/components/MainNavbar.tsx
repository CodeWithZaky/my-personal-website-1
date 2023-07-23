import Link from "next/link";
import React from "react";

const MainNavbar = () => {
  return (
    <div className="w-full flex justify-center items-center gap-7 text-xl font-bold font-mono py-7 bg-black text-white border-b border-slate-800">
      <Link href={"/"}>HOME</Link>
      <Link href={"/about"}>ABOUT</Link>
      <Link href={"/skill/all"}>SKILL</Link>
      <Link href={"/project"}>PROJECT</Link>
      <Link href={"/contact"}>CONTACT</Link>
    </div>
  );
};

export default MainNavbar;
