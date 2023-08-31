import { about_me } from "@/src/components/atoms/items/About-Me";
import { skill_items } from "@/src/components/atoms/items/Skilll-Items";
import { DINNextW1G, TungstenBold } from "@/assets/fonts/font";
import clsx from "clsx";
import { Metadata } from "next/types";
import { social_icons } from "@/src/components/atoms/items/Social-Icons";

export const metadata: Metadata = {
  title: "About - Portfolio",
  description: "This is the about page and I wish you all the best",
};

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
          TungstenBold.className,
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
        {skill_items.map((item, index) => (
          <p
            key={index}
            className={clsx(
              TungstenBold.className,
              "px-3 text-center bg-[#111111] text-valorantWhite tracking-wider"
            )}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-5">
        {social_icons.map((item, index) => {
          return (
            <a
              href={item.url}
              target="_blank"
              key={index}
              className="text-4xl cursor-pointer text-valorantBlack hover:text-valorantBlack/90"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
