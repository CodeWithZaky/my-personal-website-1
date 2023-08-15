import { DINNextW1G } from "@/src/font/font";
import clsx from "clsx";
import Link from "next/link";

const LearnMoreButton = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 p-3 m-4 z-1">
      <div className="absolute top-0 w-full border-t border-l border-r h-[40%]"></div>
      <Link
        href={"/about"}
        className="z-10 px-2 text-2xl font-semibold text-center text-white bg-valorant md:px-10 md:py-2"
      >
        MORE ABOUT ME
      </Link>
      <div className="absolute bottom-0 w-full border-b border-l border-r h-[40%]"></div>
    </div>
  );
};
export default LearnMoreButton;
