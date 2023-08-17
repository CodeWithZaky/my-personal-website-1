import LearnMoreButton from "@/components/pages/home/LearnMoreButton";
import { TriangleHome } from "@/components/ornaments/Triangle";
import { Metadata } from "next/types";
import { TubmnailArray } from "@/src/components/pages/project/TubmnailProject";
import { DINNextW1G } from "../font/font";
import clsx from "clsx";
import Contacts from "../components/pages/contact/Contacts";

export const metadata: Metadata = {
  title: "Home - Portfolio",
};

const Home = () => {
  return (
    <section>
      <div className="relative w-full overflow-hidden bg-valorantBlack">
        <TriangleHome />
        <div className="relative mx-auto w-[70%] flex flex-col border-x border-valorantWhite/50">
          <div className="flex flex-col items-center justify-center w-full gap-4 py-8 m-auto tracking-widest">
            <div className="w-[15px] h-[15px] bg-valorant self-start" />
            <h3
              className={clsx(
                DINNextW1G.className,
                "text-xl font-bold text-center md:text-2xl text-valorantWhite tracking-widest"
              )}
            >
              welcome to my personal website
            </h3>
            <h1 className="font-bold text-center text-6xl md:text-8xl text-valorantWhite tracking-[.4rem]">
              {"I'M ZAKY"}
            </h1>
            <h1 className="text-4xl font-bold text-center md:text-5xl text-valorantWhite tracking-[.4rem]">
              FRONTEND WEB DEVELOPER
            </h1>
            <LearnMoreButton />
            <div className="w-[15px] h-[15px] border border-valorant self-end mr-3" />
          </div>
          <div className="w-[1px] h-[100%] bg-valorantWhite/50 absolute left-[300px] top-0" />
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto w-[70%] flex flex-col border-l border-valorantBlack/50 pt-10 pb-20 gap-3">
          <div className="z-10 -mb-12 -ml-1 font-bold text-7xl md:text-9xl text-valorant">
            LATEST PROJECT
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
            {TubmnailArray.map((item, index) => {
              return <div key={index.toString()}>{item}</div>;
            })}
          </div>
        </div>
      </div>
      <Contacts />
    </section>
  );
};
export default Home;
