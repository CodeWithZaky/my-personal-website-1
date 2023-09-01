import clsx from "clsx";
import { about_me } from "../../atoms/data/About-Me";
import { skill_items } from "../../atoms/data/Skilll-Items";
import { TungstenBold } from "@/assets/fonts/font";
import { social_icons } from "../../atoms/data/Social-Icons";

const AboutContent = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const TitleAbout = () => (
  <h1
    className={clsx(
      TungstenBold.className,
      "text-2xl md:text-3xl lg:text-4xl text-valorantBlack"
    )}
  >
    ABOUT ME
  </h1>
);

const AboutMeSection = () => {
  return (
    <div className="flex flex-col gap-3 text-md md:text-xl font-semibold pr-5 md:pr-0 w-full md:w-[80%] text-valoran my-2">
      {about_me.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

const SkillSection = () => {
  return (
    <div className="inline-flex flex-wrap gap-2 font-semibold text-md md:text-xl">
      {skill_items.map((item, index) => (
        <p
          key={index}
          className={clsx(
            TungstenBold.className,
            "px-3 text-center bg-valorantBlack text-valorantWhite tracking-wider"
          )}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

const SocialSection = () => {
  return (
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
  );
};

AboutContent.Title = TitleAbout;
AboutContent.AboutMe = AboutMeSection;
AboutContent.Skill = SkillSection;
AboutContent.Social = SocialSection;

export default AboutContent;
