import { me } from "@/src/components/pages/about/Me";
import { DINNextW1G, TungsenBold } from "@/src/font/font";
import clsx from "clsx";
import { Metadata } from "next/types";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export const metadata: Metadata = {
  title: "About - Portfolio",
};
const socialIcons: { icon: React.ReactNode; url: string }[] = [
  {
    icon: <SiGithub />,
    url: "./",
  },
  {
    icon: <SiLinkedin />,
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

const About = () => {
  return (
    <div
      className={clsx(
        DINNextW1G.className,
        "flex flex-col items-start justify-center w-[90%] md:w-[70%] m-auto h-full border-l border-l-gray-500 gap-5 pt-10 py-20"
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
        {me.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className="inline-flex flex-wrap gap-1 font-semibold text-md md:text-xl">
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
        {socialIcons
          .slice(0)
          .reverse()
          .map((item, index) => {
            return (
              <p key={index} className="text-4xl">
                {item.icon}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default About;
