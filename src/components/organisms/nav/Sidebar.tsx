"use client";
import newLogoZ from "@/assets/images/newLogoZ.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import NavLink from "../../molecules/NavLink";
import { useContext } from "react";
import { ToggleContext } from "@/src/context/ToggleButton";
import clsx from "clsx";

export default function Sidebar() {
  const { isToggled } = useContext(ToggleContext);

  return (
    <section
      className={clsx(
        isToggled ? "w-full" : "w-[0px]",
        "transition-all duration-300 h-screen fixed flex top-0 right-0 z-20 md:hidden overflow-hidden"
      )}
    >
      <Outside />
      <div className="w-[60%] h-full flex-col justify-start items-center bg-black gap-10 border-l-2  border-l-white/5">
        <HeaderSidebar newLogoZ={newLogoZ} />
        <BodySidebar />
      </div>
    </section>
  );
}

const Outside = () => {
  const { toggleFn } = useContext(ToggleContext);
  return (
    <div onClick={toggleFn} className="w-[40%] backdrop-blur-sm bg-black/30" />
  );
};

const HeaderSidebar = ({ newLogoZ }: { newLogoZ: StaticImageData }) => {
  const { toggleFn } = useContext(ToggleContext);
  return (
    <div className="w-full h-[90px] border-b border-b-white/5 flex justify-between items-center ">
      <Link href={"/"}>
        <Image alt="image" src={newLogoZ} className="w-auto h-6 ml-10" />
      </Link>
      <IoCloseSharp
        onClick={toggleFn}
        className="mr-10 text-4xl text-valorantWhite"
      />
    </div>
  );
};

const BodySidebar = () => (
  <div className="flex flex-col items-end justify-center gap-10 pt-10 pr-10 font-mono text-xl font-bold text-valorantWhite">
    <NavLink />
  </div>
);
