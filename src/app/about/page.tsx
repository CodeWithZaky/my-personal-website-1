import AboutMeSection from "@/src/components/about/about-me-section";
import SkillSection from "@/src/components/about/skill-section";
import SocialSection from "@/src/components/about/social-section";
import TitleAbout from "@/src/components/about/title-about";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About - Portfolio",
  description: "This is the about page and I wish you all the best",
};

const About = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 m-auto py-20 pt-10 border-l border-l-valorantBlack/50 w-3/4 h-full">
      <TitleAbout />
      <AboutMeSection />
      <SkillSection />
      <SocialSection />
    </div>
  );
};
export default About;
