import { Metadata } from "next/types";
import TitleAbout from "@/src/components/organisms/about/TitleAbout";
import AboutMeSection from "@/src/components/organisms/about/AboutMeSection";
import SkillSection from "@/src/components/organisms/about/SkillSection";
import SocialSection from "@/src/components/organisms/about/SocialSection";
import clsx from "clsx";
import { DINNextW1G } from "@/src/assets/fonts/font";

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
      <TitleAbout />
      <AboutMeSection />
      <SkillSection />
      <SocialSection />
    </div>
  );
};
export default AboutPage;
