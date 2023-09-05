"use client";
import Image from "next/image";
import Link from "next/link";
import newLogoZ from "@/assets/images/newLogoZ.svg";
import Hamburger from "../../atoms/buttons/Hamburger";
import NavLink from "../../molecules/NavLink";

const Topbar = () => {
  return (
    <section className="z-20 flex items-center justify-between w-full gap-10 border-b bg-valorantBlack py-7 border-valorantWhite/10 md:justify-center">
      <Link href={"/"}>
        <Image
          alt="image"
          src={newLogoZ}
          className="w-auto h-6 ml-10 md:ml-0"
        />
      </Link>
      <div className="items-center justify-center hidden gap-10 font-mono text-xl font-bold md:flex text-valorantWhite">
        <NavLink />
      </div>
      <Hamburger />
    </section>
  );
};

export default Topbar;
