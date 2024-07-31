import clsx from "clsx";
import Link from "next/link";
import { Metadata } from "next/types";
import { IoMdArrowDropright } from "react-icons/io";
import LatestProjectAnimate from "../components/latest-project-animate";
import { CardProject } from "../components/projects-item";
import { social_icons } from "../components/social-icons";
import ValorantButton from "../components/valorant-button";
import { DATA } from "../data/resume";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is the home page and I wish you all the best",
};

const HomeHomePage = () => {
  return (
    <div>
      <div className="relative bg-valorantBlack w-full overflow-hidden">
        <div className="relative flex flex-col border-valorantWhite/50 border-x mx-auto w-[70%]">
          <div className="flex flex-col justify-center items-center gap-4 m-auto py-5 w-full tracking-widest">
            <div className="hover:border-valorant bg-valorant hover:bg-transparent hover:border w-[15px] h-[15px] transition-all self-start" />
            <h3 className="text-center text-valorantWhite text-xl md:text-2xl tracking-widest">
              welcome to my personal website
            </h3>
            <h1 className="font-bold text-7xl text-center text-valorantWhite sm:text-8xl md:text-9xl">
              {"I'M ZAKY"}
            </h1>
            <h1 className="text-4xl text-center text-valorantWhite md:text-5xl">
              FRONTEND WEB DEVELOPER
            </h1>
            <ValorantButton>
              <Link href={"/about"}>MORE ABOUT ME</Link>
            </ValorantButton>
            <div className="border-valorant hover:bg-valorant mr-3 border hover:border-none w-[15px] h-[15px] transition-all self-end" />
          </div>
          <div className="top-0 left-[300px] absolute bg-valorantWhite/50 w-[1px] h-[100%]" />
        </div>
      </div>
      <LatestProjectAnimate>
        <div className="relative gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 transition-all">
          {DATA.projects.slice(0, 3).map((item, index) => {
            return (
              <div key={index.toString()}>
                <CardProject
                  description={item.description}
                  href={item.links[0].href}
                  srcImage={item.image}
                  technologies={item.technologies}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
        <Link
          href={"/project"}
          className={clsx(
            "group flex items-center uppercase bg-valorant text-valorantWhite gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest duration-300 hover:gap-2 hover:translate-x-3"
          )}
        >
          More Project
          <IoMdArrowDropright className="group-hover:ml-3 text-4xl transition-all" />
        </Link>
      </LatestProjectAnimate>

      <div className="flex flex-col justify-center items-end gap-5 border-valorantBlack/50 m-auto py-20 pr-1 border-t border-r w-[70%]">
        <div className="font-bold text-2xl text-center text-valorantBlack sm:text-3xl md:text-6xl">
          REACH ME OUT
        </div>
        <div className="flex flex-row flex-wrap justify-end items-center gap-3 text-2xl text-valorantBlack sm:text-3xl md:text-4xl">
          {social_icons.map((item, index) => {
            return (
              <a
                href={item.url}
                target="_blank"
                key={index}
                className={clsx(
                  "p-3 border border-valorantBlack rounded-sm hover:rounded-xl transition-all cursor-pointer"
                )}
              >
                {item.icon}
              </a>
            );
          })}
        </div>
        <p className="text-center text-sm text-valorantBlack sm:text-md md:text-lg">
          {"@2023 Ahmad Zaky Ubaidillah"}
        </p>
      </div>
    </div>
  );
};
export default HomeHomePage;
