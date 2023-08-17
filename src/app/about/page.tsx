import { about_me } from "@/src/components/pages/about/AboutMe";
import { DINNextW1G, TungsenBold } from "@/src/font/font";
import clsx from "clsx";
import { Metadata } from "next/types";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export const metadata: Metadata = {
  title: "About - Portfolio",
  description: "This is the about page and I wish you all the best",
};
const socialIcons: { icon: React.ReactNode; url: string }[] = [
  {
    icon: <SiLinkedin />,
    url: "./",
  },
  {
    icon: <SiGithub />,
    url: "./",
  },
  {
    icon: <SiInstagram />,
    url: "./",
  },
  {
    icon: <SiYoutube />,
    url: "./",
  },
];
const skills: string[] = ["react js", "next js", "tailwind", "typescript"];

const AboutPage = () => {
  return (
    <div
      className={clsx(
        DINNextW1G.className,
        "flex flex-col items-start justify-center w-[90%] md:w-[70%] m-auto h-full border-l border-l-valorantBlack/50 gap-5 pt-10 py-20"
      )}
    >
      <p
        className={clsx(
          TungsenBold.className,
          "text-2xl font-bold md:text-3xl lg:text-4xl text-[#111111]"
        )}
      >
        ABOUT ME
      </p>
      <div className="flex flex-col gap-3 text-md md:text-xl font-semibold pr-5 md:pr-0 w-full md:w-[80%] text-[#111111] my-2">
        {about_me.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className="inline-flex flex-wrap gap-2 font-semibold text-md md:text-xl">
        {skills.map((item, index) => (
          <p
            key={index}
            className={clsx(
              TungsenBold.className,
              "px-3 text-center bg-[#111111] text-valorantWhite tracking-wider"
            )}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 text-[#111111]">
        {socialIcons.map((item, index) => {
          return (
            <p key={index} className="text-4xl cursor-pointer">
              {item.icon}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
