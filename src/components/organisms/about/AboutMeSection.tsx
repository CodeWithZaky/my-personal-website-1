import clsx from "clsx";
import { about_me } from "../../atoms/data/About-Me";

const AboutMeSection = () => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 font-semibold w-11/12 sm:w-4/5 text-valoran my-2 text-valorantBlack",
        "text-md sm:text-xl md:text-2xl lg:text-2xl",
        "pr-5 md:pr-0"
      )}
    >
      {about_me.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default AboutMeSection;
