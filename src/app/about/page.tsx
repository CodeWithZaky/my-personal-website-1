import { social_icons } from "@/src/components/social-icons";
import { DATA } from "@/src/data/resume";
import clsx from "clsx";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the about page and I wish you all the best",
};

const About = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 m-auto py-20 pt-10 border-l border-l-valorantBlack/50 w-3/4 h-full">
      <h1 className="text-4xl text-valorantBlack sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
        ABOUT ME
      </h1>
      <div
        className={clsx(
          "flex flex-col gap-3 font-semibold w-11/12 sm:w-4/5 text-valoran my-2 text-valorantBlack",
          "text-md sm:text-xl md:text-2xl lg:text-2xl",
          "pr-5 md:pr-0"
        )}
      >
        {DATA.about_me.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      <div className="inline-flex flex-wrap gap-2 md:pr-16 lg:pr-20 w-4/5 font-semibold text-md md:text-xl">
        {DATA.skills.map((item, index) => (
          <p
            key={index}
            className="bg-valorantBlack px-3 text-center text-valorantWhite tracking-wider"
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
              className="text-4xl text-valorantBlack hover:text-valorantBlack/90 cursor-pointer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default About;
