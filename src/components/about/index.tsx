import TitleAbout from "./component/TitleAbout";
import AboutMeSection from "./component/AboutMeSection";
import SkillSection from "./component/SkillSection";
import SocialSection from "./component/SocialSection";

const AboutPage = () => {
    return (
        <div className="flex flex-col items-start justify-center w-3/4 m-auto h-full border-l border-l-valorantBlack/50 gap-5 pt-10 py-20">
            <TitleAbout />
            <AboutMeSection />
            <SkillSection />
            <SocialSection />
        </div>
    );
};

export default AboutPage;
