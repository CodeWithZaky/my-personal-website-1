import { DINNextW1G } from "@/assets/fonts/font";
import clsx from "clsx";
import { Metadata } from "next/types";
import AboutContent from "@/src/components/organisms/about/AboutContent";

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
      <AboutContent>
        <AboutContent.Title />
        <AboutContent.AboutMe />
        <AboutContent.Skill />
        <AboutContent.Social />
      </AboutContent>
    </div>
  );
};
export default AboutPage;
